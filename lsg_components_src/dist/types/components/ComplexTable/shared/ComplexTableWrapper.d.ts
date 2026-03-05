import React from "react";
import { IComplexTablePresentationProps } from "./ComplexTablePresentation";
interface IComplexTableState {
    isMobile: boolean;
    isSortLayerOpen: boolean;
}
export interface IComplexTableWrapperProps extends Omit<IComplexTablePresentationProps, "isMobile" | "isSortLayerOpen" | "onOpenLayerChange" | "onTableColumnHeadClick" | "onTableBodyRowClick"> {
}
export declare class ComplexTableWrapper extends React.Component<IComplexTableWrapperProps, IComplexTableState> {
    private mobileViewports;
    constructor(props: IComplexTableWrapperProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    onViewportChanged: (viewport: string) => void;
    onHandleTableColumnHeadClick: (columnIndex: number, e: React.MouseEvent<HTMLElement>) => void;
    onHandleTableBodyRowClick: (rowIndex: number, rowId: string, e: React.MouseEvent<HTMLElement>) => void;
    render(): React.JSX.Element;
}
export {};
