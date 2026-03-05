'use strict';

var icons = require('@lsg/icons');
var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var Host = require('../../../utils/Host.js');
var ActionButtonGroupPresentation = require('../../ActionButtonGroup/shared/ActionButtonGroupPresentation.js');
var HeadlinePresentation = require('../../Headline/shared/HeadlinePresentation.js');
var IconPresentation = require('../../Icon/shared/IconPresentation.js');
var LinkWrapper = require('../../Link/shared/LinkWrapper.js');
var ParagraphPresentation = require('../../Paragraph/shared/ParagraphPresentation.js');
var ThemePresentation = require('../../Theme/shared/ThemePresentation.js');
var ContactModule_styles = require('./ContactModule.styles.js');

// @ts-strict-ignore
const ContactModulePresentation = ({
  id,
  children,
  className,
  noMargin,
  href,
  phoneNumber,
  phoneText,
  onClick,
  headline,
  headlineAs,
  subline,
  sublineAs,
  htmlAttrs: htmlAttrsProp,
  actionAs,
  actionProps
}) => {
  const linkHref = phoneNumber && `tel:${phoneNumber}` || href || undefined;
  const isAction = Boolean(linkHref || onClick);
  const headlineText = phoneText || headline;
  const phoneDescriptionId = index.useUniqueId(`${ContactModule_styles.hostClass}-phone-description`);
  const htmlAttrs = {
    "aria-describedby": phoneNumber && subline ? phoneDescriptionId : undefined,
    ...htmlAttrsProp
  };
  // @ts-ignore
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    id: id,
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [ContactModule_styles.hostClass]: true,
      [`${prefix.lsgPre}no-margin`]: noMargin,
      [ThemePresentation.getThemeClass("brand")]: true
    })
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${ContactModule_styles.hostClass}-toparea`
  }, isAction && phoneText && (/*#__PURE__*/React__default.createElement("div", {
    className: `${ContactModule_styles.hostClass}-phonenumber-container`
  }, /*#__PURE__*/React__default.createElement(IconPresentation.IconPresentation, {
    icon: icons.communication___call,
    "aria-hidden": true
  }), /*#__PURE__*/React__default.createElement(HeadlinePresentation.HeadlinePresentation, {
    size: "h4",
    as: "div",
    className: `${ContactModule_styles.hostClass}-phonenumber`
  }, /*#__PURE__*/React__default.createElement(LinkWrapper.LinkWrapper, {
    label: headlineText,
    href: linkHref,
    onClick: onClick,
    actionAs: actionAs,
    actionProps: actionProps,
    htmlAttrs: htmlAttrs
  })))), isAction && headline && (/*#__PURE__*/React__default.createElement(HeadlinePresentation.HeadlinePresentation, {
    size: "h4",
    as: headlineAs,
    noMargin: true,
    className: `${ContactModule_styles.hostClass}-headline`,
    centeredLayout: false
  }, /*#__PURE__*/React__default.createElement(LinkWrapper.LinkWrapper, {
    label: headlineText,
    href: linkHref,
    onClick: onClick,
    actionAs: actionAs,
    actionProps: actionProps,
    htmlAttrs: htmlAttrs
  }))), !isAction && headlineText && (/*#__PURE__*/React__default.createElement(HeadlinePresentation.HeadlinePresentation, {
    size: "h4",
    as: headlineAs,
    noMargin: true,
    className: `${ContactModule_styles.hostClass}-headline`,
    centeredLayout: false
  }, headlineText)), subline && (/*#__PURE__*/React__default.createElement(ParagraphPresentation.ParagraphPresentation, {
    size: "lead-text",
    as: sublineAs,
    noMargin: true,
    className: `${ContactModule_styles.hostClass}-subline`,
    id: phoneNumber && phoneDescriptionId
  }, subline))), children && (/*#__PURE__*/React__default.createElement("div", {
    className: `${ContactModule_styles.hostClass}-actionbuttons`
  }, /*#__PURE__*/React__default.createElement(ActionButtonGroupPresentation.ActionButtonGroupPresentation, {
    noMargin: true
  }, children))));
};
ContactModulePresentation.displayName = "ContactModulePresentation";

exports.ContactModulePresentation = ContactModulePresentation;
