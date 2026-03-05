import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IParagraphProps extends IBasicPropsInternal {
    as?: string;
    size?: "copy-text" | "helper-text" | "lead-text" | "error-text" | "info-text";
    lineLength?: "default" | "wide";
    htmlAttrs?: React.ParamHTMLAttributes<HTMLParagraphElement> | Record<`data-${string}`, string | number | boolean>;
    centeredLayout?: boolean;
    manualHyphenation?: boolean;
    /** Number of columns: 1, 2, 3, or 4 */
    columns?: 1 | 2 | 3 | 4;
    /** Show vertical dividing lines between columns */
    columnRuler?: boolean;
    /** Internal use only! */
    /** Sets the color as if the Paragraph was disabled (e.g. helperText of disabled Textfield) */
    disabled?: boolean;
}
export declare const ParagraphPresentation: {
    ({ as, children, id: idProp, className, noMargin, size, lineLength, centeredLayout, horizontalAlignment, disabled, htmlAttrs, manualHyphenation, columns, columnRuler, }: IParagraphProps): React.JSX.Element;
    displayName: string;
};
