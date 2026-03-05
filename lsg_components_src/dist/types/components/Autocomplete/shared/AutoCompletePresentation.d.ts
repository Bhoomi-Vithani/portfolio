import React from "react";
import { ISelectPresentationProps } from "../../Select/shared/SelectPresentation";
export interface IAutoCompletePresentationProps extends Omit<ISelectPresentationProps, "open" | "onOpenChange" | "displayValue" | "onDisplayValueChange" | "onKeyDown" | "flyoutFilter" | "flyoutValue" | "onFlyoutChange" | "onIconClick" | "scrollFocussedElementIntoView" | "onFocussedValueChange"> {
    value: string;
    onChange?: (value: string, name: string, isSelected: boolean, event: React.SyntheticEvent<HTMLElement>) => void;
    onKeyDown?: (key: string, name: string, event: React.KeyboardEvent<HTMLElement>) => void;
}
export declare const AutoCompletePresentation: ({ value, onFocus, onBlur, onChange, onKeyDown, id: idProp, ...props }: IAutoCompletePresentationProps) => React.JSX.Element;
