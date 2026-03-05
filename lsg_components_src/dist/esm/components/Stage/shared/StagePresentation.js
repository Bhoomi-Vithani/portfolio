import { interaction_arrows_chevronDown } from '@lsg/icons';
import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { zIndex } from '../../../styles/zIndex.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { Host } from '../../../utils/Host.js';
import { EyeCatcherWrapper } from '../../EyeCatcher/shared/EyeCatcherWrapper.js';
import { HeadlinePresentation } from '../../Headline/shared/HeadlinePresentation.js';
import { IconPresentation } from '../../Icon/shared/IconPresentation.js';
import { ParagraphPresentation } from '../../Paragraph/shared/ParagraphPresentation.js';
import { PicturePresentation } from '../../Picture/shared/PicturePresentation.js';
import { getThemeClass } from '../../Theme/shared/ThemePresentation.js';
import { hostClass } from './Stage.styles.js';

// @ts-strict-ignore
const getFocalPoint = (backgroundImageFocalPoint, viewportSize) => {
    // If values are given via prop, return them.
    if (backgroundImageFocalPoint)
        return backgroundImageFocalPoint;
    if (["sm", "xs"].includes(viewportSize)) {
        return { offsetLeft: 50, offsetTop: 20 }; // default small viewport
    }
    return { offsetLeft: 50, offsetTop: 30 }; // default greater viewport
};
const getContent = (props) => {
    const { id, className, headline, overline, subline, headlineAs, overlineAs, sublineAs, onScrollerClick, hideEyeCatcher, eyeCatcherText, eyeCatcherTextLong, eyeCatcherIncreaseWidth, eyeCatcherFontSize, eyeCatcherId, scrollerRef, layout, layoutRegularRef, layoutBreakingRef, eyeCatcherPosition, eyeCatcherRef, button, manualHyphenation, } = {
        ...props,
    };
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement("div", { id: id, className: cleanupClassObject({
                [`${hostClass}-content`]: true,
                [className]: !!className,
                [getThemeClass("contrast")]: true,
            }) },
            React__default.createElement("div", { className: `${hostClass}-content-regular`, style: {
                    visibility: layout === "regular" ? "visible" : "hidden",
                    zIndex: layout === "regular" ? zIndex.zContent : zIndex.zHidden,
                }, ref: layoutRegularRef },
                React__default.createElement("div", { className: `${hostClass}-title` },
                    React__default.createElement(HeadlinePresentation, { size: "h1", overline: overline, subline: subline, centeredLayout: true, as: layout === "regular" ? headlineAs : "div", overlineAs: layout === "regular" ? overlineAs : "div", sublineAs: layout === "regular" ? sublineAs : "div", manualHyphenation: manualHyphenation }, headline)),
                button && React__default.createElement("div", { className: `${hostClass}-inner-button` }, button)),
            React__default.createElement("div", { className: `${hostClass}-content-breaking`, style: {
                    visibility: layout === "breaking" ? "visible" : "hidden",
                    zIndex: layout === "breaking" ? zIndex.zContent : zIndex.zHidden,
                }, ref: layoutBreakingRef },
                React__default.createElement("div", { className: `${hostClass}-title` },
                    React__default.createElement(HeadlinePresentation, { size: "h1", overline: overline, centeredLayout: true, as: layout === "breaking" ? headlineAs : "div", overlineAs: layout === "breaking" ? overlineAs : "div" }, headline)),
                button && React__default.createElement("div", { className: `${hostClass}-inner-button` }, button)),
            React__default.createElement("div", { className: `${hostClass}-content-breaking-full`, style: {
                    visibility: layout === "breaking-full" ? "visible" : "hidden",
                    zIndex: layout === "breaking-full" ? zIndex.zContent : zIndex.zHidden,
                } },
                React__default.createElement("div", { className: `${hostClass}-title` },
                    React__default.createElement(HeadlinePresentation, { size: "h1", overline: overline, centeredLayout: true, as: layout === "breaking-full" ? headlineAs : "div", overlineAs: layout === "breaking-full" ? overlineAs : "div" }, headline))),
            React__default.createElement("div", { className: cleanupClassObject({
                    [`${hostClass}-eyecatcher`]: true,
                    [`${hostClass}-eyecatcher__visible`]: !hideEyeCatcher,
                }), style: {
                    top: eyeCatcherPosition.top,
                    right: eyeCatcherPosition.right,
                    bottom: eyeCatcherPosition.bottom,
                    left: eyeCatcherPosition.left,
                }, ref: eyeCatcherRef }, eyeCatcherText && (React__default.createElement(EyeCatcherWrapper, { text: eyeCatcherText, textLong: eyeCatcherTextLong, fontSize: eyeCatcherFontSize, increaseWidth: eyeCatcherIncreaseWidth, id: eyeCatcherId })))),
        React__default.createElement("div", { className: `${hostClass}-scroller`, onClick: onScrollerClick, ref: scrollerRef, "aria-hidden": "true" },
            React__default.createElement("div", { className: `${hostClass}-scroller-icon` },
                React__default.createElement(IconPresentation, { icon: interaction_arrows_chevronDown, title: "", noMargin: true, inline: true, size: "medium" })))));
};
const StagePresentation = (props) => {
    const { subline, sublineAs, theme, nextTheme, backgroundVideoSrc, backgroundImageImgSrc, backgroundImageSource, backgroundImageFocalPoint, backgroundImageAltText, backgroundGradientDisabled, viewport, noMargin, hostRef, layout, button, innerRef, } = props;
    return (React__default.createElement(Host, { className: cleanupClassObject({
            [hostClass]: true,
            [`${lsgPre}no-margin`]: noMargin,
        }), ref: hostRef, as: "section" },
        (backgroundImageSource || backgroundImageImgSrc) && (!backgroundVideoSrc || ["xs"].includes(viewport)) && (React__default.createElement("div", { className: cleanupClassObject({
                [`${hostClass}-inner`]: true,
                [getThemeClass(theme)]: !!theme,
            }), ref: innerRef },
            getContent(props),
            React__default.createElement(PicturePresentation, { className: cleanupClassObject({
                    [`${hostClass}-background`]: true,
                    [`${hostClass}-background__has-gradient`]: !backgroundGradientDisabled,
                }), focalPoint: getFocalPoint(backgroundImageFocalPoint, viewport), imgSrc: backgroundImageImgSrc, source: backgroundImageSource, ratio: "full-height", alt: backgroundImageAltText ?? "" }))),
        backgroundVideoSrc && ["xl", "lg", "md", "sm"].includes(viewport) && (React__default.createElement("div", { className: cleanupClassObject({
                [`${hostClass}-inner`]: true,
                [getThemeClass(theme)]: !!theme,
            }), ref: innerRef },
            React__default.createElement("video", { className: `${hostClass}-background-video`, autoPlay: true, muted: true, loop: true },
                React__default.createElement("source", { src: backgroundVideoSrc, type: "video/mp4" })),
            getContent(props))),
        (layout === "breaking-full" || layout === "breaking") && (React__default.createElement("div", { className: cleanupClassObject({
                [`${hostClass}-outer`]: true,
                [getThemeClass(nextTheme)]: nextTheme,
            }) },
            React__default.createElement("div", { className: `${hostClass}-outer-leadtext` },
                React__default.createElement(ParagraphPresentation, { as: sublineAs || "div", noMargin: true }, subline)),
            layout === "breaking-full" && React__default.createElement("div", { className: `${hostClass}-outer-button` }, button)))));
};
StagePresentation.displayName = "StagePresentation";

export { StagePresentation };
