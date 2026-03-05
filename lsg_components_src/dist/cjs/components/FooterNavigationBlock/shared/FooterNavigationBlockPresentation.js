'use strict';

var React__default = require('react');
var AccordionWrapper = require('../../Accordion/shared/AccordionWrapper.js');
var FooterNavigation_styles = require('../../FooterNavigation/shared/FooterNavigation.styles.js');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var React__default__namespace = /*#__PURE__*/_interopNamespaceDefault(React__default);

const FooterNavigationBlockPresentation = ({
  children,
  title,
  isLargeScreen,
  footerNavigationBlockAs,
  ...other
}) => {
  const linkList = /*#__PURE__*/React__default__namespace.createElement("ul", {
    className: `${FooterNavigation_styles.hostClass}-block-list`
  }, React__default__namespace.Children.map(children, child => (/*#__PURE__*/React__default__namespace.createElement("li", null, child))));
  const LargeScreenComponent = footerNavigationBlockAs || "h3";
  return isLargeScreen ? (/*#__PURE__*/React__default__namespace.createElement("li", {
    className: `${FooterNavigation_styles.hostClass}-block`
  }, /*#__PURE__*/React__default__namespace.createElement(LargeScreenComponent, {
    className: `${FooterNavigation_styles.hostClass}-block-title`,
    // set ARIA attributes if footerNavigationBlockAs is not a headline HTML element
    ...(!["h1", "h2", "h3", "h4", "h5", "h6"].includes(LargeScreenComponent) && {
      role: "heading",
      "aria-level": 3
    })
  }, title), linkList)) : (/*#__PURE__*/React__default__namespace.createElement(AccordionWrapper.AccordionWrapper, {
    ...other,
    title: title,
    titleAs: footerNavigationBlockAs
  }, linkList));
};
FooterNavigationBlockPresentation.displayName = "FooterNavigationBlockPresentation";

exports.FooterNavigationBlockPresentation = FooterNavigationBlockPresentation;
