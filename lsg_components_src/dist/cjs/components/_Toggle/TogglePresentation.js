'use strict';

var React__default = require('react');
var prefix = require('../../config/prefix.js');
var DomUtils = require('../../utils/DomUtils.js');
var index = require('../../utils/Hooks/index.js');
var Host = require('../../utils/Host.js');
var HelperTextPresentation = require('../_HelperText/HelperTextPresentation.js');

// @ts-strict-ignore
const TogglePresentation = ({
  id: idProp,
  className,
  children,
  noMargin,
  value,
  indeterminate,
  disabled,
  hasKeyboardFocus,
  hasMouseHover,
  invalid,
  htmlAttrs,
  label,
  helperText,
  errorText,
  errorTextAriaLive,
  title,
  onChange = () => {
    /* empty */
  },
  name,
  onKeyboardFocusChange = () => {
    /* empty */
  },
  onMouseHoverChange = () => {
    /* empty */
  },
  type,
  hostClass,
  inputRef
}) => {
  const id = index.useUniqueId(`${hostClass}-`, idProp);
  const labelId = `${id}-label`;
  const errorTextId = `${id}-error-text`;
  const helperTextId = `${id}-helper-text`;
  const combinedInputRef = index.combineRefs(inputRef);
  // adds the indeterminate state to the native input element in the DOM
  React__default.useEffect(() => {
    if (combinedInputRef.current) {
      combinedInputRef.current.indeterminate = !!indeterminate;
    }
  }, [indeterminate]);
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    id: `${id}-base`,
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [hostClass]: true,
      [`${prefix.lsgPre}no-margin`]: noMargin
    }),
    "aria-disabled": disabled
  }, /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${hostClass}-container`]: true,
      [`${hostClass}__checked`]: value || indeterminate,
      [`${hostClass}__disabled`]: disabled,
      [`${hostClass}__hover`]: !disabled && (hasMouseHover || hasKeyboardFocus),
      [`${hostClass}__invalid`]: invalid || errorText
    })
  }, /*#__PURE__*/React__default.createElement("input", {
    "aria-describedby": helperText ? helperTextId : undefined,
    "aria-errormessage": errorText ? errorTextId : undefined,
    "aria-invalid": !!errorText || !!invalid,
    ...htmlAttrs,
    ref: combinedInputRef,
    className: DomUtils.cleanupClassObject({
      [`${hostClass}-input`]: true
    }),
    id: id,
    type: type === "switch" ? "checkbox" : type,
    disabled: disabled,
    "data-value": value ? "true" : "false",
    // TODO: set indeterminate state by javascript
    // The indeterminate property is a special state that can only be set via JavaScript. A checkbox in the indeterminate state signals that the status of the checkbox is neither fully selected nor fully unselected. Example:
    //
    // <input type="checkbox" id="checkbox3" name="checkbox3">
    // <label for="checkbox3">Option 3</label>
    //
    // <script>
    //     const checkbox3 = document.getElementById('checkbox3');
    //
    //     // Set the indeterminate state
    //     checkbox3.indeterminate = true;
    //     console.log(checkbox3.indeterminate);  // true
    //  </script>
    // hs: I changed this from checked={value} to checked={value || false} because I came across
    // this error: "A component is changing a controlled input to be uncontrolled".
    // Copilot advised to set the value either to true or false.
    // Keep in mind: The `checked` attribute in a browser is rendered only once,
    // and does not update dynamically on state change. This is not the same as the `checked` property in JavaScript.
    // React uses the `checked` Prop, so the JS `checked` value to control the state of the checkbox.
    // Also, the JS `checked` value sets the a11y and html form state of the checkbox/radio.
    checked: value || false,
    value: name,
    title: title,
    onChange: e => {
      e.stopPropagation();
      onChange(e.target.checked, name, e);
    },
    onClick: e => {
      // Prevents the click event from bubbling up to the parent element, e.g. a DataTable row
      e.stopPropagation();
    },
    onFocus: () => {
      if (document.documentElement.getAttribute("data-whatinput") === "keyboard") {
        onKeyboardFocusChange(true);
      }
    },
    onBlur: () => onKeyboardFocusChange(false),
    onMouseEnter: () => {
      if (document.documentElement.getAttribute("data-whatintent") === "mouse") {
        onMouseHoverChange(true);
      }
    },
    onMouseLeave: () => onMouseHoverChange(false),
    role: type === "switch" ? "switch" : undefined
  }), /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${hostClass}-background`]: true,
      [`${hostClass}__focus-${type}`]: !disabled && hasKeyboardFocus
    })
  }, type === "switch" ? [children, /*#__PURE__*/React__default.createElement("div", {
    className: `${hostClass}-knob`,
    key: "knob"
  })] : children || /*#__PURE__*/React__default.createElement("div", {
    className: `${hostClass}-knob`
  })), (helperText || errorText || label) && (/*#__PURE__*/React__default.createElement("div", {
    className: `${hostClass}-text`
  }, label && (/*#__PURE__*/React__default.createElement("label", {
    id: labelId,
    className: `${hostClass}-label`,
    htmlFor: id,
    onMouseEnter: () => {
      if (document.documentElement.getAttribute("data-whatintent") === "mouse") {
        onMouseHoverChange(true);
      }
    },
    onMouseLeave: () => onMouseHoverChange(false)
  }, label)), /*#__PURE__*/React__default.createElement(HelperTextPresentation.HelperTextPresentation, {
    errorTextAriaLive: errorTextAriaLive,
    helperText: helperText,
    errorText: errorText,
    helperTextId: helperTextId,
    errorTextId: errorTextId,
    disabled: disabled
  })))));
};
TogglePresentation.displayName = "TogglePresentation";

exports.TogglePresentation = TogglePresentation;
