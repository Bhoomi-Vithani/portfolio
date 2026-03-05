'use strict';

var icons = require('@lsg/icons');
var dateFns = require('date-fns');
var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DateUtils = require('../../../utils/DateUtils.js');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var Host = require('../../../utils/Host.js');
var Localization = require('../../../utils/Localization.js');
var ChipsItemActionPresentation = require('../../ChipsItemAction/shared/ChipsItemActionPresentation.js');
var DatePickerFlyoutPresentation = require('../../DatePickerFlyout/shared/DatePickerFlyoutPresentation.js');
var DateTextFieldWrapper = require('../../DateTextField/shared/DateTextFieldWrapper.js');
var SpacingContext = require('../../FormContainer/shared/SpacingContext.js');
var IconLinkWrapper = require('../../IconLink/shared/IconLinkWrapper.js');
var DatePicker_styles = require('./DatePicker.styles.js');

// @ts-strict-ignore
const DatePickerPresentation = ({
  id: idProp,
  className,
  noMargin,
  name,
  value,
  label,
  open = false,
  disabled,
  clearIcon = true,
  errorText,
  helperText,
  invalid,
  optional,
  optionalText,
  placeholder,
  readOnly,
  onFocus = () => {
    /* empty */
  },
  onChange = () => {
    /* empty */
  },
  inputRef,
  containerRef,
  containerElement,
  htmlAttrs,
  flyoutRef,
  hostRef,
  isStencilHost,
  minDate,
  maxDate,
  dateFormat,
  datepickerFormat = "day",
  disabledDates,
  weekendsDisabled,
  selectableDates,
  chipVariant = false,
  chipSelected,
  chipResetFilter,
  onKeyDown,
  onOpenChange,
  handleOnBlur,
  noYearPicker,
  errorTextAriaLive,
  spacing,
  today
}) => {
  const {
    spacing: spacingFromContext
  } = React__default.useContext(SpacingContext.SpacingContext); // For FormContainer with spacing="dense"
  const effectiveSpacing = spacing ?? spacingFromContext; // For spacing prop usage in DatePicker
  // is currently interacted with by user (e.g. Tab key or mouse click)
  const [isFocused, setIsFocused] = React__default.useState(false);
  const maxDateClean = maxDate && dateFns.startOfDay(maxDate);
  const minDateClean = minDate && dateFns.startOfDay(minDate);
  const id = index.useUniqueId(`${DatePicker_styles.hostClass}-`, idProp);
  const textFieldIconRef = React__default.useRef(undefined);
  const valueClean =
  // eslint-disable-next-line no-nested-ternary
  dateFns.isDate(value) && typeof value === "object" ? dateFns.startOfDay(value) : value === undefined ? "" : value;
  const valueOutOfRange = dateFns.isDate(valueClean) && (valueClean > maxDateClean || valueClean < minDateClean);
  let dateFormatChip = value;
  const appliedDateFormat = dateFormat || datepickerFormat || "day";
  if (dateFns.isDate(value)) {
    dateFormatChip = appliedDateFormat === "month" ? dateFns.format(value, DateUtils.getLocaleMonthFormat()) : dateFns.format(value, DateUtils.getLocaleDateFormat());
  }
  let openTextFieldFlyoutButtonLabel;
  if (dateFns.isDate(value)) {
    const formatString = appliedDateFormat === "month" ? DateUtils.getLocaleMonthFormat() : DateUtils.getLocaleDateFormat();
    const stringValue = dateFns.format(value, formatString);
    openTextFieldFlyoutButtonLabel = `${Localization.texts.lsg.component.Datepicker.openCalendar},  ${appliedDateFormat === "month" && Localization.texts.lsg.component.Datepicker.openCalendarSelectedMonth || Localization.texts.lsg.component.Datepicker.openCalendarSelectedDate}: ${stringValue}`;
  } else {
    openTextFieldFlyoutButtonLabel = `${Localization.texts.lsg.component.Datepicker.openCalendar}, ${appliedDateFormat === "month" && Localization.texts.lsg.component.Datepicker.openCalendarNoMonth || Localization.texts.lsg.component.Datepicker.openCalendarNoDate}`;
  }
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [DatePicker_styles.hostClass]: true,
      [`${prefix.lsgPre}no-margin`]: noMargin || chipVariant,
      [`${DatePicker_styles.hostClass}-chip`]: chipVariant
    }),
    isStencilHost: isStencilHost,
    onBlur: handleOnBlur,
    ref: hostRef,
    id: `${id}-base`
  }, chipVariant ? (/*#__PURE__*/React__default.createElement(ChipsItemActionPresentation.ChipsItemActionPresentation, {
    id: id,
    label: dateFormatChip || label,
    onClick: () => onOpenChange(true),
    ref: inputRef,
    clearIcon: clearIcon,
    isSelected: chipSelected,
    icon: icons.object___calender,
    appearance: "left",
    iconVariant: "outline",
    htmlAttrs: htmlAttrs,
    onKeyDown: onKeyDown,
    onResetFilter: chipResetFilter
  })) : (/*#__PURE__*/React__default.createElement(DateTextFieldWrapper.DateTextFieldWrapper, {
    id: id,
    name: name,
    value: valueClean,
    clearIcon: clearIcon,
    label: label,
    noMargin: true,
    iconLink: /*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
      color: open || dateFns.isDate(valueClean) && !valueOutOfRange || isFocused ? "primary" : "secondary",
      label: openTextFieldFlyoutButtonLabel,
      icon: !readOnly ? icons.object___calender : undefined,
      onClick: () => onOpenChange(!open),
      hasTabIndex: true,
      name: name,
      actionRef: textFieldIconRef
    }),
    onFocus: (e, n) => {
      setIsFocused(true);
      onFocus(e, n);
    },
    onChange: onChange,
    onClearIconClick: event => {
      if (readOnly) {
        return;
      }
      onChange("", name, event);
      onOpenChange(false);
    },
    onBlur: e => {
      // Reset isFocused if no value is present
      if (!valueClean) {
        setIsFocused(false);
      }
      handleOnBlur?.(e);
    },
    "aria-haspopup": "listbox" // see https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html
    ,
    "aria-expanded": open.toString(),
    placeholder: placeholder,
    dateFormat: appliedDateFormat,
    invalid: invalid || !!errorText,
    readonly: readOnly,
    optional: optional,
    optionalText: optionalText,
    disabled: disabled,
    htmlAttrs: htmlAttrs,
    inputRef: inputRef,
    containerRef: containerRef,
    onKeyDown: onKeyDown,
    errorText: errorText,
    helperText: helperText,
    errorTextAriaLive: errorTextAriaLive,
    spacing: effectiveSpacing
  })), !readOnly && !disabled && (/*#__PURE__*/React__default.createElement(DatePickerFlyoutPresentation.DatePickerFlyoutPresentation, {
    id: `${id}-flyout`,
    open: open,
    name: name,
    onClose: () => {
      onOpenChange(false);
    },
    value: dateFns.isDate(valueClean) && !valueOutOfRange ? valueClean : undefined,
    onChange: onChange,
    toggleContainerElement: chipVariant && inputRef.current && "chipContainerRef" in inputRef.current ? inputRef?.current?.chipContainerRef() : containerElement,
    hostRef: flyoutRef,
    minDate: minDateClean,
    maxDate: maxDateClean,
    datepickerFormat: datepickerFormat,
    disabledDates: disabledDates,
    weekendsDisabled: weekendsDisabled,
    selectableDates: selectableDates,
    toggleElement: textFieldIconRef.current,
    chipVariant: chipVariant,
    noYearPicker: noYearPicker,
    today: today
  })));
};
DatePickerPresentation.displayName = "DatePickerPresentation";

exports.DatePickerPresentation = DatePickerPresentation;
