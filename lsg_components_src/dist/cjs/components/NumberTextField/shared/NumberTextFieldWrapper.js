'use strict';

var React__default = require('react');
var Localization = require('../../../utils/Localization.js');
var SpacingContext = require('../../FormContainer/shared/SpacingContext.js');
var TextFieldWrapper = require('../../TextField/shared/TextFieldWrapper.js');

// @ts-strict-ignore
const isNumber = value => value === 0 || !!value && !Number.isNaN(Number(value));
const formatNumberToInputString = (value, decimalDigits) => {
  if (!isNumber(value)) {
    return undefined;
  }
  const result = isNumber(decimalDigits) ? Number(value).toFixed(decimalDigits) : `${value}`;
  return result.replace(".", Localization.getDecimalSeparatorByLanguage(Localization.getActiveLanguage()));
};
const normalize = (value, maxDecimalDigits) => {
  const thousandsSeparator = Localization.getThousandsSeparatorByLanguage(Localization.getActiveLanguage());
  let normalizedStringValue = value.replace(/[^\d,.+-]/g, "").replaceAll(thousandsSeparator, "").replace(/,/g, "."); // remove none number format elements
  if (isNumber(maxDecimalDigits)) {
    const array = normalizedStringValue.split(".");
    if (maxDecimalDigits === 0) {
      normalizedStringValue = `${array[0]}`;
    } else if (array.length > 1) {
      normalizedStringValue = `${array[0]}.${array[1].substring(0, maxDecimalDigits)}`;
    }
  }
  const normalizedString = normalizedStringValue.replace(/\./g, Localization.getDecimalSeparatorByLanguage(Localization.getActiveLanguage()));
  return {
    normalizedNumber: normalizedStringValue === "" ? NaN : Number(normalizedStringValue),
    // 123123.123
    normalizedString
  };
};
const defaultValueNumberFormatter = (v, numberDecimalPlaces) => new Intl.NumberFormat(Localization.getActiveLanguage(), {
  minimumFractionDigits: numberDecimalPlaces,
  maximumFractionDigits: numberDecimalPlaces ?? 20
}).format(v);
const NumberTextFieldWrapper = ({
  valueNumberFormatter = defaultValueNumberFormatter,
  value,
  onChange,
  onFocus,
  onBlur,
  htmlAttrs = {},
  decimalDigits,
  spacing,
  ...otherProps
}) => {
  const {
    spacing: spacingFromContext
  } = React__default.useContext(SpacingContext.SpacingContext); // For FormContainer with spacing="dense"
  const effectiveSpacing = spacing ?? spacingFromContext; // For spacing prop usage in NumberTextField
  const [inputValue, setInputValue] = React__default.useState(undefined);
  // minimumFractionDigits above 21 will lead to an error -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#minimumintegerdigits
  const decimalDigitsRegulated = decimalDigits > 21 ? 21 : decimalDigits;
  const stringValue = isNumber(value) ? valueNumberFormatter(value, decimalDigitsRegulated) : value;
  const handleFocus = (ev, name) => {
    // suppress focus behaviour (formatting) when field is readonly
    if (!otherProps.readonly) {
      setInputValue(formatNumberToInputString(value, decimalDigitsRegulated));
    }
    onFocus?.(ev, name);
  };
  const handleBlur = (ev, name) => {
    setInputValue(undefined);
    onBlur?.(ev, name);
  };
  const handleChange = (v, name, ev) => {
    const {
      normalizedNumber
    } = normalize(v.toString(), decimalDigitsRegulated);
    // e.g. 345, or 345,6 or 345,60
    setInputValue(v);
    onChange?.(isNumber(normalizedNumber) ? normalizedNumber : v.toString(), name, ev);
  };
  return /*#__PURE__*/React__default.createElement(TextFieldWrapper.TextFieldWrapper, {
    ...otherProps,
    onKeyDown: ev => {
      if ((ev.ctrlKey || ev.metaKey) && ev.code === "KeyV") {
        return;
      }
      if (ev.ctrlKey || ev.altKey || ev.metaKey) {
        return;
      }
      // Non-Character keys all have more than one letter, do not ignore them
      if (ev.key.length === 1 && /^[0-9.,+-]$/.test(ev.key) === false) {
        ev.preventDefault();
      }
      if ([".", "+", "-", ","].includes(ev.key)) {
        const input = ev.target;
        const start = input.selectionStart;
        const end = input.selectionEnd;
        const newValue = input.value.slice(0, start) + ev.key + input.value.slice(end);
        // Allow "-" as input to allow the user to type minus as first character
        if (!isNumber(newValue.replace(",", ".")) && newValue !== "-") {
          ev.preventDefault();
        }
      }
    },
    // inputValue is undefined, if not in editing mode (component has focus)
    value: inputValue ?? stringValue,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onChange: handleChange,
    htmlAttrs: {
      ...htmlAttrs,
      inputMode: htmlAttrs.inputMode ?? "decimal"
    },
    spacing: effectiveSpacing
  });
};

exports.NumberTextFieldWrapper = NumberTextFieldWrapper;
