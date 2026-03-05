'use strict';

var icons = require('@lsg/icons');
var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var Host = require('../../../utils/Host.js');
var Localization = require('../../../utils/Localization.js');
var IconLinkWrapper = require('../../IconLink/shared/IconLinkWrapper.js');
var IconLinkGroupWrapper = require('../../IconLinkGroup/shared/IconLinkGroupWrapper.js');
var HeaderContainerWrapper = require('../../_HeaderContainer/HeaderContainerWrapper.js');
var DetailPageHeader_styles = require('./DetailPageHeader.styles.js');

// @ts-strict-ignore
const DetailPageHeaderPresentation = ({
  id,
  className,
  noMargin,
  isStencilHost,
  theme = "light",
  closeLabel,
  closeHref,
  closeOnClick,
  isSticky = false,
  actions,
  isMobile,
  onForceMobileChange
}) => (/*#__PURE__*/React__default.createElement(Host.Host, {
  id: id,
  className: DomUtils.cleanupClassObject({
    [className]: !!className,
    [DetailPageHeader_styles.hostClass]: true,
    [`${prefix.lsgPre}no-margin`]: noMargin
  }),
  isStencilHost: isStencilHost
}, /*#__PURE__*/React__default.createElement(HeaderContainerWrapper.HeaderContainerWrapper, {
  width: "page",
  theme: theme,
  isFullUnderline: false,
  position: isSticky ? "fixed" : undefined,
  isMobile: isMobile,
  onForceMobileChange: onForceMobileChange,
  topLeft: closeHref || closeOnClick ? (/*#__PURE__*/React__default.createElement(IconLinkGroupWrapper.IconLinkGroupWrapper, {
    noMargin: true,
    direction: "collapse-xs"
  }, /*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
    href: closeHref,
    onClick: closeOnClick,
    label: closeLabel || Localization.texts.lsg.component.DetailPageHeader.backButton,
    icon: icons.interaction_arrows_arrowLeft
  }))) : null,
  topRight: /*#__PURE__*/React__default.createElement("div", {
    className: `${DetailPageHeader_styles.hostClass}-actions-container`
  }, actions)
})));
DetailPageHeaderPresentation.displayName = "DetailPageHeaderPresentation";

exports.DetailPageHeaderPresentation = DetailPageHeaderPresentation;
