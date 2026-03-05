import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface ITeaserGroupPresentationProps extends IBasicPropsInternal {
    hasFocusTeaser?: boolean;
    groupImageRatio?: "21-9" | "16-9";
    groupHeadlineSize?: "h4" | "h5";
    groupHeadlineAs?: string;
}
export declare const TeaserGroupPresentation: {
    ({ id, children, className, noMargin, hasFocusTeaser, groupImageRatio, groupHeadlineSize, groupHeadlineAs, }: ITeaserGroupPresentationProps): React.JSX.Element;
    displayName: string;
};
