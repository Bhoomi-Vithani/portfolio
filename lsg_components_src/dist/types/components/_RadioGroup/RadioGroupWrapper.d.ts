import React from "react";
import { ISelectionGroupPresentationProps } from "../_SelectionGroup/SelectionGroupPresentation";
export declare const hostClass: string;
interface IRadioGroupWrapperProps extends ISelectionGroupPresentationProps {
    value: string;
    name?: string;
    onChange?: (value: string, name: string, event: React.SyntheticEvent<HTMLElement>) => void;
}
export declare const RadioGroupWrapper: ({ children, value, invalid, name, onChange, ...otherProps }: IRadioGroupWrapperProps) => React.JSX.Element;
export {};
