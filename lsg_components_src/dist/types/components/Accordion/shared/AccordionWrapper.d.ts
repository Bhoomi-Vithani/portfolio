import React from "react";
import { IAccordionPresentationProps } from "./AccordionPresentation";
interface IAccordionWrapperProps extends Omit<IAccordionPresentationProps, "hasMouseHover" | "onMouseHoverChange" | "hasKeyboardFocus" | "onKeyboardFocusChange" | "hideContent" | "contentRef"> {
    initialIsOpen?: boolean;
}
export declare const AccordionWrapper: (props: IAccordionWrapperProps) => React.JSX.Element;
export {};
