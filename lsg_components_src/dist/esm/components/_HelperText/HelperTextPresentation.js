import { symbols___error } from '@lsg/icons';
import * as React from 'react';
import { cleanupClassObject } from '../../utils/DomUtils.js';
import { IconPresentation } from '../Icon/shared/IconPresentation.js';
import { ParagraphPresentation } from '../Paragraph/shared/ParagraphPresentation.js';
import { hostClass } from './HelperText.styles.js';

// @ts-strict-ignore
/* eslint-disable react/require-default-props */
const HelperTextPresentation = ({ className, helperText, errorText, helperTextId, errorTextId, disabled, errorTextAriaLive, spacing, }) => (React.createElement("div", { className: cleanupClassObject({
        [hostClass]: true,
        [className]: !!className,
        [`${hostClass}__dense`]: spacing === "dense",
    }) },
    helperText && (React.createElement(ParagraphPresentation, { id: helperTextId, className: `${hostClass}-helper-text_with-error`, size: "helper-text", disabled: disabled, noMargin: true }, helperText)),
    React.createElement("div", { className: cleanupClassObject({
            [`${hostClass}-error-text-wrapper`]: true /* Always rendered, even without an errorText, to provide a stable container
         for the aria-live region (for accessibility). Screen readers can more reliably announce dynamic content if the aria-live element (the Paragraph/<p>)
         already exists in this <div> in the DOM. */,
            [`${hostClass}-error-text-wrapper__error-text-set`]: !!errorText,
        }) },
        errorText && (React.createElement(IconPresentation, { className: `${hostClass}-error-icon`, icon: symbols___error, color: "error", size: "small", noMargin: true, 
            // aria-hide icon because the input element should have an aria-invalid attribute and the text is
            // read accordingly
            svgAttrs: { "aria-hidden": true } })),
        React.createElement(ParagraphPresentation, { id: errorTextId, className: `${hostClass}-error-text`, size: "error-text", noMargin: true, htmlAttrs: {
                "aria-live": errorTextAriaLive ? "assertive" : "off",
                "aria-atomic": "true",
            } }, errorText))));
HelperTextPresentation.displayName = "HelperText";

export { HelperTextPresentation };
