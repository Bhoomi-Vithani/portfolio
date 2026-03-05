import { interaction___menu } from '@lsg/icons';
import React__default, { useState, useRef } from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { useUniqueId, useViewportRange, usePrevious } from '../../../utils/Hooks/index.js';
import { Host } from '../../../utils/Host.js';
import { texts } from '../../../utils/Localization.js';
import { deepFlatten, hasItemChildren } from '../../../utils/NavigationUtils.js';
import { IconLinkWrapper } from '../../IconLink/shared/IconLinkWrapper.js';
import { IconLinkGroupWrapper } from '../../IconLinkGroup/shared/IconLinkGroupWrapper.js';
import { LiveRegion } from '../../LiveRegion/LiveRegion.js';
import { ParagraphPresentation } from '../../Paragraph/shared/ParagraphPresentation.js';
import { hostClass } from '../../PortalHeader/shared/PortalHeader.styles.js';
import { SearchPresentation } from '../../Search/shared/SearchPresentation.js';
import { SectionPresentation } from '../../Section/shared/SectionPresentation.js';
import { HeaderContainerWrapper } from '../../_HeaderContainer/HeaderContainerWrapper.js';
import { LogoPresentation } from '../../_Logo/LogoPresentation.js';
import { NavigationBlockWrapper } from '../../_NavigationBlock/shared/NavigationBlockWrapper.js';
import { SideNavigationContainerPresentation } from '../../_SideNavigationContainer/SideNavigationContainerPresentation.js';
import { animationDuration } from '../../../styles/variables.js';
import { isPreferReducedMotion } from '../../../utils/Hooks/animation.js';

// @ts-strict-ignore
const SideNavigationPagePresentation = ({ id, className, noMargin, isStencilHost, searchDisabled, searchInvisible = false, searchPlaceholder, searchFormHtmlAttrs, searchHtmlAttrs, navigationTree, navigationActionAs, indicatorAtLevel, logoHref, logoActionAs, logoActionProps, logoLabel, logoAriaLabel, logoDisabled, logoHtmlAttrs, onLogoClick, value, onChange, iconLinksBottom, onSearchChange, searchValue, searchName, name, children, expandAll, navigationAriaLabel, }) => {
    const logoId = useUniqueId(`${hostClass}-logo`, id && `${id}-logo`);
    const navigationId = useUniqueId(`${hostClass}-logo`, id && `${id}-navigation`);
    const [menuOpen, setMenuOpen] = useState(false);
    const isMobile = useViewportRange(undefined, "md");
    const liveRegionRef = useRef(null);
    const contentRef = useRef(null);
    // close menu when value changes. This is useful for react router, that cannot trigger and onClick.
    const previousValue = usePrevious(value);
    if (previousValue !== value && menuOpen) {
        setTimeout(() => {
            setMenuOpen(false);
        }, isPreferReducedMotion() ? 0 : animationDuration.slowest);
    }
    // Set focus to the content container, when a menu item is clicked.
    // https://www.gatsbyjs.com/blog/2019-07-11-user-testing-accessible-client-routing/
    const focusDeepestChild = element => {
        if (!element || !element.children || element.children.length === 0) {
            element.setAttribute("tabIndex", "-1");
            element.focus();
        }
        else {
            focusDeepestChild(element.children[0]);
        }
    };
    const logo = (React__default.createElement(LogoPresentation, { id: logoId, variant: "mobile", logoLabel: logoAriaLabel, disabled: logoDisabled, onClick: onLogoClick, href: logoHref, actionAs: logoActionAs, actionProps: logoActionProps, fitToBox: true, htmlAttrs: logoHtmlAttrs }));
    const sideNavigationContent = (React__default.createElement(React__default.Fragment, null,
        !isMobile && (React__default.createElement(HeaderContainerWrapper, { className: `${className}header-desktop`, logo: logo, width: "sidebar", noSemanticElements: true, isMobile: true, topLeft: React__default.createElement(ParagraphPresentation, { horizontalAlignment: "left", size: "copy-text", noMargin: true }, logoLabel) })),
        React__default.createElement(SectionPresentation, { spacing: "side-navigation-page", separator: true, as: "div" },
            !searchInvisible && (React__default.createElement(React__default.Fragment, null,
                React__default.createElement(SearchPresentation, { appearance: "default", value: searchValue, label: searchPlaceholder, htmlAttrs: {
                        autoComplete: "off",
                        "aria-autocomplete": "list",
                        "aria-controls": navigationId,
                        ...searchHtmlAttrs,
                    }, name: searchName, disabled: searchDisabled, formAttrs: searchFormHtmlAttrs, onChange: (v, n, e) => {
                        onSearchChange(v, n, e);
                        // Let blind users know how many results their search shows (counts for sub menu items as well)
                        setTimeout(() => {
                            liveRegionRef.current?.announce(deepFlatten(navigationTree).length.toString() +
                                texts.lsg.component.SideNavigation.results);
                        }, 50);
                    } }),
                React__default.createElement(LiveRegion, { ref: liveRegionRef }))),
            navigationTree && (React__default.createElement(NavigationBlockWrapper, { containerAs: "nav", navigationAriaLabel: navigationAriaLabel, navigationTree: navigationTree, navigationActionAs: navigationActionAs, value: value, id: navigationId, startLevel: indicatorAtLevel, expandAll: expandAll, onChange: (targetValue, e) => {
                    // Every navigation element used to open a sub-menu should not be used to show new page content at the same time.
                    // See disclosure pattern: https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/
                    if (!hasItemChildren(targetValue, navigationTree) || expandAll) {
                        focusDeepestChild(contentRef.current);
                    }
                    onChange(targetValue, name, e);
                } }))),
        React__default.createElement(SectionPresentation, { spacing: "side-navigation-page", as: "div" }, iconLinksBottom && React__default.createElement(IconLinkGroupWrapper, { direction: "vertical" }, iconLinksBottom))));
    return (React__default.createElement(Host, { id: id, className: cleanupClassObject({
            [className]: !!className,
            [`${lsgPre}no-margin`]: noMargin,
        }), isStencilHost: isStencilHost, "data-lsg-component": "side-navigation-page" },
        isMobile && (React__default.createElement(HeaderContainerWrapper, { theme: "dark", position: "sticky", noSemanticElements: menuOpen, logo: React__default.createElement(LogoPresentation, { id: logoId, variant: "mobile", logoLabel: logoAriaLabel, disabled: logoDisabled, onClick: onLogoClick, actionAs: logoActionAs, actionProps: logoActionProps, htmlAttrs: logoHtmlAttrs, fitToBox: true }), width: "page", isMobile: true, topLeft: React__default.createElement(ParagraphPresentation, { horizontalAlignment: "left", size: "copy-text", noMargin: true }, logoLabel), topRight: React__default.createElement(IconLinkWrapper, { label: texts.lsg.component.SideNavigation.openMenu, icon: interaction___menu, onClick: () => setMenuOpen(!menuOpen), appearance: "no-text" }) })),
        React__default.createElement(SideNavigationContainerPresentation, { theme: "dark", noMargin: true, hasBurgerMenu: isMobile, menuOpen: menuOpen, onMenuOpenChange: () => setMenuOpen(!menuOpen), navigationArea: sideNavigationContent, contentRef: contentRef }, children)));
};
SideNavigationPagePresentation.displayName = "SideNavigationPagePresentation";

export { SideNavigationPagePresentation };
