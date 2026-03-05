'use strict';

var React__default = require('react');
var prefix = require('../../config/prefix.js');
var DomUtils = require('../../utils/DomUtils.js');
var Host = require('../../utils/Host.js');
var NavigationLinkGroup_styles = require('./NavigationLinkGroup.styles.js');

// @ts-strict-ignore
const NavigationLinkGroupPresentation = ({
  id,
  noMargin,
  children,
  className,
  centeredLayout,
  size = "meta-bar"
}) => (/*#__PURE__*/React__default.createElement(Host.Host, {
  className: DomUtils.cleanupClassObject({
    [`${NavigationLinkGroup_styles.hostClass}`]: true,
    [`${NavigationLinkGroup_styles.hostClass}__${size}`]: size,
    [className]: className,
    [`${prefix.lsgPre}no-margin`]: noMargin,
    [`${NavigationLinkGroup_styles.hostClass}-centered-layout`]: centeredLayout
  }),
  id: id,
  as: "ul",
  role: "list" // Because of style-type: none - Safari Bug: https://web.dev/articles/creative-list-styling?hl=de#styling_lists_that_dont_look_like_lists
  ,
  htmlAttrs: {
    "data-lsg-component": "navigation-link-group"
  }
}, children));
NavigationLinkGroupPresentation.displayName = "NavigationLinkGroupPresentation";

exports.NavigationLinkGroupPresentation = NavigationLinkGroupPresentation;
