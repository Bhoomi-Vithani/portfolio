'use strict';

var React__default = require('react');
var prefix = require('../../config/prefix.js');
var index = require('../../utils/Hooks/index.js');
var ReactUtils = require('../../utils/ReactUtils.js');
var SelectionGroupPresentation = require('../_SelectionGroup/SelectionGroupPresentation.js');

// @ts-strict-ignore
const hostClass = `${prefix.lsgPre}radio-group`;
const Child = ({
  child,
  onChange,
  value,
  groupName,
  invalid,
  name
}) => {
  const nameChild = index.useUniqueId(`${hostClass}-item-name-`, child.props.name);
  return /*#__PURE__*/React__default.cloneElement(child, {
    onChange: (_, v, event) => {
      onChange(v, name, event);
    },
    name: nameChild,
    value: value === nameChild,
    invalid: invalid && (value === nameChild || !value),
    htmlAttrs: {
      ...child.props.htmlAttrs,
      name: groupName
    }
  });
};
const RadioGroupWrapper = ({
  children,
  value,
  invalid,
  name,
  onChange = () => {
    /* empty */
  },
  ...otherProps
}) => {
  // GroupName, ItemName important step for correct radio focus
  const groupName = index.useUniqueId(`${hostClass}-name-`, name);
  return /*#__PURE__*/React__default.createElement(SelectionGroupPresentation.SelectionGroupPresentation, {
    ...otherProps,
    invalid: invalid,
    htmlAttrs: {
      role: "radiogroup",
      ...otherProps.htmlAttrs
    }
  }, ReactUtils.fragmentMap(children, (child, i) => (/*#__PURE__*/React__default.createElement(Child, {
    key: i,
    child: child,
    onChange: onChange,
    name: name,
    value: value,
    invalid: child.props.invalid ?? invalid,
    groupName: groupName
  }))));
};

exports.RadioGroupWrapper = RadioGroupWrapper;
exports.hostClass = hostClass;
