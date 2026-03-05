import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { Host } from '../../../utils/Host.js';
import { HeadlinePresentation } from '../../Headline/shared/HeadlinePresentation.js';
import { IconLinkGroupWrapper } from '../../IconLinkGroup/shared/IconLinkGroupWrapper.js';
import { ParagraphPresentation } from '../../Paragraph/shared/ParagraphPresentation.js';
import { PicturePresentation } from '../../Picture/shared/PicturePresentation.js';
import { TwoLineItemPresentation } from '../../TwoLineItem/shared/TwoLineItemPresentation.js';
import { hostClass } from './ArticleStage.styles.js';

const ArticleStagePresentation = ({ id, className, headline, headlineAs, headlineSubline, headlineSublineAs, headlineOverline, headlineOverlineAs, helperText, thumbIcon, thumbIconName, thumbIconVariant, thumbIconTitle, thumbText, thumbImgSrc, thumbHeadline, thumbSubline, thumbSublineAs, pictureCaption, pictureAlt = "", pictureImgSrc, pictureSource, noMargin, children, horizontalAlignment, manualHyphenation, }) => (React__default.createElement(Host, { id: id, className: cleanupClassObject({
        [hostClass]: true,
        [className]: !!className,
        [`${lsgPre}no-margin`]: noMargin,
    }) },
    React__default.createElement(HeadlinePresentation, { horizontalAlignment: horizontalAlignment, size: "h1", as: headlineAs, overline: headlineOverline, overlineAs: headlineOverlineAs, subline: headlineSubline, sublineAs: headlineSublineAs, manualHyphenation: manualHyphenation }, headline),
    thumbHeadline || thumbSubline || thumbIconName || helperText || children ? (React__default.createElement("div", { className: `${hostClass}__inner` },
        React__default.createElement("div", { className: `${hostClass}__two-line-item` },
            React__default.createElement(TwoLineItemPresentation, { src: thumbImgSrc, text: thumbText, icon: thumbIcon, iconName: thumbIconName, iconVariant: thumbIconVariant, iconTitle: thumbIconTitle, label: thumbHeadline, subline: thumbSubline, sublineAs: thumbSublineAs, noMargin: true })),
        React__default.createElement("div", { className: `${hostClass}__inner-right` },
            React__default.createElement(ParagraphPresentation, { className: `${hostClass}__helper-text`, size: "helper-text", noMargin: true }, helperText),
            React__default.createElement(IconLinkGroupWrapper, { className: `${hostClass}__link-group`, direction: "horizontal", noMargin: true }, children)))) : (React__default.createElement("div", { className: `${hostClass}-spacer` })),
    (pictureImgSrc || pictureSource) && (React__default.createElement(PicturePresentation, { source: pictureSource, imgSrc: pictureImgSrc, alt: pictureAlt, caption: pictureCaption, horizontalAlignment: horizontalAlignment }))));
ArticleStagePresentation.displayName = "ArticleStagePresentation";

export { ArticleStagePresentation };
