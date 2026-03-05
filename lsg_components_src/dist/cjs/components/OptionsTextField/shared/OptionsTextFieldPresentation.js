'use strict';

var dateFns = require('date-fns');
var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var DateTextFieldWrapper = require('../../DateTextField/shared/DateTextFieldWrapper.js');
var SpacingContext = require('../../FormContainer/shared/SpacingContext.js');
var NumberTextFieldWrapper = require('../../NumberTextField/shared/NumberTextFieldWrapper.js');
var SelectWrapper = require('../../Select/shared/SelectWrapper.js');
var TextFieldWrapper = require('../../TextField/shared/TextFieldWrapper.js');
var HelperTextPresentation = require('../../_HelperText/HelperTextPresentation.js');
var OptionsTextField_styles = require('./OptionsTextField.styles.js');

// @ts-strict-ignore
const OptionsTextFieldPresentation = props => {
  const [hasFocus, setHasFocus] = React__default.useState(false);
  const groupLabelId = index.useUniqueId(`${OptionsTextField_styles.hostClass}-groupLabel`);
  const {
    id: idProp,
    className,
    noMargin,
    optionsProps,
    type,
    value,
    onChange,
    onFocus,
    onBlur,
    groupLabel,
    label,
    helperText,
    errorText,
    disabled,
    spacing,
    ...textFieldProps
  } = props;
  const {
    spacing: spacingFromContext
  } = React__default.useContext(SpacingContext.SpacingContext); // For FormContainer with spacing="dense"
  const effectiveSpacing = spacing ?? spacingFromContext; // For spacing prop usage in OptionsTextField
  const hasValidValue = typeof value === "number" && !Number.isNaN(value) || typeof value === "string" && value?.trim().length > 0 || typeof value === "object" && dateFns.isDate(value);
  // INFO: Variables `hasValidValue` and `hasFocus` are important for switch mechanism between TextField-Label and OptionsTextField in order
  // to show Group-Label from OptionsTextField or together with TextField-label during user interaction.
  const hideGroupLabel = hasValidValue || hasFocus;
  const id = index.useUniqueId(`${OptionsTextField_styles.hostClass}-`, idProp);
  const errorTextId = `${id}-error-text`;
  const helperTextId = `${id}-helper-text`;
  const optionsId = optionsProps?.id || `${id}-options`;
  const labelRef = React__default.useRef(null);
  const groupLabelRef = React__default.useRef(null);
  const [labelPadding, setLabelPadding] = React__default.useState(0);
  const onResize = () => {
    const labelHeight = labelRef.current?.offsetHeight || 0;
    const groupLabelHeight = groupLabelRef.current?.offsetHeight || 0;
    // Height of floating label is increased with around (100/2.75)% when no focus and no value is there
    // If the increase of height is more than a certain threshold, it would overlap with the group label. Then,
    // an additional padding is added
    setLabelPadding(Math.max(0, labelHeight / 2.75 + groupLabelHeight - 30));
  };
  index.useResize(onResize, [label, groupLabel]);
  React__default.useEffect(onResize, []);
  return /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [OptionsTextField_styles.hostClass]: true,
      [`${prefix.lsgPre}no-margin`]: noMargin,
      [`${OptionsTextField_styles.hostClass}__dense`]: effectiveSpacing === "dense"
    }),
    role: optionsProps && "group",
    "aria-labelledby": optionsProps ? groupLabelId : undefined,
    id: `${id}-base`
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${OptionsTextField_styles.hostClass}-container`
  }, /*#__PURE__*/React__default.createElement("div", {
    id: groupLabelId,
    className: DomUtils.cleanupClassObject({
      [`${OptionsTextField_styles.hostClass}-label`]: true,
      [`${OptionsTextField_styles.hostClass}-label__hidden`]: hideGroupLabel
    }),
    ref: groupLabelRef
  }, groupLabel), /*#__PURE__*/React__default.createElement("div", {
    className: `${OptionsTextField_styles.hostClass}-textfield`,
    style: {
      paddingTop: hideGroupLabel ? 0 : labelPadding
    }
  }, type === "number" && (/*#__PURE__*/React__default.createElement(NumberTextFieldWrapper.NumberTextFieldWrapper, {
    ...textFieldProps,
    value: value,
    noMargin: true,
    onChange: onChange,
    label: !hasValidValue && !hasFocus ? label : `${groupLabel} - ${label}`,
    onFocus: (e, n) => {
      onFocus?.(e, n);
      setHasFocus(true);
      // According new implementation scheme on TextField, component receive focus when user clicked in or clicked on Clear-Icon
    },
    onBlur: (e, n) => {
      onBlur?.(e, n);
      setHasFocus(false);
    },
    disabled: disabled,
    labelRef: labelRef,
    id: id,
    spacing: effectiveSpacing
  })), type === "date" && (/*#__PURE__*/React__default.createElement(DateTextFieldWrapper.DateTextFieldWrapper, {
    ...textFieldProps,
    type: "text",
    value: value,
    noMargin: true,
    onChange: (v, name, ev) => onChange(v, name, ev),
    label: !hasValidValue && !hasFocus ? label : groupLabel?.concat(" - ").concat(label),
    onFocus: (e, n) => {
      onFocus?.(e, n);
      setHasFocus(true);
    },
    onBlur: (e, n) => {
      onBlur?.(e, n);
      setHasFocus(false);
    },
    disabled: disabled,
    labelRef: labelRef,
    id: id,
    spacing: effectiveSpacing
  })), ["text", "password"].includes(type) && (/*#__PURE__*/React__default.createElement(TextFieldWrapper.TextFieldWrapper, {
    ...textFieldProps,
    type: type,
    value: value,
    noMargin: true,
    onChange: onChange,
    label: hideGroupLabel ? groupLabel?.concat(" - ").concat(label) : label,
    onFocus: (e, n) => {
      onFocus?.(e, n);
      setHasFocus(true);
    },
    onBlur: (e, n) => {
      onBlur?.(e, n);
      setHasFocus(false);
    },
    disabled: disabled,
    labelRef: labelRef,
    id: id,
    spacing: effectiveSpacing
  }))), optionsProps && (/*#__PURE__*/React__default.createElement("div", {
    className: `${OptionsTextField_styles.hostClass}-options`
  }, /*#__PURE__*/React__default.createElement(SelectWrapper.SelectWrapper, {
    ...optionsProps,
    id: optionsId,
    disabled: optionsProps.disabled,
    readonly: optionsProps.readonly,
    clearIcon: false,
    hiddenSelectIcon: false,
    noMargin: true,
    spacing: effectiveSpacing
  })))), /*#__PURE__*/React__default.createElement(HelperTextPresentation.HelperTextPresentation, {
    helperText: helperText,
    errorText: errorText,
    helperTextId: helperTextId,
    errorTextId: errorTextId,
    disabled: disabled,
    spacing: effectiveSpacing === "dense" ? "dense" : undefined
  }));
};
OptionsTextFieldPresentation.displayName = "OptionsTextFieldPresentation";

exports.OptionsTextFieldPresentation = OptionsTextFieldPresentation;
