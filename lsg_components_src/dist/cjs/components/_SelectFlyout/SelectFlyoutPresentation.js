'use strict';

var React__default = require('react');
var prefix = require('../../config/prefix.js');
var DomUtils = require('../../utils/DomUtils.js');
var FlyoutPresentation = require('../_Flyout/shared/FlyoutPresentation.js');
var SelectOptionPresentation = require('../_SelectOption/SelectOptionPresentation.js');

// @ts-strict-ignore
const SelectFlyoutPresentation = ({
  id,
  className,
  noMargin,
  name,
  emptyListLabel,
  options,
  onChange,
  onMouseOver,
  focussedValue,
  hoveredValue,
  value,
  hostRef,
  focussedRef,
  onKeyDown,
  isToggleElmWidth,
  hasTabIndex,
  toggleElement,
  toggleContainerElement,
  open,
  onCloseClick,
  role,
  ariaLabel,
  autocomplete
}) => (/*#__PURE__*/React__default.createElement(FlyoutPresentation.FlyoutPresentation, {
  id: id,
  className: DomUtils.cleanupClassObject({
    [className]: className,
    [`${prefix.lsgPre}no-margin`]: noMargin
  }),
  open: open,
  onClose: onCloseClick,
  toggleElement: toggleElement,
  toggleContainerElement: toggleContainerElement,
  onKeyDown: onKeyDown,
  isToggleElmWidth: isToggleElmWidth,
  hasTabIndex: hasTabIndex,
  hostRef: hostRef,
  withGap: true,
  maxHeight: 320,
  htmlAttrs: {
    role
  },
  ariaLabel: ariaLabel,
  as: "ul"
}, emptyListLabel && options?.length === 0 && /*#__PURE__*/React__default.createElement(SelectOptionPresentation.SelectOptionPresentation, {
  label: emptyListLabel
}), options.map(option => (/*#__PURE__*/React__default.createElement(SelectOptionPresentation.SelectOptionPresentation, {
  ...option,
  id: `${id}-option_${option.value}`,
  optionValue: option.value,
  key: option.value,
  hasKeyboardFocus: option.value === focussedValue,
  hasMouseHover: option.value === hoveredValue,
  ariaSelected: autocomplete ? option.value === focussedValue : option.value === value,
  onClick: event => onChange(option.value, name, event),
  onMouseOver: () => onMouseOver(option.value),
  ref: option.value === focussedValue ? focussedRef : undefined
})))));
SelectFlyoutPresentation.displayName = "SelectFlyoutPresentation";

exports.SelectFlyoutPresentation = SelectFlyoutPresentation;
