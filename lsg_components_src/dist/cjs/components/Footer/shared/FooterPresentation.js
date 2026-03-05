'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var Localization = require('../../../utils/Localization.js');
var BrandbarPresentation = require('../../Brandbar/shared/BrandbarPresentation.js');
var FooterMetabarPresentation = require('../../FooterMetabar/shared/FooterMetabarPresentation.js');
var ThemePresentation = require('../../Theme/shared/ThemePresentation.js');
var Footer_styles = require('./Footer.styles.js');

// @ts-strict-ignore
const FooterPresentation = ({
  id,
  children,
  className,
  noMargin,
  contactArea,
  previousTheme = "light",
  brandBarSlogan,
  brandBarHref,
  brandBarActionAs,
  brandBarActionProps,
  brandBarLogoLabel,
  brandBarLogoSrcCustom,
  brandBarLogoDisabled,
  brandBarLogoHtmlAttrs,
  brandBarOnLogoClick,
  metaBarNavigationActionAs,
  metaBarNavigationTree,
  metaBarNavigationAriaLabel,
  metaBarHorizontallyCentered,
  metaBarSocialLinks,
  metaBarSocialLinksAriaLabel,
  dataComponentType
}) => {
  /* TODO v20 - remove isBrandBar/MetaBarImplemented because using the brandBar/metaBar... props should be the usual
       implementation instead of a Brand/Metabar component nested in a Footer component (deprecated) - see
        CCSN-69953, CCSN-80302 */
  const isBrandBarImplemented = !!brandBarSlogan || !!brandBarHref;
  const isMetaBarImplemented = !!metaBarNavigationTree || !!metaBarNavigationAriaLabel;
  const defaultLogoLabel = brandBarLogoSrcCustom ? Localization.texts.lsg.component.Logo.actionHome : Localization.texts.lsg.component.Logo.actionCoba;
  return /*#__PURE__*/React__default.createElement("footer", {
    id: id,
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [Footer_styles.hostClass]: true,
      [`${prefix.lsgPre}no-margin`]: noMargin
    }),
    "data-lsg-component": dataComponentType || "footer"
  }, contactArea && (/*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    className: ThemePresentation.getThemeChildrenClass(previousTheme)
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${Footer_styles.hostClass}__contact-area-outlier`
  })), /*#__PURE__*/React__default.createElement("div", {
    className: `${Footer_styles.hostClass}-contact-area`
  }, contactArea))), /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${Footer_styles.hostClass}-inner`]: true,
      [ThemePresentation.getThemeChildrenClass("dark", "footer")]: true
    })
  }, isBrandBarImplemented && (/*#__PURE__*/React__default.createElement(BrandbarPresentation.BrandbarPresentation, {
    slogan: brandBarSlogan,
    href: brandBarHref,
    actionAs: brandBarActionAs,
    actionProps: brandBarActionProps,
    logoLabel: brandBarLogoLabel || defaultLogoLabel,
    logoSrcCustom: brandBarLogoSrcCustom,
    logoDisabled: brandBarLogoDisabled,
    logoHtmlAttrs: brandBarLogoHtmlAttrs,
    onLogoClick: brandBarOnLogoClick
  })), children, isMetaBarImplemented && (/*#__PURE__*/React__default.createElement(FooterMetabarPresentation.FooterMetabarPresentation, {
    navigationActionAs: metaBarNavigationActionAs,
    navigationTree: metaBarNavigationTree,
    navigationAriaLabel: metaBarNavigationAriaLabel,
    horizontalAlignment: metaBarHorizontallyCentered ? "center" : undefined,
    socialLinks: metaBarSocialLinks,
    socialLinksAriaLabel: metaBarSocialLinksAriaLabel
  }))));
};
FooterPresentation.displayName = "FooterPresentation";

exports.FooterPresentation = FooterPresentation;
