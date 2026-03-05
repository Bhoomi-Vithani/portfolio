import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { HeadlinePresentation } from '../../Headline/shared/HeadlinePresentation.js';
import { ParagraphPresentation } from '../../Paragraph/shared/ParagraphPresentation.js';
import { hostClass } from './ArticleListItem.styles.js';

// @ts-strict-ignore
const ArticleListItemPresentation = ({ id, className, noMargin, itemHeadline, itemHeadlineAs = "h5", children, horizontalAlignment, }) => (React__default.createElement("li", { id: id, className: cleanupClassObject({
        [hostClass]: true,
        [className]: !!className,
        [`${hostClass}__align-${horizontalAlignment}`]: horizontalAlignment,
        [`${lsgPre}no-margin`]: noMargin,
    }) },
    React__default.createElement(HeadlinePresentation, { as: itemHeadlineAs, size: "h6", horizontalAlignment: horizontalAlignment }, itemHeadline),
    React__default.createElement(ParagraphPresentation, { size: "info-text", horizontalAlignment: horizontalAlignment }, children)));
ArticleListItemPresentation.displayName = "ArticleListItemPresentation";

export { ArticleListItemPresentation };
