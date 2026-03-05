import React__default from 'react';
import { cleanupClassObject } from '../../utils/DomUtils.js';
import { fRef } from '../../utils/React.js';
import { SpinnerPresentation } from '../Spinner/shared/SpinnerPresentation.js';
import { mainClass } from './Label.styles.js';

// @ts-strict-ignore
const defaultProps = {
    onMouseHoverChange: () => {
        /* empty */
    },
    onKeyboardFocusChange: () => {
        /* empty */
    },
    type: "label",
};
// TODO: Search bei den Änderungen des Spinners nicht identifiziert, nur durch jetzige Umstellung auf ariaLabel-Mandatory. Änderung bei A11y-Anpassung der Search.
const LabelPresentation = fRef(props => {
    const { disabled, loading, id, ref, children, htmlAttrs, className, expandToOverlay, htmlFor, onMouseHoverChange, onKeyboardFocusChange, isDisplayInline, type, value, onChange, name, htmlInputAttrs, nonInteractive, } = props;
    return (React__default.createElement(React__default.Fragment, null,
        type !== "label" && !nonInteractive && (React__default.createElement("input", { id: htmlFor, className: `${mainClass}-input`, type: type, checked: value, onChange: e => onChange(e.target.checked, name, e), onMouseEnter: () => {
                if (document.documentElement.getAttribute("data-whatintent") === "mouse") {
                    onMouseHoverChange(true);
                }
            }, onMouseLeave: () => onMouseHoverChange(false), onFocus: () => {
                if (document.documentElement.getAttribute("data-whatinput") === "keyboard") {
                    onKeyboardFocusChange(true);
                }
            }, onBlur: () => onKeyboardFocusChange(false), ...htmlInputAttrs })),
        nonInteractive ? (React__default.createElement("span", { ...htmlAttrs, className: cleanupClassObject({
                [`${mainClass}`]: true,
                [className]: !!className,
                [`${mainClass}__disabled`]: true,
                [`${mainClass}__loading`]: loading,
                [`${mainClass}__overlay`]: expandToOverlay,
                [`${mainClass}__inline`]: isDisplayInline,
            }), id: id, ref: ref, onMouseEnter: () => {
                if (document.documentElement.getAttribute("data-whatintent") === "mouse") {
                    onMouseHoverChange(true);
                }
            }, onMouseLeave: () => onMouseHoverChange(false), onFocus: () => {
                if (document.documentElement.getAttribute("data-whatinput") === "keyboard") {
                    onKeyboardFocusChange(true);
                }
            }, onBlur: () => onKeyboardFocusChange(false) },
            React__default.createElement("div", { className: `${mainClass}-inner` }, children),
            loading && (React__default.createElement("span", { className: `${mainClass}-spinner` },
                React__default.createElement(SpinnerPresentation, { loading: loading, variant: "indeterminate", size: 24, ariaLabel: "" }))))) : (React__default.createElement("label", { ...htmlAttrs, className: cleanupClassObject({
                [`${mainClass}`]: true,
                [className]: !!className,
                [`${mainClass}__disabled`]: disabled,
                [`${mainClass}__loading`]: loading,
                [`${mainClass}__overlay`]: expandToOverlay,
                [`${mainClass}__inline`]: isDisplayInline,
            }), id: id, htmlFor: htmlFor, ref: ref, onMouseEnter: () => {
                if (document.documentElement.getAttribute("data-whatintent") === "mouse") {
                    onMouseHoverChange(true);
                }
            }, onMouseLeave: () => onMouseHoverChange(false), onFocus: () => {
                if (document.documentElement.getAttribute("data-whatinput") === "keyboard") {
                    onKeyboardFocusChange(true);
                }
            }, onBlur: () => onKeyboardFocusChange(false) },
            React__default.createElement("div", { className: `${mainClass}-inner` }, children),
            loading && (React__default.createElement("span", { className: `${mainClass}-spinner` },
                React__default.createElement(SpinnerPresentation, { loading: loading, variant: "indeterminate", size: 24, ariaLabel: "" })))))));
}, defaultProps);
LabelPresentation.displayName = "LabelPresentation";

export { LabelPresentation, defaultProps };
