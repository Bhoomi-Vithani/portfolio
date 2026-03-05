import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
import { IGridStructure } from "../../DataTableRow/shared/DataTableRowPresentation";
export interface IDataTableLabelPresentationProps extends IBasicPropsInternal {
    leftLabel: string;
    rightLabel?: string;
    gridStructure?: IGridStructure;
}
export declare const defaultProps: Partial<IDataTableLabelPresentationProps>;
export declare const DataTableLabelPresentation: {
    ({ id, leftLabel, rightLabel, gridStructure, }: IDataTableLabelPresentationProps): React.JSX.Element;
    displayName: string;
};
