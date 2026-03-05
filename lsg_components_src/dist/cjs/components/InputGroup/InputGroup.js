'use strict';

var React__default = require('react');
var ReactUtils = require('../../utils/ReactUtils.js');
var SelectionGroupPresentation = require('../_SelectionGroup/SelectionGroupPresentation.js');
var RadioGroup = require('./RadioGroup.js');

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

const InputGroup = ({
  children,
  invalid,
  ...otherProps
}) => (/*#__PURE__*/React__default__namespace.createElement(SelectionGroupPresentation.SelectionGroupPresentation, {
  ...otherProps,
  invalid: invalid
}, ReactUtils.fragmentMap(children, child => /*#__PURE__*/React__default__namespace.cloneElement(child, {
  invalid: child.props.invalid ?? invalid
}))));
InputGroup.Radio = RadioGroup.RadioGroup;
InputGroup.displayName = "InputGroup";

exports.InputGroup = InputGroup;
