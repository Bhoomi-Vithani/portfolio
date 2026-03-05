import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { formats } from '../../../utils/Localization.js';
import { IconLinkGroupWrapper } from '../../IconLinkGroup/shared/IconLinkGroupWrapper.js';
import { TwoLineItemPresentation } from '../../TwoLineItem/shared/TwoLineItemPresentation.js';
import { hostClass } from './TextHighlight.styles.js';

const TextHighlightPresentation = ({ id, className, noMargin, headline, subline, isLongText, noQuotes, text, thumbIcon, thumbIconName, thumbIconVariant, thumbIconTitle, thumbText, thumbImgSrc, iconLinks, centeredLayout, manualHyphenation, }) => {
    const hasInformation = !!thumbText || !!thumbIconName || !!thumbImgSrc || !!headline;
    const openingQuote = (formats.quotationMarkOpening);
    const closingQuote = (formats.quotationMarkClosing);
    const displayedText = !noQuotes ? `${openingQuote}${text}${closingQuote}` : text;
    return (React__default.createElement("figure", { id: id, className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
            [`${lsgPre}no-margin`]: noMargin,
            [`${lsgPre}-centered-layout`]: centeredLayout,
        }) },
        React__default.createElement("blockquote", { className: cleanupClassObject({
                [`${hostClass}-quote`]: true,
                [`${hostClass}-quote__long-text`]: isLongText,
                [`${hostClass}-quote__long-text____hyphens-manual`]: manualHyphenation,
            }) }, displayedText),
        React__default.createElement("figcaption", { className: `${hostClass}-footer` },
            hasInformation && (React__default.createElement(TwoLineItemPresentation, { noMargin: true, src: thumbImgSrc, text: thumbText, icon: thumbIcon, iconName: thumbIconName, iconVariant: thumbIconVariant, iconTitle: thumbIconTitle, label: headline, subline: subline, centeredLayout: centeredLayout })),
            iconLinks && (React__default.createElement(IconLinkGroupWrapper, { direction: "table", noMargin: true }, iconLinks)))));
};
TextHighlightPresentation.displayName = "TextHighlightPresentation";

export { TextHighlightPresentation };
