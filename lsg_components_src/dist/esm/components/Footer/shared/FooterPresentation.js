import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { texts } from '../../../utils/Localization.js';
import { BrandbarPresentation } from '../../Brandbar/shared/BrandbarPresentation.js';
import { FooterMetabarPresentation } from '../../FooterMetabar/shared/FooterMetabarPresentation.js';
import { getThemeChildrenClass } from '../../Theme/shared/ThemePresentation.js';
import { hostClass } from './Footer.styles.js';

// @ts-strict-ignore
const FooterPresentation = ({ id, children, className, noMargin, contactArea, previousTheme = "light", brandBarSlogan, brandBarHref, brandBarActionAs, brandBarActionProps, brandBarLogoLabel, brandBarLogoSrcCustom, brandBarLogoDisabled, brandBarLogoHtmlAttrs, brandBarOnLogoClick, metaBarNavigationActionAs, metaBarNavigationTree, metaBarNavigationAriaLabel, metaBarHorizontallyCentered, metaBarSocialLinks, metaBarSocialLinksAriaLabel, dataComponentType, }) => {
    /* TODO v20 - remove isBrandBar/MetaBarImplemented because using the brandBar/metaBar... props should be the usual
         implementation instead of a Brand/Metabar component nested in a Footer component (deprecated) - see
          CCSN-69953, CCSN-80302 */
    const isBrandBarImplemented = !!brandBarSlogan || !!brandBarHref;
    const isMetaBarImplemented = !!metaBarNavigationTree || !!metaBarNavigationAriaLabel;
    const defaultLogoLabel = brandBarLogoSrcCustom
        ? texts.lsg.component.Logo.actionHome
        : texts.lsg.component.Logo.actionCoba;
    return (React__default.createElement("footer", { id: id, className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
            [`${lsgPre}no-margin`]: noMargin,
        }), "data-lsg-component": dataComponentType || "footer" },
        contactArea && (React__default.createElement(React__default.Fragment, null,
            React__default.createElement("div", { className: getThemeChildrenClass(previousTheme) },
                React__default.createElement("div", { className: `${hostClass}__contact-area-outlier` })),
            React__default.createElement("div", { className: `${hostClass}-contact-area` }, contactArea))),
        React__default.createElement("div", { className: cleanupClassObject({
                [`${hostClass}-inner`]: true,
                [getThemeChildrenClass("dark", "footer")]: true,
            }) },
            isBrandBarImplemented && (React__default.createElement(BrandbarPresentation, { slogan: brandBarSlogan, href: brandBarHref, actionAs: brandBarActionAs, actionProps: brandBarActionProps, logoLabel: brandBarLogoLabel || defaultLogoLabel, logoSrcCustom: brandBarLogoSrcCustom, logoDisabled: brandBarLogoDisabled, logoHtmlAttrs: brandBarLogoHtmlAttrs, onLogoClick: brandBarOnLogoClick })),
            children,
            isMetaBarImplemented && (React__default.createElement(FooterMetabarPresentation, { navigationActionAs: metaBarNavigationActionAs, navigationTree: metaBarNavigationTree, navigationAriaLabel: metaBarNavigationAriaLabel, horizontalAlignment: metaBarHorizontallyCentered ? "center" : undefined, socialLinks: metaBarSocialLinks, socialLinksAriaLabel: metaBarSocialLinksAriaLabel })))));
};
FooterPresentation.displayName = "FooterPresentation";

export { FooterPresentation };
