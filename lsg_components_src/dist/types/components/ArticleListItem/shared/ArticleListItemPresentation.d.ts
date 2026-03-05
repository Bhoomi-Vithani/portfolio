import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IArticleListItemProps extends IBasicPropsInternal {
    itemHeadline?: string;
    itemHeadlineAs?: string;
}
export declare const ArticleListItemPresentation: {
    ({ id, className, noMargin, itemHeadline, itemHeadlineAs, children, horizontalAlignment, }: IArticleListItemProps): React.JSX.Element;
    displayName: string;
};
