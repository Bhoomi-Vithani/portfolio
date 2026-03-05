'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var Host = require('../../../utils/Host.js');
var HeadlinePresentation = require('../../Headline/shared/HeadlinePresentation.js');
var PicturePresentation = require('../../Picture/shared/PicturePresentation.js');
var ProductStage_styles = require('./ProductStage.styles.js');

const ProductStagePresentation = ({
  id,
  className,
  headline,
  headlineAs,
  overline,
  overlineAs,
  subline,
  sublineAs,
  content,
  backgroundColor,
  backgroundImageImgSrc,
  backgroundImageSource,
  backgroundImageFocalPoint,
  badgeText,
  badgeIcon,
  badgeColor,
  badgePosition,
  foregroundImageSrc,
  noMargin,
  button,
  buttonRef,
  buttonSticky,
  manualHyphenation,
  alt
}) => {
  const isMobile = index.useViewportRange(undefined, "sm");
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    id: id,
    as: "section",
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [ProductStage_styles.hostClass]: true,
      [`${prefix.lsgPre}no-margin`]: noMargin
    }),
    "data-lsg-component": "product-stage"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${ProductStage_styles.hostClass}-wrapper`
  }, /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${ProductStage_styles.hostClass}-visual`]: true,
      [`${ProductStage_styles.hostClass}-visual__${backgroundColor}`]: true
    })
  }, foregroundImageSrc && (/*#__PURE__*/React__default.createElement("div", {
    className: `${ProductStage_styles.hostClass}-visual__clipped`
  }, /*#__PURE__*/React__default.createElement(PicturePresentation.PicturePresentation, {
    imgSrc: foregroundImageSrc,
    ratio: isMobile ? "4-3" : undefined,
    alt: alt ?? "",
    noMargin: true
  }))), !foregroundImageSrc && (backgroundImageImgSrc || backgroundImageSource) && (/*#__PURE__*/React__default.createElement(PicturePresentation.PicturePresentation, {
    noMargin: true,
    imgSrc: backgroundImageImgSrc,
    source: backgroundImageSource,
    focalPoint: backgroundImageFocalPoint ?? {
      offsetLeft: 0,
      offsetTop: 50
    },
    ratio: isMobile ? "4-3" : undefined,
    asBackgroundImage: !isMobile,
    alt: alt ?? ""
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: `${ProductStage_styles.hostClass}-content`
  }, /*#__PURE__*/React__default.createElement(HeadlinePresentation.HeadlinePresentation, {
    size: "h2",
    as: headlineAs || "h1",
    overline: overline,
    overlineAs: overlineAs,
    subline: subline,
    sublineAs: sublineAs,
    manualHyphenation: manualHyphenation,
    badgeText: badgeText,
    badgeIcon: badgeIcon,
    badgeColor: badgeColor,
    badgePosition: badgePosition
  }, headline), content, button && (/*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    ref: buttonRef,
    style: buttonSticky ? {
      visibility: "hidden"
    } : {},
    "aria-hidden": buttonSticky,
    className: `${ProductStage_styles.hostClass}-action-button`
  }, button), buttonSticky && /*#__PURE__*/React__default.createElement("div", {
    className: `${ProductStage_styles.hostClass}-action-button__sticky`
  }, button))))));
};
ProductStagePresentation.displayName = "ProductStagePresentation";

exports.ProductStagePresentation = ProductStagePresentation;
