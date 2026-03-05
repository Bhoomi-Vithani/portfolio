import React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IDataTableLabelProps extends IBasicProps {
    /** left label */
    leftLabel: string;
    /** right label */
    rightLabel?: string;
}
export declare const DataTableLabel: {
    (props: IDataTableLabelProps): React.JSX.Element;
    displayName: string;
};
export {};
