'use strict';

var icons = require('@lsg/icons');
var React__default = require('react');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var Localization = require('../../../utils/Localization.js');
var A11yMeaningfulLabelContext = require('../../A11yMeaningfulLabel/shared/A11yMeaningfulLabelContext.js');
var A11yMeaningfulLabelPresentation = require('../../A11yMeaningfulLabel/shared/A11yMeaningfulLabelPresentation.js');
var BadgePresentation = require('../../Badge/shared/BadgePresentation.js');
var IconPresentation = require('../../Icon/shared/IconPresentation.js');
var IconLinkWrapper = require('../../IconLink/shared/IconLinkWrapper.js');
var ChipsItemContainer = require('../../_ChipsItemContainer/ChipsItemContainer.js');
var ChipsItemContainer_styles = require('../../_ChipsItemContainer/ChipsItemContainer.styles.js');

// @ts-strict-ignore
const ChipsItemActionPresentation = /*#__PURE__*/React__default.forwardRef((props, ref) => {
  const {
    onFocusLoss = () => {},
    // actionRef, // TODO: Fix ref problem with actionFlyout
    id: idProp,
    noMargin,
    label,
    loading,
    as,
    onClick,
    actionProps,
    actionAs,
    appearance,
    iconVariant,
    icon,
    badgeText,
    isSelected,
    clearIcon,
    onResetFilter,
    name,
    htmlAttrs: htmlAttrsProp,
    iconInteractive = false,
    className,
    ...otherProps
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
    loading,
    isActive: clicked,
    hasMouseHover,
    hasKeyboardFocus,
    type: "link"
  }), [setHasMouseHover, setHasKeyboardFocus, onMouseUp, onMouseDown, onMouseLeave, onKeyDown, onKeyUp, loading, clicked, hasMouseHover, hasKeyboardFocus]);
  // TODO: actionRef muss weitergebene werden, aber chipRef weiterhin funktionieren sonst funktioniert actionFlyout mit chipsItem nicht
  const chipRef = React__default.useRef(null);
  const containerRef = React__default.useRef(null);
  const deleteButtonRef = React__default.useRef(null);
  const htmlAttrs = {
    ...htmlAttrsProp,
    "data-lsg-component": "chip-item-action"
  };
  React__default.useImperativeHandle(ref, () => ({
    focus: () => {
      chipRef.current?.focus();
    },
    chipContainerRef: () => containerRef?.current
  }));
  // TODO: just a workaround until ref management will be refactored:
  // The problem is, that actionRef is necessary for button interface and actionFlyout
  // but the component needs ref and forwardRefs vor focus-handling
  // TODO: actionRef and chipRef have a ref to the same elemenent
  // actionRef.current = chipRef.current; // Triggers unwanted side effects
  const handleDeleteClick = () => {
    chipRef.current?.focus();
  };
  const focusLossRef = React__default.useRef(onFocusLoss);
  React__default.useEffect(() => {
    focusLossRef.current = onFocusLoss;
  }, [onFocusLoss]);
  React__default.useEffect(() => () => {
    focusLossRef?.current();
    // TODO: Element gets removed from DOM before we get here.
    // TODO: Check like this does not work for the last element
    // TODO: Save if focus is on element at another place (e.g. onFocus)
  }, []);
  const dissmissLabel = `${Localization.texts.lsg.component.Chips.removeFilter} ${label} ${badgeText || ""}`;
  const conditionalColor = isSelected === true ? "default" : "tertiary";
  return /*#__PURE__*/React__default.createElement(A11yMeaningfulLabelContext.A11yMeaningfulLabelContext.Provider, {
    value: actionValue
  }, /*#__PURE__*/React__default.createElement(ChipsItemContainer.ChipsItemContainer, {
    id: `${id}-base`,
    containerRef: containerRef,
    as: as,
    noMargin: noMargin,
    hasKeyboardFocus: hasKeyboardFocus,
    hasMouseHover: hasMouseHover,
    isSelected: isSelected,
    clicked: clicked,
    appearance: appearance,
    className: className
  }, appearance !== "right" && icon && (/*#__PURE__*/React__default.createElement(IconPresentation.IconPresentation, {
    icon: icon,
    size: "small",
    noMargin: true,
    variant: iconVariant,
    hover: hasMouseHover,
    color: conditionalColor,
    title: "" // will also set aria-hidden="true"
  })), /*#__PURE__*/React__default.createElement(A11yMeaningfulLabelPresentation.A11yMeaningfulLabelPresentation, {
    id: id,
    onClick: onClick,
    actionAs: actionAs,
    actionProps: actionProps,
    htmlAttrs: htmlAttrs,
    name: name,
    ...otherProps,
    actionRef: chipRef
  }, /*#__PURE__*/React__default.createElement("span", {
    className: appearance === "no-text" ? `${ChipsItemContainer_styles.hostClass}__no-text` : undefined
  }, label), badgeText && (/*#__PURE__*/React__default.createElement(BadgePresentation.BadgePresentation, {
    id: `${id}-badge`,
    className: DomUtils.cleanupClassObject({
      [`${ChipsItemContainer_styles.hostClass}-badge`]: true,
      [`${ChipsItemContainer_styles.hostClass}-badge__margin-left`]: icon || label
    }),
    color: "supplementary",
    inline: true
  }, badgeText))), appearance === "right" && icon && !iconInteractive && (/*#__PURE__*/React__default.createElement(IconPresentation.IconPresentation, {
    color: conditionalColor,
    icon: icon,
    size: "small",
    noMargin: true,
    variant: iconVariant,
    hover: hasMouseHover,
    title: "" // will also set aria-hidden="true"
  })), (clearIcon || isSelected && clearIcon === undefined) && (/*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
    actionRef: deleteButtonRef,
    label: dissmissLabel,
    id: `${id}-dismissible-icon`,
    className: `${ChipsItemContainer_styles.hostClass}-dismissable-icon`,
    icon: icons.interaction___close,
    color: "secondary",
    noMargin: true,
    appearance: "no-text",
    onClick: (event, n) => {
      handleDeleteClick();
      onResetFilter(event, n);
    }
  })), appearance === "right" && icon && iconInteractive && (/*#__PURE__*/React__default.createElement(IconPresentation.IconPresentation, {
    color: conditionalColor,
    icon: icon,
    size: "small",
    noMargin: true,
    variant: iconVariant,
    hover: hasMouseHover,
    title: "" // will also set aria-hidden="true"
  }))));
});

exports.ChipsItemActionPresentation = ChipsItemActionPresentation;
