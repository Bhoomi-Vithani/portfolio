'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var Host = require('../../../utils/Host.js');
var CardContainerPresentation = require('../../CardContainer/shared/CardContainerPresentation.js');
var PicturePresentation = require('../../Picture/shared/PicturePresentation.js');
var GallerySliderItem_styles = require('./GallerySliderItem.styles.js');

// @ts-strict-ignore
const GallerySliderItemPresentation = ({
  id,
  children,
  className,
  noMargin,
  isStencilHost,
  pictureAlt,
  pictureSource,
  pictureImgSrc,
  pictureImgAttrs,
  appearance,
  ariaLabel,
  ariaRoleDescription,
  ariaLabelledBy
}) => (/*#__PURE__*/React__default.createElement(Host.Host, {
  id: id,
  className: DomUtils.cleanupClassObject({
    [className]: !!className,
    [GallerySliderItem_styles.hostClass]: true,
    [`${prefix.lsgPre}no-margin`]: noMargin
  }),
  isStencilHost: isStencilHost,
  role: "group",
  "aria-roledescription": ariaRoleDescription,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy
}, appearance === "cards" ? (/*#__PURE__*/React__default.createElement(CardContainerPresentation.CardContainerPresentation, {
  topArea: /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    className: `${GallerySliderItem_styles.hostClass}-cards-image-container`
  }, /*#__PURE__*/React__default.createElement(PicturePresentation.PicturePresentation, {
    imgSrc: pictureImgSrc,
    source: pictureSource,
    alt: pictureAlt,
    imgAttrs: pictureImgAttrs
  })), children)
})) : (/*#__PURE__*/React__default.createElement(React__default.Fragment, null, pictureImgSrc && (/*#__PURE__*/React__default.createElement(PicturePresentation.PicturePresentation, {
  imgSrc: pictureImgSrc,
  source: pictureSource,
  alt: pictureAlt,
  imgAttrs: pictureImgAttrs
})), /*#__PURE__*/React__default.createElement("div", {
  className: `${GallerySliderItem_styles.hostClass}-content`
}, children)))));
GallerySliderItemPresentation.displayName = "GallerySliderItemPresentation";

exports.GallerySliderItemPresentation = GallerySliderItemPresentation;
