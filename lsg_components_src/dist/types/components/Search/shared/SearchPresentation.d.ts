import React, { ComponentType, JSX } from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface ISearchItem {
    value: string;
    label: React.ReactNode;
}
export interface ISearchPresentationProps extends IBasicPropsInternal {
    appearance?: "hero" | "default";
    inline?: boolean;
    value: string;
    label: string;
    name?: string;
    placeholder?: string;
    disabled?: boolean;
    loading?: boolean;
    clearIcon?: boolean;
    htmlAttrs?: React.InputHTMLAttributes<HTMLInputElement> | Record<`data-${string}`, string | number | boolean>;
    inputRef?: React.MutableRefObject<HTMLInputElement>;
    onChange?: (value: string, name: string, event: React.SyntheticEvent<HTMLElement>) => void;
    onSearch?: (value: string, name: string, event: React.FormEvent<HTMLFormElement>) => void;
    formAs?: keyof JSX.IntrinsicElements | ComponentType<any> | string;
    formAttrs?: React.FormHTMLAttributes<HTMLFormElement>;
    inlineSubmitHidden?: boolean;
    additionalActions?: React.ReactNode;
}
export declare const SearchPresentation: (props: ISearchPresentationProps) => JSX.Element;
