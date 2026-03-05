'use strict';

var React__default = require('react');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var Localization = require('../../../utils/Localization.js');
var FooterPresentation = require('../../Footer/shared/FooterPresentation.js');
var LogoPresentation = require('../../_Logo/LogoPresentation.js');
var NavigationBarPresentation = require('../../_NavigationBar/NavigationBarPresentation.js');
var SimpleFooter_styles = require('./SimpleFooter.styles.js');

// @ts-strict-ignore
const SimpleFooterPresentation = ({
  id,
  className,
  noMargin,
  isStencilHost,
  contactModule,
  navigationActionAs,
  navigationTree,
  navigationAriaLabel,
  logoDisabled,
  logoLabel,
  logoHref,
  logoSrc,
  logoHtmlAttrs,
  logoActionAs,
  logoActionProps,
  onLogoClick,
  claim
}) => {
  const logoId = index.useUniqueId(`${SimpleFooter_styles.hostClass}-logo`, id && `${id}-logo`);
  const defaultLogoLabel = logoSrc ? Localization.texts.lsg.component.Logo.actionHome : Localization.texts.lsg.component.Logo.actionCoba;
  return /*#__PURE__*/React__default.createElement(FooterPresentation.FooterPresentation, {
    id: id,
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [SimpleFooter_styles.hostClass]: true
    }),
    isStencilHost: isStencilHost,
    noMargin: noMargin,
    contactArea: contactModule,
    dataComponentType: "simple-footer"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${SimpleFooter_styles.hostClass}-brandbar`
  }, /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${SimpleFooter_styles.hostClass}-brandbar-item`]: true,
      [`${SimpleFooter_styles.hostClass}-brandbar-item-logo`]: true
    })
  }, /*#__PURE__*/React__default.createElement(LogoPresentation.LogoPresentation, {
    id: logoId,
    className: `${SimpleFooter_styles.hostClass}-logo`,
    variant: "vertical",
    isMonochrome: true,
    noMargin: true,
    href: logoHref,
    disabled: logoDisabled,
    logoLabel: logoLabel || defaultLogoLabel,
    srcCustom: logoSrc,
    onClick: onLogoClick,
    actionAs: logoActionAs,
    actionProps: logoActionProps,
    htmlAttrs: logoHtmlAttrs
  })), /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${SimpleFooter_styles.hostClass}-brandbar-item`]: true,
      [`${SimpleFooter_styles.hostClass}-brandbar-item-claim`]: true
    })
  }, claim || Localization.texts.lsg.component.Footer.claim), /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${SimpleFooter_styles.hostClass}-brandbar-item`]: true,
      [`${SimpleFooter_styles.hostClass}-brandbar-item-metabar`]: true
    })
  }, /*#__PURE__*/React__default.createElement(NavigationBarPresentation.NavigationBarPresentation, {
    size: "meta-bar",
    value: "",
    navigationTree: navigationTree,
    navigationAriaLabel: navigationAriaLabel,
    navigationActionAs: navigationActionAs
  }))));
};
SimpleFooterPresentation.displayName = "SimpleFooterPresentation";

exports.SimpleFooterPresentation = SimpleFooterPresentation;
