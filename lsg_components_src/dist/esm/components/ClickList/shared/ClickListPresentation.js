import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { useUniqueId } from '../../../utils/Hooks/index.js';
import { Host } from '../../../utils/Host.js';
import { fragmentCount, fragmentMap } from '../../../utils/ReactUtils.js';
import { ParagraphPresentation } from '../../Paragraph/shared/ParagraphPresentation.js';
import { SeparatorLinePresentation } from '../../_SeparatorLine/SeparatorLinePresentation.js';
import { hostClass } from './ClickList.styles.js';

// @ts-strict-ignore
const ClickListPresentation = ({ id, noMargin, children, className, horizontalAlignment, label, spacing, errorText, hostRef, look, handleOnBlur, htmlAttrs = {}, }) => {
    const listType = look || "default";
    const uniqueId = useUniqueId(hostClass.concat(`-${listType}-`), id);
    const errorTextId = useUniqueId(`${hostClass}-error-text-`, id && `${id}-error-text`);
    const labelTextId = useUniqueId(`${hostClass}-label`, id && `${id}-label`);
    const numChildren = fragmentCount(children);
    const Container = look === "radio" || look === "checkbox" || numChildren <= 1 ? "div" : "ul";
    const childrenAs = look === "radio" || look === "checkbox" || numChildren <= 1 ? "div" : "li";
    return (React__default.createElement(Host, { className: cleanupClassObject({
            [className]: !!className,
            [`${hostClass}`]: true,
            [`${hostClass}__align-${horizontalAlignment}`]: horizontalAlignment,
            [`${lsgPre}no-margin`]: noMargin,
            // TODO: spacing used in ClickListLayoutContainer.styles.ts, check if we can improve the structure
            [`${hostClass}__spacing-${spacing}`]: spacing,
        }), id: uniqueId, ref: hostRef, onBlur: handleOnBlur },
        label && (React__default.createElement(React__default.Fragment, null,
            React__default.createElement(ParagraphPresentation, { size: "helper-text", className: `${hostClass}-headline`, noMargin: true, id: labelTextId }, label),
            React__default.createElement(SeparatorLinePresentation, { componentSpacing: "none" }))),
        React__default.createElement(Container, { ...htmlAttrs, className: `${hostClass}-ul`, "aria-errormessage": errorText ? errorTextId : undefined, "aria-invalid": !!errorText, "aria-labelledby": label || errorText || htmlAttrs["aria-labelledby"]
                ? [label && labelTextId, errorText && errorTextId, htmlAttrs["aria-labelledby"]]
                    .filter(t => !!t)
                    .join(" ")
                : undefined, 
            // Use for radio groups role=radiogroup, if you are not using a fieldset https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Radio_Role
            role: 
            // eslint-disable-next-line no-nested-ternary
            look === "radio" && numChildren > 1
                ? "radiogroup"
                : look === "checkbox" && numChildren > 1
                    ? "group"
                    : undefined }, fragmentMap(children, (child) => React__default.cloneElement(child, {
            as: childrenAs,
        }))),
        errorText && (React__default.createElement(ParagraphPresentation, { className: `${hostClass}-errorText`, size: "error-text", id: errorTextId }, errorText))));
};
ClickListPresentation.displayName = "ClickListPresentation";

export { ClickListPresentation };
