import React from "react";
import { IActionBaseProps } from "../../Action/shared/ActionPresentation";
export interface ILinkPresentationProps extends IActionBaseProps {
    nonInteractive?: boolean;
    label: React.ReactNode;
    /** Internal props */
    /** Changes the look of the link if it is located inside another element. */
    look?: "footnote";
}
export declare const LinkPresentation: {
    ({ look, disabled, loading, actionRef, hasKeyboardFocus, hasMouseHover, className, clicked, nonInteractive, label, htmlAttrs: htmlAttrsProp, id: idProp, loadingAriaLabel, href, ...otherProps }: ILinkPresentationProps): React.JSX.Element;
    displayName: string;
};
