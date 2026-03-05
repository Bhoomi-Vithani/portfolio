import React from "react";
import { ITextFieldSharedProps } from "./TextFieldPresentation";
export interface ITextFieldWrapperProps extends ITextFieldSharedProps {
    autoFocus?: boolean;
    containerRef?: any;
}
export declare const TextFieldWrapper: (props: ITextFieldWrapperProps) => React.JSX.Element;
