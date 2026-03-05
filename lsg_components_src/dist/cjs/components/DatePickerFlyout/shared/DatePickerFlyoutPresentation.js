'use strict';

var icons = require('@lsg/icons');
var dateFns = require('date-fns');
var React__default = require('react');
var FocusLock = require('react-focus-lock');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var Host = require('../../../utils/Host.js');
var Keys = require('../../../utils/Keys.js');
var Localization = require('../../../utils/Localization.js');
var IconLinkWrapper = require('../../IconLink/shared/IconLinkWrapper.js');
var FlyoutPresentation = require('../../_Flyout/shared/FlyoutPresentation.js');
var DatePickerCalendarGrid = require('./DatePickerCalendarGrid.js');
var DatePickerFlyout_styles = require('./DatePickerFlyout.styles.js');
var DatePickerFlyoutHelper = require('./DatePickerFlyoutHelper.js');

// @ts-strict-ignore
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
const handleKeyDownYearSelection = (ev, focYear, setFocYear, validDateParams, onYearSelected, focussedRef) => {
  const doFocusGridDate = () => {
    window.requestAnimationFrame(() => {
      focussedRef.current?.focus();
    });
  };
  const minYear = DatePickerFlyoutHelper.getFirstValidDate(validDateParams).getFullYear();
  const maxYear = DatePickerFlyoutHelper.getLastValidDate(validDateParams).getFullYear();
  const keyFunction = {
    [Keys.Key.End]: () => {
      doFocusGridDate();
      if (focYear < maxYear) {
        doFocusGridDate();
        setFocYear(maxYear);
      }
    },
    [Keys.Key.Home]: () => {
      doFocusGridDate();
      if (focYear > minYear) {
        doFocusGridDate();
        setFocYear(minYear);
      }
    },
    [Keys.Key.ArrowRight]: () => {
      if (focYear < maxYear) {
        doFocusGridDate();
        setFocYear(focYear + 1);
      }
    },
    [Keys.Key.ArrowLeft]: () => {
      doFocusGridDate();
      if (focYear > minYear) {
        setFocYear(focYear - 1);
      }
    },
    [Keys.Key.ArrowDown]: () => {
      if (focYear < maxYear - 3) {
        doFocusGridDate();
        setFocYear(focYear + 4);
      }
    },
    [Keys.Key.ArrowUp]: () => {
      doFocusGridDate();
      if (focYear > minYear + 3) {
        setFocYear(focYear - 4);
      }
    },
    [Keys.Key.PageDown]: () => {
      doFocusGridDate();
      if (focYear < maxYear - 15) {
        doFocusGridDate();
        setFocYear(focYear + 16);
      } else if (focYear < maxYear) {
        doFocusGridDate();
        setFocYear(maxYear);
      }
    },
    [Keys.Key.PageUp]: () => {
      doFocusGridDate();
      if (focYear > minYear + 15) {
        doFocusGridDate();
        setFocYear(focYear - 16);
      } else if (focYear > minYear) {
        doFocusGridDate();
        setFocYear(minYear);
      }
    },
    [Keys.Key.Enter]: () => {
      doFocusGridDate();
      onYearSelected(focYear);
    },
    [Keys.Key.Escape]: () => {
      doFocusGridDate();
      setFocYear(NaN);
    }
  }[ev.key];
  if (keyFunction) {
    ev.preventDefault();
    keyFunction();
  }
};
const handleKeyDown = (ev, focValue, onChange, onFocusValue, onClose, validDateParams, focussedRef) => {
  let {
    minDate,
    maxDate
  } = validDateParams;
  const {
    datepickerFormat
  } = validDateParams;
  const focussedValue = dateFns.startOfDay(focValue);
  minDate = minDate && dateFns.isDate(minDate) ? dateFns.startOfDay(minDate) : undefined;
  maxDate = maxDate && dateFns.isDate(maxDate) ? dateFns.startOfDay(maxDate) : undefined;
  const params = {
    ...validDateParams,
    minDate,
    maxDate
  };
  const doFocusGridDate = () => {
    window.requestAnimationFrame(() => {
      focussedRef.current?.focus();
    });
  };
  const keyFunction = {
    [Keys.Key.Home]: () => {
      doFocusGridDate();
      if (!focussedValue) return;
      if (datepickerFormat === "month") {
        let m = focussedValue;
        while (DatePickerFlyoutHelper.getValidPreviousMonth(m, params)) {
          m = DatePickerFlyoutHelper.getValidPreviousMonth(m, params);
        }
        return m;
      }
      let d = dateFns.startOfDay(focussedValue);
      while (DatePickerFlyoutHelper.getValidPreviousDate(d, params) && DatePickerFlyoutHelper.getValidPreviousDate(d, params) >= dateFns.startOfMonth(d)) {
        d = DatePickerFlyoutHelper.getValidPreviousDate(d, params);
      }
      return d;
    },
    [Keys.Key.End]: () => {
      doFocusGridDate();
      if (!focussedValue) return;
      if (datepickerFormat === "month") {
        let m = focussedValue;
        while (DatePickerFlyoutHelper.getValidNextMonth(m, params)) {
          m = DatePickerFlyoutHelper.getValidNextMonth(m, params);
        }
        return m;
      }
      let d = dateFns.startOfDay(focussedValue);
      while (DatePickerFlyoutHelper.getValidNextDate(d, params) && DatePickerFlyoutHelper.getValidNextDate(d, params) <= dateFns.startOfDay(dateFns.endOfMonth(d))) {
        d = DatePickerFlyoutHelper.getValidNextDate(d, params);
      }
      return d;
    },
    [Keys.Key.ArrowDown]: () => {
      doFocusGridDate();
      if (!focussedValue) return;
      if (datepickerFormat === "month") {
        // Check for at least 4 month in the future, but if the latest next month is less than 4 months
        // in the future, select the latest month that is valid.
        for (let i = 3; i > 0; i--) {
          if (DatePickerFlyoutHelper.getValidNextMonth(dateFns.addMonths(focussedValue, i), params)) {
            return DatePickerFlyoutHelper.getValidNextMonth(dateFns.addMonths(focussedValue, i), params);
          }
        }
      }
      return DatePickerFlyoutHelper.getValidNextDate(dateFns.addDays(focussedValue, 6), params);
    },
    [Keys.Key.ArrowUp]: () => {
      doFocusGridDate();
      if (!focussedValue) return;
      if (datepickerFormat === "month") {
        // if (minDate && startOfMonth(subMonths(focussedValue, 4)) < startOfMonth(minDate)) {
        //     return;
        // }
        // Check for at least 4 month in the past, but if the earliest previous months is less than 4 months
        // ago, select the earliest month that is valid.
        for (let i = 3; i > 0; i--) {
          if (DatePickerFlyoutHelper.getValidPreviousMonth(dateFns.subMonths(focussedValue, i), params)) {
            return DatePickerFlyoutHelper.getValidPreviousMonth(dateFns.subMonths(focussedValue, i), params);
          }
        }
      }
      return DatePickerFlyoutHelper.getValidPreviousDate(dateFns.subDays(focussedValue, 6), params);
    },
    [Keys.Key.ArrowLeft]: () => {
      doFocusGridDate();
      if (!focussedValue) return;
      if (datepickerFormat === "month") {
        return DatePickerFlyoutHelper.getValidPreviousMonth(focussedValue, params);
      }
      return DatePickerFlyoutHelper.getValidPreviousDate(focussedValue, params);
    },
    [Keys.Key.ArrowRight]: () => {
      doFocusGridDate();
      if (!focussedValue) return;
      if (datepickerFormat === "month") {
        return DatePickerFlyoutHelper.getValidNextMonth(focussedValue, params);
      }
      return DatePickerFlyoutHelper.getValidNextDate(focussedValue, params);
    },
    [Keys.Key.PageUp]: () => {
      doFocusGridDate();
      if (!focussedValue) return;
      if (datepickerFormat === "month") {
        // Check for at least 12 month in the past, but if the earliest previous month is less than 12 months
        // ago, select the earliest month that is valid.
        for (let i = 11; i > 0; i--) {
          if (DatePickerFlyoutHelper.getValidPreviousMonth(dateFns.subMonths(focussedValue, i), params)) {
            return DatePickerFlyoutHelper.getValidPreviousMonth(dateFns.subMonths(focussedValue, i), params);
          }
        }
      }
      if (minDate && dateFns.subMonths(focussedValue, 1) < minDate) {
        return;
      }
      return dateFns.subMonths(focussedValue, 1);
    },
    [Keys.Key.PageDown]: () => {
      doFocusGridDate();
      if (!focussedValue) return;
      if (datepickerFormat === "month") {
        // Check for at least 12 month in the future, but if the latest next month is less than 12 months
        // in the future, select the latest month that is valid.
        for (let i = 11; i > 0; i--) {
          if (DatePickerFlyoutHelper.getValidNextMonth(dateFns.addMonths(focussedValue, i), params)) {
            return DatePickerFlyoutHelper.getValidNextMonth(dateFns.addMonths(focussedValue, i), params);
          }
        }
      }
      if (maxDate && dateFns.addMonths(focussedValue, 1) > maxDate) {
        return;
      }
      return dateFns.addMonths(focussedValue, 1);
    },
    [Keys.Key.Enter]: () => {
      if (!focussedValue) return;
      if (datepickerFormat === "month") {
        if (DatePickerFlyoutHelper.isMonthSelectable(dateFns.startOfMonth(focussedValue), params)) {
          onChange(dateFns.startOfMonth(focussedValue));
        }
        onClose();
        return;
      }
      onChange(focussedValue);
      onClose();
    },
    [Keys.Key.Space]: () => {
      if (!focussedValue) return;
      if (datepickerFormat === "month") {
        onChange(dateFns.startOfMonth(focussedValue));
        onClose();
        return;
      }
      onChange(focussedValue);
      onClose();
    },
    [Keys.Key.Escape]: () => {
      onClose();
      onFocusValue(undefined);
    }
  }[ev.key];
  if (keyFunction) {
    if (ev.key !== Keys.Key.Tab) {
      ev.preventDefault();
    }
    const newDate = keyFunction();
    if (newDate !== undefined) {
      onFocusValue(DatePickerFlyoutHelper.getClosestValidDate(newDate, params));
    }
  }
};
const DatePickerFlyoutPresentation = ({
  className,
  noMargin,
  onChange = () => {
    /* empty */
  },
  value,
  id,
  maxDate,
  minDate = DatePickerFlyoutHelper.minDefaultDate,
  open,
  onClose,
  toggleContainerElement,
  hostRef,
  name,
  datepickerFormat = "day",
  toggleElement,
  disabledDates,
  selectableDates,
  weekendsDisabled,
  chipVariant,
  noYearPicker,
  today: todayProp
}) => {
  // cjs issue: There seems to be a bug from FocusLock regarding the cjs export, which is used by tests and probably ssr apps, too.
  // With cjs, the FocusLock component is exported as a "default" attribute of an object.
  // With esm/esm-es5, the component is the default imported FocusLock component.
  const FocusLockComponent = FocusLock.default || FocusLock;
  const [focussedValue, setFocussedValue] = React__default.useState();
  const [focussedYear, setFocussedYear] = React__default.useState();
  const [isYearSelection, setIsYearSelection] = React__default.useState(false);
  const [hoverValue, setHoverValue] = React__default.useState(undefined);
  const today = todayProp || new Date();
  const effectiveMaxDate = maxDate || DatePickerFlyoutHelper.maxDefaultDate(today);
  const isMaxDateInPast = effectiveMaxDate < today;
  const isMinDateInFuture = minDate > today;
  const referenceDate = focussedValue && dateFns.startOfDay(focussedValue) || value && dateFns.startOfDay(value) || isMaxDateInPast && dateFns.startOfDay(effectiveMaxDate) || isMinDateInFuture && dateFns.startOfDay(minDate) || dateFns.startOfDay(today);
  const label = datepickerFormat === "month" ? dateFns.format(referenceDate, "yyyy", {
    locale: Localization.formats.dateLocale
  }) : dateFns.format(referenceDate, "MMMM yyyy", {
    locale: Localization.formats.dateLocale
  });
  const ariaLabel = `${label},
     ${isYearSelection ? Localization.texts.lsg.component.Datepicker.yearSelectionButtonDialogOpened : Localization.texts.lsg.component.Datepicker.yearSelectionButtonDialogClosed}`;
  const labelId = `${id}-label`;
  const arrowRightId = `${id}-arrow-right`;
  const arrowLeftId = `${id}-arrow-left`;
  const yearPickerId = `${id}-year-picker`;
  const tabIndexRef = React__default.useRef(undefined);
  const focussedRef = React__default.useRef(undefined);
  const yearPickerRef = React__default.useRef(undefined);
  React__default.useEffect(() => {
    // set initial focus to date/month in CalendarGrid
    if (open) {
      tabIndexRef.current?.focus();
    } else {
      // focus the datepicker icon or the date picker chip.
      setFocussedValue(undefined);
      setIsYearSelection(false);
      toggleElement?.focus();
    }
  }, [open]);
  const validDateParams = {
    minDate,
    maxDate: effectiveMaxDate,
    disabledDates,
    selectableDates,
    weekendsDisabled,
    datepickerFormat,
    today
  };
  const onYearSelected = year => {
    let newDate = new Date(referenceDate);
    newDate.setFullYear(year);
    const minDateMonth = dateFns.startOfMonth(newDate);
    const maxDateMonth = dateFns.startOfDay(dateFns.endOfMonth(newDate));
    const params = {
      ...validDateParams,
      minDate: minDateMonth,
      maxDate: maxDateMonth
    };
    newDate = DatePickerFlyoutHelper.getClosestValidDate(newDate, params);
    setFocussedValue(newDate);
    setFocussedYear(NaN);
    setIsYearSelection(false);
  };
  const onToggleYearSelection = () => {
    if (isYearSelection) {
      setIsYearSelection(false);
      setFocussedYear(NaN);
    } else {
      setIsYearSelection(true);
      setFocussedYear(referenceDate.getFullYear());
      window.requestAnimationFrame(() => {
        focussedRef.current?.focus();
        focussedRef.current?.scrollIntoView({
          block: "nearest",
          behavior: "instant",
          inline: "nearest"
        });
        yearPickerRef.current?.scrollBy(0, -2);
      });
    }
  };
  const handleOnKeyDownFlyout = ev => {
    if ([Keys.Key.PageDown, Keys.Key.PageUp, Keys.Key.ArrowUp, Keys.Key.ArrowDown, Keys.Key.ArrowLeft, Keys.Key.ArrowRight, Keys.Key.Escape, Keys.Key.Enter, Keys.Key.Space, Keys.Key.Home, Keys.Key.End].includes(ev.key)) {
      if (isYearSelection) {
        handleKeyDownYearSelection(ev, focussedYear, setFocussedYear, validDateParams, onYearSelected, focussedRef);
      } else {
        handleKeyDown(ev, focussedValue || dateFns.isDate(value) && value || dateFns.startOfDay(today), val => onChange(val, name, ev), val => setFocussedValue(val), () => {
          onClose();
        }, validDateParams, focussedRef);
      }
    }
  };
  const labelIcon = datepickerFormat === "day" && isYearSelection ? icons.interaction_arrows_chevronUp : icons.interaction_arrows_chevronDown;
  const actionButtonsFlyout = () => (/*#__PURE__*/React__default.createElement("div", {
    className: `${DatePickerFlyout_styles.hostClass}-flyout-buttons`
  }, /*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
    id: `${id}-cancel-button`,
    label: Localization.texts.lsg.component.Datepicker.cancelButton,
    appearance: "no-icon",
    inline: true,
    onClick: () => {
      onClose();
    }
  }), /*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
    id: `${id}-confirm-button`,
    label: Localization.texts.lsg.component.Datepicker.confirmButton,
    appearance: "no-icon",
    inline: true,
    onClick: event => {
      if (focussedValue) {
        onChange(focussedValue, name, event);
      }
      onClose();
    }
  })));
  React__default.useEffect(() => {
    if (focussedValue && focussedValue !== hoverValue) {
      setHoverValue(focussedValue);
    }
    if (focussedYear && focussedYear !== hoverValue?.getFullYear()) {
      const newFocus = new Date(referenceDate);
      newFocus.setFullYear(focussedYear);
      setHoverValue(newFocus);
    }
  }, [focussedValue, focussedYear]);
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [DatePickerFlyout_styles.hostClass]: true,
      [`${prefix.lsgPre}no-margin`]: noMargin
    }),
    id: `${id}-base`
  }, /*#__PURE__*/React__default.createElement(FlyoutPresentation.FlyoutPresentation, {
    id: `${id}-flyout`,
    className: DomUtils.cleanupClassObject({
      [`${DatePickerFlyout_styles.hostClass}-flyout__closed`]: !open
    }),
    open: open,
    onClose: onClose,
    toggleContainerElement: toggleContainerElement,
    isToggleElmWidth: false,
    hasTabIndex: false,
    hostRef: hostRef,
    stretchBreakpointBu: 107,
    withGap: true,
    ariaLabel: Localization.texts.lsg.component.Datepicker.calendarLabel,
    toggleElement: toggleElement,
    htmlAttrs: {
      role: "dialog"
    },
    preferOpenToLeft: !chipVariant,
    minWidth: 320
  }, /*#__PURE__*/React__default.createElement(FocusLockComponent, {
    disabled: !open,
    returnFocus: true
  }, datepickerFormat === "day" ? (
  /*#__PURE__*/
  // If daily calendar (dd.mm.yyyy)
  React__default.createElement("div", {
    className: `${DatePickerFlyout_styles.hostClass}-wrapper`,
    id: id
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${DatePickerFlyout_styles.hostClass}-wrapper-header`
  }, !isYearSelection && (/*#__PURE__*/React__default.createElement("div", {
    className: `${DatePickerFlyout_styles.hostClass}-next-prev`
  }, /*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
    label: Localization.texts.lsg.component.Datepicker.previousMonth,
    htmlAttrs: {
      "aria-label": Localization.texts.lsg.component.Datepicker.previousMonth
    },
    icon: icons.interaction_arrows_chevronLeft,
    appearance: "no-text",
    disabled: !DatePickerFlyoutHelper.getValidPreviousDate(dateFns.startOfMonth(referenceDate), validDateParams),
    onClick: () => {
      const datePreviousMonth = dateFns.subMonths(referenceDate, 1);
      let newFocussedValue;
      const validPrevDate = DatePickerFlyoutHelper.getValidPreviousDate(dateFns.addDays(datePreviousMonth, 1), validDateParams);
      const validNextDate = DatePickerFlyoutHelper.getValidNextDate(datePreviousMonth, validDateParams);
      if (validPrevDate >= dateFns.startOfMonth(datePreviousMonth)) {
        newFocussedValue = validPrevDate;
      } else if (validNextDate <= dateFns.endOfMonth(datePreviousMonth)) {
        newFocussedValue = validNextDate;
      } else {
        newFocussedValue = validPrevDate;
      }
      setFocussedValue(newFocussedValue);
    },
    hasTabIndex: true,
    id: arrowLeftId
  }))), !noYearPicker && (/*#__PURE__*/React__default.createElement("div", {
    className: `${DatePickerFlyout_styles.hostClass}-label`
  }, /*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
    label: label,
    htmlAttrs: {
      "aria-label": ariaLabel,
      "aria-expanded": isYearSelection,
      "aria-controls": yearPickerId,
      "aria-live": "assertive"
    },
    id: labelId,
    onClick: onToggleYearSelection,
    icon: labelIcon,
    appearance: "right"
  }))) || (/*#__PURE__*/React__default.createElement("div", {
    className: `${DatePickerFlyout_styles.hostClass}-label`,
    id: labelId,
    "aria-live": "assertive",
    "aria-atomic": true
  }, label)), !isYearSelection && (/*#__PURE__*/React__default.createElement("div", {
    className: `${DatePickerFlyout_styles.hostClass}-next-prev`
  }, /*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
    label: Localization.texts.lsg.component.Datepicker.nextMonth,
    htmlAttrs: {
      "aria-label": Localization.texts.lsg.component.Datepicker.nextMonth
    },
    icon: icons.interaction_arrows_chevronRight,
    appearance: "no-text",
    disabled: !DatePickerFlyoutHelper.getValidNextDate(dateFns.endOfMonth(referenceDate), validDateParams),
    onClick: () => {
      const dateNextMonth = dateFns.addMonths(referenceDate, 1);
      let newFocussedValue;
      const validNextDate = DatePickerFlyoutHelper.getValidNextDate(dateFns.subDays(dateNextMonth, 1), validDateParams);
      const validPrevDate = DatePickerFlyoutHelper.getValidPreviousDate(dateNextMonth, validDateParams);
      if (validNextDate <= dateFns.endOfMonth(dateNextMonth)) {
        newFocussedValue = validNextDate;
      } else if (validPrevDate >= dateFns.startOfMonth(dateNextMonth)) {
        newFocussedValue = validPrevDate;
      } else {
        newFocussedValue = validNextDate;
      }
      setFocussedValue(newFocussedValue);
    },
    hasTabIndex: true,
    id: arrowRightId
  })))), /*#__PURE__*/React__default.createElement(DatePickerCalendarGrid.DatePickerCalendarGrid, {
    id: `${id}-calendar-grid`,
    yearPickerId: yearPickerId,
    focussedValue: focussedValue,
    onChange: onChange,
    value: value,
    maxDate: effectiveMaxDate,
    minDate: minDate,
    onClose: onClose,
    name: name,
    datepickerFormat: datepickerFormat,
    tabIndexRef: tabIndexRef,
    referenceDate: referenceDate,
    focussedRef: focussedRef,
    yearPickerRef: yearPickerRef,
    disabledDates: disabledDates,
    selectableDates: selectableDates,
    weekendsDisabled: weekendsDisabled,
    onKeyDown: handleOnKeyDownFlyout,
    onFocussedValueChange: newFocus => setFocussedValue(newFocus),
    isYearSelection: isYearSelection,
    onYearSelected: onYearSelected,
    focussedYear: focussedYear,
    onFocussedYearChange: setFocussedYear,
    hoverValue: hoverValue,
    onHoverValueChange: newHover => setHoverValue(newHover),
    today: today
  }), !isYearSelection && actionButtonsFlyout())) : (
  /*#__PURE__*/
  // If monthly calendar (mm.yyyy), {datepickerFormat === "month"
  React__default.createElement("div", {
    className: `${DatePickerFlyout_styles.hostClass}-wrapper`,
    id: id
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${DatePickerFlyout_styles.hostClass}-wrapper-header`
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${DatePickerFlyout_styles.hostClass}-next-prev`
  }, /*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
    label: Localization.texts.lsg.component.Datepicker.previousYear,
    htmlAttrs: {
      "aria-label": Localization.texts.lsg.component.Datepicker.previousYear
    },
    icon: icons.interaction_arrows_chevronLeft,
    appearance: "no-text",
    disabled: referenceDate.getFullYear() <= minDate.getFullYear(),
    onClick: () => {
      setFocussedValue(DatePickerFlyoutHelper.getClosestValidDate(dateFns.subYears(referenceDate, 1), validDateParams));
    },
    hasTabIndex: true,
    id: arrowLeftId
  })), /*#__PURE__*/React__default.createElement("div", {
    className: `${DatePickerFlyout_styles.hostClass}-label`,
    id: labelId,
    "aria-live": "assertive",
    "aria-atomic": true
  }, label), /*#__PURE__*/React__default.createElement("div", {
    className: `${DatePickerFlyout_styles.hostClass}-next-prev`
  }, /*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
    label: Localization.texts.lsg.component.Datepicker.nextYear,
    htmlAttrs: {
      "aria-label": Localization.texts.lsg.component.Datepicker.nextYear
    },
    icon: icons.interaction_arrows_chevronRight,
    appearance: "no-text",
    disabled: referenceDate.getFullYear() >= effectiveMaxDate.getFullYear(),
    onClick: () => {
      setFocussedValue(DatePickerFlyoutHelper.getClosestValidDate(dateFns.addYears(referenceDate, 1), validDateParams));
    },
    hasTabIndex: true,
    id: arrowRightId
  }))), /*#__PURE__*/React__default.createElement(DatePickerCalendarGrid.DatePickerCalendarGrid, {
    id: `${id}-calendar-grid`,
    yearPickerId: yearPickerId,
    focussedValue: focussedValue,
    onChange: onChange,
    value: value,
    maxDate: effectiveMaxDate,
    minDate: minDate,
    onClose: onClose,
    name: name,
    datepickerFormat: datepickerFormat,
    tabIndexRef: tabIndexRef,
    referenceDate: referenceDate,
    focussedRef: focussedRef,
    disabledDates: disabledDates,
    weekendsDisabled: weekendsDisabled,
    selectableDates: selectableDates,
    onKeyDown: handleOnKeyDownFlyout,
    onFocussedValueChange: newFocus => setFocussedValue(newFocus),
    hoverValue: hoverValue,
    onHoverValueChange: newHover => setHoverValue(newHover),
    today: today
  }), actionButtonsFlyout())))));
};
DatePickerFlyoutPresentation.displayName = "DatePickerFlyoutPresentation";

exports.DatePickerFlyoutPresentation = DatePickerFlyoutPresentation;
exports.handleKeyDown = handleKeyDown;
exports.handleKeyDownYearSelection = handleKeyDownYearSelection;
