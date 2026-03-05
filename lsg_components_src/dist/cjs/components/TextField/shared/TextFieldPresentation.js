'use strict';

var icons = require('@lsg/icons');
var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var Host = require('../../../utils/Host.js');
var Localization = require('../../../utils/Localization.js');
var ReactUtils = require('../../../utils/ReactUtils.js');
var SpacingContext = require('../../FormContainer/shared/SpacingContext.js');
var IconLinkWrapper = require('../../IconLink/shared/IconLinkWrapper.js');
var IconLinkGroupWrapper = require('../../IconLinkGroup/shared/IconLinkGroupWrapper.js');
var HelperTextPresentation = require('../../_HelperText/HelperTextPresentation.js');
var TextField_styles = require('./TextField.styles.js');

// @ts-strict-ignore
const TextFieldPresentation = props => {
  const {
    id: idProp,
    hostId: hostIdProp,
    value,
    name,
    hasWidget,
    iconExpanded,
    disabled,
    readonly,
    errorText,
    errorTextAriaLive,
    hasFocus,
    hasKeyboardFocus,
    hasHover,
    label,
    optional,
    optionalText = Localization.texts.lsg.component._general.optional,
    as = "input",
    placeholder,
    type,
    isPasswordVisible,
    onPasswordToggle,
    onBlur = () => {
      /* empty */
    },
    onFocus = () => {
      /* empty */
    },
    onKeyDown = () => {
      /* empty */
    },
    clearIcon = true,
    helperText,
    iconLink,
    icon,
    iconFocusable,
    iconName,
    iconText,
    iconHtmlAttrs,
    selectOpen,
    hiddenSelectIcon,
    onInputClick = () => {
      /* empty */
    },
    onClearIconClick,
    onIconClick = () => {
      /* empty */
    },
    onChange,
    onClear,
    htmlAttrs = {},
    className,
    noMargin,
    spacing,
    onMouseHoverChange,
    inputRef,
    iconRef,
    containerRef,
    innerContainerRef: innerContainerRefProp,
    suffix,
    suffixType = "inline",
    suffixRef,
    isSearchField = false,
    labelRef
  } = props;
  const {
    spacing: spacingFromContext
  } = React__default.useContext(SpacingContext.SpacingContext); // For FormContainer with spacing="dense"
  const effectiveSpacing = spacing ?? spacingFromContext; // For spacing prop usage in TextField
  // is currently interacted with by user (e.g. Tab key or mouse click)
  const [isFocused, setIsFocused] = React__default.useState(false);
  // same element for containerRef (positioning the flyout) and innerContainerRef (positioning the suffix)
  // TODO simplify when fixing things in the TextField
  const innerContainerRef = index.combineRefs(containerRef, innerContainerRefProp);
  const id = index.useUniqueId(`${TextField_styles.hostClass}-`, idProp);
  const hostId = hostIdProp || `${id}-base`;
  const errorTextId = `${id}-error-text`;
  const helperTextId = `${id}-helper-text`;
  const suffixId = `${id}-suffix`;
  const labelId = `${id}-label`;
  const clearIconId = `${id}-clear-icon`;
  const selectIconId = `${id}-select-icon`;
  const placeholderId = `${id}-placeholder`;
  const iconId = `${id}-icon`;
  const passwordIconId = `${id}-password-icon`;
  const hasInlineLabel = !value && !(hasFocus && !hasWidget) && !readonly;
  const placeholderVisible = !value && !hasInlineLabel;
  const invalid = props.invalid || !!errorText;
  const typeProp = !type || type === "password" && isPasswordVisible ? "text" : type;
  const Component = as;
  const isButtonType = type === "button";
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    id: hostId,
    className: DomUtils.cleanupClassObject({
      [`${TextField_styles.hostClass}`]: true,
      [className]: className,
      [`${prefix.lsgPre}no-margin`]: noMargin,
      [`${TextField_styles.hostClass}__dense`]: effectiveSpacing === "dense"
    })
  }, /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${TextField_styles.hostClass}__label-inline`]: hasInlineLabel,
      [`${TextField_styles.hostClass}__read-only`]: readonly,
      [`${TextField_styles.hostClass}__has-widget`]: hasWidget,
      [`${TextField_styles.hostClass}__has-focus`]: hasFocus && !disabled && !readonly,
      [`${TextField_styles.hostClass}__has-keyboard-focus`]: hasKeyboardFocus,
      [`${TextField_styles.hostClass}__has-hover`]: hasHover && !disabled && !readonly,
      [`${TextField_styles.hostClass}__invalid`]: invalid,
      [`${TextField_styles.hostClass}__disabled`]: disabled,
      [`${TextField_styles.hostClass}__input-filled`]: !!value
    })
  }, /*#__PURE__*/React__default.createElement("label", {
    className: DomUtils.cleanupClassObject({
      [`${TextField_styles.hostClass}-label`]: true,
      [`${TextField_styles.hostClass}-label__search`]: isSearchField
    }),
    htmlFor: id,
    id: labelId,
    ref: labelRef
  }, label, optional && ` (${optionalText})`), /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${TextField_styles.hostClass}-suffix-container`]: suffixType === "separated" && !readonly && !disabled
    })
  }, /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${TextField_styles.hostClass}-container`]: true,
      [`${TextField_styles.hostClass}-container__search`]: isSearchField
    }),
    onMouseEnter: () => {
      if (document.documentElement.getAttribute("data-whatintent") === "mouse") {
        onMouseHoverChange(true);
      }
    },
    onMouseLeave: () => onMouseHoverChange(false),
    ref: innerContainerRef
  }, placeholder && !suffix && !readonly && (/*#__PURE__*/React__default.createElement("span", {
    id: placeholderId,
    className: DomUtils.cleanupClassObject({
      [`${TextField_styles.hostClass}-placeholder`]: true,
      [`${TextField_styles.hostClass}-hidden`]: !placeholderVisible
    }),
    key: `${id}placeholder`
  }, !hasInlineLabel && placeholderVisible ? placeholder : undefined)), /*#__PURE__*/React__default.createElement(Component, {
    ...htmlAttrs,
    readOnly: readonly || hasWidget,
    className: DomUtils.cleanupClassObject({
      [`${TextField_styles.hostClass}-input`]: true,
      [`${TextField_styles.hostClass}-input__filled`]: !!value,
      [`${TextField_styles.hostClass}-input__textarea`]: as === "textarea"
    }),
    tabIndex: disabled ? -1 : htmlAttrs?.tabIndex || 0,
    onChange: ev => onChange(ev.target.value, name, ev),
    onFocus: e => {
      setIsFocused(true);
      onFocus(e, name);
    },
    onBlur: e => {
      // Reset isFocused if no value is present
      if (!value) {
        setIsFocused(false);
      }
      onBlur(e, name);
    },
    disabled: disabled,
    name: name,
    "aria-required": htmlAttrs["aria-required"] ?? (!optional && !disabled && !readonly),
    "aria-describedby": [suffix && suffixId, helperText && helperTextId, htmlAttrs["aria-describedby"]].filter(t => !!t).join(" "),
    "aria-errormessage": errorText ? errorTextId : undefined,
    "aria-invalid": !!errorText || !!invalid,
    "aria-placeholder":
    // TODO simplify this
    htmlAttrs["aria-placeholder"] ?? (placeholder || suffix && suffixType === "inline" ? placeholder || suffix : undefined),
    id: id,
    type: as === "input" ? typeProp : undefined,
    "aria-labelledby": typeProp === "button" ? labelId : undefined,
    // button, we need to reference the label explicitely
    onKeyDown: ev => {
      onKeyDown(ev);
      if (htmlAttrs?.onKeyDown) htmlAttrs?.onKeyDown(ev); // Fallback mechanism for public interface where onKeyDown has removed primarily
    },
    onClick: e => onInputClick(e, name),
    key: `${id}input`,
    value: value ?? "",
    ref: inputRef,
    rows: as === "textarea" ? 1 : undefined
  }), suffix && suffixType === "inline" && (!readonly || !placeholder) && (/*#__PURE__*/React__default.createElement("div", {
    id: suffixId,
    className: DomUtils.cleanupClassObject({
      [`${TextField_styles.hostClass}-suffix`]: true,
      [`${TextField_styles.hostClass}-suffix__focusable`]: !readonly
    }),
    ref: suffixRef
  }, (hasFocus || value || readonly) && suffix)), !disabled && (/*#__PURE__*/React__default.createElement(IconLinkGroupWrapper.IconLinkGroupWrapper, {
    className: `${TextField_styles.hostClass}-icons`,
    direction: "textfield",
    noMargin: true,
    as: "div"
  }, !readonly && clearIcon && value && (!isButtonType || selectOpen) && (/*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
    id: clearIconId,
    label: Localization.texts.lsg.component.InputTextfield.clear,
    key: "clear-icon",
    className: DomUtils.cleanupClassObject({
      // only visibly when hovering - except if this is used as button (in Select)
      [`${TextField_styles.hostClass}-clear`]: !isButtonType
    }),
    hasTabIndex: isButtonType,
    icon: icons.interaction___close,
    color: "secondary",
    htmlAttrs: {
      "aria-describedby": isButtonType ? labelId : undefined
    },
    onClick: ev => {
      // Reset isFocused when clearing the field
      setIsFocused(false);
      if (onClearIconClick) {
        onClearIconClick(ev, name);
      } else {
        onClear(ev);
      }
      if (type === "button") {
        // if using the clear button with keyboard, the IconLink disappears.
        // Therefore we move the focus back to the Input.
        inputRef.current.focus();
      }
    }
  })), selectOpen && !hiddenSelectIcon && !readonly && (/*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
    id: selectIconId,
    label: selectOpen === "open" ? Localization.texts.lsg.component.InputSelect.open : Localization.texts.lsg.component.InputSelect.close,
    key: "select-icon",
    htmlAttrs: {
      "aria-expanded": selectOpen === "open",
      "aria-controls": htmlAttrs["aria-controls"]
    },
    hasTabIndex: false,
    onClick: onIconClick,
    icon: icons.interaction_arrows_chevronDown,
    color: selectOpen === "open" || value || isFocused ? "primary" : "secondary",
    transform: selectOpen === "open" ? "rotate" : undefined
  })), (icon || iconName) && (/*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
    id: iconId,
    label: iconText,
    key: "second-icon",
    icon: icon,
    iconName: iconName,
    expanded: iconExpanded,
    onClick: onIconClick,
    hasTabIndex: iconFocusable,
    name: name,
    htmlAttrs: iconHtmlAttrs,
    actionRef: iconRef
  })), ReactUtils.fragmentMap(iconLink, link => iconLink && !(icon || iconName) && /*#__PURE__*/React__default.cloneElement(link, {
    appearance: "no-text"
  })), type === "password" && !disabled && !readonly && (/*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
    id: passwordIconId,
    label: Localization.texts.lsg.component.InputTextfield.reveal,
    key: "password-icon",
    icon: isPasswordVisible ? icons.interaction___eyeHide : icons.interaction___eyeView,
    // Changed because Keyboard Users need a different behaviour
    // for the password reveal
    // https://medium.com/kiipco/password-creation-3-ways-to-make-it-accessible-bc8f2b53b7ee#1751
    onClick: onPasswordToggle,
    htmlAttrs: {
      role: "switch",
      "aria-checked": isPasswordVisible
    }
  }))))), suffix && suffixType === "separated" && !readonly && !disabled && (/*#__PURE__*/React__default.createElement("div", {
    id: suffixId,
    className: DomUtils.cleanupClassObject({
      [`${TextField_styles.hostClass}-suffix-separated`]: true
    })
  }, suffix))), /*#__PURE__*/React__default.createElement(HelperTextPresentation.HelperTextPresentation, {
    errorTextAriaLive: errorTextAriaLive,
    helperText: helperText,
    errorText: errorText,
    helperTextId: helperTextId,
    errorTextId: errorTextId,
    disabled: disabled,
    spacing: effectiveSpacing === "dense" ? "dense" : undefined
  })));
};
TextFieldPresentation.displayName = "TextFieldPresentation";

exports.TextFieldPresentation = TextFieldPresentation;
