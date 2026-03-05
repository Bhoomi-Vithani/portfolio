'use strict';

var React__default = require('react');
var DomUtils = require('../../utils/DomUtils.js');
var index = require('../../utils/Hooks/index.js');
var A11yMeaningfulLabel = require('../A11yMeaningfulLabel/A11yMeaningfulLabel.js');
var A11yMeaningfulLabelContext = require('../A11yMeaningfulLabel/shared/A11yMeaningfulLabelContext.js');
var BadgePresentation = require('../Badge/shared/BadgePresentation.js');
var IconPresentation = require('../Icon/shared/IconPresentation.js');
var ChipsItemContainer = require('../_ChipsItemContainer/ChipsItemContainer.js');
var ChipsItemContainer_styles = require('../_ChipsItemContainer/ChipsItemContainer.styles.js');

// @ts-strict-ignore
const ChipsToggleItemPresentation = /*#__PURE__*/React__default.forwardRef((props, ref) => {
  const {
    id: idProp,
    onChange,
    name,
    noMargin,
    label,
    icon,
    iconVariant,
    appearance,
    value,
    type,
    htmlAttrs: htmlAttrsProp,
    as,
    badgeText
  } = props;
  const id = index.useUniqueId(`${ChipsItemContainer_styles.hostClass}-`, idProp);
  const [{
    hasKeyboardFocus,
    hasMouseHover,
    clicked
  }, {
    setHasKeyboardFocus,
    setHasMouseHover
  }, {
    onMouseDown,
    onMouseUp,
    onMouseLeave,
    onKeyDown,
    onKeyUp
  }] = index.useDwindle(props);
  const actionValue = React__default.useMemo(() => ({
    onMouseHoverChange: setHasMouseHover,
    onKeyboardFocusChange: setHasKeyboardFocus,
    onMouseUp,
    onMouseDown,
    onMouseLeave,
    onKeyDown,
    onKeyUp,
    disabled: false,
    loading: false,
    isActive: clicked,
    hasMouseHover,
    hasKeyboardFocus,
    type: "label",
    htmlFor: id
  }), [setHasMouseHover, setHasKeyboardFocus, onMouseUp, onMouseDown, onMouseLeave, onKeyDown, onKeyUp, clicked, hasMouseHover, hasKeyboardFocus, id]);
  const htmlAttrs = {
    ...htmlAttrsProp,
    "data-lsg-component": "chips-toggle-item"
  };
  return /*#__PURE__*/React__default.createElement(A11yMeaningfulLabelContext.A11yMeaningfulLabelContext.Provider, {
    value: actionValue
  }, /*#__PURE__*/React__default.createElement(ChipsItemContainer.ChipsItemContainer, {
    as: as,
    noMargin: noMargin,
    hasKeyboardFocus: hasKeyboardFocus,
    hasMouseHover: hasMouseHover,
    isSelected: value,
    appearance: appearance,
    id: `${id}-base`
  }, appearance !== "right" && icon && (/*#__PURE__*/React__default.createElement(IconPresentation.IconPresentation, {
    icon: icon,
    size: "small",
    noMargin: true,
    variant: iconVariant,
    hover: hasMouseHover,
    color: value === true ? "default" : "tertiary",
    title: "" // will also set aria-hidden="true"
  })), /*#__PURE__*/React__default.createElement(A11yMeaningfulLabel.A11yMeaningfulLabel, null, /*#__PURE__*/React__default.createElement("input", {
    id: id,
    className: DomUtils.cleanupClassObject({
      [`${ChipsItemContainer_styles.hostClass}-input`]: true
    }),
    type: type || "checkbox",
    checked: value,
    // aria-checked={value} // Not necessary https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked
    onChange: e => {
      e.stopPropagation();
      onChange(e.target.checked, name, e);
    },
    ref: ref,
    ...htmlAttrs
  }), /*#__PURE__*/React__default.createElement("span", {
    id: `${id}-label`,
    className: appearance === "no-text" ? `${ChipsItemContainer_styles.hostClass}__no-text` : undefined
  }, label), badgeText && (/*#__PURE__*/React__default.createElement(BadgePresentation.BadgePresentation, {
    id: `${id}-badge`,
    className: DomUtils.cleanupClassObject({
      [`${ChipsItemContainer_styles.hostClass}-badge__margin-left`]: icon || label
    }),
    color: "supplementary",
    inline: true
  }, badgeText))), appearance === "right" && icon && (/*#__PURE__*/React__default.createElement(IconPresentation.IconPresentation, {
    color: value === true ? "default" : "tertiary",
    icon: icon,
    size: "small",
    noMargin: true,
    variant: iconVariant,
    hover: hasMouseHover,
    title: "" // will also set aria-hidden="true"
  }))));
});

exports.ChipsToggleItemPresentation = ChipsToggleItemPresentation;
