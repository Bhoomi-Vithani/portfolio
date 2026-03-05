import React__default, { useContext } from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { ActionPresentation } from '../../Action/shared/ActionPresentation.js';
import { LabelPresentation } from '../../_Label/LabelPresentation.js';
import { A11yMeaningfulLabelContext } from './A11yMeaningfulLabelContext.js';

const A11yMeaningfulLabelPresentation = ({ htmlAttrs, inline = true, ...props }) => {
    const { type, hasKeyboardFocus: _, ...actionContext } = useContext(A11yMeaningfulLabelContext);
    // Find example of different renderings to link or label:s
    // callback for label type is done as an example in Cards.Checkbox.example or upload-single-file
    // callback for link type is done as an example in cards selection example
    return type === "link" ? (React__default.createElement(ActionPresentation, { ...props, ...actionContext, expandToOverlay: true, isDisplayInline: inline, htmlAttrs: htmlAttrs, 
        // TODO: Use Component API instead of implicit CSS rules
        className: `${lsgPre}accessible-label`, ref: props.refCallback || props.actionRef })) : (React__default.createElement(LabelPresentation, { ...props, ...actionContext, expandToOverlay: true, isDisplayInline: inline, htmlFor: actionContext.htmlFor, htmlAttrs: htmlAttrs, 
        // TODO: Use Component API instead of implicit CSS rules
        className: `${lsgPre}accessible-label`, ref: props.refCallback }));
};
A11yMeaningfulLabelPresentation.displayName = "A11yMeaningfulLabelPresentation";

export { A11yMeaningfulLabelPresentation };
