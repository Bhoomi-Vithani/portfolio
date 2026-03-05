import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
import { ComplexTableStateful } from "./ComplexTableStateful";
import type { IComplexTableRow as IComplexTableRowShared } from "./shared/ComplexTablePresentation";
import { IComplexTableColumnProperties } from "./shared/ComplexTablePresentation";
interface IComplexTableRow extends Omit<IComplexTableRowShared, "rowActionsLook"> {
    rowActionsLook?: "menu-only" | "auto" | "icons-only";
}
interface IComplexTableProps extends IBasicProps {
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
    onHeadingClick?: (column: number, columnName: string, isSortAscending: boolean, e: React.MouseEvent<HTMLElement>) => void;
    /** This callback handler returns the clicked row.
     *  only called when there are no actions icons defined. Action icons should provide onclick handlers.
     */
    onBodyRowClick?: (rowIndex: number, rowId: string, e: React.MouseEvent<HTMLElement>) => void;
    /**
     * Optional parameter: Shows by a black arrow that the table is sorted by the sortColumn with this column number (starting with 0).
     * In the non-Stateful variant, the user has to provide the sorting.
     */
    sortColumn?: number;
    /**
     * Optional parameter: if a sortColumn parameter is provided, this flag is the information of the sort direction.
     * IsSortedAscendig == true shows an up arrow, IsSortedAscendig == false shows an down arrow.
     */
    isSortedAscending?: boolean;
}
/** @deprecated This component will not be further maintained and will not receive a11y updates. Use DataTable instead. */
declare const ComplexTable: {
    ({ isSortedAscending, onHeadingClick, sortColumn, ...props }: IComplexTableProps): React.JSX.Element;
    displayName: string;
    Stateful: typeof ComplexTableStateful;
};
export { ComplexTable, IComplexTableRow, IComplexTableProps };
