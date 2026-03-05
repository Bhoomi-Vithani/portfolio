import * as React from 'react';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem.js';
import { ArticleListWrapper } from './shared/ArticleListWrapper.js';

/**
 * @deprecated: 11.2023 - Will be removed in the next major release.
 * Have a look at the "Article List Pattern" which uses native components like shown in the Markenportal UX Patterns
 * section: https://markenportal.commerzbank.com/styleguide/article-list-pattern/index.html
 */
const ArticleList = ({ iconColor = "default", iconVariant = "outline", headlineAs = "h4", ...props }) => (React.createElement(ArticleListWrapper, { iconColor: iconColor, iconVariant: iconVariant, headlineAs: headlineAs, ...props }));
ArticleList.displayName = "ArticleList";
ArticleList.Item = ArticleListItem;

export { ArticleList };
