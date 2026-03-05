'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var Host = require('../../../utils/Host.js');
var LogoPresentation = require('../../_Logo/LogoPresentation.js');
var Brandbar_styles = require('./Brandbar.styles.js');

// @ts-strict-ignore
const BrandbarPresentation = ({
  id,
  className,
  noMargin,
  isStencilHost,
  slogan,
  href,
  actionAs,
  actionProps,
  logoLabel,
  logoSrcCustom,
  logoDisabled,
  logoHtmlAttrs,
  onLogoClick
}) => {
  const logoId = index.useUniqueId(`${Brandbar_styles.hostClass}-logo`, id && `${id}-logo`);
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    id: id,
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [Brandbar_styles.hostClass]: true,
      [`${prefix.lsgPre}no-margin`]: noMargin
    }),
    isStencilHost: isStencilHost
  }, /*#__PURE__*/React__default.createElement(LogoPresentation.LogoPresentation, {
    id: logoId,
    className: `${Brandbar_styles.hostClass}-logo`,
    logoLabel: logoLabel,
    isMonochrome: true,
    fitToBox: true,
    variant: "horizontal",
    href: href,
    onClick: onLogoClick,
    actionAs: actionAs,
    actionProps: actionProps,
    disabled: logoDisabled,
    srcCustom: logoSrcCustom,
    htmlAttrs: logoHtmlAttrs
  }), /*#__PURE__*/React__default.createElement("p", {
    className: `${Brandbar_styles.hostClass}-claim`
  }, slogan));
};
BrandbarPresentation.displayName = "BrandbarPresentation";

exports.BrandbarPresentation = BrandbarPresentation;
