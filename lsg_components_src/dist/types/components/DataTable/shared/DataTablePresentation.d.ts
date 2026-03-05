import React, { ReactNode, MutableRefObject } from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
import { IColumnPreprocessed, IGridStructure } from "../../DataTableRow/shared/DataTableRowPresentation";
export interface IColumn {
    id?: string;
    title: ReactNode;
    headerHidden?: boolean;
    columnHide?: "xs" | "sm" | "md" | "lg" | "xl";
    columnWrap?: "xs" | "sm" | "md" | "lg" | "xl";
    columnSeparateXs?: boolean;
    textWrap?: "word" | "no-wrap" | "hyphenation" | "character" | "ellipsis";
    horizontalAlignment?: "left" | "center" | "right";
    /** Per default, the cell alignment is done by setting `text-align`, `justify-content` and adding a prop
     *  `horizontalAlign` to all children that are passed to the `data` prop. If the css rules `text-align` and
     *  `justify-content` do not lead to the desired result, you can set this prop to "prop-only" and align the
     *  children by yourself.
     * */
    horizontalAlignmentType?: "flex-text-align-prop" | "prop-only";
    isActionColumn?: boolean;
    ariaSort?: "ascending" | "descending";
    sortPriority?: number;
    isSortable?: boolean;
    widthFr?: number;
    widthPx?: number;
    sortOrderType?: "initialAscending" | "initialDescending" | "ascendingOnly" | "descendingOnly";
    isStickyLeft?: boolean;
    isStickyRight?: boolean;
}
export interface IDataTableSharedProps extends IBasicPropsInternal {
    verticalAlignment?: "top" | "middle";
    spacing?: "dense" | "narrow" | "standard";
    inputType?: "checkbox" | "radio";
    radiosName?: string;
    radiosValue?: string;
    onRadiosChange?: (newValue: string, name: string, event: React.SyntheticEvent<HTMLElement>) => void;
    checkboxName?: string;
    checkboxValue?: boolean;
    onCheckboxChange?: (newValue: boolean, name: string, event: React.SyntheticEvent<HTMLElement>) => void;
    footer?: ReactNode;
    width?: "auto" | "full" | "scroll";
    isHeaderSticky?: boolean;
    title?: string;
    onSort?: (newSortColumn: number | number[], newSortAscending: boolean | boolean[]) => void;
    ariaAttrs?: React.AriaAttributes;
    checkboxHidden?: boolean;
    checkboxDisabled?: boolean;
    isInputSticky?: boolean;
    separateColumnsXsWidthRatio?: number;
    insetLevel?: 0 | 1 | 2 | 3 | 4;
}
interface IDataTablePresentationOnlyProps {
    columnsPreprocessed?: IColumnPreprocessed[];
    columnsSeparated?: (IColumn & {
        isHiddenInHeader: boolean;
    })[];
    tableHeadRef: MutableRefObject<HTMLTableSectionElement>;
    tableHeadStickPosition: number;
    headerShadow?: boolean;
    gridStructure?: IGridStructure;
    sortColumns?: number[];
    sortAscending?: boolean[];
    isMultiSort?: boolean;
}
interface IDataTablePresentationProps extends IDataTableSharedProps, IDataTablePresentationOnlyProps {
}
export declare const defaultProps: Partial<IDataTablePresentationProps>;
export declare const DataTablePresentation: {
    (props: IDataTablePresentationProps): React.JSX.Element;
    displayName: string;
};
export {};
