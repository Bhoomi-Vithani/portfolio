import { startOfDay, getDay, startOfMonth, getDaysInMonth, subDays, endOfMonth, setDate, isSameMonth, isEqual, setMonth, getMonth, isSameYear } from 'date-fns';
import React__default from 'react';
import { getLocaleDays, getLocaleMonth } from '../../../utils/DateUtils.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { texts, formats } from '../../../utils/Localization.js';
import { hostClass } from './DatePickerFlyout.styles.js';
import { getFirstValidDate, getLastValidDate, isDateSelectable, getValidNextDate, getValidPreviousDate, isMonthSelectable } from './DatePickerFlyoutHelper.js';

// @ts-strict-ignore
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
const DatePickerCalendarGrid = ({ id, focussedValue, onFocussedValueChange, onChange, value, maxDate, minDate, onClose, onKeyDown, name, datepickerFormat, disabledDates, weekendsDisabled, selectableDates, tabIndexRef, referenceDate, focussedRef, yearPickerRef, isYearSelection, onYearSelected, focussedYear, yearPickerId, hoverValue, onHoverValueChange, today: todayProp, }) => {
    const today = startOfDay(todayProp || new Date());
    let datePickerCalendarGrid;
    if (isYearSelection) {
        // rendering Year selection grid
        const startYear = getFirstValidDate({
            minDate,
            disabledDates,
            selectableDates,
            weekendsDisabled,
        }).getFullYear();
        const endYear = getLastValidDate({ maxDate, disabledDates, selectableDates, weekendsDisabled }).getFullYear();
        const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => endYear - i).sort((a, b) => a - b);
        const rows = Array.from({ length: Math.ceil(years.length / 4) }, (_, i) => i);
        const cols = [0, 1, 2, 3];
        return (React__default.createElement("div", { className: `${hostClass}-yearpicker`, ref: yearPickerRef },
            React__default.createElement("table", { className: `${hostClass}-table`, role: "grid", "aria-label": texts.lsg.component.Datepicker.yearSelectionLabel, id: yearPickerId, onKeyDown: event => onKeyDown(event) },
                React__default.createElement("tbody", null, rows.map(row => (React__default.createElement("tr", { key: row }, cols.map(col => {
                    const year = years[row * 4 + col];
                    const isSelected = value && value.getFullYear() === year;
                    const isSelectable = true;
                    const isCurrent = today.getFullYear() === year;
                    const isFocussed = focussedYear === year;
                    const isHovered = hoverValue?.getFullYear() === year;
                    const hasTabIndex = isFocussed;
                    return year > 0 ? (React__default.createElement("td", { id: `${yearPickerId}-${year}`, className: cleanupClassObject({
                            [`${hostClass}-td`]: true,
                            [`${hostClass}-td__disabled`]: !isSelectable,
                            [`${hostClass}-td__hovered`]: isHovered,
                            [`${hostClass}-td__current`]: isCurrent,
                            [`${hostClass}-td__selected`]: isSelected,
                        }), key: year, onClick: () => {
                            onYearSelected(year);
                        }, onKeyDown: event => {
                            if (event.key === "Enter") {
                                onYearSelected(year);
                            }
                        }, ref: ref => {
                            if (hasTabIndex) {
                                // eslint-disable-next-line no-param-reassign
                                tabIndexRef.current = ref;
                            }
                            if (isFocussed) {
                                // eslint-disable-next-line no-param-reassign
                                focussedRef.current = ref;
                            }
                        }, onMouseOver: () => {
                            {
                                const hoveredDate = new Date(referenceDate);
                                hoveredDate.setFullYear(year);
                                onHoverValueChange(hoveredDate);
                            }
                        }, onMouseOut: () => {
                            if (isSelected) {
                                onHoverValueChange(undefined);
                            }
                        }, onFocus: () => {
                            /* -- empty --*/
                        }, onBlur: () => {
                            /* -- empty --*/
                        }, role: hasTabIndex ? "button" : undefined, "aria-selected": isSelected, "aria-disabled": !isSelectable, tabIndex: hasTabIndex ? 0 : -1 },
                        React__default.createElement("span", { className: `${hostClass}-text` }, year))) : (React__default.createElement("td", { "aria-hidden": true }));
                }))))))));
    }
    const validDateParams = { minDate, maxDate, disabledDates, selectableDates, weekendsDisabled };
    if (datepickerFormat === "day") {
        const daysOfWeek = [0, 1, 2, 3, 4, 5, 6];
        const weeksOfMonth = [-1, 0, 1, 2, 3, 4, 5];
        const startsOnSunday = formats.weekStartsOnSunday;
        const offsetDay = getDay(startOfMonth(referenceDate)) - (startsOnSunday ? 1 : 2);
        const numDaysOfMonth = getDaysInMonth(referenceDate);
        const isSelectedMonth = value &&
            (!focussedValue ||
                (value.getFullYear() === focussedValue.getFullYear() && value.getMonth() === focussedValue.getMonth()));
        const weekDaysShort = getLocaleDays("short", startsOnSunday);
        const weekDaysWide = getLocaleDays("wide", startsOnSunday);
        // get the date with the tabIndex for the day datepicker
        // if there is a valid date in the current month, at least one date has to have a tabIndex.
        let tabIndexDate;
        if (isDateSelectable(referenceDate, validDateParams)) {
            tabIndexDate = referenceDate;
        }
        else if (getValidNextDate(subDays(referenceDate, 1), validDateParams) <= endOfMonth(referenceDate)) {
            tabIndexDate = getValidNextDate(subDays(referenceDate, 1), validDateParams);
        }
        else if (getValidPreviousDate(referenceDate, validDateParams) >= startOfMonth(referenceDate)) {
            tabIndexDate = getValidPreviousDate(referenceDate, validDateParams);
        }
        datePickerCalendarGrid = (React__default.createElement("table", { id: id, className: `${hostClass}-table`, role: "grid", "aria-label": texts.lsg.component.Datepicker.calendarLabel, onKeyDown: event => onKeyDown(event) },
            React__default.createElement("thead", null,
                React__default.createElement("tr", null, weekDaysShort.map((day, i) => (React__default.createElement("th", { key: day, className: `${hostClass}-th`, scope: "col", "aria-label": weekDaysWide[i] }, day))))),
            React__default.createElement("tbody", null, weeksOfMonth.map(wom => {
                const firstDay = wom * 7 - offsetDay;
                // TODO improve logic for showing the day of the month
                if (firstDay > numDaysOfMonth || firstDay < -5)
                    return;
                return (React__default.createElement("tr", { key: firstDay }, daysOfWeek.map(dow => {
                    const day = wom * 7 + dow - offsetDay;
                    const isSelected = isSelectedMonth && day === value.getDate();
                    const date = setDate(referenceDate, day);
                    // enabled/disabled logic
                    const isSelectable = isDateSelectable(date, validDateParams);
                    const formattedDay = day > 0 && day <= numDaysOfMonth ? `0${day}`.slice(-2) : undefined;
                    const isCurrent = isSameMonth(referenceDate, today) && today.getDate() === day;
                    const isHovered = hoverValue && hoverValue.getDate() === day;
                    if (formattedDay) {
                        return (
                        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/mouse-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
                        React__default.createElement("td", { id: `${id}-${day}`, className: cleanupClassObject({
                                [`${hostClass}-td`]: true,
                                [`${hostClass}-td__disabled`]: !isSelectable,
                                [`${hostClass}-td__hovered`]: isHovered && isSelectable,
                                [`${hostClass}-td__current`]: isCurrent && isSelectable,
                                [`${hostClass}-td__selected`]: isSelected && isSelectable,
                            }), ref: ref => {
                                if (isEqual(tabIndexDate, date)) {
                                    // eslint-disable-next-line no-param-reassign
                                    tabIndexRef.current = ref;
                                }
                                if (isEqual(focussedValue, date)) {
                                    // eslint-disable-next-line no-param-reassign
                                    focussedRef.current = ref;
                                }
                            }, onClick: event => {
                                if (isSelectable) {
                                    onChange(date, name, event);
                                    onFocussedValueChange(undefined);
                                    onClose();
                                }
                            }, onMouseOver: () => {
                                if (isSelectable) {
                                    onHoverValueChange(date);
                                }
                            }, onMouseOut: () => {
                                if (isSelected) {
                                    onHoverValueChange(undefined);
                                }
                            }, onFocus: () => {
                                /* -- empty --*/
                            }, onBlur: () => {
                                /* -- empty --*/
                            }, key: day, "aria-selected": isSelected, "aria-disabled": !isSelectable, tabIndex: isEqual(tabIndexDate, date) ? 0 : -1 },
                            React__default.createElement("span", { className: cleanupClassObject({
                                    [`${hostClass}-text`]: true,
                                }) }, formattedDay)));
                    }
                    return (React__default.createElement("td", { className: `${hostClass}-td`, key: day }, " "));
                })));
            }))));
    }
    else {
        const rowsOfYear = [0, 1, 2];
        const colsOfYear = [0, 1, 2, 3];
        const isSelectedYear = value && (!focussedValue || value.getFullYear() === focussedValue.getFullYear());
        datePickerCalendarGrid = (React__default.createElement("table", { id: id, className: cleanupClassObject({
                [`${hostClass}-table`]: true,
                [`${hostClass}-table__monthpicker`]: true,
            }), role: "grid", "aria-label": texts.lsg.component.Datepicker.calendarLabel, onKeyDown: event => onKeyDown(event) },
            React__default.createElement("tbody", null, rowsOfYear.map((rows) => (React__default.createElement("tr", { key: rows }, colsOfYear.map((cols) => {
                const month = rows * 4 + cols;
                const isSelected = isSelectedYear && month === value.getMonth();
                const date = setMonth(referenceDate, month);
                const isSelectable = isMonthSelectable(date, validDateParams);
                const isFocussed = focussedValue && getMonth(focussedValue) === month;
                const isHovered = hoverValue && getMonth(hoverValue) === month;
                const isCurrent = isSameYear(referenceDate, today) && month === today.getMonth();
                // gives back the month names abbreviation
                const formattedMonth = month > -1 && month <= 11
                    ? {
                        abbreviated: getLocaleMonth("abbreviated")[month],
                        wide: getLocaleMonth("wide")[month],
                    }
                    : undefined;
                const isInitialFocussedValue = (focussedValue && isFocussed) ||
                    (!focussedValue && isCurrent) ||
                    (!focussedValue && isSelected);
                return (
                // eslint-disable-next-line
                React__default.createElement("td", { id: `${id}-${month}`, className: cleanupClassObject({
                        [`${hostClass}-td`]: true,
                        [`${hostClass}-td__disabled`]: !isSelectable,
                        [`${hostClass}-td__selected`]: isSelected && isSelectable,
                        [`${hostClass}-td__hovered`]: isHovered && isSelectable,
                        [`${hostClass}-td__current`]: isCurrent && isSelectable,
                    }), onClick: event => {
                        if (isSelectable) {
                            onChange(startOfMonth(date), name, event);
                            onFocussedValueChange(undefined);
                            onClose();
                        }
                    }, onMouseOver: () => {
                        if (isSelectable) {
                            onHoverValueChange(startOfMonth(date));
                        }
                    }, onMouseOut: () => {
                        if (isSelected) {
                            onHoverValueChange(undefined);
                        }
                    }, onFocus: () => {
                        /* -- empty --*/
                    }, onBlur: () => {
                        /* -- empty --*/
                    }, key: month, role: isSelectable ? "button" : undefined, "aria-selected": isSelected, "aria-disabled": !isSelectable, tabIndex: isInitialFocussedValue ? 0 : -1, ref: ref => {
                        if (isInitialFocussedValue) {
                            // eslint-disable-next-line no-param-reassign
                            tabIndexRef.current = ref;
                        }
                        if (isFocussed && isSelectable) {
                            // eslint-disable-next-line no-param-reassign
                            focussedRef.current = ref;
                        }
                    } },
                    React__default.createElement("span", { className: cleanupClassObject({
                            [`${hostClass}-text`]: true,
                        }), "aria-label": formattedMonth?.wide }, formattedMonth?.abbreviated)));
            })))))));
    }
    return datePickerCalendarGrid;
};
DatePickerCalendarGrid.displayName = "DatePickerCalendarGrid";

export { DatePickerCalendarGrid };
