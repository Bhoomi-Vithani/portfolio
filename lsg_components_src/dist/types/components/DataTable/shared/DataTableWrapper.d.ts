import React from "react";
import { IDataTableSharedProps, IColumn } from "./DataTablePresentation";
interface IDataTableWrapperProps extends IDataTableSharedProps {
    columns: IColumn[];
    labelColumn: number | undefined;
    sortColumn?: number;
    sortColumns?: number[];
    sortAscending?: boolean | boolean[];
}
export declare const DataTableWrapper: (props: IDataTableWrapperProps) => React.JSX.Element;
export {};
