import { interaction___listTwo, interaction___menu } from '@lsg/icons';
import React__default, { useEffect } from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { useUniqueId } from '../../../utils/Hooks/index.js';
import { Host } from '../../../utils/Host.js';
import { texts } from '../../../utils/Localization.js';
import { getNamedNavigationTree } from '../../../utils/NavigationUtils.js';
import { IconLinkWrapper } from '../../IconLink/shared/IconLinkWrapper.js';
import { IconLinkGroupWrapper } from '../../IconLinkGroup/shared/IconLinkGroupWrapper.js';
import { ProcessNavigationPresentation } from '../../ProcessNavigation/shared/ProcessNavigationPresentation.js';
import { HeaderContainerWrapper } from '../../_HeaderContainer/HeaderContainerWrapper.js';
import { LogoPresentation } from '../../_Logo/LogoPresentation.js';
import { NavigationBlockWrapper } from '../../_NavigationBlock/shared/NavigationBlockWrapper.js';
import { NavigationLinkWrapper } from '../../_NavigationLink/NavigationLinkWrapper.js';
import { NavigationLinkGroupPresentation } from '../../_NavigationLinkGroup/NavigationLinkGroupPresentation.js';
import { SideNavigationContainerPresentation } from '../../_SideNavigationContainer/SideNavigationContainerPresentation.js';
import { PortalMetaBarPresentation } from './PortalMetaBar/PortalMetaBarPresentation.js';
import { hostClass } from './ProcessPage.styles.js';

// @ts-strict-ignore
const ProcessPagePresentation = ({ id: idProp, className, noMargin, children, headerTitle, headerTitleAs = "span", hasPortalFooter, progress, menuOpen, onMenuOpenChange, iconLinks, countIconLinks, navigationTree, navigationActionAs, navigationLabel, navigationAriaLabel = texts.lsg.component.ProcessPage.navigationAriaLabel, footerNavigationTree, footerNavigationAriaLabel, isMobile, forceBurgerMenu, value, newNavigation = false, noSemanticElements = false, stickyNavigation = false, isClosedArea, onChange = () => {
    /* empty */
}, }) => {
    const hasBurgerMenu = !!navigationTree && (isMobile || forceBurgerMenu);
    const id = useUniqueId(`${hostClass}-`, idProp);
    const headerTitleId = `${id}-header-title`;
    const contentId = `${id}-content`;
    const navigationArea = navigationTree && (React__default.createElement("nav", { "aria-label": navigationAriaLabel }, newNavigation ? (React__default.createElement(ProcessNavigationPresentation, { navigationTree: getNamedNavigationTree(navigationTree), navigationActionAs: navigationActionAs, value: value })) : (React__default.createElement(NavigationBlockWrapper, { isProcessNavigation: true, startLevel: "page", navigationTree: getNamedNavigationTree(navigationTree), navigationActionAs: navigationActionAs, clusterLabel: navigationLabel, value: value, onChange: onChange }))));
    // Todo: This topLeftMaxWidth thingy is just a workaround solution and could be reworked in the future
    // if we come up with something better.
    const topLeftMaxWidth = `calc(100% - ${50 * (countIconLinks || 0)}px`;
    const logoId = useUniqueId(`${hostClass}-logo`, id && `${id}-logo`);
    const footerNavigationAriaLabelText = footerNavigationAriaLabel || texts.lsg.component.ProcessPage.footerNavigationAriaLabel;
    const HeaderTitleComponent = headerTitleAs;
    useEffect(() => {
        // Proposed pattern für process pages: If there's a h1 in the content, add an aria-describedby of the header
        // title for better accessibility.
        // E.g. if the header title is "Schritt 1 von 5" and the h1 in the content is "Personendaten", the screen reader
        // will read out "Personendaten, Schritt 1 von 5".
        // The header title e.g. "Schritt 1 von 5 - Personendaten" should not be a in a h1 element, because it is not
        // the main heading of the page.
        const h1 = document.querySelector(`#${contentId.replace(/[:]/g, "\\:")} h1`);
        if (h1 && !h1.hasAttribute("aria-describedby")) {
            h1.setAttribute("aria-describedby", headerTitleId);
        }
    });
    return (React__default.createElement(Host, { className: cleanupClassObject({
            [`${hostClass}`]: true,
            [className]: className,
            [`${lsgPre}no-margin`]: noMargin,
            [`${lsgPre}sidebar__anchor`]: !!navigationTree,
            [`${hostClass}__menu`]: !!navigationTree,
        }), id: id },
        isClosedArea && hasBurgerMenu && (React__default.createElement("div", { className: `${hostClass}-inline-header` },
            React__default.createElement(HeaderTitleComponent, { id: headerTitleId, className: `${hostClass}-title` }, headerTitle),
            React__default.createElement(IconLinkGroupWrapper, { maxWidth: "100%" },
                React__default.createElement(IconLinkWrapper, { label: headerTitle, icon: interaction___listTwo, onClick: () => onMenuOpenChange(!menuOpen), htmlAttrs: {
                        "aria-label": texts.lsg.component.ProcessPage.openMenu,
                        "aria-expanded": menuOpen,
                    }, 
                    // iconName={"Open Menu"}
                    textEllipsis: true })))),
        !isClosedArea && (React__default.createElement(HeaderContainerWrapper, { width: "page", progress: progress, noSemanticElements: noSemanticElements, logo: hasBurgerMenu ? undefined : (React__default.createElement(LogoPresentation, { disabled: true, id: logoId, variant: "mobile", fitToBox: true })), position: stickyNavigation ? "sticky" : "content", topLeft: React__default.createElement(React__default.Fragment, null,
                !hasBurgerMenu && (React__default.createElement(HeaderTitleComponent, { id: headerTitleId, className: `${hostClass}-title` }, headerTitle)),
                hasBurgerMenu && (React__default.createElement("div", { style: { display: "flex" } },
                    React__default.createElement(IconLinkGroupWrapper, { noMargin: true, maxWidth: "100%" },
                        React__default.createElement(IconLinkWrapper, { label: React__default.createElement("span", { id: headerTitleId }, headerTitle), icon: interaction___menu, onClick: () => onMenuOpenChange(!menuOpen), htmlAttrs: {
                                "aria-label": texts.lsg.component.ProcessPage.openMenu,
                                "aria-expanded": menuOpen,
                            }, 
                            // iconName={"Open Menu"}
                            textEllipsis: true }))))), topLeftMaxWidth: topLeftMaxWidth, topRight: React__default.createElement(IconLinkGroupWrapper, { noMargin: true, direction: "collapse-sm" }, iconLinks), isMobile: isMobile })),
        React__default.createElement(SideNavigationContainerPresentation, { contentId: `${id}-content`, hasBurgerMenu: hasBurgerMenu, isDesktopHeaderSize: !isMobile, menuOpen: menuOpen, onMenuOpenChange: onMenuOpenChange, navigationArea: navigationArea, drawerAttrs: { "aria-label": texts.lsg.component.ProcessPage.processDialog }, isClosedArea: isClosedArea, pageTitle: headerTitle, headerTitleId: headerTitleId },
            children,
            (footerNavigationTree || hasPortalFooter) && (React__default.createElement("footer", { className: `${hostClass}-footer` }, (hasPortalFooter && (React__default.createElement(PortalMetaBarPresentation, { footerNavigationAriaLabel: footerNavigationAriaLabelText }))) || (React__default.createElement("nav", { "aria-label": footerNavigationAriaLabelText },
                React__default.createElement(NavigationLinkGroupPresentation, { centeredLayout: true }, footerNavigationTree &&
                    footerNavigationTree.map((item, i) => (React__default.createElement(NavigationLinkWrapper, { key: i, ...item, actionAs: item.actionAs || navigationActionAs }, item.label)))))))))));
};
ProcessPagePresentation.displayName = "ProcessPagePresentation";

export { ProcessPagePresentation };
