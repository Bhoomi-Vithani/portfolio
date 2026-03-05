import React from "react";
import { IActionBaseProps } from "../../Action/shared/ActionPresentation";
export interface IAccordionPresentationProps extends Omit<IActionBaseProps, "hasTabIndex"> {
    title: React.ReactNode;
    titleAs?: any;
    isOpen?: boolean;
    onChange?: (open: boolean, id: string, ev: React.SyntheticEvent<Element>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
    /** Get the DOM-element ref to the Accordion header area */
    actionRef?: any;
    hideContent?: boolean;
    contentRef?: React.MutableRefObject<HTMLDivElement>;
}
export declare const AccordionPresentation: {
    ({ id: idProp, children, className, noMargin, title, titleAs, isOpen, onChange, onKeyDown, actionRef, hasMouseHover, hasKeyboardFocus, onMouseHoverChange, onKeyboardFocusChange, hideContent, contentRef, }: IAccordionPresentationProps): React.JSX.Element;
    displayName: string;
};
