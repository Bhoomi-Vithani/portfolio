import { object___calender } from '@lsg/icons';
import { startOfDay, isDate, format } from 'date-fns';
import React__default, { useContext, useState } from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { getLocaleMonthFormat, getLocaleDateFormat } from '../../../utils/DateUtils.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { useUniqueId } from '../../../utils/Hooks/index.js';
import { Host } from '../../../utils/Host.js';
import { texts } from '../../../utils/Localization.js';
import { ChipsItemActionPresentation } from '../../ChipsItemAction/shared/ChipsItemActionPresentation.js';
import { DatePickerFlyoutPresentation } from '../../DatePickerFlyout/shared/DatePickerFlyoutPresentation.js';
import { DateTextFieldWrapper } from '../../DateTextField/shared/DateTextFieldWrapper.js';
import { SpacingContext } from '../../FormContainer/shared/SpacingContext.js';
import { IconLinkWrapper } from '../../IconLink/shared/IconLinkWrapper.js';
import { hostClass } from './DatePicker.styles.js';

// @ts-strict-ignore
const DatePickerPresentation = ({ id: idProp, className, noMargin, name, value, label, open = false, disabled, clearIcon = true, errorText, helperText, invalid, optional, optionalText, placeholder, readOnly, onFocus = () => {
    /* empty */
}, onChange = () => {
    /* empty */
}, inputRef, containerRef, containerElement, htmlAttrs, flyoutRef, hostRef, isStencilHost, minDate, maxDate, dateFormat, datepickerFormat = "day", disabledDates, weekendsDisabled, selectableDates, chipVariant = false, chipSelected, chipResetFilter, onKeyDown, onOpenChange, handleOnBlur, noYearPicker, errorTextAriaLive, spacing, today, }) => {
    const { spacing: spacingFromContext } = useContext(SpacingContext); // For FormContainer with spacing="dense"
    const effectiveSpacing = spacing ?? spacingFromContext; // For spacing prop usage in DatePicker
    // is currently interacted with by user (e.g. Tab key or mouse click)
    const [isFocused, setIsFocused] = useState(false);
    const maxDateClean = maxDate && startOfDay(maxDate);
    const minDateClean = minDate && startOfDay(minDate);
    const id = useUniqueId(`${hostClass}-`, idProp);
    const textFieldIconRef = React__default.useRef(undefined);
    const valueClean = 
    // eslint-disable-next-line no-nested-ternary
    isDate(value) && typeof value === "object" ? startOfDay(value) : value === undefined ? "" : value;
    const valueOutOfRange = isDate(valueClean) && (valueClean > maxDateClean || valueClean < minDateClean);
    let dateFormatChip = value;
    const appliedDateFormat = dateFormat || datepickerFormat || "day";
    if (isDate(value)) {
        dateFormatChip =
            appliedDateFormat === "month"
                ? format(value, getLocaleMonthFormat())
                : format(value, getLocaleDateFormat());
    }
    let openTextFieldFlyoutButtonLabel;
    if (isDate(value)) {
        const formatString = appliedDateFormat === "month" ? getLocaleMonthFormat() : getLocaleDateFormat();
        const stringValue = format(value, formatString);
        openTextFieldFlyoutButtonLabel = `${texts.lsg.component.Datepicker.openCalendar},  ${(appliedDateFormat === "month" && texts.lsg.component.Datepicker.openCalendarSelectedMonth) ||
            texts.lsg.component.Datepicker.openCalendarSelectedDate}: ${stringValue}`;
    }
    else {
        openTextFieldFlyoutButtonLabel = `${texts.lsg.component.Datepicker.openCalendar}, ${(appliedDateFormat === "month" && texts.lsg.component.Datepicker.openCalendarNoMonth) ||
            texts.lsg.component.Datepicker.openCalendarNoDate}`;
    }
    return (React__default.createElement(Host, { className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
            [`${lsgPre}no-margin`]: noMargin || chipVariant,
            [`${hostClass}-chip`]: chipVariant,
        }), isStencilHost: isStencilHost, onBlur: handleOnBlur, ref: hostRef, id: `${id}-base` },
        chipVariant ? (React__default.createElement(ChipsItemActionPresentation, { id: id, label: dateFormatChip || label, onClick: () => onOpenChange(true), ref: inputRef, clearIcon: clearIcon, isSelected: chipSelected, icon: object___calender, appearance: "left", iconVariant: "outline", htmlAttrs: htmlAttrs, onKeyDown: onKeyDown, onResetFilter: chipResetFilter })) : (React__default.createElement(DateTextFieldWrapper, { id: id, name: name, value: valueClean, clearIcon: clearIcon, label: label, noMargin: true, iconLink: React__default.createElement(IconLinkWrapper, { color: open || (isDate(valueClean) && !valueOutOfRange) || isFocused ? "primary" : "secondary", label: openTextFieldFlyoutButtonLabel, icon: !readOnly ? object___calender : undefined, onClick: () => onOpenChange(!open), hasTabIndex: true, name: name, actionRef: textFieldIconRef }), onFocus: (e, n) => {
                setIsFocused(true);
                onFocus(e, n);
            }, onChange: onChange, onClearIconClick: event => {
                if (readOnly) {
                    return;
                }
                onChange("", name, event);
                onOpenChange(false);
            }, onBlur: e => {
                // Reset isFocused if no value is present
                if (!valueClean) {
                    setIsFocused(false);
                }
                handleOnBlur?.(e);
            }, "aria-haspopup": "listbox" // see https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html
            , "aria-expanded": open.toString(), placeholder: placeholder, dateFormat: appliedDateFormat, invalid: invalid || !!errorText, readonly: readOnly, optional: optional, optionalText: optionalText, disabled: disabled, htmlAttrs: htmlAttrs, inputRef: inputRef, containerRef: containerRef, onKeyDown: onKeyDown, errorText: errorText, helperText: helperText, errorTextAriaLive: errorTextAriaLive, spacing: effectiveSpacing })),
        !readOnly && !disabled && (React__default.createElement(DatePickerFlyoutPresentation, { id: `${id}-flyout`, open: open, name: name, onClose: () => {
                onOpenChange(false);
            }, value: isDate(valueClean) && !valueOutOfRange ? valueClean : undefined, onChange: onChange, toggleContainerElement: chipVariant && inputRef.current && "chipContainerRef" in inputRef.current
                ? inputRef?.current?.chipContainerRef()
                : containerElement, hostRef: flyoutRef, minDate: minDateClean, maxDate: maxDateClean, datepickerFormat: datepickerFormat, disabledDates: disabledDates, weekendsDisabled: weekendsDisabled, selectableDates: selectableDates, toggleElement: textFieldIconRef.current, chipVariant: chipVariant, noYearPicker: noYearPicker, today: today }))));
};
DatePickerPresentation.displayName = "DatePickerPresentation";

export { DatePickerPresentation };
