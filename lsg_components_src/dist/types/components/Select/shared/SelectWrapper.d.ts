import React from "react";
import { ISelectPresentationProps } from "./SelectPresentation";
export interface ISelectWrapperProps extends Omit<ISelectPresentationProps, "open" | "onOpenChange" | "displayValue" | "onDisplayValueChange" | "onKeyDown" | "flyoutValue" | "onFlyoutChange" | "scrollFocussedElementIntoView" | "onFocussedValueChange"> {
    value: string;
    onChange?: (value: string, name: string, event: React.SyntheticEvent<HTMLElement>) => void;
    searchFunction?: "startsWith" | "everywhere" | "startOfWord";
}
export declare const SelectWrapper: (externalProps: ISelectWrapperProps) => React.ReactNode;
