import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { Host } from '../../../utils/Host.js';
import { getGridColumnClasses } from '../../GridColumn/shared/GridColumnPresentation.js';
import { HeadlinePresentation } from '../../Headline/shared/HeadlinePresentation.js';
import { ParagraphPresentation } from '../../Paragraph/shared/ParagraphPresentation.js';
import { ThumbnailPresentation } from '../../Thumbnail/shared/ThumbnailPresentation.js';
import { hostClass } from './InfoListItem.styles.js';

// @ts-strict-ignore
const InfoListItemPresentation = ({ id, noMargin, className, gridColumnSize = 5, headline, headlineAs, enumerationValue, text, }) => (React__default.createElement(Host, { id: id, className: cleanupClassObject({
        [className]: !!className,
        [hostClass]: true,
        [`${lsgPre}no-margin`]: noMargin,
        [getGridColumnClasses({ size: gridColumnSize })]: true,
    }) },
    React__default.createElement(ThumbnailPresentation, { text: enumerationValue }),
    React__default.createElement(HeadlinePresentation, { size: "h4", as: headlineAs }, headline),
    React__default.createElement(ParagraphPresentation, null, text)));
InfoListItemPresentation.displayName = "InfoListItemPresentation";

export { InfoListItemPresentation };
