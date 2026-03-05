import React from "react";
import { IBasicPropsInternal } from "../../../../utils/IBasicPropsInternal";
export interface ISimpleTableRowPresentationProps extends IBasicPropsInternal {
    title?: any;
    helperText?: any;
}
export declare const SimpleTableRowPresentation: {
    ({ id, children, className, title, helperText, noMargin, }: ISimpleTableRowPresentationProps): React.JSX.Element;
    displayName: string;
};
