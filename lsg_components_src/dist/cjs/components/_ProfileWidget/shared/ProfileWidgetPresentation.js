'use strict';

var icons = require('@lsg/icons');
var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var Host = require('../../../utils/Host.js');
var Localization = require('../../../utils/Localization.js');
var ButtonPresentation = require('../../Button/shared/ButtonPresentation.js');
var ButtonGroupPresentation = require('../../ButtonGroup/shared/ButtonGroupPresentation.js');
var IconLinkWrapper = require('../../IconLink/shared/IconLinkWrapper.js');
var IconLinkGroupWrapper = require('../../IconLinkGroup/shared/IconLinkGroupWrapper.js');
var LayerPresentation = require('../../Layer/shared/LayerPresentation.js');
var ParagraphPresentation = require('../../Paragraph/shared/ParagraphPresentation.js');
var TwoLineItemPresentation = require('../../TwoLineItem/shared/TwoLineItemPresentation.js');
var NavigationBlockWrapper = require('../../_NavigationBlock/shared/NavigationBlockWrapper.js');
var SeparatorLinePresentation = require('../../_SeparatorLine/SeparatorLinePresentation.js');
var ProfileWidget_styles = require('./ProfileWidget.styles.js');

const ProfileWidgetPresentation = ({
  id,
  children,
  className,
  noMargin,
  isStencilHost,
  open,
  onCloseClick,
  onBackdropClick,
  profileName,
  profileSubline,
  profileImg,
  profileImgAltText,
  profileIcon,
  profileIconVariant,
  switchProfileLinkText,
  switchProfileLinkIcon,
  switchProfileLinkHref,
  switchProfileLinkTarget,
  switchProfileLinkActionAs,
  switchProfileLinkActionProps,
  onProfileSwitchClick,
  navigationTree,
  navigationActionAs,
  onLogOutButtonClick,
  logOutButtonHref,
  logOutButtonTarget,
  logOutButtonText,
  logOutButtonActionAs,
  logOutButtonActionProps,
  logOutButtonHidden,
  messageText,
  linkSectionLeft,
  linkSectionRight
}) => (/*#__PURE__*/React__default.createElement(Host.Host, {
  id: id,
  className: DomUtils.cleanupClassObject({
    [className]: !!className,
    [ProfileWidget_styles.hostClass]: true,
    [`${prefix.lsgPre}no-margin`]: noMargin
  }),
  isStencilHost: isStencilHost
}, /*#__PURE__*/React__default.createElement(LayerPresentation.LayerPresentation, {
  closeLinkLabel: Localization.texts.lsg.component.ProfileWidget.closeMenu,
  layout: "right-25",
  open: open,
  onCloseClick: onCloseClick,
  onBackdropClick: onBackdropClick,
  ariaLabel: "Profile"
}, /*#__PURE__*/React__default.createElement(TwoLineItemPresentation.TwoLineItemPresentation, {
  label: profileName,
  subline: profileSubline,
  horizontalAlignment: "center",
  centeredLayout: true,
  text: profileImgAltText,
  src: profileImg,
  icon: !profileImgAltText && !profileIcon && !profileImg ? icons.people___profile : profileIcon,
  iconVariant: profileIconVariant
}), switchProfileLinkText && (/*#__PURE__*/React__default.createElement(IconLinkGroupWrapper.IconLinkGroupWrapper, {
  direction: "horizontal",
  noMargin: true,
  centeredLayout: true
}, /*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
  label: switchProfileLinkText,
  icon: switchProfileLinkIcon,
  horizontalAlignment: "center",
  onClick: onProfileSwitchClick,
  href: switchProfileLinkHref,
  htmlAttrs: {
    target: switchProfileLinkTarget
  },
  actionAs: switchProfileLinkActionAs,
  actionProps: switchProfileLinkActionProps
}))), /*#__PURE__*/React__default.createElement(SeparatorLinePresentation.SeparatorLinePresentation, {
  componentSpacing: "small"
}), navigationTree?.length > 0 && (/*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(NavigationBlockWrapper.NavigationBlockWrapper, {
  navigationTree: navigationTree,
  navigationActionAs: navigationActionAs,
  startLevel: "page",
  noIndent: true
}), /*#__PURE__*/React__default.createElement(SeparatorLinePresentation.SeparatorLinePresentation, {
  componentSpacing: "small"
}))), /*#__PURE__*/React__default.createElement("div", {
  className: `${ProfileWidget_styles.hostClass}-link-container`
}, /*#__PURE__*/React__default.createElement("div", {
  className: `${ProfileWidget_styles.hostClass}-link-container-left`
}, linkSectionLeft), /*#__PURE__*/React__default.createElement("div", {
  className: `${ProfileWidget_styles.hostClass}-link-container-right`
}, linkSectionRight)), /*#__PURE__*/React__default.createElement(SeparatorLinePresentation.SeparatorLinePresentation, {
  componentSpacing: "small"
}), !logOutButtonHidden && (/*#__PURE__*/React__default.createElement(ButtonGroupPresentation.ButtonGroupPresentation, {
  direction: "vertical"
}, /*#__PURE__*/React__default.createElement(ButtonPresentation.ButtonPresentation, {
  color: "secondary",
  onClick: onLogOutButtonClick,
  href: logOutButtonHref,
  htmlAttrs: {
    target: logOutButtonTarget
  },
  actionAs: logOutButtonActionAs,
  actionProps: logOutButtonActionProps,
  label: logOutButtonText || Localization.texts.lsg.component.ProfileWidget.logout
}))), /*#__PURE__*/React__default.createElement(ParagraphPresentation.ParagraphPresentation, {
  size: "helper-text",
  centeredLayout: true
}, messageText), children)));
ProfileWidgetPresentation.displayName = "ProfileWidgetPresentation";

exports.ProfileWidgetPresentation = ProfileWidgetPresentation;
