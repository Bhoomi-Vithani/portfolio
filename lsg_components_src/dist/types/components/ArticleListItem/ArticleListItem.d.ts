import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IArticleListItemProps extends IBasicProps {
    /** The list item heading */
    itemHeadline?: string;
    /** Alternative HTML tag that is rendered for itemHeadline (e.g. "h3", "h4", "p"). */
    itemHeadlineAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "strong" | string;
}
/** @deprecated: Will be removed in lsg version 20. Use Native Components to create a stepper instead. You can find an example in the UX Patterns section */
declare const ArticleListItem: {
    ({ itemHeadlineAs, ...props }: IArticleListItemProps): React.JSX.Element;
    displayName: string;
};
export { ArticleListItem, IArticleListItemProps };
