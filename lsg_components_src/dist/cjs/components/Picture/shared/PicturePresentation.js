'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var viewport = require('../../../styles/viewport.js');
var DomUtils = require('../../../utils/DomUtils.js');
var ElevatorAnimationWrapper = require('./ElevatorAnimation/ElevatorAnimationWrapper.js');
var Picture_styles = require('./Picture.styles.js');
var PictureBackgroundWrapper = require('./PictureBackground/PictureBackgroundWrapper.js');

// @ts-strict-ignore
const Caption = ({
  horizontalAlignment: horizontalAlign,
  caption
}) => (/*#__PURE__*/React__default.createElement("figcaption", {
  className: `${Picture_styles.hostClass}__caption`,
  style: {
    textAlign: horizontalAlign
  }
}, caption));
const PicturePresentation = props => {
  const {
    id,
    alt,
    caption,
    src = "",
    className,
    asInline,
    asBackgroundImage,
    imgWidth,
    imgHeight,
    maxWidth,
    style,
    noMargin,
    imgAttrs,
    yellowElevator = false,
    horizontalAlignment,
    ratio,
    focalPoint
  } = props;
  const source = props.source || [typeof src === "object" && src.xl && {
    srcSet: src.xl,
    media: viewport.getViewportMediaQueryXlMin()
  }, typeof src === "object" && src.lg && {
    srcSet: src.lg,
    media: viewport.getViewportMediaQueryLgMin()
  }, typeof src === "object" && src.md && {
    srcSet: src.md,
    media: viewport.getViewportMediaQueryMdMin()
  }, typeof src === "object" && src.sm && {
    srcSet: src.sm,
    media: viewport.getViewportMediaQuerySmMin()
  }, typeof src === "object" && src.xs && {
    srcSet: src.xs
  }].filter(s => !!s);
  const imgSrc = props.imgSrc || (typeof props.src === "object" ? props.src.default : props.src);
  if (asBackgroundImage) {
    return /*#__PURE__*/React__default.createElement(PictureBackgroundWrapper.PictureBackgroundWrapper, {
      ...props,
      source: source,
      imgSrc: imgSrc
    });
  }
  const Picture = /*#__PURE__*/React__default.createElement("picture", {
    id: id,
    className: DomUtils.cleanupClassObject({
      [`${Picture_styles.hostClass}__inline`]: asInline,
      [`${prefix.lsgPre}no-margin`]: noMargin
    }),
    style: {
      ...style,
      maxWidth
    }
  }, source.map((s, i) => (/*#__PURE__*/React__default.createElement("source", {
    key: i,
    ...s
  }))), /*#__PURE__*/React__default.createElement("img", {
    ...imgAttrs,
    src: imgSrc,
    alt: alt,
    className: `${Picture_styles.hostClass}-img`,
    style: {
      maxWidth,
      width: imgWidth ? `${imgWidth}px` : undefined,
      height: imgHeight ? `${imgHeight}px` : undefined,
      objectPosition: focalPoint ? `${focalPoint.offsetLeft}% ${focalPoint.offsetTop}%` : undefined
    }
  }));
  return /*#__PURE__*/React__default.createElement("figure", {
    className: DomUtils.cleanupClassObject({
      [Picture_styles.hostClass]: true,
      [className]: !!className,
      [`${Picture_styles.hostClass}__ratio-${ratio}`]: ratio ? ratio === "full-height" : false,
      [`${prefix.lsgPre}no-margin`]: noMargin
    })
  }, /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${Picture_styles.hostClass}-inner`]: true,
      [`${Picture_styles.hostClass}__ratio-${ratio}`]: ratio,
      [`${Picture_styles.hostClass}__ratio`]: ratio,
      [`${prefix.lsgPre}no-margin`]: noMargin
    })
  }, yellowElevator ? (/*#__PURE__*/React__default.createElement(ElevatorAnimationWrapper.ElevatorAnimationWrapper, {
    active: yellowElevator
  }, Picture)) : Picture), caption && /*#__PURE__*/React__default.createElement(Caption, {
    horizontalAlignment: horizontalAlignment,
    caption: caption
  }));
};
PicturePresentation.displayName = "PicturePresentation";

exports.PicturePresentation = PicturePresentation;
