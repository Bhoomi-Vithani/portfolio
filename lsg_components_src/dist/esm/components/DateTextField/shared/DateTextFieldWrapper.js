import { isDate, isEqual, parse, isValid, getYear, format, endOfDay, startOfDay } from 'date-fns';
import React__default, { useState, useEffect } from 'react';
import { getLocaleMonthFormat, getLocaleDateFormat, autoDateSeparator } from '../../../utils/DateUtils.js';
import { texts } from '../../../utils/Localization.js';
import { TextFieldWrapper } from '../../TextField/shared/TextFieldWrapper.js';

// @ts-strict-ignore
const parseTextFieldDate = (value, dateFormat) => {
    if (isDate(value))
        return value;
    const dateValue = dateFormat === "month"
        ? parse(value, getLocaleMonthFormat(), new Date())
        : parse(value, getLocaleDateFormat(), new Date());
    return isValid(dateValue) && getYear(dateValue) >= 1000 ? dateValue : value;
};
const defaultMinDate = new Date(1000, 0, 1);
const defaultMaxDate = new Date(9999, 11, 31);
const DateTextFieldWrapper = ({ value, onChange, onFocus, onBlur, htmlAttrs = {}, minDate = defaultMinDate, maxDate = defaultMaxDate, dateFormat = "day", placeholder, ...otherProps }) => {
    const datePlaceholder = dateFormat === "month"
        ? texts.lsg.component.Datepicker.placeholderMonthYear
        : texts.lsg.component.Datepicker.placeholder;
    const normalize = (v, doReplacement = false) => {
        const formattedStringValue = autoDateSeparator(v, startOfDay(minDate), endOfDay(maxDate), dateFormat);
        const stringValue = doReplacement ? formattedStringValue : v;
        const cleanValue = parseTextFieldDate(stringValue, dateFormat);
        const normalizedDate = cleanValue instanceof Date ? cleanValue : undefined;
        const normalizedString = cleanValue instanceof Date ? stringValue : cleanValue;
        return { normalizedDate, normalizedString };
    };
    const getStringValue = val => {
        const formatString = dateFormat === "month" ? getLocaleMonthFormat() : getLocaleDateFormat();
        return isDate(val) ? format(val, formatString) : val;
    };
    const [inputValue, setInputValue] = useState(undefined);
    // Check for external changes while field has focus (and is being edited)
    useEffect(() => {
        // If changed date and not in focus/editing mode, do nothing
        if (inputValue === undefined)
            return;
        const parsedInputDate = parseTextFieldDate(inputValue, dateFormat);
        // If value and inputValue are non-equal dates, correct inputValue
        if (isDate(value) && typeof parsedInputDate !== "string" && !isEqual(value, parsedInputDate)) {
            setInputValue(getStringValue(value));
        }
        else if (!isDate(value)) {
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
        if (!ev.target)
            return;
        const selectionStart = ev.target?.selectionStart;
        const selectionEnd = ev.target?.selectionEnd;
        const cursorAtLastCharacter = selectionStart === v.length && selectionEnd === v.length;
        const doReplacement = !isDate(v) && cursorAtLastCharacter && v.length > value.length;
        const { normalizedString, normalizedDate } = normalize(v, doReplacement);
        // e.g. 30.10.2008
        if (!((dateFormat === "month" && normalizedString?.length > 7) || normalizedString?.length > 10)) {
            setInputValue(normalizedString);
            onChange?.(isDate(normalizedDate) ? normalizedDate : normalizedString, name, ev);
        }
    };
    return (React__default.createElement(TextFieldWrapper, { ...otherProps, onKeyDown: ev => {
            if (ev.ctrlKey || ev.altKey) {
                return;
            }
            // Non-Date keys all have more than one letter, do not ignore them
            if (ev.key.length === 1 && /([0-9]|[.\-/])/g.test(ev.key) === false) {
                ev.preventDefault();
            }
        }, 
        // inputValue is undefined, if not in editing mode (component has focus)
        value: inputValue ?? stringValue, placeholder: placeholder || datePlaceholder, onFocus: handleFocus, onBlur: handleBlur, onChange: handleChange, htmlAttrs: { ...htmlAttrs } }));
};

export { DateTextFieldWrapper, parseTextFieldDate };
