'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var Host = require('../../../utils/Host.js');
var ActionPresentation = require('../../Action/shared/ActionPresentation.js');
var IconPresentation = require('../../Icon/shared/IconPresentation.js');
var FormLink_styles = require('./FormLink.styles.js');

// @ts-strict-ignore
const FormLinkPresentation = ({
  id: idProp,
  className,
  noMargin,
  isStencilHost,
  icon,
  label,
  text,
  href,
  htmlAttrs: htmlAttrsProp,
  ...otherProps
}) => {
  const [hasFocus, setHasFocus] = React__default.useState(false);
  const id = index.useUniqueId(`${FormLink_styles.hostClass}-`, idProp);
  const htmlAttrs = {
    ...htmlAttrsProp,
    "data-lsg-component": "form-link"
  };
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    id: `${id}-base`,
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [FormLink_styles.hostClass]: true,
      [`${prefix.lsgPre}no-margin`]: noMargin
    }),
    isStencilHost: isStencilHost
  }, /*#__PURE__*/React__default.createElement(ActionPresentation.ActionPresentation, {
    ...otherProps,
    id: id,
    htmlAttrs: htmlAttrs,
    href: href,
    onKeyboardFocusChange: newFocus => setHasFocus(newFocus),
    hasKeyboardFocus: hasFocus
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${FormLink_styles.hostClass}-label`
  }, label), /*#__PURE__*/React__default.createElement("div", {
    className: `${FormLink_styles.hostClass}-link`
  }, /*#__PURE__*/React__default.createElement(IconPresentation.IconPresentation, {
    className: `${FormLink_styles.hostClass}icon`,
    noMargin: true,
    icon: icon,
    hover: false,
    color: "default",
    size: "small",
    "aria-hidden": true,
    title: ""
  }), /*#__PURE__*/React__default.createElement("span", {
    className: `${FormLink_styles.hostClass}-text`
  }, text))));
};
FormLinkPresentation.displayName = "FormLinkPresentation";

exports.FormLinkPresentation = FormLinkPresentation;
