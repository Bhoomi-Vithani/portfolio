import React, { ReactNode } from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
import { IIconLinkWrapperExtended } from "./TableActionMenu";
export interface IComplexTableColumnProperties {
    title: ReactNode;
    name: string;
    isSortable?: boolean;
    formatter?: (value: any) => ReactNode;
    alignRight?: boolean;
}
export interface IComplexTableRow {
    rowId?: string;
    rowData: any[];
    rowActions?: IIconLinkWrapperExtended[];
    rowActionsLook?: "menu-only" | "auto" | "icons-only";
}
export interface IComplexTablePresentationProps extends IBasicPropsInternal {
    /**
     * An array of objects with the IComplexTableColumnProperties interface. The column properties correspond with the
     * tableBodyData "columns".
     */
    columnProperties: IComplexTableColumnProperties[];
    /**
     * This array provides the table data. It is an array of table rows with column elements; each column element
     * corresponding to a columnProperties element.
     */
    tableBodyData?: IComplexTableRow[];
    /**
     * If the header of a sortable column is clicked, this callback handler returns the column id (starting with 0),
     * the column name as defined in the columnProperties, and the information if the column shall be
     * sorted ascending or descending.
     */
    onColumnHeadClick?: (columnIndex: number, columnName: string, isSortAscending: boolean, e: React.MouseEvent<HTMLElement>) => void;
    /** This callback handler returns the clicked row.
     *  only called when there are no actions icons defined. Action icons should provide onclick handlers.
     */
    onBodyRowClick?: (rowIndex: number, rowId: string, e: React.MouseEvent<HTMLElement>) => void;
    /**
     * Optional parameter: Shows by a black arrow that the table is sorted by the sortColumnIndex with its column index number (starting with 0).
     * In the non-Stateful variant, the user has to provide the sorting.
     */
    sortColumnIndex?: number;
    /**
     * Optional parameter: if a sortColumn parameter is provided, this flag is the information of the sort direction.
     * IsSortedAscending == true shows an up arrow, IsSortedAscending == false shows an down arrow.
     */
    isSortedAscending?: boolean;
    /**
     * section of internal interface props
     */
    isMobile: boolean;
    isSortLayerOpen: boolean;
    onOpenLayerChange?: (open: boolean) => void;
    onTableColumnHeadClick?: (columnIndex: number, event: React.MouseEvent<HTMLElement>) => void;
    onTableBodyRowClick?: (rowIndex: number, rowId: string, e: React.MouseEvent<HTMLElement>) => void;
}
export declare const ComplexTablePresentation: {
    ({ id, isMobile, className, columnProperties, tableBodyData, sortColumnIndex, isSortedAscending, onOpenLayerChange, isSortLayerOpen, onTableColumnHeadClick, onTableBodyRowClick, noMargin, onBodyRowClick, }: IComplexTablePresentationProps): React.JSX.Element;
    displayName: string;
};
