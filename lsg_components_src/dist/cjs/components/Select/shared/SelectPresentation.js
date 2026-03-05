'use strict';

var icons = require('@lsg/icons');
var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var Host = require('../../../utils/Host.js');
var React = require('../../../utils/React.js');
var ChipsItemActionPresentation = require('../../ChipsItemAction/shared/ChipsItemActionPresentation.js');
var SpacingContext = require('../../FormContainer/shared/SpacingContext.js');
var TextField_styles = require('../../TextField/shared/TextField.styles.js');
var TextFieldWrapper = require('../../TextField/shared/TextFieldWrapper.js');
var SelectFlyoutInternalWrapper = require('../../_SelectFlyout/SelectFlyoutInternalWrapper.js');
var Select_styles = require('./Select.styles.js');

// @ts-strict-ignore
const SelectPresentation = React.fRef(props => {
  const {
    className,
    noMargin,
    name,
    displayValue,
    label,
    flyoutValue,
    options = [],
    onFlyoutChange,
    open,
    onOpenChange,
    disabled,
    clearIcon = true,
    emptyListLabel,
    errorText,
    helperText,
    invalid,
    optional,
    optionalText,
    placeholder,
    readonly,
    withTextInput,
    onBlur = () => {
      /* empty */
    },
    onFocus = () => {
      /* empty */
    },
    onDisplayValueChange,
    onKeyDown,
    ref,
    containerRef,
    htmlAttrs,
    flyoutRef,
    focussedRef,
    focussedValue,
    scrollFocussedElementIntoView,
    onFocussedValueChange,
    hiddenSelectIcon,
    chipVariant = false,
    chipSelected = false,
    onChipResetFilter,
    isHidden,
    errorTextAriaLive,
    spacing
  } = props;
  const {
    spacing: spacingFromContext
  } = React__default.useContext(SpacingContext.SpacingContext); // For FormContainer with spacing="dense"
  const effectiveSpacing = spacing ?? spacingFromContext; // For spacing prop usage in Select
  const id = index.useUniqueId(`${Select_styles.hostClass}`, props.id);
  const focussedValueId = `${id}-flyout-option_${focussedValue}`;
  // Render Flyout only if an emptyListLabel is set or options aren't empty and it's not disabled or readonly
  const renderFlyout = (emptyListLabel || options.length !== 0) && !(readonly || disabled);
  const inputRef = React__default.useRef(null);
  const chipActionRef = React__default.useRef(null);
  const toggleContainerElement = chipVariant ? chipActionRef?.current?.chipContainerRef() : containerRef?.current;
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [Select_styles.hostClass]: true,
      [`${prefix.lsgPre}no-margin`]: noMargin || chipVariant,
      [`${Select_styles.hostClass}-chip`]: chipVariant,
      [`${Select_styles.hostClass}-hidden`]: isHidden,
      [`${Select_styles.hostClass}__dense`]: effectiveSpacing === "dense"
    }),
    ref: ref,
    id: `${id}-host-base`
  }, chipVariant ? (/*#__PURE__*/React__default.createElement(ChipsItemActionPresentation.ChipsItemActionPresentation, {
    id: id,
    label: displayValue || label,
    onClick: () => onOpenChange(!open),
    onKeyDown: onKeyDown,
    ref: chipActionRef,
    onResetFilter: (ev, n) => onChipResetFilter(ev, n),
    // TODO: Should disabled be supported?
    // disabled={disabled || readonly}
    isSelected: chipSelected,
    clearIcon: clearIcon,
    icon: open ? icons.interaction_arrows_chevronUp : icons.interaction_arrows_chevronDown,
    appearance: "right",
    iconVariant: "outline",
    iconInteractive: true,
    htmlAttrs: {
      ...htmlAttrs,
      autoComplete: htmlAttrs?.autoComplete || "on",
      ...(!readonly && {
        role: "combobox",
        "aria-controls": `${id}-flyout`,
        "aria-activedescendant": open && focussedValue ? `${focussedValueId}` : "",
        "aria-expanded": open ? "true" : "false",
        "aria-haspopup": !disabled ? "listbox" : undefined
      })
    }
  })) : (/*#__PURE__*/React__default.createElement(TextFieldWrapper.TextFieldWrapper, {
    id: id,
    name: name,
    value: displayValue,
    clearIcon: clearIcon,
    label: label,
    noMargin: true,
    type: withTextInput || readonly ? "text" : "button",
    selectOpen: open ? "open" : "closed",
    hiddenSelectIcon: hiddenSelectIcon,
    ...(!readonly && !disabled && {
      onInputClick: () => onOpenChange(!open),
      onIconClick: () => {
        if (!open) {
          inputRef.current.focus();
        }
        onOpenChange(!open);
      },
      onKeyDown
    }),
    onBlur: onBlur,
    onFocus: onFocus,
    onChange: withTextInput ? onDisplayValueChange : undefined,
    onClearIconClick: event => {
      if (readonly) {
        return;
      }
      onFlyoutChange("", name, event);
      onOpenChange(false);
    },
    placeholder: placeholder,
    invalid: invalid || !!errorText,
    helperText: helperText,
    errorText: errorText,
    readonly: readonly,
    optional: optional,
    optionalText: optionalText,
    disabled: disabled,
    inputRef: inputRef,
    containerRef: containerRef,
    className: open && !disabled && !readonly && !invalid && `${TextField_styles.hostClass}__has-open-flyout`,
    htmlAttrs: {
      ...htmlAttrs,
      autoComplete: htmlAttrs?.autoComplete || "on",
      ...(!readonly && {
        role: "combobox",
        "aria-controls": `${id}-flyout`,
        "aria-activedescendant": open && focussedValue ? `${focussedValueId}` : "",
        "aria-expanded": open ? "true" : "false",
        "aria-haspopup": !disabled ? "listbox" : undefined
      })
    },
    errorTextAriaLive: errorTextAriaLive,
    spacing: effectiveSpacing
  })), renderFlyout && (/*#__PURE__*/React__default.createElement(SelectFlyoutInternalWrapper.SelectFlyoutInternalWrapper, {
    id: `${id}-flyout`,
    open: open,
    name: name,
    onCloseClick: ev => {
      // Checking if click is outside textfield or the chip to close the Flyout
      if (ev.key === undefined && (chipVariant && !chipActionRef?.current?.chipContainerRef().contains(ev.target) || !chipVariant && !containerRef?.current?.contains(ev.target))) {
        onOpenChange(false);
      }
    },
    emptyListLabel: emptyListLabel,
    options: options,
    value: flyoutValue,
    onChange: onFlyoutChange,
    toggleElement: inputRef?.current,
    toggleContainerElement: toggleContainerElement,
    isToggleElmWidth: !chipVariant,
    focussedRef: focussedRef,
    focussedValue: focussedValue,
    scrollFocussedElementIntoView: scrollFocussedElementIntoView,
    onFocussedValueChange: onFocussedValueChange,
    hostRef: flyoutRef,
    hasTabIndex: false,
    role: "listbox",
    ariaLabel: label,
    withTextInput: withTextInput,
    autocomplete: htmlAttrs?.["aria-autocomplete"] === "list"
  })));
});
SelectPresentation.displayName = "SelectPresentation";

exports.SelectPresentation = SelectPresentation;
