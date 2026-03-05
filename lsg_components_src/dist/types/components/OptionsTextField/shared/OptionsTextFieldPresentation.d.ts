import React from "react";
import { ISelectWrapperProps } from "../../Select/shared/SelectWrapper";
import { ITextFieldWrapperProps } from "../../TextField/shared/TextFieldWrapper";
export interface IOptionsTextFieldPresentationProps extends Omit<ITextFieldWrapperProps, "type" | "value" | "onChange"> {
    value?: string | number;
    onChange?: (value: string | number, name: string, ev: React.SyntheticEvent<HTMLElement>) => void;
    type?: "text" | "password" | "number" | "date";
    optionsProps?: ISelectWrapperProps;
    groupLabel: string;
    spacing?: "default" | "dense";
}
export declare const defaultProps: Partial<IOptionsTextFieldPresentationProps>;
export declare const OptionsTextFieldPresentation: {
    (props: IOptionsTextFieldPresentationProps): React.JSX.Element;
    displayName: string;
};
