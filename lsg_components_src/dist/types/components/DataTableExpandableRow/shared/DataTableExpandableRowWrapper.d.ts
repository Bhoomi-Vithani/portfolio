import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
import { IColumn } from "../../DataTable/shared/DataTablePresentation";
import { IColumnPreprocessed, IGridStructure } from "../../DataTableRow/shared/DataTableRowPresentation";
interface IDataTableExpandableRowWrapperProps extends IBasicPropsInternal {
    id?: string;
    data?: any[];
    colspans?: number[];
    inputName?: string;
    inputValue?: boolean;
    onInputChange?: (newValue: boolean, name: string, event: React.SyntheticEvent<HTMLElement>) => void;
    label?: string;
    badgeColor?: "primary" | "highlight" | "supplementary" | "optional" | "inactive" | "error" | "success" | "alert" | "secondary-1" | "secondary-2" | "secondary-3" | "secondary-4" | "secondary-5" | "secondary-6";
    columnsPreprocessed?: IColumnPreprocessed[];
    columnsSeparated?: (IColumn & {
        isHiddenInHeader: boolean;
    })[];
    gridStructure?: IGridStructure;
    inputType?: "checkbox" | "radio" | "button";
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (newOpen: boolean) => void;
    hideBadge?: boolean;
    insetLevel?: 0 | 1 | 2 | 3 | 4 | number;
    spacing?: "dense" | "narrow" | "standard";
    inactive?: boolean;
}
export declare const DataTableExpandableRowWrapper: ({ id, children, badgeColor, columnsPreprocessed, columnsSeparated, gridStructure, inputType, data: dataProp, colspans, label: labelProp, open: openProp, onOpenChange, defaultOpen, hideBadge, insetLevel, spacing, inactive, ...otherProps }: IDataTableExpandableRowWrapperProps) => React.JSX.Element;
export {};
