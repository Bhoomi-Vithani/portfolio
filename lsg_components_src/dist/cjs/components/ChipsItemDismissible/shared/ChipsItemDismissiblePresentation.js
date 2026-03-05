'use strict';

var icons = require('@lsg/icons');
var React__default = require('react');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var Localization = require('../../../utils/Localization.js');
var A11yMeaningfulLabelContext = require('../../A11yMeaningfulLabel/shared/A11yMeaningfulLabelContext.js');
var BadgePresentation = require('../../Badge/shared/BadgePresentation.js');
var IconPresentation = require('../../Icon/shared/IconPresentation.js');
var IconLinkWrapper = require('../../IconLink/shared/IconLinkWrapper.js');
var ChipsItemContainer = require('../../_ChipsItemContainer/ChipsItemContainer.js');
var ChipsItemContainer_styles = require('../../_ChipsItemContainer/ChipsItemContainer.styles.js');

const ChipsItemDismissiblePresentation = /*#__PURE__*/React__default.forwardRef((props, ref) => {
  const {
    id,
    noMargin,
    onDismiss,
    onFocusLoss = () => {},
    htmlAttrs,
    label,
    as,
    appearance,
    iconVariant,
    icon,
    badgeText,
    ...otherProps
  } = props;
  const dismissableChipId = index.useUniqueId("chips-dismiss-item", id);
  const dissmissLabel = `${Localization.texts.lsg.component.Chips.removeFilter} ${label} ${badgeText || ""}`;
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
    loading: false,
    disabled: false,
    isActive: clicked,
    hasMouseHover,
    hasKeyboardFocus,
    type: "link"
  }), [setHasMouseHover, setHasKeyboardFocus, onMouseUp, onMouseDown, onMouseLeave, onKeyDown, onKeyUp, clicked, hasMouseHover, hasKeyboardFocus]);
  // Init the focus loss callback for the chips Item
  const focusLossRef = React__default.useRef(onFocusLoss);
  // Update the focus loss ref for the chips group, if property onFocusLoss changes.
  // Triggers focus for other item before this chips item gets unmounted.
  React__default.useEffect(() => {
    focusLossRef.current = onFocusLoss;
  }, [onFocusLoss]);
  React__default.useEffect(() => () => {
    // Element gets removed from DOM before we get here.
    focusLossRef.current();
  }, []);
  return /*#__PURE__*/React__default.createElement(A11yMeaningfulLabelContext.A11yMeaningfulLabelContext.Provider, {
    value: actionValue
  }, /*#__PURE__*/React__default.createElement(ChipsItemContainer.ChipsItemContainer, {
    as: as,
    noMargin: noMargin,
    hasKeyboardFocus: hasKeyboardFocus,
    hasMouseHover: hasMouseHover,
    isSelected: true,
    clicked: clicked
  }, appearance !== "right" && icon && (/*#__PURE__*/React__default.createElement(IconPresentation.IconPresentation, {
    icon: icon,
    size: "small",
    noMargin: true,
    variant: iconVariant,
    hover: hasMouseHover,
    color: "default"
  })), /*#__PURE__*/React__default.createElement("span", {
    className: appearance === "no-text" ? `${ChipsItemContainer_styles.hostClass}__no-text` : undefined
  }, label), badgeText && (/*#__PURE__*/React__default.createElement(BadgePresentation.BadgePresentation, {
    className: DomUtils.cleanupClassObject({
      [`${ChipsItemContainer_styles.hostClass}-badge`]: true,
      [`${ChipsItemContainer_styles.hostClass}-badge__margin-left`]: icon || label
    }),
    color: "supplementary"
  }, badgeText)), appearance === "right" && icon && (/*#__PURE__*/React__default.createElement(IconPresentation.IconPresentation, {
    color: "default",
    icon: icon,
    size: "small",
    noMargin: true,
    variant: iconVariant,
    hover: hasMouseHover
  })), /*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
    a11yMeaningfulLabel: true,
    label: dissmissLabel,
    id: `${dismissableChipId}-dismissible-icon`,
    className: `${ChipsItemContainer_styles.hostClass}-dismissable-icon`,
    icon: icons.interaction___close,
    noMargin: true,
    appearance: "no-text",
    onClick: onDismiss,
    color: "secondary",
    name: props.name,
    htmlAttrs: htmlAttrs,
    actionRef: ref,
    ...otherProps
  })));
});

exports.ChipsItemDismissiblePresentation = ChipsItemDismissiblePresentation;
