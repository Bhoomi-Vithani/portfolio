import React__default from 'react';
import { TogglePresentation } from '../../_Toggle/TogglePresentation.js';
import { hostClass } from './Checkbox.styles.js';

const CheckboxPresentation = ({ value, onChange = () => {
    /* empty */
}, ...otherProps }) => {
    const indeterminate = value === undefined;
    return (React__default.createElement(TogglePresentation, { ...otherProps, value: value, onChange: onChange, hostClass: hostClass, type: "checkbox", indeterminate: indeterminate },
        React__default.createElement("div", { className: `${hostClass}-border` }),
        !indeterminate && (React__default.createElement("svg", { viewBox: "0 0 16 16", className: `${hostClass}-svg`, "aria-hidden": "true" },
            React__default.createElement("path", { className: `${hostClass}-path`, fill: "none", stroke: "transparent", strokeWidth: 2, d: "M2,8 6,12 14,4" }))),
        indeterminate && (React__default.createElement("svg", { viewBox: "0 0 16 16", className: `${hostClass}-svg`, "aria-hidden": "true" },
            React__default.createElement("path", { className: `${hostClass}-path`, fill: "none", stroke: "transparent", strokeWidth: 2, d: "M2,8 14,8" })))));
};
CheckboxPresentation.displayName = "CheckboxPresentation";

export { CheckboxPresentation };
