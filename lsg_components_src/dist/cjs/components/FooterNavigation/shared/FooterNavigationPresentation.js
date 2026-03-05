'use strict';

var React__default = require('react');
var index = require('../../../utils/Hooks/index.js');
var ReactUtils = require('../../../utils/ReactUtils.js');
var Accordion = require('../../Accordion/Accordion.js');
require('../../Accordion/AccordionStateful.js');
var FooterNavigation_styles = require('./FooterNavigation.styles.js');

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

const FooterNavigationPresentation = ({
  id,
  children: childrenProp,
  navigationAriaLabel
}) => {
  const isLargeScreen = index.useViewportRange("lg", undefined);
  const children = ReactUtils.fragmentMap(childrenProp, child => /*#__PURE__*/React__default__namespace.cloneElement(child, {
    isLargeScreen
  }));
  return isLargeScreen ? (/*#__PURE__*/React__default__namespace.createElement("nav", {
    "aria-label": navigationAriaLabel
  }, /*#__PURE__*/React__default__namespace.createElement("ul", {
    className: FooterNavigation_styles.hostClass,
    id: id
  }, children))) : (/*#__PURE__*/React__default__namespace.createElement("nav", {
    "aria-label": navigationAriaLabel
  }, /*#__PURE__*/React__default__namespace.createElement(Accordion.Accordion.Group.Stateful, {
    id: id,
    className: `${FooterNavigation_styles.hostClass}`
  }, children)));
};

exports.FooterNavigationPresentation = FooterNavigationPresentation;
