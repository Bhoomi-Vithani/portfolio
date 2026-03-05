import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IDescriptionListPresentationProps extends IBasicPropsInternal {
    /** @deprecated : component will do the wrapping on its own */
    termWrap?: boolean;
}
export declare const DescriptionListPresentation: {
    ({ termWrap, id, className, noMargin, children, horizontalAlignment, }: IDescriptionListPresentationProps): React.JSX.Element;
    displayName: string;
};
