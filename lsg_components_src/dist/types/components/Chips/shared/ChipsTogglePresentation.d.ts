import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
import { IChipsInternalBaseProps } from "./ChipsPresentation";
interface IChipsTogglePresentation extends IChipsInternalBaseProps, IBasicPropsInternal {
    direction?: "scroll" | "wrap" | "condensed";
    as?: "ul" | "ol" | "div" | "fieldset";
    type: "radio" | "checkbox";
    value?: string;
    name?: string;
    onChange?: (value: string, name: string, event: React.SyntheticEvent<HTMLElement>) => void;
}
export declare const ChipsTogglePresentation: ({ direction, appearance, ...props }: IChipsTogglePresentation) => React.JSX.Element;
export {};
