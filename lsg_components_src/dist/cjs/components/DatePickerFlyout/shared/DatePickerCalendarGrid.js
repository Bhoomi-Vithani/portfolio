'use strict';

var dateFns = require('date-fns');
var React__default = require('react');
var DateUtils = require('../../../utils/DateUtils.js');
var DomUtils = require('../../../utils/DomUtils.js');
var Localization = require('../../../utils/Localization.js');
var DatePickerFlyout_styles = require('./DatePickerFlyout.styles.js');
var DatePickerFlyoutHelper = require('./DatePickerFlyoutHelper.js');

// @ts-strict-ignore
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
const DatePickerCalendarGrid = ({
  id,
  focussedValue,
  onFocussedValueChange,
  onChange,
  value,
  maxDate,
  minDate,
  onClose,
  onKeyDown,
  name,
  datepickerFormat,
  disabledDates,
  weekendsDisabled,
  selectableDates,
  tabIndexRef,
  referenceDate,
  focussedRef,
  yearPickerRef,
  isYearSelection,
  onYearSelected,
  focussedYear,
  yearPickerId,
  hoverValue,
  onHoverValueChange,
  today: todayProp
}) => {
  const today = dateFns.startOfDay(todayProp || new Date());
  let datePickerCalendarGrid;
  if (isYearSelection) {
    // rendering Year selection grid
    const startYear = DatePickerFlyoutHelper.getFirstValidDate({
      minDate,
      disabledDates,
      selectableDates,
      weekendsDisabled
    }).getFullYear();
    const endYear = DatePickerFlyoutHelper.getLastValidDate({
      maxDate,
      disabledDates,
      selectableDates,
      weekendsDisabled
    }).getFullYear();
    const years = Array.from({
      length: endYear - startYear + 1
    }, (_, i) => endYear - i).sort((a, b) => a - b);
    const rows = Array.from({
      length: Math.ceil(years.length / 4)
    }, (_, i) => i);
    const cols = [0, 1, 2, 3];
    return /*#__PURE__*/React__default.createElement("div", {
      className: `${DatePickerFlyout_styles.hostClass}-yearpicker`,
      ref: yearPickerRef
    }, /*#__PURE__*/React__default.createElement("table", {
      className: `${DatePickerFlyout_styles.hostClass}-table`,
      role: "grid",
      "aria-label": Localization.texts.lsg.component.Datepicker.yearSelectionLabel,
      id: yearPickerId,
      onKeyDown: event => onKeyDown(event)
    }, /*#__PURE__*/React__default.createElement("tbody", null, rows.map(row => (/*#__PURE__*/React__default.createElement("tr", {
      key: row
    }, cols.map(col => {
      const year = years[row * 4 + col];
      const isSelected = value && value.getFullYear() === year;
      const isSelectable = true;
      const isCurrent = today.getFullYear() === year;
      const isFocussed = focussedYear === year;
      const isHovered = hoverValue?.getFullYear() === year;
      const hasTabIndex = isFocussed;
      return year > 0 ? (/*#__PURE__*/React__default.createElement("td", {
        id: `${yearPickerId}-${year}`,
        className: DomUtils.cleanupClassObject({
          [`${DatePickerFlyout_styles.hostClass}-td`]: true,
          [`${DatePickerFlyout_styles.hostClass}-td__disabled`]: !isSelectable,
          [`${DatePickerFlyout_styles.hostClass}-td__hovered`]: isHovered,
          [`${DatePickerFlyout_styles.hostClass}-td__current`]: isCurrent,
          [`${DatePickerFlyout_styles.hostClass}-td__selected`]: isSelected
        }),
        key: year,
        onClick: () => {
          onYearSelected(year);
        },
        onKeyDown: event => {
          if (event.key === "Enter") {
            onYearSelected(year);
          }
        },
        ref: ref => {
          if (hasTabIndex) {
            // eslint-disable-next-line no-param-reassign
            tabIndexRef.current = ref;
          }
          if (isFocussed) {
            // eslint-disable-next-line no-param-reassign
            focussedRef.current = ref;
          }
        },
        onMouseOver: () => {
          {
            const hoveredDate = new Date(referenceDate);
            hoveredDate.setFullYear(year);
            onHoverValueChange(hoveredDate);
          }
        },
        onMouseOut: () => {
          if (isSelected) {
            onHoverValueChange(undefined);
          }
        },
        onFocus: () => {
          /* -- empty --*/
        },
        onBlur: () => {
          /* -- empty --*/
        },
        role: hasTabIndex ? "button" : undefined,
        "aria-selected": isSelected,
        "aria-disabled": !isSelectable,
        tabIndex: hasTabIndex ? 0 : -1
      }, /*#__PURE__*/React__default.createElement("span", {
        className: `${DatePickerFlyout_styles.hostClass}-text`
      }, year))) : (/*#__PURE__*/React__default.createElement("td", {
        "aria-hidden": true
      }));
    })))))));
  }
  const validDateParams = {
    minDate,
    maxDate,
    disabledDates,
    selectableDates,
    weekendsDisabled
  };
  if (datepickerFormat === "day") {
    const daysOfWeek = [0, 1, 2, 3, 4, 5, 6];
    const weeksOfMonth = [-1, 0, 1, 2, 3, 4, 5];
    const startsOnSunday = Localization.formats.weekStartsOnSunday;
    const offsetDay = dateFns.getDay(dateFns.startOfMonth(referenceDate)) - (startsOnSunday ? 1 : 2);
    const numDaysOfMonth = dateFns.getDaysInMonth(referenceDate);
    const isSelectedMonth = value && (!focussedValue || value.getFullYear() === focussedValue.getFullYear() && value.getMonth() === focussedValue.getMonth());
    const weekDaysShort = DateUtils.getLocaleDays("short", startsOnSunday);
    const weekDaysWide = DateUtils.getLocaleDays("wide", startsOnSunday);
    // get the date with the tabIndex for the day datepicker
    // if there is a valid date in the current month, at least one date has to have a tabIndex.
    let tabIndexDate;
    if (DatePickerFlyoutHelper.isDateSelectable(referenceDate, validDateParams)) {
      tabIndexDate = referenceDate;
    } else if (DatePickerFlyoutHelper.getValidNextDate(dateFns.subDays(referenceDate, 1), validDateParams) <= dateFns.endOfMonth(referenceDate)) {
      tabIndexDate = DatePickerFlyoutHelper.getValidNextDate(dateFns.subDays(referenceDate, 1), validDateParams);
    } else if (DatePickerFlyoutHelper.getValidPreviousDate(referenceDate, validDateParams) >= dateFns.startOfMonth(referenceDate)) {
      tabIndexDate = DatePickerFlyoutHelper.getValidPreviousDate(referenceDate, validDateParams);
    }
    datePickerCalendarGrid = /*#__PURE__*/React__default.createElement("table", {
      id: id,
      className: `${DatePickerFlyout_styles.hostClass}-table`,
      role: "grid",
      "aria-label": Localization.texts.lsg.component.Datepicker.calendarLabel,
      onKeyDown: event => onKeyDown(event)
    }, /*#__PURE__*/React__default.createElement("thead", null, /*#__PURE__*/React__default.createElement("tr", null, weekDaysShort.map((day, i) => (/*#__PURE__*/React__default.createElement("th", {
      key: day,
      className: `${DatePickerFlyout_styles.hostClass}-th`,
      scope: "col",
      "aria-label": weekDaysWide[i]
    }, day))))), /*#__PURE__*/React__default.createElement("tbody", null, weeksOfMonth.map(wom => {
      const firstDay = wom * 7 - offsetDay;
      // TODO improve logic for showing the day of the month
      if (firstDay > numDaysOfMonth || firstDay < -5) return;
      return /*#__PURE__*/React__default.createElement("tr", {
        key: firstDay
      }, daysOfWeek.map(dow => {
        const day = wom * 7 + dow - offsetDay;
        const isSelected = isSelectedMonth && day === value.getDate();
        const date = dateFns.setDate(referenceDate, day);
        // enabled/disabled logic
        const isSelectable = DatePickerFlyoutHelper.isDateSelectable(date, validDateParams);
        const formattedDay = day > 0 && day <= numDaysOfMonth ? `0${day}`.slice(-2) : undefined;
        const isCurrent = dateFns.isSameMonth(referenceDate, today) && today.getDate() === day;
        const isHovered = hoverValue && hoverValue.getDate() === day;
        if (formattedDay) {
          return (
            /*#__PURE__*/
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/mouse-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
            React__default.createElement("td", {
              id: `${id}-${day}`,
              className: DomUtils.cleanupClassObject({
                [`${DatePickerFlyout_styles.hostClass}-td`]: true,
                [`${DatePickerFlyout_styles.hostClass}-td__disabled`]: !isSelectable,
                [`${DatePickerFlyout_styles.hostClass}-td__hovered`]: isHovered && isSelectable,
                [`${DatePickerFlyout_styles.hostClass}-td__current`]: isCurrent && isSelectable,
                [`${DatePickerFlyout_styles.hostClass}-td__selected`]: isSelected && isSelectable
              }),
              ref: ref => {
                if (dateFns.isEqual(tabIndexDate, date)) {
                  // eslint-disable-next-line no-param-reassign
                  tabIndexRef.current = ref;
                }
                if (dateFns.isEqual(focussedValue, date)) {
                  // eslint-disable-next-line no-param-reassign
                  focussedRef.current = ref;
                }
              },
              onClick: event => {
                if (isSelectable) {
                  onChange(date, name, event);
                  onFocussedValueChange(undefined);
                  onClose();
                }
              },
              onMouseOver: () => {
                if (isSelectable) {
                  onHoverValueChange(date);
                }
              },
              onMouseOut: () => {
                if (isSelected) {
                  onHoverValueChange(undefined);
                }
              },
              onFocus: () => {
                /* -- empty --*/
              },
              onBlur: () => {
                /* -- empty --*/
              },
              key: day,
              "aria-selected": isSelected,
              "aria-disabled": !isSelectable,
              tabIndex: dateFns.isEqual(tabIndexDate, date) ? 0 : -1
            }, /*#__PURE__*/React__default.createElement("span", {
              className: DomUtils.cleanupClassObject({
                [`${DatePickerFlyout_styles.hostClass}-text`]: true
              })
            }, formattedDay))
          );
        }
        return /*#__PURE__*/React__default.createElement("td", {
          className: `${DatePickerFlyout_styles.hostClass}-td`,
          key: day
        }, " ");
      }));
    })));
  } else {
    const rowsOfYear = [0, 1, 2];
    const colsOfYear = [0, 1, 2, 3];
    const isSelectedYear = value && (!focussedValue || value.getFullYear() === focussedValue.getFullYear());
    datePickerCalendarGrid = /*#__PURE__*/React__default.createElement("table", {
      id: id,
      className: DomUtils.cleanupClassObject({
        [`${DatePickerFlyout_styles.hostClass}-table`]: true,
        [`${DatePickerFlyout_styles.hostClass}-table__monthpicker`]: true
      }),
      role: "grid",
      "aria-label": Localization.texts.lsg.component.Datepicker.calendarLabel,
      onKeyDown: event => onKeyDown(event)
    }, /*#__PURE__*/React__default.createElement("tbody", null, rowsOfYear.map(rows => (/*#__PURE__*/React__default.createElement("tr", {
      key: rows
    }, colsOfYear.map(cols => {
      const month = rows * 4 + cols;
      const isSelected = isSelectedYear && month === value.getMonth();
      const date = dateFns.setMonth(referenceDate, month);
      const isSelectable = DatePickerFlyoutHelper.isMonthSelectable(date, validDateParams);
      const isFocussed = focussedValue && dateFns.getMonth(focussedValue) === month;
      const isHovered = hoverValue && dateFns.getMonth(hoverValue) === month;
      const isCurrent = dateFns.isSameYear(referenceDate, today) && month === today.getMonth();
      // gives back the month names abbreviation
      const formattedMonth = month > -1 && month <= 11 ? {
        abbreviated: DateUtils.getLocaleMonth("abbreviated")[month],
        wide: DateUtils.getLocaleMonth("wide")[month]
      } : undefined;
      const isInitialFocussedValue = focussedValue && isFocussed || !focussedValue && isCurrent || !focussedValue && isSelected;
      return (
        /*#__PURE__*/
        // eslint-disable-next-line
        React__default.createElement("td", {
          id: `${id}-${month}`,
          className: DomUtils.cleanupClassObject({
            [`${DatePickerFlyout_styles.hostClass}-td`]: true,
            [`${DatePickerFlyout_styles.hostClass}-td__disabled`]: !isSelectable,
            [`${DatePickerFlyout_styles.hostClass}-td__selected`]: isSelected && isSelectable,
            [`${DatePickerFlyout_styles.hostClass}-td__hovered`]: isHovered && isSelectable,
            [`${DatePickerFlyout_styles.hostClass}-td__current`]: isCurrent && isSelectable
          }),
          onClick: event => {
            if (isSelectable) {
              onChange(dateFns.startOfMonth(date), name, event);
              onFocussedValueChange(undefined);
              onClose();
            }
          },
          onMouseOver: () => {
            if (isSelectable) {
              onHoverValueChange(dateFns.startOfMonth(date));
            }
          },
          onMouseOut: () => {
            if (isSelected) {
              onHoverValueChange(undefined);
            }
          },
          onFocus: () => {
            /* -- empty --*/
          },
          onBlur: () => {
            /* -- empty --*/
          },
          key: month,
          role: isSelectable ? "button" : undefined,
          "aria-selected": isSelected,
          "aria-disabled": !isSelectable,
          tabIndex: isInitialFocussedValue ? 0 : -1,
          ref: ref => {
            if (isInitialFocussedValue) {
              // eslint-disable-next-line no-param-reassign
              tabIndexRef.current = ref;
            }
            if (isFocussed && isSelectable) {
              // eslint-disable-next-line no-param-reassign
              focussedRef.current = ref;
            }
          }
        }, /*#__PURE__*/React__default.createElement("span", {
          className: DomUtils.cleanupClassObject({
            [`${DatePickerFlyout_styles.hostClass}-text`]: true
          }),
          "aria-label": formattedMonth?.wide
        }, formattedMonth?.abbreviated))
      );
    }))))));
  }
  return datePickerCalendarGrid;
};
DatePickerCalendarGrid.displayName = "DatePickerCalendarGrid";

exports.DatePickerCalendarGrid = DatePickerCalendarGrid;
