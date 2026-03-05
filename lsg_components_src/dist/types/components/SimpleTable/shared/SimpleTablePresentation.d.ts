import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface ISimpleTablePresentationProps extends IBasicPropsInternal {
    /** Default is 2/3 to 1/3. Use SimpleTable.Ratios.ONE_TO_TWO to achieve the opposite. */
    ratio?: "" | "1-2";
    /** Providing detailed information about the subjects of table */
    description?: string;
    /** Short title information of table, which become not displayed visually. */
    title?: string;
}
export declare const SimpleTablePresentation: {
    ({ id, ratio, children, className, noMargin, description, title, }: ISimpleTablePresentationProps): React.JSX.Element;
    displayName: string;
};
