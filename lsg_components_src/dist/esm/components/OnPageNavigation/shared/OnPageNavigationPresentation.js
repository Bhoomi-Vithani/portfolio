import { interaction___more02, interaction_arrows_arrowUp, interaction_arrows_chevronLeft } from '@lsg/icons';
import React__default, { forwardRef, useRef, useState, useEffect } from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { useViewportRange } from '../../../utils/Hooks/index.js';
import { Host } from '../../../utils/Host.js';
import { texts } from '../../../utils/Localization.js';
import { getNamedNavigationTree } from '../../../utils/NavigationUtils.js';
import { addResizeCallback, removeResizeCallback } from '../../../utils/windowEvents/ResizeEvents.js';
import { addScrollCallback, removeScrollCallback, addIndicatorCallback, removeIndicatorCallback } from '../../../utils/windowEvents/ScrollEvents.js';
import { ButtonPresentation } from '../../Button/shared/ButtonPresentation.js';
import { DrawerPresentation } from '../../Drawer/shared/DrawerPresentation.js';
import { IconLinkWrapper } from '../../IconLink/shared/IconLinkWrapper.js';
import { IconLinkGroupWrapper } from '../../IconLinkGroup/shared/IconLinkGroupWrapper.js';
import { addHref } from '../../JumpLinks/shared/JumpLinksPresentation.js';
import { SectionPresentation } from '../../Section/shared/SectionPresentation.js';
import { HeaderContainerWrapper } from '../../_HeaderContainer/HeaderContainerWrapper.js';
import { IndicatorWrapper } from '../../_Indicator/shared/IndicatorWrapper.js';
import { NavigationBarPresentation } from '../../_NavigationBar/NavigationBarPresentation.js';
import { NavigationBlockWrapper } from '../../_NavigationBlock/shared/NavigationBlockWrapper.js';
import { hostClass } from './OnPageNavigation.styles.js';

const Div = forwardRef((props, ref) => (React__default.createElement("div", { ...props, ref: ref })));
const OnPageNavigationPresentation = ({ ...props }) => {
    const { id, className, noMargin, ctaLabel, ctaHref, ctaActionAs, ctaActionProps, ctaHtmlAttrs, ctaName, navigationActionAs, activeElementInline, activeRefInline, onCtaClick, backToTopHref, onBackToTopClick, backToTopHtmlAttrs, } = props;
    const containerElement = useRef(null);
    const footerElements = Array.from(document.getElementsByClassName(`${lsgPre}footer`));
    const [activeElementName, setActiveElementName] = useState("");
    const [mobileCtaVisible, setMobileCtaVisible] = useState(false);
    const [isHeaderVisible, setIsHeaderVisible] = useState(false);
    const [open, setOpen] = useState(false);
    const [activeElementHeader, setActiveElementHeader] = useState(undefined);
    const navigationTree = props.navigationTree ? props.navigationTree.map(addHref) : [];
    const isMobile = useViewportRange(undefined, "sm");
    const handleVisibility = (activeElementId) => {
        const val = getNamedNavigationTree(navigationTree).find(item => item.targetId === activeElementId)?.name;
        if (val)
            setActiveElementName(val);
    };
    const handleScroll = () => {
        const header = containerElement?.current?.parentElement;
        const isHeaderVisibleNew = header ? header.getBoundingClientRect().bottom <= -1 : false;
        if (isHeaderVisibleNew !== isHeaderVisible) {
            setIsHeaderVisible(isHeaderVisibleNew);
        }
        const mobileCtaVisibleNew = footerElements?.reduce((acc, element) => acc && element.getBoundingClientRect().top > window.innerHeight, true);
        if (mobileCtaVisibleNew !== mobileCtaVisible) {
            setMobileCtaVisible(mobileCtaVisibleNew);
        }
    };
    const handleChange = (newName) => {
        const targetId = navigationTree.find(item => item.name === newName)?.targetId;
        if (targetId)
            document.getElementById(targetId)?.focus();
        if (isMobile) {
            setOpen(false);
        }
    };
    useEffect(() => {
        addScrollCallback(handleScroll);
        addResizeCallback(handleScroll);
        return () => {
            removeScrollCallback(handleScroll);
            removeResizeCallback(handleScroll);
        };
    });
    useEffect(() => {
        const idTargets = navigationTree.flatMap(item => (item.targetId ? [item.targetId] : []));
        const offset = window.innerHeight * 0.2;
        addIndicatorCallback(handleVisibility, idTargets, offset);
        navigationTree.forEach(item => {
            if (item.targetId) {
                const section = document.getElementById(item.targetId)?.firstChild;
                const firstChild = section?.firstChild ?? null;
                const anchor = document.createElement("a");
                anchor.setAttribute("id", item.targetId);
                anchor.setAttribute("style", "display: block; position: relative;");
                anchor.setAttribute("tabIndex", "-1");
                section?.insertBefore(anchor, firstChild);
                // Adjust old ID to avoid duplicates
                document.getElementById(item.targetId)?.setAttribute("id", `${item.targetId}-1`);
            }
        });
        return () => {
            removeIndicatorCallback(handleVisibility);
        };
    }, []);
    // Add a "Scroll to" or "Springe zu" to the menu points for better A11Y
    const navigationTreeWithLabel = navigationTree.map(obj => ({
        htmlAttrs: { "aria-label": `${texts.lsg.component.OnPageNavigation.scrollTo} ${obj.label}`, ...obj.htmlAttrs },
        ...obj,
    }));
    return (React__default.createElement(Host, { id: id, className: cleanupClassObject({
            [hostClass]: true,
            ...(className ? { [className]: true } : null),
            [`${hostClass}__mobile`]: isMobile,
            [`${lsgPre}no-margin`]: noMargin,
        }), "data-lsg-component": "on-page-navigation" },
        React__default.createElement(Div, { key: "desktopNavigation", ref: containerElement, className: `${hostClass}-inline`, style: isHeaderVisible ? { display: "none" } : {} }, !isMobile && (React__default.createElement(React__default.Fragment, null,
            React__default.createElement(NavigationBarPresentation, { navigationAriaLabel: "nav", navigationTree: getNamedNavigationTree(navigationTreeWithLabel), value: activeElementName, onChange: handleChange, activeRef: activeRefInline }),
            React__default.createElement(IndicatorWrapper, { activeElement: activeElementInline }),
            ctaLabel && (React__default.createElement(ButtonPresentation, { className: `${hostClass}-cta-desktop`, key: "cta", noMargin: true, href: ctaHref, actionAs: ctaActionAs, actionProps: ctaActionProps, htmlAttrs: ctaHtmlAttrs, name: ctaName, onClick: onCtaClick, label: ctaLabel }))))),
        React__default.createElement(HeaderContainerWrapper, { key: "mobileView", width: "layer", className: cleanupClassObject({
                [`${hostClass}-header__hidden`]: !isHeaderVisible,
            }), activeElement: isMobile ? undefined : activeElementHeader, isFullUnderline: false, isHidden: !isHeaderVisible, 
            // TODO check if stick="sticky" works here
            position: "fixed", isMobile: isMobile, topLeftMaxWidth: isMobile ? `calc(100% - 40px` : undefined, topLeft: isMobile ? (React__default.createElement(IconLinkGroupWrapper, { noMargin: true, maxWidth: "100%" },
                React__default.createElement(IconLinkWrapper, { label: texts.lsg.component.SideNavigation.openMenu, key: "menu", icon: interaction___more02, appearance: "no-text", onClick: () => setOpen(true) }),
                React__default.createElement(IconLinkWrapper, { label: getNamedNavigationTree(navigationTreeWithLabel).find(item => item.name === activeElementName)?.label, key: "iconlink", appearance: "no-icon", textEllipsis: true }))) : (React__default.createElement(NavigationBarPresentation, { navigationAriaLabel: "nav", navigationTree: getNamedNavigationTree(navigationTreeWithLabel), navigationActionAs: navigationActionAs, value: activeElementName, onChange: handleChange, activeRef: (r) => setActiveElementHeader(r) })), topRight: isMobile ? (React__default.createElement(IconLinkGroupWrapper, { noMargin: true },
                React__default.createElement(IconLinkWrapper, { label: texts.lsg.component.SideNavigation.openMenu, icon: interaction_arrows_arrowUp, appearance: "no-text", href: "#" }))) : (React__default.createElement(React__default.Fragment, null,
                React__default.createElement(IconLinkGroupWrapper, { noMargin: true },
                    React__default.createElement(IconLinkWrapper, { label: texts.lsg.component.OnPageNavigation.backtoTop, key: "iconlink", icon: interaction_arrows_arrowUp, appearance: "no-text", href: backToTopHref, onClick: (p1, p2) => {
                            if (onBackToTopClick) {
                                onBackToTopClick(p1, p2);
                            }
                            else {
                                try {
                                    window.scrollTo({
                                        top: 0,
                                        left: 0,
                                        behavior: "smooth",
                                    });
                                }
                                catch (_) {
                                    window.scrollTo(0, 0);
                                }
                            }
                        }, htmlAttrs: backToTopHtmlAttrs })),
                ctaLabel && !isMobile && (React__default.createElement(ButtonPresentation, { className: `${hostClass}-cta-desktop`, key: "cta", noMargin: true, href: ctaHref, actionAs: ctaActionAs, actionProps: ctaActionProps, htmlAttrs: ctaHtmlAttrs, name: ctaName, onClick: onCtaClick, label: ctaLabel })))) }),
        ctaLabel && isMobile && (React__default.createElement("div", { className: cleanupClassObject({
                [`${hostClass}-cta-mobile`]: true,
                [`${hostClass}-cta-mobile__visible`]: mobileCtaVisible,
            }) },
            React__default.createElement(ButtonPresentation, { key: "cta", noMargin: true, href: ctaHref, actionAs: ctaActionAs, actionProps: ctaActionProps, htmlAttrs: ctaHtmlAttrs, name: ctaName, onClick: onCtaClick, label: ctaLabel }))),
        React__default.createElement(DrawerPresentation, { key: "drawer", open: open, onBackdropClick: () => setOpen(false), layout: "side-menu-left" },
            React__default.createElement(HeaderContainerWrapper, { isMobile: true, position: "sticky", topLeft: React__default.createElement(IconLinkGroupWrapper, { noMargin: true },
                    React__default.createElement(IconLinkWrapper, { label: texts.lsg.component.SideNavigation.closeMenu, icon: interaction_arrows_chevronLeft, onClick: () => setOpen(false) })) }),
            React__default.createElement(SectionPresentation, null,
                React__default.createElement(NavigationBlockWrapper, { navigationTree: getNamedNavigationTree(navigationTreeWithLabel), value: activeElementName, onChange: handleChange, startLevel: "page" })))));
};
OnPageNavigationPresentation.displayName = "OnPageNavigationPresentation";

export { OnPageNavigationPresentation };
