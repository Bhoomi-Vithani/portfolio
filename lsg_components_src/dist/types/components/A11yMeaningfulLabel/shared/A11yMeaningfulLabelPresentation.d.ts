import React, { Ref } from "react";
import { IActionBaseProps } from "../../Action/shared/ActionPresentation";
interface IA11yMeaningfulLinkPresentationProps extends Omit<IActionBaseProps, "hasKeyboardFocus" | "hasMouseHover" | "onKeyboardFocusChange" | "onMouseHoverChange" | "disabled" | "loading" | "htmlAttrs"> {
    inline?: boolean;
    htmlAttrs?: React.AnchorHTMLAttributes<HTMLAnchorElement> | React.ButtonHTMLAttributes<HTMLButtonElement> | React.LabelHTMLAttributes<HTMLLabelElement> | React.InputHTMLAttributes<HTMLInputElement> | Record<`data-${string}`, string | number | boolean>;
    /** Callback function to get the ref of the button or label. */
    refCallback?: Ref<HTMLElement>;
}
export declare const defaultProps: Partial<IA11yMeaningfulLinkPresentationProps>;
export declare const A11yMeaningfulLabelPresentation: {
    ({ htmlAttrs, inline, ...props }: IA11yMeaningfulLinkPresentationProps): React.JSX.Element;
    displayName: string;
};
export {};
