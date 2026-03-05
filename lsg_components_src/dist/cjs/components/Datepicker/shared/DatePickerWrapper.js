'use strict';

var dateFns = require('date-fns');
var React__default = require('react');
var Keys = require('../../../utils/Keys.js');
var DatePickerPresentation = require('./DatePickerPresentation.js');

// @ts-strict-ignore
const DatePickerInternalWrapper = props => {
  const [open, setOpen] = React__default.useState();
  const containerElementRef = React__default.useRef(undefined);
  const inputElementRef = React__default.useRef(undefined);
  const flyoutElementRef = React__default.useRef(undefined);
  const hostRef = React__default.useRef(undefined);
  // TODO: Insufficient implemented, should be considered when a11y topics will implemented completely
  const handleOnKeyDownInput = ev => {
    // Event management on input field
    switch (ev.key) {
      case Keys.Key.ArrowDown:
        if (document.activeElement === inputElementRef.current) {
          if (flyoutElementRef.current && !open) {
            setOpen(true);
            break;
          }
        }
        break;
      case Keys.Key.Enter:
        if (document.activeElement === inputElementRef.current) {
          // text field variant
          if (!open) {
            setOpen(true);
          } else {
            // value is selected and flyout should be closed
            setOpen(false);
          }
        }
        break;
      case Keys.Key.Escape:
        // close flyout explicit
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
  const handleOnBlur = event => {
    // Weird: The event.relatedTarget=<something inside the flyout element>, but flyoutElement is not yet
    // rendered at that time, so we need to delay the check to the next frame to get the correct flyoutElement
    requestAnimationFrame(() => {
      if (hostRef.current?.contains(event.relatedTarget) || flyoutElementRef.current?.contains(event.relatedTarget)) {
        return;
      }
      if (props.onBlur) {
        props.onBlur(event, props.name);
      }
    });
  };
  return /*#__PURE__*/React__default.createElement(DatePickerPresentation.DatePickerPresentation, {
    ...props,
    open: open,
    onOpenChange: newOpen => setOpen(newOpen),
    containerRef: containerElementRef,
    containerElement: containerElementRef.current,
    inputRef: inputElementRef,
    flyoutRef: flyoutElementRef,
    inputElement: inputElementRef.current,
    onKeyDown: handleOnKeyDownInput,
    hostRef: hostRef,
    handleOnBlur: handleOnBlur
  });
};
const DatePickerWrapper = ({
  minDate,
  maxDate,
  datepickerFormat,
  dateFormat,
  ...props
}) => {
  let minDateClean;
  let maxDateClean;
  // TODO V20: Remove deprecated datepickerFormat
  const appliedDateFormat = dateFormat || datepickerFormat;
  if (appliedDateFormat === "month") {
    minDateClean = dateFns.isDate(minDate) ? dateFns.startOfMonth(minDate) : undefined;
    maxDateClean = dateFns.isDate(maxDate) ? dateFns.startOfMonth(maxDate) : undefined;
  } else {
    minDateClean = dateFns.isDate(minDate) ? dateFns.startOfDay(minDate) : undefined;
    maxDateClean = dateFns.isDate(maxDate) ? dateFns.startOfDay(maxDate) : undefined;
  }
  return /*#__PURE__*/React__default.createElement(DatePickerInternalWrapper, {
    ...props,
    datepickerFormat: datepickerFormat,
    minDate: minDateClean,
    maxDate: maxDateClean
  });
};

exports.DatePickerInternalWrapper = DatePickerInternalWrapper;
exports.DatePickerWrapper = DatePickerWrapper;
