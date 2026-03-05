import * as React from 'react';
import { ArticleListItemPresentation } from './shared/ArticleListItemPresentation.js';

/** @deprecated: Will be removed in lsg version 20. Use Native Components to create a stepper instead. You can find an example in the UX Patterns section */
const ArticleListItem = ({ itemHeadlineAs = "h5", ...props }) => (React.createElement(ArticleListItemPresentation, { itemHeadlineAs, ...props }));
ArticleListItem.displayName = "ArticleList.Item";

export { ArticleListItem };
