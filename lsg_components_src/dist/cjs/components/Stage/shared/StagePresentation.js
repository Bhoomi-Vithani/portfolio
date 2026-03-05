'use strict';

var icons = require('@lsg/icons');
var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var zIndex = require('../../../styles/zIndex.js');
var DomUtils = require('../../../utils/DomUtils.js');
var Host = require('../../../utils/Host.js');
var EyeCatcherWrapper = require('../../EyeCatcher/shared/EyeCatcherWrapper.js');
var HeadlinePresentation = require('../../Headline/shared/HeadlinePresentation.js');
var IconPresentation = require('../../Icon/shared/IconPresentation.js');
var ParagraphPresentation = require('../../Paragraph/shared/ParagraphPresentation.js');
var PicturePresentation = require('../../Picture/shared/PicturePresentation.js');
var ThemePresentation = require('../../Theme/shared/ThemePresentation.js');
var Stage_styles = require('./Stage.styles.js');

// @ts-strict-ignore
const getFocalPoint = (backgroundImageFocalPoint, viewportSize) => {
  // If values are given via prop, return them.
  if (backgroundImageFocalPoint) return backgroundImageFocalPoint;
  if (["sm", "xs"].includes(viewportSize)) {
    return {
      offsetLeft: 50,
      offsetTop: 20
    }; // default small viewport
  }
  return {
    offsetLeft: 50,
    offsetTop: 30
  }; // default greater viewport
};
const getContent = props => {
  const {
    id,
    className,
    headline,
    overline,
    subline,
    headlineAs,
    overlineAs,
    sublineAs,
    onScrollerClick,
    hideEyeCatcher,
    eyeCatcherText,
    eyeCatcherTextLong,
    eyeCatcherIncreaseWidth,
    eyeCatcherFontSize,
    eyeCatcherId,
    scrollerRef,
    layout,
    layoutRegularRef,
    layoutBreakingRef,
    eyeCatcherPosition,
    eyeCatcherRef,
    button,
    manualHyphenation
  } = {
    ...props
  };
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    id: id,
    className: DomUtils.cleanupClassObject({
      [`${Stage_styles.hostClass}-content`]: true,
      [className]: !!className,
      [ThemePresentation.getThemeClass("contrast")]: true
    })
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${Stage_styles.hostClass}-content-regular`,
    style: {
      visibility: layout === "regular" ? "visible" : "hidden",
      zIndex: layout === "regular" ? zIndex.zIndex.zContent : zIndex.zIndex.zHidden
    },
    ref: layoutRegularRef
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${Stage_styles.hostClass}-title`
  }, /*#__PURE__*/React__default.createElement(HeadlinePresentation.HeadlinePresentation, {
    size: "h1",
    overline: overline,
    subline: subline,
    centeredLayout: true,
    as: layout === "regular" ? headlineAs : "div",
    overlineAs: layout === "regular" ? overlineAs : "div",
    sublineAs: layout === "regular" ? sublineAs : "div",
    manualHyphenation: manualHyphenation
  }, headline)), button && /*#__PURE__*/React__default.createElement("div", {
    className: `${Stage_styles.hostClass}-inner-button`
  }, button)), /*#__PURE__*/React__default.createElement("div", {
    className: `${Stage_styles.hostClass}-content-breaking`,
    style: {
      visibility: layout === "breaking" ? "visible" : "hidden",
      zIndex: layout === "breaking" ? zIndex.zIndex.zContent : zIndex.zIndex.zHidden
    },
    ref: layoutBreakingRef
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${Stage_styles.hostClass}-title`
  }, /*#__PURE__*/React__default.createElement(HeadlinePresentation.HeadlinePresentation, {
    size: "h1",
    overline: overline,
    centeredLayout: true,
    as: layout === "breaking" ? headlineAs : "div",
    overlineAs: layout === "breaking" ? overlineAs : "div"
  }, headline)), button && /*#__PURE__*/React__default.createElement("div", {
    className: `${Stage_styles.hostClass}-inner-button`
  }, button)), /*#__PURE__*/React__default.createElement("div", {
    className: `${Stage_styles.hostClass}-content-breaking-full`,
    style: {
      visibility: layout === "breaking-full" ? "visible" : "hidden",
      zIndex: layout === "breaking-full" ? zIndex.zIndex.zContent : zIndex.zIndex.zHidden
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${Stage_styles.hostClass}-title`
  }, /*#__PURE__*/React__default.createElement(HeadlinePresentation.HeadlinePresentation, {
    size: "h1",
    overline: overline,
    centeredLayout: true,
    as: layout === "breaking-full" ? headlineAs : "div",
    overlineAs: layout === "breaking-full" ? overlineAs : "div"
  }, headline))), /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${Stage_styles.hostClass}-eyecatcher`]: true,
      [`${Stage_styles.hostClass}-eyecatcher__visible`]: !hideEyeCatcher
    }),
    style: {
      top: eyeCatcherPosition.top,
      right: eyeCatcherPosition.right,
      bottom: eyeCatcherPosition.bottom,
      left: eyeCatcherPosition.left
    },
    ref: eyeCatcherRef
  }, eyeCatcherText && (/*#__PURE__*/React__default.createElement(EyeCatcherWrapper.EyeCatcherWrapper, {
    text: eyeCatcherText,
    textLong: eyeCatcherTextLong,
    fontSize: eyeCatcherFontSize,
    increaseWidth: eyeCatcherIncreaseWidth,
    id: eyeCatcherId
  })))), /*#__PURE__*/React__default.createElement("div", {
    className: `${Stage_styles.hostClass}-scroller`,
    onClick: onScrollerClick,
    ref: scrollerRef,
    "aria-hidden": "true"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${Stage_styles.hostClass}-scroller-icon`
  }, /*#__PURE__*/React__default.createElement(IconPresentation.IconPresentation, {
    icon: icons.interaction_arrows_chevronDown,
    title: "",
    noMargin: true,
    inline: true,
    size: "medium"
  }))));
};
const StagePresentation = props => {
  const {
    subline,
    sublineAs,
    theme,
    nextTheme,
    backgroundVideoSrc,
    backgroundImageImgSrc,
    backgroundImageSource,
    backgroundImageFocalPoint,
    backgroundImageAltText,
    backgroundGradientDisabled,
    viewport,
    noMargin,
    hostRef,
    layout,
    button,
    innerRef
  } = props;
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    className: DomUtils.cleanupClassObject({
      [Stage_styles.hostClass]: true,
      [`${prefix.lsgPre}no-margin`]: noMargin
    }),
    ref: hostRef,
    as: "section"
  }, (backgroundImageSource || backgroundImageImgSrc) && (!backgroundVideoSrc || ["xs"].includes(viewport)) && (/*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${Stage_styles.hostClass}-inner`]: true,
      [ThemePresentation.getThemeClass(theme)]: !!theme
    }),
    ref: innerRef
  }, getContent(props), /*#__PURE__*/React__default.createElement(PicturePresentation.PicturePresentation, {
    className: DomUtils.cleanupClassObject({
      [`${Stage_styles.hostClass}-background`]: true,
      [`${Stage_styles.hostClass}-background__has-gradient`]: !backgroundGradientDisabled
    }),
    focalPoint: getFocalPoint(backgroundImageFocalPoint, viewport),
    imgSrc: backgroundImageImgSrc,
    source: backgroundImageSource,
    ratio: "full-height",
    alt: backgroundImageAltText ?? ""
  }))), backgroundVideoSrc && ["xl", "lg", "md", "sm"].includes(viewport) && (/*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${Stage_styles.hostClass}-inner`]: true,
      [ThemePresentation.getThemeClass(theme)]: !!theme
    }),
    ref: innerRef
  }, /*#__PURE__*/React__default.createElement("video", {
    className: `${Stage_styles.hostClass}-background-video`,
    autoPlay: true,
    muted: true,
    loop: true
  }, /*#__PURE__*/React__default.createElement("source", {
    src: backgroundVideoSrc,
    type: "video/mp4"
  })), getContent(props))), (layout === "breaking-full" || layout === "breaking") && (/*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${Stage_styles.hostClass}-outer`]: true,
      [ThemePresentation.getThemeClass(nextTheme)]: nextTheme
    })
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${Stage_styles.hostClass}-outer-leadtext`
  }, /*#__PURE__*/React__default.createElement(ParagraphPresentation.ParagraphPresentation, {
    as: sublineAs || "div",
    noMargin: true
  }, subline)), layout === "breaking-full" && /*#__PURE__*/React__default.createElement("div", {
    className: `${Stage_styles.hostClass}-outer-button`
  }, button))));
};
StagePresentation.displayName = "StagePresentation";

exports.StagePresentation = StagePresentation;
