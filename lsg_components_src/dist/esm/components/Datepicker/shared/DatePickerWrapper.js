import { isDate, startOfMonth, startOfDay } from 'date-fns';
import React__default, { useState, useRef } from 'react';
import { Key } from '../../../utils/Keys.js';
import { DatePickerPresentation } from './DatePickerPresentation.js';

// @ts-strict-ignore
const DatePickerInternalWrapper = (props) => {
    const [open, setOpen] = useState();
    const containerElementRef = useRef(undefined);
    const inputElementRef = useRef(undefined);
    const flyoutElementRef = useRef(undefined);
    const hostRef = useRef(undefined);
    // TODO: Insufficient implemented, should be considered when a11y topics will implemented completely
    const handleOnKeyDownInput = (ev) => {
        // Event management on input field
        switch (ev.key) {
            case Key.ArrowDown:
                if (document.activeElement === inputElementRef.current) {
                    if (flyoutElementRef.current && !open) {
                        setOpen(true);
                        break;
                    }
                }
                break;
            case Key.Enter:
                if (document.activeElement === inputElementRef.current) {
                    // text field variant
                    if (!open) {
                        setOpen(true);
                    }
                    else {
                        // value is selected and flyout should be closed
                        setOpen(false);
                    }
                }
                break;
            case Key.Escape: // close flyout explicit
                if (document.activeElement === inputElementRef.current) {
                    if (open) {
                        setOpen(false);
                    }
                }
                break;
            default:
                return;
        }
    };
    const handleOnBlur = (event) => {
        // Weird: The event.relatedTarget=<something inside the flyout element>, but flyoutElement is not yet
        // rendered at that time, so we need to delay the check to the next frame to get the correct flyoutElement
        requestAnimationFrame(() => {
            if (hostRef.current?.contains(event.relatedTarget) ||
                flyoutElementRef.current?.contains(event.relatedTarget)) {
                return;
            }
            if (props.onBlur) {
                props.onBlur(event, props.name);
            }
        });
    };
    return (React__default.createElement(DatePickerPresentation, { ...props, open: open, onOpenChange: newOpen => setOpen(newOpen), containerRef: containerElementRef, containerElement: containerElementRef.current, inputRef: inputElementRef, flyoutRef: flyoutElementRef, inputElement: inputElementRef.current, onKeyDown: handleOnKeyDownInput, hostRef: hostRef, handleOnBlur: handleOnBlur }));
};
const DatePickerWrapper = ({ minDate, maxDate, datepickerFormat, dateFormat, ...props }) => {
    let minDateClean;
    let maxDateClean;
    // TODO V20: Remove deprecated datepickerFormat
    const appliedDateFormat = dateFormat || datepickerFormat;
    if (appliedDateFormat === "month") {
        minDateClean = isDate(minDate) ? startOfMonth(minDate) : undefined;
        maxDateClean = isDate(maxDate) ? startOfMonth(maxDate) : undefined;
    }
    else {
        minDateClean = isDate(minDate) ? startOfDay(minDate) : undefined;
        maxDateClean = isDate(maxDate) ? startOfDay(maxDate) : undefined;
    }
    return (React__default.createElement(DatePickerInternalWrapper, { ...props, datepickerFormat: datepickerFormat, minDate: minDateClean, maxDate: maxDateClean }));
};

export { DatePickerInternalWrapper, DatePickerWrapper };
