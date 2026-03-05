import type { IIcon } from "@lsg/icons";
import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IArticleListProps extends IBasicProps {
    /** @deprecated (23.06.2023) - Text used as SVG title. Is fixed to an empty string (""). */
    iconTitle?: string;
    /** The lists heading */
    headline?: string;
    /** Alternative HTML tag that is rendered for headline (e.g. "h2", "h3", "p", "span", "div"). */
    headlineAs: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | string;
    /** Id for the headline element (needed for optimizing a11y) */
    headlineId?: string;
    /** The icon that shall be displayed within the IconLink - this is also located in the click area. */
    icon?: IIcon;
    /** Set an specific color for the icon */
    iconColor?: "default" | "error" | "success";
    /** Icon variant. One of: "outline" | "solid" */
    iconVariant?: "outline" | "solid";
}
/**
 * @deprecated: 11.2023 - Will be removed in the next major release.
 * Have a look at the "Article List Pattern" which uses native components like shown in the Markenportal UX Patterns
 * section: https://markenportal.commerzbank.com/styleguide/article-list-pattern/index.html
 */
declare const ArticleList: {
    ({ iconColor, iconVariant, headlineAs, ...props }: IArticleListProps): React.JSX.Element;
    displayName: string;
    Item: {
        ({ itemHeadlineAs, ...props }: import("../ArticleListItem/ArticleListItem").IArticleListItemProps): React.JSX.Element;
        displayName: string;
    };
};
export { ArticleList, IArticleListProps };
