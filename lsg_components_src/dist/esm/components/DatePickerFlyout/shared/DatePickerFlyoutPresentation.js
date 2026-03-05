import { interaction_arrows_chevronLeft, interaction_arrows_chevronRight, interaction_arrows_chevronUp, interaction_arrows_chevronDown } from '@lsg/icons';
import { startOfDay, format, startOfMonth, subMonths, addDays, endOfMonth, addMonths, subDays, subYears, addYears, isDate } from 'date-fns';
import React__default, { useState, useRef, useEffect } from 'react';
import FocusLock from 'react-focus-lock';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { Host } from '../../../utils/Host.js';
import { Key } from '../../../utils/Keys.js';
import { formats, texts } from '../../../utils/Localization.js';
import { IconLinkWrapper } from '../../IconLink/shared/IconLinkWrapper.js';
import { FlyoutPresentation } from '../../_Flyout/shared/FlyoutPresentation.js';
import { DatePickerCalendarGrid } from './DatePickerCalendarGrid.js';
import { hostClass } from './DatePickerFlyout.styles.js';
import { maxDefaultDate, getValidPreviousDate, getValidNextDate, getClosestValidDate, minDefaultDate, getFirstValidDate, getLastValidDate, getValidPreviousMonth, getValidNextMonth, isMonthSelectable } from './DatePickerFlyoutHelper.js';

// @ts-strict-ignore
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
const handleKeyDownYearSelection = (ev, focYear, setFocYear, validDateParams, onYearSelected, focussedRef) => {
    const doFocusGridDate = () => {
        window.requestAnimationFrame(() => {
            focussedRef.current?.focus();
        });
    };
    const minYear = getFirstValidDate(validDateParams).getFullYear();
    const maxYear = getLastValidDate(validDateParams).getFullYear();
    const keyFunction = {
        [Key.End]: () => {
            doFocusGridDate();
            if (focYear < maxYear) {
                doFocusGridDate();
                setFocYear(maxYear);
            }
        },
        [Key.Home]: () => {
            doFocusGridDate();
            if (focYear > minYear) {
                doFocusGridDate();
                setFocYear(minYear);
            }
        },
        [Key.ArrowRight]: () => {
            if (focYear < maxYear) {
                doFocusGridDate();
                setFocYear(focYear + 1);
            }
        },
        [Key.ArrowLeft]: () => {
            doFocusGridDate();
            if (focYear > minYear) {
                setFocYear(focYear - 1);
            }
        },
        [Key.ArrowDown]: () => {
            if (focYear < maxYear - 3) {
                doFocusGridDate();
                setFocYear(focYear + 4);
            }
        },
        [Key.ArrowUp]: () => {
            doFocusGridDate();
            if (focYear > minYear + 3) {
                setFocYear(focYear - 4);
            }
        },
        [Key.PageDown]: () => {
            doFocusGridDate();
            if (focYear < maxYear - 15) {
                doFocusGridDate();
                setFocYear(focYear + 16);
            }
            else if (focYear < maxYear) {
                doFocusGridDate();
                setFocYear(maxYear);
            }
        },
        [Key.PageUp]: () => {
            doFocusGridDate();
            if (focYear > minYear + 15) {
                doFocusGridDate();
                setFocYear(focYear - 16);
            }
            else if (focYear > minYear) {
                doFocusGridDate();
                setFocYear(minYear);
            }
        },
        [Key.Enter]: () => {
            doFocusGridDate();
            onYearSelected(focYear);
        },
        [Key.Escape]: () => {
            doFocusGridDate();
            setFocYear(NaN);
        },
    }[ev.key];
    if (keyFunction) {
        ev.preventDefault();
        keyFunction();
    }
};
const handleKeyDown = (ev, focValue, onChange, onFocusValue, onClose, validDateParams, focussedRef) => {
    let { minDate, maxDate } = validDateParams;
    const { datepickerFormat } = validDateParams;
    const focussedValue = startOfDay(focValue);
    minDate = minDate && isDate(minDate) ? startOfDay(minDate) : undefined;
    maxDate = maxDate && isDate(maxDate) ? startOfDay(maxDate) : undefined;
    const params = { ...validDateParams, minDate, maxDate };
    const doFocusGridDate = () => {
        window.requestAnimationFrame(() => {
            focussedRef.current?.focus();
        });
    };
    const keyFunction = {
        [Key.Home]: () => {
            doFocusGridDate();
            if (!focussedValue)
                return;
            if (datepickerFormat === "month") {
                let m = focussedValue;
                while (getValidPreviousMonth(m, params)) {
                    m = getValidPreviousMonth(m, params);
                }
                return m;
            }
            let d = startOfDay(focussedValue);
            while (getValidPreviousDate(d, params) && getValidPreviousDate(d, params) >= startOfMonth(d)) {
                d = getValidPreviousDate(d, params);
            }
            return d;
        },
        [Key.End]: () => {
            doFocusGridDate();
            if (!focussedValue)
                return;
            if (datepickerFormat === "month") {
                let m = focussedValue;
                while (getValidNextMonth(m, params)) {
                    m = getValidNextMonth(m, params);
                }
                return m;
            }
            let d = startOfDay(focussedValue);
            while (getValidNextDate(d, params) && getValidNextDate(d, params) <= startOfDay(endOfMonth(d))) {
                d = getValidNextDate(d, params);
            }
            return d;
        },
        [Key.ArrowDown]: () => {
            doFocusGridDate();
            if (!focussedValue)
                return;
            if (datepickerFormat === "month") {
                // Check for at least 4 month in the future, but if the latest next month is less than 4 months
                // in the future, select the latest month that is valid.
                for (let i = 3; i > 0; i--) {
                    if (getValidNextMonth(addMonths(focussedValue, i), params)) {
                        return getValidNextMonth(addMonths(focussedValue, i), params);
                    }
                }
            }
            return getValidNextDate(addDays(focussedValue, 6), params);
        },
        [Key.ArrowUp]: () => {
            doFocusGridDate();
            if (!focussedValue)
                return;
            if (datepickerFormat === "month") {
                // if (minDate && startOfMonth(subMonths(focussedValue, 4)) < startOfMonth(minDate)) {
                //     return;
                // }
                // Check for at least 4 month in the past, but if the earliest previous months is less than 4 months
                // ago, select the earliest month that is valid.
                for (let i = 3; i > 0; i--) {
                    if (getValidPreviousMonth(subMonths(focussedValue, i), params)) {
                        return getValidPreviousMonth(subMonths(focussedValue, i), params);
                    }
                }
            }
            return getValidPreviousDate(subDays(focussedValue, 6), params);
        },
        [Key.ArrowLeft]: () => {
            doFocusGridDate();
            if (!focussedValue)
                return;
            if (datepickerFormat === "month") {
                return getValidPreviousMonth(focussedValue, params);
            }
            return getValidPreviousDate(focussedValue, params);
        },
        [Key.ArrowRight]: () => {
            doFocusGridDate();
            if (!focussedValue)
                return;
            if (datepickerFormat === "month") {
                return getValidNextMonth(focussedValue, params);
            }
            return getValidNextDate(focussedValue, params);
        },
        [Key.PageUp]: () => {
            doFocusGridDate();
            if (!focussedValue)
                return;
            if (datepickerFormat === "month") {
                // Check for at least 12 month in the past, but if the earliest previous month is less than 12 months
                // ago, select the earliest month that is valid.
                for (let i = 11; i > 0; i--) {
                    if (getValidPreviousMonth(subMonths(focussedValue, i), params)) {
                        return getValidPreviousMonth(subMonths(focussedValue, i), params);
                    }
                }
            }
            if (minDate && subMonths(focussedValue, 1) < minDate) {
                return;
            }
            return subMonths(focussedValue, 1);
        },
        [Key.PageDown]: () => {
            doFocusGridDate();
            if (!focussedValue)
                return;
            if (datepickerFormat === "month") {
                // Check for at least 12 month in the future, but if the latest next month is less than 12 months
                // in the future, select the latest month that is valid.
                for (let i = 11; i > 0; i--) {
                    if (getValidNextMonth(addMonths(focussedValue, i), params)) {
                        return getValidNextMonth(addMonths(focussedValue, i), params);
                    }
                }
            }
            if (maxDate && addMonths(focussedValue, 1) > maxDate) {
                return;
            }
            return addMonths(focussedValue, 1);
        },
        [Key.Enter]: () => {
            if (!focussedValue)
                return;
            if (datepickerFormat === "month") {
                if (isMonthSelectable(startOfMonth(focussedValue), params)) {
                    onChange(startOfMonth(focussedValue));
                }
                onClose();
                return;
            }
            onChange(focussedValue);
            onClose();
        },
        [Key.Space]: () => {
            if (!focussedValue)
                return;
            if (datepickerFormat === "month") {
                onChange(startOfMonth(focussedValue));
                onClose();
                return;
            }
            onChange(focussedValue);
            onClose();
        },
        [Key.Escape]: () => {
            onClose();
            onFocusValue(undefined);
        },
    }[ev.key];
    if (keyFunction) {
        if (ev.key !== Key.Tab) {
            ev.preventDefault();
        }
        const newDate = keyFunction();
        if (newDate !== undefined) {
            onFocusValue(getClosestValidDate(newDate, params));
        }
    }
};
const DatePickerFlyoutPresentation = ({ className, noMargin, onChange = () => {
    /* empty */
}, value, id, maxDate, minDate = minDefaultDate, open, onClose, toggleContainerElement, hostRef, name, datepickerFormat = "day", toggleElement, disabledDates, selectableDates, weekendsDisabled, chipVariant, noYearPicker, today: todayProp, }) => {
    // cjs issue: There seems to be a bug from FocusLock regarding the cjs export, which is used by tests and probably ssr apps, too.
    // With cjs, the FocusLock component is exported as a "default" attribute of an object.
    // With esm/esm-es5, the component is the default imported FocusLock component.
    const FocusLockComponent = FocusLock.default || FocusLock;
    const [focussedValue, setFocussedValue] = useState();
    const [focussedYear, setFocussedYear] = useState();
    const [isYearSelection, setIsYearSelection] = useState(false);
    const [hoverValue, setHoverValue] = useState(undefined);
    const today = todayProp || new Date();
    const effectiveMaxDate = maxDate || maxDefaultDate(today);
    const isMaxDateInPast = effectiveMaxDate < today;
    const isMinDateInFuture = minDate > today;
    const referenceDate = (focussedValue && startOfDay(focussedValue)) ||
        (value && startOfDay(value)) ||
        (isMaxDateInPast && startOfDay(effectiveMaxDate)) ||
        (isMinDateInFuture && startOfDay(minDate)) ||
        startOfDay(today);
    const label = datepickerFormat === "month"
        ? format(referenceDate, "yyyy", { locale: formats.dateLocale })
        : format(referenceDate, "MMMM yyyy", {
            locale: formats.dateLocale,
        });
    const ariaLabel = `${label},
     ${isYearSelection
        ? texts.lsg.component.Datepicker.yearSelectionButtonDialogOpened
        : texts.lsg.component.Datepicker.yearSelectionButtonDialogClosed}`;
    const labelId = `${id}-label`;
    const arrowRightId = `${id}-arrow-right`;
    const arrowLeftId = `${id}-arrow-left`;
    const yearPickerId = `${id}-year-picker`;
    const tabIndexRef = useRef(undefined);
    const focussedRef = useRef(undefined);
    const yearPickerRef = useRef(undefined);
    useEffect(() => {
        // set initial focus to date/month in CalendarGrid
        if (open) {
            tabIndexRef.current?.focus();
        }
        else {
            // focus the datepicker icon or the date picker chip.
            setFocussedValue(undefined);
            setIsYearSelection(false);
            toggleElement?.focus();
        }
    }, [open]);
    const validDateParams = { minDate, maxDate: effectiveMaxDate, disabledDates, selectableDates, weekendsDisabled, datepickerFormat, today };
    const onYearSelected = (year) => {
        let newDate = new Date(referenceDate);
        newDate.setFullYear(year);
        const minDateMonth = startOfMonth(newDate);
        const maxDateMonth = startOfDay(endOfMonth(newDate));
        const params = { ...validDateParams, minDate: minDateMonth, maxDate: maxDateMonth };
        newDate = getClosestValidDate(newDate, params);
        setFocussedValue(newDate);
        setFocussedYear(NaN);
        setIsYearSelection(false);
    };
    const onToggleYearSelection = () => {
        if (isYearSelection) {
            setIsYearSelection(false);
            setFocussedYear(NaN);
        }
        else {
            setIsYearSelection(true);
            setFocussedYear(referenceDate.getFullYear());
            window.requestAnimationFrame(() => {
                focussedRef.current?.focus();
                focussedRef.current?.scrollIntoView({ block: "nearest", behavior: "instant", inline: "nearest" });
                yearPickerRef.current?.scrollBy(0, -2);
            });
        }
    };
    const handleOnKeyDownFlyout = (ev) => {
        if ([
            Key.PageDown,
            Key.PageUp,
            Key.ArrowUp,
            Key.ArrowDown,
            Key.ArrowLeft,
            Key.ArrowRight,
            Key.Escape,
            Key.Enter,
            Key.Space,
            Key.Home,
            Key.End,
        ].includes(ev.key)) {
            if (isYearSelection) {
                handleKeyDownYearSelection(ev, focussedYear, setFocussedYear, validDateParams, onYearSelected, focussedRef);
            }
            else {
                handleKeyDown(ev, focussedValue || (isDate(value) && value) || startOfDay(today), val => onChange(val, name, ev), val => setFocussedValue(val), () => {
                    onClose();
                }, validDateParams, focussedRef);
            }
        }
    };
    const labelIcon = datepickerFormat === "day" && isYearSelection ? interaction_arrows_chevronUp : interaction_arrows_chevronDown;
    const actionButtonsFlyout = () => (React__default.createElement("div", { className: `${hostClass}-flyout-buttons` },
        React__default.createElement(IconLinkWrapper, { id: `${id}-cancel-button`, label: texts.lsg.component.Datepicker.cancelButton, appearance: "no-icon", inline: true, onClick: () => {
                onClose();
            } }),
        React__default.createElement(IconLinkWrapper, { id: `${id}-confirm-button`, label: texts.lsg.component.Datepicker.confirmButton, appearance: "no-icon", inline: true, onClick: event => {
                if (focussedValue) {
                    onChange(focussedValue, name, event);
                }
                onClose();
            } })));
    useEffect(() => {
        if (focussedValue && focussedValue !== hoverValue) {
            setHoverValue(focussedValue);
        }
        if (focussedYear && focussedYear !== hoverValue?.getFullYear()) {
            const newFocus = new Date(referenceDate);
            newFocus.setFullYear(focussedYear);
            setHoverValue(newFocus);
        }
    }, [focussedValue, focussedYear]);
    return (React__default.createElement(Host, { className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
            [`${lsgPre}no-margin`]: noMargin,
        }), id: `${id}-base` },
        React__default.createElement(FlyoutPresentation, { id: `${id}-flyout`, className: cleanupClassObject({
                [`${hostClass}-flyout__closed`]: !open,
            }), open: open, onClose: onClose, toggleContainerElement: toggleContainerElement, isToggleElmWidth: false, hasTabIndex: false, hostRef: hostRef, stretchBreakpointBu: 107, withGap: true, ariaLabel: texts.lsg.component.Datepicker.calendarLabel, toggleElement: toggleElement, htmlAttrs: { role: "dialog" }, preferOpenToLeft: !chipVariant, minWidth: 320 },
            React__default.createElement(FocusLockComponent, { disabled: !open, returnFocus: true }, datepickerFormat === "day" ? (
            // If daily calendar (dd.mm.yyyy)
            React__default.createElement("div", { className: `${hostClass}-wrapper`, id: id },
                React__default.createElement("div", { className: `${hostClass}-wrapper-header` },
                    !isYearSelection && (React__default.createElement("div", { className: `${hostClass}-next-prev` },
                        React__default.createElement(IconLinkWrapper, { label: texts.lsg.component.Datepicker.previousMonth, htmlAttrs: {
                                "aria-label": texts.lsg.component.Datepicker.previousMonth,
                            }, icon: interaction_arrows_chevronLeft, appearance: "no-text", disabled: !getValidPreviousDate(startOfMonth(referenceDate), validDateParams), onClick: () => {
                                const datePreviousMonth = subMonths(referenceDate, 1);
                                let newFocussedValue;
                                const validPrevDate = getValidPreviousDate(addDays(datePreviousMonth, 1), validDateParams);
                                const validNextDate = getValidNextDate(datePreviousMonth, validDateParams);
                                if (validPrevDate >= startOfMonth(datePreviousMonth)) {
                                    newFocussedValue = validPrevDate;
                                }
                                else if (validNextDate <= endOfMonth(datePreviousMonth)) {
                                    newFocussedValue = validNextDate;
                                }
                                else {
                                    newFocussedValue = validPrevDate;
                                }
                                setFocussedValue(newFocussedValue);
                            }, hasTabIndex: true, id: arrowLeftId }))),
                    (!noYearPicker && (React__default.createElement("div", { className: `${hostClass}-label` },
                        React__default.createElement(IconLinkWrapper, { label: label, htmlAttrs: {
                                "aria-label": ariaLabel,
                                "aria-expanded": isYearSelection,
                                "aria-controls": yearPickerId,
                                "aria-live": "assertive",
                            }, id: labelId, onClick: onToggleYearSelection, icon: labelIcon, appearance: "right" })))) || (React__default.createElement("div", { className: `${hostClass}-label`, id: labelId, "aria-live": "assertive", "aria-atomic": true }, label)),
                    !isYearSelection && (React__default.createElement("div", { className: `${hostClass}-next-prev` },
                        React__default.createElement(IconLinkWrapper, { label: texts.lsg.component.Datepicker.nextMonth, htmlAttrs: {
                                "aria-label": texts.lsg.component.Datepicker.nextMonth,
                            }, icon: interaction_arrows_chevronRight, appearance: "no-text", disabled: !getValidNextDate(endOfMonth(referenceDate), validDateParams), onClick: () => {
                                const dateNextMonth = addMonths(referenceDate, 1);
                                let newFocussedValue;
                                const validNextDate = getValidNextDate(subDays(dateNextMonth, 1), validDateParams);
                                const validPrevDate = getValidPreviousDate(dateNextMonth, validDateParams);
                                if (validNextDate <= endOfMonth(dateNextMonth)) {
                                    newFocussedValue = validNextDate;
                                }
                                else if (validPrevDate >= startOfMonth(dateNextMonth)) {
                                    newFocussedValue = validPrevDate;
                                }
                                else {
                                    newFocussedValue = validNextDate;
                                }
                                setFocussedValue(newFocussedValue);
                            }, hasTabIndex: true, id: arrowRightId })))),
                React__default.createElement(DatePickerCalendarGrid, { id: `${id}-calendar-grid`, yearPickerId: yearPickerId, focussedValue: focussedValue, onChange: onChange, value: value, maxDate: effectiveMaxDate, minDate: minDate, onClose: onClose, name: name, datepickerFormat: datepickerFormat, tabIndexRef: tabIndexRef, referenceDate: referenceDate, focussedRef: focussedRef, yearPickerRef: yearPickerRef, disabledDates: disabledDates, selectableDates: selectableDates, weekendsDisabled: weekendsDisabled, onKeyDown: handleOnKeyDownFlyout, onFocussedValueChange: newFocus => setFocussedValue(newFocus), isYearSelection: isYearSelection, onYearSelected: onYearSelected, focussedYear: focussedYear, onFocussedYearChange: setFocussedYear, hoverValue: hoverValue, onHoverValueChange: newHover => setHoverValue(newHover), today: today }),
                !isYearSelection && actionButtonsFlyout())) : (
            // If monthly calendar (mm.yyyy), {datepickerFormat === "month"
            React__default.createElement("div", { className: `${hostClass}-wrapper`, id: id },
                React__default.createElement("div", { className: `${hostClass}-wrapper-header` },
                    React__default.createElement("div", { className: `${hostClass}-next-prev` },
                        React__default.createElement(IconLinkWrapper, { label: texts.lsg.component.Datepicker.previousYear, htmlAttrs: {
                                "aria-label": texts.lsg.component.Datepicker.previousYear,
                            }, icon: interaction_arrows_chevronLeft, appearance: "no-text", disabled: referenceDate.getFullYear() <= minDate.getFullYear(), onClick: () => {
                                setFocussedValue(getClosestValidDate(subYears(referenceDate, 1), validDateParams));
                            }, hasTabIndex: true, id: arrowLeftId })),
                    React__default.createElement("div", { className: `${hostClass}-label`, id: labelId, "aria-live": "assertive", "aria-atomic": true }, label),
                    React__default.createElement("div", { className: `${hostClass}-next-prev` },
                        React__default.createElement(IconLinkWrapper, { label: texts.lsg.component.Datepicker.nextYear, htmlAttrs: {
                                "aria-label": texts.lsg.component.Datepicker.nextYear,
                            }, icon: interaction_arrows_chevronRight, appearance: "no-text", disabled: referenceDate.getFullYear() >= effectiveMaxDate.getFullYear(), onClick: () => {
                                setFocussedValue(getClosestValidDate(addYears(referenceDate, 1), validDateParams));
                            }, hasTabIndex: true, id: arrowRightId }))),
                React__default.createElement(DatePickerCalendarGrid, { id: `${id}-calendar-grid`, yearPickerId: yearPickerId, focussedValue: focussedValue, onChange: onChange, value: value, maxDate: effectiveMaxDate, minDate: minDate, onClose: onClose, name: name, datepickerFormat: datepickerFormat, tabIndexRef: tabIndexRef, referenceDate: referenceDate, focussedRef: focussedRef, disabledDates: disabledDates, weekendsDisabled: weekendsDisabled, selectableDates: selectableDates, onKeyDown: handleOnKeyDownFlyout, onFocussedValueChange: newFocus => setFocussedValue(newFocus), hoverValue: hoverValue, onHoverValueChange: newHover => setHoverValue(newHover), today: today }),
                actionButtonsFlyout()))))));
};
DatePickerFlyoutPresentation.displayName = "DatePickerFlyoutPresentation";

export { DatePickerFlyoutPresentation, handleKeyDown, handleKeyDownYearSelection };
