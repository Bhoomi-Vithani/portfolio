import React__default from 'react';
import { lsgPre } from '../../config/prefix.js';
import { cleanupClassObject } from '../../utils/DomUtils.js';
import { useUniqueId } from '../../utils/Hooks/index.js';
import { Host } from '../../utils/Host.js';
import { HelperTextPresentation } from '../_HelperText/HelperTextPresentation.js';
import { hostClass } from './SelectionGroup.styles.js';

// @ts-strict-ignore
const SelectionGroupPresentation = ({ id: idProp, children, className, noMargin, isStencilHost, direction = "vertical", invalid, label, helperText, errorText, horizontalAlignment, htmlAttrs = {}, }) => {
    const id = useUniqueId(`${hostClass}-`, idProp);
    const fieldsetLegendId = `${id}-fieldset-legend-text`;
    const errorTextId = `${id}-error-text`;
    const helperTextId = `${id}-helper-text`;
    return (React__default.createElement(Host, { id: id, className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
            [`${lsgPre}no-margin`]: noMargin,
            [`${hostClass}__align-${horizontalAlignment}`]: horizontalAlignment,
            [`${hostClass}__${direction}`]: direction,
        }), isStencilHost: isStencilHost },
        React__default.createElement("fieldset", { className: `${hostClass}-fieldset`, "aria-errormessage": errorText ? errorTextId : undefined, "aria-invalid": !!errorText || !!invalid, "aria-labelledby": [
                fieldsetLegendId,
                helperText && helperTextId,
                errorText && errorTextId,
                htmlAttrs["aria-labelledby"],
            ]
                .filter(t => !!t)
                .join(" "), ...htmlAttrs },
            React__default.createElement("legend", { className: `${hostClass}-legend`, id: fieldsetLegendId }, label),
            React__default.createElement("div", { className: `${hostClass}-fieldset-inner` }, children)),
        React__default.createElement(HelperTextPresentation, { className: `${hostClass}-helper-text`, helperText: helperText, errorText: errorText, helperTextId: helperTextId, errorTextId: errorTextId })));
};
SelectionGroupPresentation.displayName = "SelectionGroupPresentation";

export { SelectionGroupPresentation };
