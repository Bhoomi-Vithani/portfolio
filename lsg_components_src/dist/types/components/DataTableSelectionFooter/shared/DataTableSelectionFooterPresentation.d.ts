import React, { ReactNode } from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
import { IColumnPreprocessed, IGridStructure } from "../../DataTableRow/shared/DataTableRowPresentation";
export interface IDataTableSelectionFooterSharedProps extends IBasicPropsInternal {
    id?: string;
    inputName?: string;
    inputValue?: boolean;
    inputHidden?: boolean;
    inputDisabled?: boolean;
    onInputChange?: (newValue: boolean, name: string, event: React.SyntheticEvent<HTMLElement>) => void;
    label?: string;
    actions?: ReactNode;
    columnsPreprocessed?: IColumnPreprocessed[];
    gridStructure?: IGridStructure;
    inputType?: "checkbox" | "radio" | "button";
}
interface IDataTableSelectionFooterPresentationOnlyProps {
    hasMouseHover?: boolean;
    hasKeyboardFocus?: boolean;
    onMouseHoverChange?: (newHover: boolean) => void;
    onKeyboardFocusChange?: (newFocus: boolean) => void;
}
interface IDataTableSelectionFooterPresentationProps extends IDataTableSelectionFooterSharedProps, IDataTableSelectionFooterPresentationOnlyProps {
}
export declare const DataTableSelectionFooterPresentation: {
    ({ id: idProp, className, inputType, inputValue, onInputChange, inputName, label, actions, hasMouseHover, hasKeyboardFocus, onMouseHoverChange, onKeyboardFocusChange, gridStructure, inputHidden, inputDisabled, }: IDataTableSelectionFooterPresentationProps): React.JSX.Element;
    displayName: string;
};
export {};
