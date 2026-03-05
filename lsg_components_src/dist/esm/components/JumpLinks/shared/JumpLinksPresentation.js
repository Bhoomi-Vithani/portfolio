import React__default, { useRef, useState, useEffect } from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { Host } from '../../../utils/Host.js';
import { getNamedNavigationTree } from '../../../utils/NavigationUtils.js';
import { addResizeCallback, removeResizeCallback } from '../../../utils/windowEvents/ResizeEvents.js';
import { addIndicatorCallback, addScrollCallback, removeIndicatorCallback, removeScrollCallback } from '../../../utils/windowEvents/ScrollEvents.js';
import { mainClass } from '../../_HeaderContainer/HeaderContainer.styles.js';
import { NavigationBlockWrapper } from '../../_NavigationBlock/shared/NavigationBlockWrapper.js';
import { hostClass } from './JumpLinks.styles.js';

// @ts-strict-ignore
/**
 * Function that adds href to #targetId for each navigationItem
 */
function addHref(navItem) {
    const result = { ...navItem };
    if (!result.href) {
        result.href = `#${result.targetId}`;
    }
    if (result.children) {
        result.children = result.children.map(addHref);
    }
    return result;
}
const JumpLinksPresentation = (props) => {
    const { id, className, noMargin, isStencilHost, navigationActionAs, ariaLabel } = props;
    const navigationTree = props.navigationTree.map(addHref);
    const containerElement = useRef(null);
    const [value, setValue] = useState("0");
    const [style, setStyle] = useState();
    const [stickyHeader, setStickyHeader] = useState(null);
    const handleVisibility = (activeElementId) => {
        const val = getNamedNavigationTree(navigationTree).find(item => item.targetId === activeElementId)?.name;
        setValue(val);
    };
    const handleStickyHeader = () => {
        if (stickyHeader) {
            const headerHeight = document.querySelector(`div.${mainClass}-row`).clientHeight;
            navigationTree.forEach(item => {
                const navItem = document.getElementById(item.targetId);
                navItem.style.scrollMarginTop = `${headerHeight + 10}px`; // added 10px buffer to header height
            });
        }
    };
    const handleScroll = () => {
        const targetIds = navigationTree?.map(item => item.targetId);
        if (!containerElement?.current) {
            return;
        }
        const offsetTop = parseInt(window.getComputedStyle(containerElement.current.parentElement).top, 10);
        const offsetBottom = parseInt(window.getComputedStyle(containerElement.current.parentElement).bottom, 10);
        const remainingHeight = window.innerHeight - (containerElement.current.offsetHeight + offsetTop + offsetBottom);
        // reduce the spacing between upper screen edge and JumpLinks if not enough space
        const top = remainingHeight >= 0 ? offsetTop : Math.max(offsetTop - offsetBottom, offsetTop + remainingHeight / 2);
        if (document !== undefined && targetIds) {
            const firstElm = document.getElementById(targetIds[0]);
            const lastElm = document.getElementById(targetIds[targetIds.length - 1]);
            if (firstElm && lastElm) {
                if (firstElm.getBoundingClientRect().top > top) {
                    setStyle(undefined);
                }
                else if (top + containerElement.current.offsetHeight < lastElm.getBoundingClientRect().bottom) {
                    setStyle({
                        position: "fixed",
                        top: `${top}px`,
                        left: `${containerElement.current.parentElement.getBoundingClientRect().left}px`,
                        width: `${containerElement.current.parentElement.getBoundingClientRect().width}px`,
                    });
                }
                else {
                    // when the JumpLinks Container's bottom distance gets bigger than the last elements', set the JumpLinks Container to position absolute
                    setStyle({
                        position: "absolute",
                        top: `${lastElm.offsetTop +
                            lastElm.offsetHeight -
                            containerElement.current.offsetHeight -
                            containerElement.current.parentElement.offsetTop}px`,
                        left: 0,
                        right: 0,
                    });
                }
            }
        }
    };
    useEffect(() => {
        const idTargets = navigationTree.map(item => item.targetId);
        const headerElm = document.querySelector(`header.${mainClass}__sticky`);
        setStickyHeader(headerElm);
        addIndicatorCallback(handleVisibility, idTargets, 100);
        addScrollCallback(handleScroll);
        addResizeCallback(handleScroll);
        return () => {
            removeIndicatorCallback(handleVisibility);
            removeScrollCallback(handleScroll);
            removeResizeCallback(handleScroll);
        };
    }, []);
    useEffect(() => {
        addScrollCallback(handleStickyHeader);
        addResizeCallback(handleStickyHeader);
        return () => {
            removeScrollCallback(handleStickyHeader);
            removeResizeCallback(handleStickyHeader);
        };
    }, [stickyHeader]);
    return (React__default.createElement(Host, { id: id, className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
            [`${lsgPre}no-margin`]: noMargin,
        }), isStencilHost: isStencilHost, style: style?.position ? { position: "relative" } : undefined, as: "nav", htmlAttrs: { "aria-label": ariaLabel }, "data-lsg-component": "jump-links" },
        React__default.createElement("div", { className: `${hostClass}-inner`, style: style, ref: containerElement },
            React__default.createElement(NavigationBlockWrapper, { navigationTree: getNamedNavigationTree(navigationTree), navigationActionAs: navigationActionAs, value: value, startLevel: "page" }))));
};
JumpLinksPresentation.displayName = "JumpLinksPresentation";

export { JumpLinksPresentation, addHref };
