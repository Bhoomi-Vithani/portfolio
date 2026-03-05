'use strict';

var React__default = require('react');
var index = require('../../../utils/Hooks/index.js');
var ReactUtils = require('../../../utils/ReactUtils.js');
var CardsPresentation = require('./CardsPresentation.js');

// @ts-strict-ignore
const CardsRadiosWrapper = ({
  children,
  value,
  name,
  onChange,
  itemsPerRow = 4,
  ...otherProps
}) => {
  const groupName = index.useUniqueId("cards-radios-group-name-", name);
  return /*#__PURE__*/React__default.createElement(CardsPresentation.CardsPresentation, {
    ...otherProps,
    type: "SingleOptionToggle"
  }, ReactUtils.fragmentMap(children, child => /*#__PURE__*/React__default.cloneElement(child, {
    value: value === child.props.name,
    onChange: (_value, chName, event) => onChange(chName, name, event),
    itemsPerRow,
    inputHtmlAttrs: {
      ...child.props.inputHtmlAttrs,
      name: groupName
    }
  })));
};
CardsRadiosWrapper.displayName = "CardsRadiosWrapper";

exports.CardsRadiosWrapper = CardsRadiosWrapper;
