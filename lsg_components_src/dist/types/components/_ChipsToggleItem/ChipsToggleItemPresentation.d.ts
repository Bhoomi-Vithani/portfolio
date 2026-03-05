import React from "react";
import { IBasicProps } from "../../base/IBasicProps";
import { IChipsItemInternalBaseProps } from "../ChipsItemAction/shared/ChipsItemActionPresentation";
export interface IChipsItemTogglePresentationProps extends IChipsItemInternalBaseProps, IBasicProps {
    value?: boolean;
    htmlAttrs?: React.InputHTMLAttributes<HTMLInputElement> | Record<`data-${string}`, string | number | boolean>;
    onChange?: (value: boolean, name: string, event: React.SyntheticEvent<HTMLInputElement>) => void;
    noMargin?: boolean;
    type?: "radio" | "checkbox";
}
export declare const ChipsToggleItemPresentation: React.ForwardRefExoticComponent<IChipsItemTogglePresentationProps & React.RefAttributes<HTMLInputElement>>;
