'use strict';

var React__default = require('react');
var AccordionGroup = require('../AccordionGroup/AccordionGroup.js');
require('../AccordionGroup/AccordionGroupStateful.js');
var AccordionWrapper = require('./shared/AccordionWrapper.js');

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

/**
 * @deprecated. Use `Accordion` instead, without providing `isOpen` and `onChange`. If absent,
 * `Accordion` will be stateful.
 */
class AccordionStateful extends React__default__namespace.Component {
  render() {
    return /*#__PURE__*/React__default__namespace.createElement(AccordionWrapper.AccordionWrapper, {
      ...this.props
    });
  }
}
AccordionStateful.displayName = "Accordion.Stateful";
AccordionStateful.Group = AccordionGroup.AccordionGroup;

exports.AccordionStateful = AccordionStateful;
