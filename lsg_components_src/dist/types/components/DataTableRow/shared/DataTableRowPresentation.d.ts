import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
import { IColumn } from "../../DataTable/shared/DataTablePresentation";
import { threeStepShowHide } from "./DataTableStateMachine";
export interface IGridStructure {
    gridHeaderCols: number[][];
    gridSeparatedCols: number[];
    gridSeparatedActionColIndex?: number;
    hasToggleColumn: boolean;
    maxColLength: number;
    gridTemplateAreaRows: any[];
    gridTemplateAreasString: string;
    tableStyles: any;
    tableHeaderAndBodyStyles: any;
    tableRowStyles: any;
    stickyLeftGridColumns?: number[];
    stickyRightGridColumns?: number[];
    isMobile?: boolean;
    insetLevel?: 0 | 1 | 2 | 3 | 4 | number;
}
export type IColumnPreprocessed = IColumn & {
    colIndex: number;
    isHiddenInHeader: boolean;
    isSeparated: boolean;
    isWrapped: boolean;
    isLabelColumn: boolean;
    gridRow: number;
    gridRowSpan: number;
    id: string;
    hasTopMargin: boolean;
    hasBottomMargin: boolean;
    isFirstGridCol: boolean;
    isLastGridCol: boolean;
    isFirstSeparatedColumn?: boolean;
    gridHeaderColIndex?: number;
    isStickyLeft?: boolean;
    isStickyRight?: boolean;
};
export interface IDataTableRowSharedProps extends IBasicPropsInternal {
    id?: string;
    ids?: string[];
    data: any[];
    colspans?: number[];
    inputName?: string;
    inputValue?: boolean;
    onInputChange?: (newValue: boolean, name: string, event: React.SyntheticEvent<HTMLElement>) => void;
    htmlInputAttrs?: React.InputHTMLAttributes<HTMLInputElement> | Record<`data-${string}`, string | number | boolean>;
    onLinkClick?: (event: React.SyntheticEvent<HTMLElement>, name: string) => void;
    linkHref?: string;
    htmlLinkAttrs?: React.AnchorHTMLAttributes<HTMLAnchorElement> | React.ButtonHTMLAttributes<HTMLButtonElement>;
    htmlCellAttrs?: React.TdHTMLAttributes<HTMLTableCellElement>[] | React.ThHTMLAttributes<HTMLTableCellElement>[];
    ariaAttrs?: React.AriaAttributes;
    insetLevel?: 0 | 1 | 2 | 3 | 4 | number;
    isExpandableHeader?: boolean;
    isHeader?: boolean;
    isTopHeader?: boolean;
    columnsPreprocessed?: IColumnPreprocessed[];
    gridStructure?: IGridStructure;
    columnsSeparated?: (IColumn & {
        isHiddenInHeader: boolean;
    })[];
    inputType?: "checkbox" | "radio" | "button";
    inputHidden?: boolean;
    inputDisabled?: boolean;
    separateColumnsXsWidthRatio?: number;
    hasMouseHover?: boolean;
    hasMouseHoverToggle?: boolean;
    hasKeyboardFocus?: boolean;
    hasKeyboardFocusToggle?: boolean;
    onMouseHoverChange?: (newHover: boolean) => void;
    onMouseHoverChangeToggle?: (newHover: boolean) => void;
    onKeyboardFocusChange?: (newHover: boolean) => void;
    onKeyboardFocusChangeToggle?: (newHover: boolean) => void;
    tableCellsArrayRef?: React.MutableRefObject<HTMLElement[]>;
    toggleColumnCellRef?: React.MutableRefObject<HTMLElement>;
    spacing?: "dense" | "narrow" | "standard";
}
export interface IDataTableRowPresentationProps extends IDataTableRowSharedProps {
    visibility: keyof typeof threeStepShowHide;
}
export declare const DataTableRowPresentation: {
    (props: IDataTableRowPresentationProps): React.JSX.Element;
    displayName: string;
};
