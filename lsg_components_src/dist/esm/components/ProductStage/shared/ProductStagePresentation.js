import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { useViewportRange } from '../../../utils/Hooks/index.js';
import { Host } from '../../../utils/Host.js';
import { HeadlinePresentation } from '../../Headline/shared/HeadlinePresentation.js';
import { PicturePresentation } from '../../Picture/shared/PicturePresentation.js';
import { hostClass } from './ProductStage.styles.js';

const ProductStagePresentation = ({ id, className, headline, headlineAs, overline, overlineAs, subline, sublineAs, content, backgroundColor, backgroundImageImgSrc, backgroundImageSource, backgroundImageFocalPoint, badgeText, badgeIcon, badgeColor, badgePosition, foregroundImageSrc, noMargin, button, buttonRef, buttonSticky, manualHyphenation, alt, }) => {
    const isMobile = useViewportRange(undefined, "sm");
    return (React__default.createElement(Host, { id: id, as: "section", className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
            [`${lsgPre}no-margin`]: noMargin,
        }), "data-lsg-component": "product-stage" },
        React__default.createElement("div", { className: `${hostClass}-wrapper` },
            React__default.createElement("div", { className: cleanupClassObject({
                    [`${hostClass}-visual`]: true,
                    [`${hostClass}-visual__${backgroundColor}`]: true,
                }) },
                foregroundImageSrc && (React__default.createElement("div", { className: `${hostClass}-visual__clipped` },
                    React__default.createElement(PicturePresentation, { imgSrc: foregroundImageSrc, ratio: isMobile ? "4-3" : undefined, alt: alt ?? "", noMargin: true }))),
                !foregroundImageSrc && (backgroundImageImgSrc || backgroundImageSource) && (React__default.createElement(PicturePresentation, { noMargin: true, imgSrc: backgroundImageImgSrc, source: backgroundImageSource, focalPoint: backgroundImageFocalPoint ?? { offsetLeft: 0, offsetTop: 50 }, ratio: isMobile ? "4-3" : undefined, asBackgroundImage: !isMobile, alt: alt ?? "" }))),
            React__default.createElement("div", { className: `${hostClass}-content` },
                React__default.createElement(HeadlinePresentation, { size: "h2", as: headlineAs || "h1", overline: overline, overlineAs: overlineAs, subline: subline, sublineAs: sublineAs, manualHyphenation: manualHyphenation, badgeText: badgeText, badgeIcon: badgeIcon, badgeColor: badgeColor, badgePosition: badgePosition }, headline),
                content,
                button && (React__default.createElement(React__default.Fragment, null,
                    React__default.createElement("div", { ref: buttonRef, style: buttonSticky ? { visibility: "hidden" } : {}, "aria-hidden": buttonSticky, className: `${hostClass}-action-button` }, button),
                    buttonSticky && React__default.createElement("div", { className: `${hostClass}-action-button__sticky` }, button)))))));
};
ProductStagePresentation.displayName = "ProductStagePresentation";

export { ProductStagePresentation };
