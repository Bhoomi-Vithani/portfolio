import React__default from 'react';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { useUniqueId } from '../../../utils/Hooks/index.js';
import { texts } from '../../../utils/Localization.js';
import { FooterPresentation } from '../../Footer/shared/FooterPresentation.js';
import { LogoPresentation } from '../../_Logo/LogoPresentation.js';
import { NavigationBarPresentation } from '../../_NavigationBar/NavigationBarPresentation.js';
import { hostClass } from './SimpleFooter.styles.js';

// @ts-strict-ignore
const SimpleFooterPresentation = ({ id, className, noMargin, isStencilHost, contactModule, navigationActionAs, navigationTree, navigationAriaLabel, logoDisabled, logoLabel, logoHref, logoSrc, logoHtmlAttrs, logoActionAs, logoActionProps, onLogoClick, claim, }) => {
    const logoId = useUniqueId(`${hostClass}-logo`, id && `${id}-logo`);
    const defaultLogoLabel = logoSrc ? texts.lsg.component.Logo.actionHome : texts.lsg.component.Logo.actionCoba;
    return (React__default.createElement(FooterPresentation, { id: id, className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
        }), isStencilHost: isStencilHost, noMargin: noMargin, contactArea: contactModule, dataComponentType: "simple-footer" },
        React__default.createElement("div", { className: `${hostClass}-brandbar` },
            React__default.createElement("div", { className: cleanupClassObject({
                    [`${hostClass}-brandbar-item`]: true,
                    [`${hostClass}-brandbar-item-logo`]: true,
                }) },
                React__default.createElement(LogoPresentation, { id: logoId, className: `${hostClass}-logo`, variant: "vertical", isMonochrome: true, noMargin: true, href: logoHref, disabled: logoDisabled, logoLabel: logoLabel || defaultLogoLabel, srcCustom: logoSrc, onClick: onLogoClick, actionAs: logoActionAs, actionProps: logoActionProps, htmlAttrs: logoHtmlAttrs })),
            React__default.createElement("div", { className: cleanupClassObject({
                    [`${hostClass}-brandbar-item`]: true,
                    [`${hostClass}-brandbar-item-claim`]: true,
                }) }, claim || texts.lsg.component.Footer.claim),
            React__default.createElement("div", { className: cleanupClassObject({
                    [`${hostClass}-brandbar-item`]: true,
                    [`${hostClass}-brandbar-item-metabar`]: true,
                }) },
                React__default.createElement(NavigationBarPresentation, { size: "meta-bar", value: "", navigationTree: navigationTree, navigationAriaLabel: navigationAriaLabel, navigationActionAs: navigationActionAs })))));
};
SimpleFooterPresentation.displayName = "SimpleFooterPresentation";

export { SimpleFooterPresentation };
