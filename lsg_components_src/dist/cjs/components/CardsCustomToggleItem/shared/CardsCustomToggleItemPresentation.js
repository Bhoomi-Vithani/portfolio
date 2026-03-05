'use strict';

var React__default = require('react');
var CardsCustomItemPresentation = require('../../CardsCustomItem/shared/CardsCustomItemPresentation.js');
var CheckboxPresentation = require('../../Checkbox/shared/CheckboxPresentation.js');
var RadioPresentation = require('../../Radio/shared/RadioPresentation.js');
var SwitchPresentation = require('../../Switch/shared/SwitchPresentation.js');

// @ts-strict-ignore
const CardsCustomToggleItemPresentation = ({
  id,
  contentTop,
  type = "checkbox",
  value,
  disabled,
  invalid,
  name,
  onChange,
  title,
  inputHtmlAttrs,
  onMouseHoverChange,
  onKeyboardFocusChange,
  hasKeyboardFocus,
  hasMouseHover,
  onMenuMouseHoverChange,
  onMenuKeyboardFocusChange,
  hasMenuMouseHover,
  hasMenuKeyboardFocus,
  ...props
}) => {
  const ToggleComponent = {
    checkbox: CheckboxPresentation.CheckboxPresentation,
    radio: RadioPresentation.RadioPresentation,
    switch: SwitchPresentation.SwitchPresentation
  }[type];
  return /*#__PURE__*/React__default.createElement(CardsCustomItemPresentation.CardsCustomItemPresentation, {
    ...props,
    disabled: disabled,
    hasKeyboardFocus: hasKeyboardFocus,
    hasMouseHover: hasMouseHover || hasMenuMouseHover || hasMenuKeyboardFocus,
    onMenuMouseHoverChange: onMenuMouseHoverChange,
    onMenuKeyboardFocusChange: onMenuKeyboardFocusChange,
    hasMenuMouseHover: hasMenuMouseHover,
    hasMenuKeyboardFocus: hasMenuKeyboardFocus,
    as: "div",
    contentTop: /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(ToggleComponent, {
      id: id,
      onMouseHoverChange: onMouseHoverChange,
      onKeyboardFocusChange: onKeyboardFocusChange,
      hasMouseHover: hasMouseHover,
      // The Card should receive the focus-ring not the input element
      hasKeyboardFocus: false,
      disabled: disabled,
      value: value,
      invalid: invalid,
      name: name,
      onChange: onChange,
      title: title,
      htmlAttrs: inputHtmlAttrs,
      // If this is missing, the area next to the input is not clickable.
      className: "lsgs--cards-toggle"
    }), contentTop)
  });
};
CardsCustomToggleItemPresentation.displayName = "CardsCustomToggleItemPresentation";

exports.CardsCustomToggleItemPresentation = CardsCustomToggleItemPresentation;
