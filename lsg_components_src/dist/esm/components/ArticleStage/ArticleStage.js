import * as React from 'react';
import { ArticleStagePresentation } from './shared/ArticleStagePresentation.js';

/**
 * @deprecated: 11.2023 - Will be removed in the next major release.
 * Have a look at the "Article Stage Pattern" which uses native components like shown in the Markenportal UX Patterns
 * section: https://markenportal.commerzbank.com/styleguide/article-stage-pattern/index.html
 */
const ArticleStage = ({ iconLinks, centeredLayout, ...props }) => (React.createElement(ArticleStagePresentation, { ...props, horizontalAlignment: centeredLayout ? "center" : "left" }, iconLinks));
ArticleStage.displayName = "ArticleStage";

export { ArticleStage };
