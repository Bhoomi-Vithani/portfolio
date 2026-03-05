import { Headline } from '@lsg/components';
import { interaction_arrows_chevronLeft } from '@lsg/icons';
import React__default, { useRef, useState, useEffect } from 'react';
import { zIndex } from '../../styles/zIndex.js';
import { cleanupClassObject } from '../../utils/DomUtils.js';
import { useResize } from '../../utils/Hooks/index.js';
import { texts } from '../../utils/Localization.js';
import { DrawerPresentation } from '../Drawer/shared/DrawerPresentation.js';
import { IconLinkWrapper } from '../IconLink/shared/IconLinkWrapper.js';
import { IconLinkGroupWrapper } from '../IconLinkGroup/shared/IconLinkGroupWrapper.js';
import { SectionPresentation } from '../Section/shared/SectionPresentation.js';
import { getThemeClass } from '../Theme/shared/ThemePresentation.js';
import { HeaderContainerPresentation } from '../_HeaderContainer/HeaderContainerPresentation.js';
import { mainClass } from './SideNavigationContainer.styles.js';

// @ts-strict-ignore
const SideNavigationContainerPresentation = ({ contentId, children, className, hasBurgerMenu, isDesktopHeaderSize, menuOpen, onMenuOpenChange, navigationArea, noMargin, theme, contentRef, drawerAttrs, isClosedArea, pageTitle, headerTitleId, }) => {
    const sidebarRef = useRef(null);
    const [sidebarWidth, setSidebarWidth] = useState(undefined);
    const updateSidebarWidth = () => {
        if (sidebarRef.current) {
            setSidebarWidth(sidebarRef.current.offsetWidth - sidebarRef.current.clientWidth);
        }
    };
    useEffect(updateSidebarWidth);
    useResize(updateSidebarWidth);
    const Header = menuOpen ? "header" : "div";
    const headline = isClosedArea ? (React__default.createElement(Headline, { as: "span", size: "h5", id: headerTitleId }, pageTitle)) : null;
    return (React__default.createElement(React__default.Fragment, null,
        hasBurgerMenu && (React__default.createElement(Header, { className: getThemeClass(theme) },
            React__default.createElement(DrawerPresentation, { open: menuOpen, onBackdropClick: () => onMenuOpenChange(false), layout: "side-menu-left", htmlAttrs: drawerAttrs },
                React__default.createElement("div", { style: { position: "sticky", top: 0, zIndex: zIndex.zHeader } },
                    React__default.createElement(HeaderContainerPresentation, { width: "layer", isMobile: !isDesktopHeaderSize, noSemanticElements: true, topLeft: React__default.createElement(IconLinkGroupWrapper, { noMargin: true },
                            React__default.createElement(IconLinkWrapper, { label: texts.lsg.component.SideNavigation.closeMenu, onClick: () => onMenuOpenChange(false), icon: interaction_arrows_chevronLeft })) })),
                noMargin ? navigationArea : React__default.createElement(SectionPresentation, null, navigationArea)))),
        React__default.createElement("div", { className: cleanupClassObject({
                [className]: !!className,
                [mainClass]: true,
                [`${mainClass}__side-navigation`]: !hasBurgerMenu && navigationArea,
            }) },
            !hasBurgerMenu && navigationArea && (React__default.createElement(React__default.Fragment, null,
                React__default.createElement("aside", { className: cleanupClassObject({
                        [`${mainClass}-navigation`]: true,
                        [getThemeClass(theme)]: true,
                    }), ref: sidebarRef },
                    React__default.createElement("div", { className: `${mainClass}-fade-in` }),
                    noMargin ? (React__default.createElement(React__default.Fragment, null,
                        headline,
                        navigationArea)) : (React__default.createElement(SectionPresentation, null,
                        headline,
                        navigationArea)),
                    React__default.createElement("div", { className: `${mainClass}-fade-out` })),
                theme !== "dark" && (React__default.createElement("div", { className: `${mainClass}-scrollbar-cover`, style: {
                        width: sidebarWidth,
                    } })))),
            React__default.createElement("div", { id: contentId, className: `${mainClass}-content`, ref: contentRef }, children))));
};
SideNavigationContainerPresentation.displayName = "SideNavigationContainerPresentation";

export { SideNavigationContainerPresentation };
