import React, { ComponentType } from "react";
import { IBasicPropsInternal } from "../../../../utils/IBasicPropsInternal";
import { ICheckboxPresentationProps } from "../../../Checkbox/shared/CheckboxPresentation";
import { IRadioPresentationProps } from "../../../Radio/shared/RadioPresentation";
import { IGridStructure } from "../DataTableRowPresentation";
interface IDataTableRowTogglePresentationProps extends IBasicPropsInternal {
    as: string;
    toggleAs?: ComponentType<IRadioPresentationProps | ICheckboxPresentationProps>;
    inputType?: "checkbox" | "radio" | "button";
    inputDisabled?: boolean;
    inputHidden?: boolean;
    value: boolean;
    name: string;
    onChange: (newValue: boolean, name: string, event: React.SyntheticEvent<HTMLElement>) => void;
    htmlAttrs: React.InputHTMLAttributes<HTMLInputElement>;
    hasMouseHover: boolean;
    hasKeyboardFocus: boolean;
    onMouseHoverChange: (newHover: boolean) => void;
    onKeyboardFocusChange: (newHover: boolean) => void;
    gridStructure: IGridStructure;
    isFooter?: boolean;
    isHeader?: boolean;
    cellRef?: React.RefObject<HTMLElement>;
}
export declare const DataTableRowTogglePresentation: {
    ({ id, className, noMargin, as, toggleAs, value, name, onChange, htmlAttrs, hasMouseHover, hasKeyboardFocus, onMouseHoverChange, onKeyboardFocusChange, isStencilHost, gridStructure, isFooter, isHeader, inputDisabled, inputHidden, inputType, cellRef, }: IDataTableRowTogglePresentationProps): React.JSX.Element;
    displayName: string;
};
export {};
