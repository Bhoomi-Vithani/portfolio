import React__default from 'react';
import { TogglePresentation } from '../../_Toggle/TogglePresentation.js';
import { hostClass } from './Switch.styles.js';

const SwitchPresentation = ({ value, 
//    hasMouseHover,
//    disabled,
//    invalid,
...otherProps }) => {
    const indeterminate = value === undefined;
    return (React__default.createElement(TogglePresentation, { hostClass: hostClass, type: "switch", value: value, indeterminate: indeterminate, ...otherProps }, value && (React__default.createElement("svg", { viewBox: "0 0 16 16", className: `${hostClass}-svg ${hostClass}-svg-checked-position`, "aria-hidden": "true" },
        React__default.createElement("path", { className: `${hostClass}-path`, fill: "none", stroke: "transparent", strokeWidth: 1, d: "M2,8 6,12 14,4" })))));
};
SwitchPresentation.displayName = "SwitchPresentation";

export { SwitchPresentation };
