import * as React from "react";
import type { IComplexTableProps, IComplexTableRow } from "./ComplexTable";
import { IComplexTableColumnProperties } from "./shared/ComplexTablePresentation";
interface IStatefulComplexTableColumnProperties extends IComplexTableColumnProperties {
    sortComparator?: (row1: IComplexTableRow, row2: IComplexTableRow) => number;
}
interface IComplexTableStatefulState {
    sortColumn?: number;
    isSortedAscending: boolean;
    activePage: number;
    tableBodyData: IComplexTableRow[];
    isMobile: boolean;
}
interface IComplexTableStatefulProps extends Omit<IComplexTableProps, "sortColumn" | "isSortedAscending" | "columnProperties" | "isMobile"> {
    defaultSortColumn?: number;
    defaultIsSortedAscending?: boolean;
    columnProperties: IStatefulComplexTableColumnProperties[];
    numRowsPerPage?: number;
    onHeadingClick?: (column: number, columnName: string, isSortAscending: boolean, e: React.MouseEvent<HTMLElement>) => void;
}
/**
 * This is a stateful version of `<ComplexTable>`. PLEASE NOTE: Unlike the Stateful variants of formfield components
 * that are meant to be implemented for non-React-Environment (e.g. ShowCases), this variant of the `ComplexTable` is meant for React Logic also.
 * The `ComplexTable.Stateful` adds a sorting functionality, so you do not have necessarily to maintain the contents of the table and the sorting
 * algorithm in your wrapping component. For the sorting functionality, you can also define a sorting comparator for each column.
 */
declare class ComplexTableStateful extends React.PureComponent<IComplexTableStatefulProps, IComplexTableStatefulState> {
    static displayName: string;
    constructor(props: IComplexTableStatefulProps);
    private static mobileViewports;
    onStatefulTableHeadingClick: (column: number, isSortAscending: boolean) => void;
    private defaultSortComparator;
    render(): React.JSX.Element;
}
export { ComplexTableStateful, IComplexTableStatefulState, IStatefulComplexTableColumnProperties };
