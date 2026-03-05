'use strict';

var dateFns = require('date-fns');
var React__default = require('react');
var DateUtils = require('../../../utils/DateUtils.js');
var Localization = require('../../../utils/Localization.js');
var TextFieldWrapper = require('../../TextField/shared/TextFieldWrapper.js');

// @ts-strict-ignore
const parseTextFieldDate = (value, dateFormat) => {
  if (dateFns.isDate(value)) return value;
  const dateValue = dateFormat === "month" ? dateFns.parse(value, DateUtils.getLocaleMonthFormat(), new Date()) : dateFns.parse(value, DateUtils.getLocaleDateFormat(), new Date());
  return dateFns.isValid(dateValue) && dateFns.getYear(dateValue) >= 1000 ? dateValue : value;
};
const defaultMinDate = new Date(1000, 0, 1);
const defaultMaxDate = new Date(9999, 11, 31);
const DateTextFieldWrapper = ({
  value,
  onChange,
  onFocus,
  onBlur,
  htmlAttrs = {},
  minDate = defaultMinDate,
  maxDate = defaultMaxDate,
  dateFormat = "day",
  placeholder,
  ...otherProps
}) => {
  const datePlaceholder = dateFormat === "month" ? Localization.texts.lsg.component.Datepicker.placeholderMonthYear : Localization.texts.lsg.component.Datepicker.placeholder;
  const normalize = (v, doReplacement = false) => {
    const formattedStringValue = DateUtils.autoDateSeparator(v, dateFns.startOfDay(minDate), dateFns.endOfDay(maxDate), dateFormat);
    const stringValue = doReplacement ? formattedStringValue : v;
    const cleanValue = parseTextFieldDate(stringValue, dateFormat);
    const normalizedDate = cleanValue instanceof Date ? cleanValue : undefined;
    const normalizedString = cleanValue instanceof Date ? stringValue : cleanValue;
    return {
      normalizedDate,
      normalizedString
    };
  };
  const getStringValue = val => {
    const formatString = dateFormat === "month" ? DateUtils.getLocaleMonthFormat() : DateUtils.getLocaleDateFormat();
    return dateFns.isDate(val) ? dateFns.format(val, formatString) : val;
  };
  const [inputValue, setInputValue] = React__default.useState(undefined);
  // Check for external changes while field has focus (and is being edited)
  React__default.useEffect(() => {
    // If changed date and not in focus/editing mode, do nothing
    if (inputValue === undefined) return;
    const parsedInputDate = parseTextFieldDate(inputValue, dateFormat);
    // If value and inputValue are non-equal dates, correct inputValue
    if (dateFns.isDate(value) && typeof parsedInputDate !== "string" && !dateFns.isEqual(value, parsedInputDate)) {
      setInputValue(getStringValue(value));
    } else if (!dateFns.isDate(value)) {
      // When value is a string, it should be identical to inputValue. If not, update inputValue
      setInputValue(getStringValue(value));
    }
  }, [value]);
  const stringValue = getStringValue(value);
  const handleFocus = (ev, name) => {
    setInputValue(stringValue);
    onFocus?.(ev, name);
  };
  const handleBlur = (ev, name) => {
    setInputValue(undefined);
    onBlur?.(ev, name);
  };
  const handleChange = (v, name, ev) => {
    if (!ev.target) return;
    const selectionStart = ev.target?.selectionStart;
    const selectionEnd = ev.target?.selectionEnd;
    const cursorAtLastCharacter = selectionStart === v.length && selectionEnd === v.length;
    const doReplacement = !dateFns.isDate(v) && cursorAtLastCharacter && v.length > value.length;
    const {
      normalizedString,
      normalizedDate
    } = normalize(v, doReplacement);
    // e.g. 30.10.2008
    if (!(dateFormat === "month" && normalizedString?.length > 7 || normalizedString?.length > 10)) {
      setInputValue(normalizedString);
      onChange?.(dateFns.isDate(normalizedDate) ? normalizedDate : normalizedString, name, ev);
    }
  };
  return /*#__PURE__*/React__default.createElement(TextFieldWrapper.TextFieldWrapper, {
    ...otherProps,
    onKeyDown: ev => {
      if (ev.ctrlKey || ev.altKey) {
        return;
      }
      // Non-Date keys all have more than one letter, do not ignore them
      if (ev.key.length === 1 && /([0-9]|[.\-/])/g.test(ev.key) === false) {
        ev.preventDefault();
      }
    },
    // inputValue is undefined, if not in editing mode (component has focus)
    value: inputValue ?? stringValue,
    placeholder: placeholder || datePlaceholder,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onChange: handleChange,
    htmlAttrs: {
      ...htmlAttrs
    }
  });
};

exports.DateTextFieldWrapper = DateTextFieldWrapper;
exports.parseTextFieldDate = parseTextFieldDate;
