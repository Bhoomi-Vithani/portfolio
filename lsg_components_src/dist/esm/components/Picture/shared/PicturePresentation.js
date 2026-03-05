import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { getViewportMediaQueryXlMin, getViewportMediaQueryLgMin, getViewportMediaQueryMdMin, getViewportMediaQuerySmMin } from '../../../styles/viewport.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { ElevatorAnimationWrapper } from './ElevatorAnimation/ElevatorAnimationWrapper.js';
import { hostClass } from './Picture.styles.js';
import { PictureBackgroundWrapper } from './PictureBackground/PictureBackgroundWrapper.js';

// @ts-strict-ignore
const Caption = ({ horizontalAlignment: horizontalAlign, caption }) => (React__default.createElement("figcaption", { className: `${hostClass}__caption`, style: { textAlign: horizontalAlign } }, caption));
const PicturePresentation = (props) => {
    const { id, alt, caption, src = "", className, asInline, asBackgroundImage, imgWidth, imgHeight, maxWidth, style, noMargin, imgAttrs, yellowElevator = false, horizontalAlignment, ratio, focalPoint, } = props;
    const source = props.source ||
        [
            typeof src === "object" && src.xl && { srcSet: src.xl, media: getViewportMediaQueryXlMin() },
            typeof src === "object" && src.lg && { srcSet: src.lg, media: getViewportMediaQueryLgMin() },
            typeof src === "object" && src.md && { srcSet: src.md, media: getViewportMediaQueryMdMin() },
            typeof src === "object" && src.sm && { srcSet: src.sm, media: getViewportMediaQuerySmMin() },
            typeof src === "object" && src.xs && { srcSet: src.xs },
        ].filter(s => !!s);
    const imgSrc = props.imgSrc || (typeof props.src === "object" ? props.src.default : props.src);
    if (asBackgroundImage) {
        return React__default.createElement(PictureBackgroundWrapper, { ...props, source: source, imgSrc: imgSrc });
    }
    const Picture = (React__default.createElement("picture", { id: id, className: cleanupClassObject({
            [`${hostClass}__inline`]: asInline,
            [`${lsgPre}no-margin`]: noMargin,
        }), style: { ...style, maxWidth } },
        source.map((s, i) => (React__default.createElement("source", { key: i, ...s }))),
        React__default.createElement("img", { ...imgAttrs, src: imgSrc, alt: alt, className: `${hostClass}-img`, style: {
                maxWidth,
                width: imgWidth ? `${imgWidth}px` : undefined,
                height: imgHeight ? `${imgHeight}px` : undefined,
                objectPosition: focalPoint ? `${focalPoint.offsetLeft}% ${focalPoint.offsetTop}%` : undefined,
            } })));
    return (React__default.createElement("figure", { className: cleanupClassObject({
            [hostClass]: true,
            [className]: !!className,
            [`${hostClass}__ratio-${ratio}`]: ratio ? ratio === "full-height" : false,
            [`${lsgPre}no-margin`]: noMargin,
        }) },
        React__default.createElement("div", { className: cleanupClassObject({
                [`${hostClass}-inner`]: true,
                [`${hostClass}__ratio-${ratio}`]: ratio,
                [`${hostClass}__ratio`]: ratio,
                [`${lsgPre}no-margin`]: noMargin,
            }) }, yellowElevator ? (React__default.createElement(ElevatorAnimationWrapper, { active: yellowElevator }, Picture)) : (Picture)),
        caption && React__default.createElement(Caption, { horizontalAlignment: horizontalAlignment, caption: caption })));
};
PicturePresentation.displayName = "PicturePresentation";

export { PicturePresentation };
