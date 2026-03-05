'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var Host = require('../../../utils/Host.js');
var NavigationBarPresentation = require('../../_NavigationBar/NavigationBarPresentation.js');
var FooterMetabar_styles = require('./FooterMetabar.styles.js');

// @ts-strict-ignore
const FooterMetabarPresentation = ({
  id,
  className,
  isStencilHost,
  navigationActionAs,
  navigationTree,
  navigationAriaLabel,
  socialLinks,
  socialLinksAriaLabel,
  horizontalAlignment
}) => (/*#__PURE__*/React__default.createElement(Host.Host, {
  id: id,
  className: DomUtils.cleanupClassObject({
    [className]: !!className,
    [`${FooterMetabar_styles.hostClass}-centered`]: horizontalAlignment === "center",
    [FooterMetabar_styles.hostClass]: true
  }),
  isStencilHost: isStencilHost,
  "data-lsg-component": "footer-metabar"
}, navigationTree && (/*#__PURE__*/React__default.createElement(NavigationBarPresentation.NavigationBarPresentation, {
  className: `${FooterMetabar_styles.hostClass}__navigation-bar`,
  size: "meta-bar",
  value: "",
  navigationTree: navigationTree,
  navigationAriaLabel: navigationAriaLabel,
  navigationActionAs: navigationActionAs,
  centeredLayout: true
})), socialLinks?.props?.children && (/*#__PURE__*/React__default.createElement("nav", {
  "aria-label": socialLinksAriaLabel
}, /*#__PURE__*/React__default.createElement("ul", {
  className: `${prefix.lsgPre}footer-metabar-sociallinks`,
  role: "list" // Because of style-type: none - Safari Bug: https://web.dev/articles/creative-list-styling?hl=de#styling_lists_that_dont_look_like_lists
}, socialLinks.props.children.map((child, i) => (/*#__PURE__*/React__default.createElement("li", {
  key: i,
  className: `${prefix.lsgPre}footer-metabar-sociallink`
}, child))))))));
FooterMetabarPresentation.displayName = "FooterMetabarPresentation";

exports.FooterMetabarPresentation = FooterMetabarPresentation;
