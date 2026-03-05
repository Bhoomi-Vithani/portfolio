import { interaction___menu, interaction___close } from '@lsg/icons';
import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { useUniqueId } from '../../../utils/Hooks/index.js';
import { Host } from '../../../utils/Host.js';
import { texts } from '../../../utils/Localization.js';
import { DrawerPresentation } from '../../Drawer/shared/DrawerPresentation.js';
import { IconLinkWrapper } from '../../IconLink/shared/IconLinkWrapper.js';
import { IconLinkGroupWrapper } from '../../IconLinkGroup/shared/IconLinkGroupWrapper.js';
import { SectionPresentation } from '../../Section/shared/SectionPresentation.js';
import { ThemePresentation } from '../../Theme/shared/ThemePresentation.js';
import { HeaderContainerWrapper } from '../../_HeaderContainer/HeaderContainerWrapper.js';
import { LogoPresentation } from '../../_Logo/LogoPresentation.js';
import { NavigationBarPresentation } from '../../_NavigationBar/NavigationBarPresentation.js';
import { NavigationBlockWrapper } from '../../_NavigationBlock/shared/NavigationBlockWrapper.js';
import { hostClass } from './SimpleHeader.styles.js';

// @ts-strict-ignore
const SimpleHeaderPresentation = ({ id, className, noMargin, isStencilHost, activeRef, activeElement, isSticky, isMobile, logoSrcMobile, logoSrcDesktop, logoHref, logoLabel, logoHtmlAttrs, logoDisabled, logoActionAs, logoActionProps, logoName, onLogoClick, segmentLabel, navigationTree, navigationAriaLabel, navigationActionAs, value, onChange, name, iconLinksInteraction, onOpenChange, onForceMobileChange, open, mobileOpenMenuButtonRef, menuFlyoutAriaLabel, handleOnIconClick, }) => {
    const logoId = useUniqueId(`${hostClass}-logo`, id && `${id}-logo`);
    const defaultLogoLabel = logoSrcMobile || logoSrcDesktop ? texts.lsg.component.Logo.actionHome : texts.lsg.component.Logo.actionCoba;
    return (React__default.createElement(Host, { id: id, className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
            [`${lsgPre}no-margin`]: noMargin,
        }), isStencilHost: isStencilHost, "data-lsg-component": "simple-header" },
        React__default.createElement(HeaderContainerWrapper, { width: "page", theme: "dark", activeElement: activeElement, isFullUnderline: false, position: isSticky ? "fixed" : undefined, isMobile: isMobile, onForceMobileChange: onForceMobileChange, logo: React__default.createElement(LogoPresentation, { id: logoId, variant: isMobile ? "mobile" : "horizontal", disabled: logoDisabled, href: logoHref, onClick: onLogoClick, actionAs: logoActionAs, actionProps: logoActionProps, logoLabel: logoLabel || defaultLogoLabel, srcCustom: isMobile ? logoSrcMobile : logoSrcDesktop, fitToBox: true, logoName: logoName, 
                // if this link is the currently opened page, set aria-current to page
                htmlAttrs: logoName === value ? { ...logoHtmlAttrs, "aria-current": "page" } : logoHtmlAttrs }), segmentLabel: segmentLabel, topRightAriaLabel: !open ? navigationAriaLabel : undefined, topRight: React__default.createElement(React__default.Fragment, null,
                !isMobile && navigationTree && navigationTree.length > 0 && (React__default.createElement(NavigationBarPresentation, { className: `${hostClass}-navigation`, navigationTree: navigationTree, navigationActionAs: navigationActionAs, value: value, activeRef: activeRef, onChange: (v, e) => onChange(v, name, e) })),
                (iconLinksInteraction || isMobile) && (React__default.createElement(IconLinkGroupWrapper, { noMargin: true, direction: "collapse-xs" },
                    iconLinksInteraction,
                    isMobile && navigationTree && navigationTree.length > 0 && (React__default.createElement(IconLinkWrapper, { label: texts.lsg.component.SimpleHeader.openMenu, icon: interaction___menu, appearance: "no-text", onClick: () => {
                            onOpenChange(true);
                        }, actionRef: mobileOpenMenuButtonRef, expanded: false }))))) }),
        React__default.createElement(ThemePresentation, { componentContext: true, componentName: "header" },
            React__default.createElement(DrawerPresentation, { id: `side-menu-${id}`, open: isMobile && open, layout: "side-menu-right", onBackdropClick: () => onOpenChange(undefined), ariaLabel: menuFlyoutAriaLabel, setPersistentFocus: true },
                React__default.createElement("nav", { "aria-label": navigationAriaLabel },
                    React__default.createElement(HeaderContainerWrapper, { width: "layer", theme: "elevated", noSemanticElements: true, isMobile: isMobile, topRight: 
                        // mobile close menu button
                        React__default.createElement(IconLinkGroupWrapper, { noMargin: true },
                            React__default.createElement(IconLinkWrapper, { label: texts.lsg.component.SimpleHeader.closeMenu, icon: interaction___close, onClick: () => {
                                    onOpenChange(undefined);
                                    handleOnIconClick();
                                }, appearance: "no-text", expanded: true })) }),
                    React__default.createElement(SectionPresentation, null,
                        React__default.createElement(NavigationBlockWrapper, { navigationTree: navigationTree, navigationActionAs: navigationActionAs, startLevel: "page", onChange: (v, e) => onChange(v, name, e), value: value })))))));
};
SimpleHeaderPresentation.displayName = "SimpleHeaderPresentation";

export { SimpleHeaderPresentation };
