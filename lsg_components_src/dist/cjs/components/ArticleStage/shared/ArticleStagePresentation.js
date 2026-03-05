'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var Host = require('../../../utils/Host.js');
var HeadlinePresentation = require('../../Headline/shared/HeadlinePresentation.js');
var IconLinkGroupWrapper = require('../../IconLinkGroup/shared/IconLinkGroupWrapper.js');
var ParagraphPresentation = require('../../Paragraph/shared/ParagraphPresentation.js');
var PicturePresentation = require('../../Picture/shared/PicturePresentation.js');
var TwoLineItemPresentation = require('../../TwoLineItem/shared/TwoLineItemPresentation.js');
var ArticleStage_styles = require('./ArticleStage.styles.js');

const ArticleStagePresentation = ({
  id,
  className,
  headline,
  headlineAs,
  headlineSubline,
  headlineSublineAs,
  headlineOverline,
  headlineOverlineAs,
  helperText,
  thumbIcon,
  thumbIconName,
  thumbIconVariant,
  thumbIconTitle,
  thumbText,
  thumbImgSrc,
  thumbHeadline,
  thumbSubline,
  thumbSublineAs,
  pictureCaption,
  pictureAlt = "",
  pictureImgSrc,
  pictureSource,
  noMargin,
  children,
  horizontalAlignment,
  manualHyphenation
}) => (/*#__PURE__*/React__default.createElement(Host.Host, {
  id: id,
  className: DomUtils.cleanupClassObject({
    [ArticleStage_styles.hostClass]: true,
    [className]: !!className,
    [`${prefix.lsgPre}no-margin`]: noMargin
  })
}, /*#__PURE__*/React__default.createElement(HeadlinePresentation.HeadlinePresentation, {
  horizontalAlignment: horizontalAlignment,
  size: "h1",
  as: headlineAs,
  overline: headlineOverline,
  overlineAs: headlineOverlineAs,
  subline: headlineSubline,
  sublineAs: headlineSublineAs,
  manualHyphenation: manualHyphenation
}, headline), thumbHeadline || thumbSubline || thumbIconName || helperText || children ? (/*#__PURE__*/React__default.createElement("div", {
  className: `${ArticleStage_styles.hostClass}__inner`
}, /*#__PURE__*/React__default.createElement("div", {
  className: `${ArticleStage_styles.hostClass}__two-line-item`
}, /*#__PURE__*/React__default.createElement(TwoLineItemPresentation.TwoLineItemPresentation, {
  src: thumbImgSrc,
  text: thumbText,
  icon: thumbIcon,
  iconName: thumbIconName,
  iconVariant: thumbIconVariant,
  iconTitle: thumbIconTitle,
  label: thumbHeadline,
  subline: thumbSubline,
  sublineAs: thumbSublineAs,
  noMargin: true
})), /*#__PURE__*/React__default.createElement("div", {
  className: `${ArticleStage_styles.hostClass}__inner-right`
}, /*#__PURE__*/React__default.createElement(ParagraphPresentation.ParagraphPresentation, {
  className: `${ArticleStage_styles.hostClass}__helper-text`,
  size: "helper-text",
  noMargin: true
}, helperText), /*#__PURE__*/React__default.createElement(IconLinkGroupWrapper.IconLinkGroupWrapper, {
  className: `${ArticleStage_styles.hostClass}__link-group`,
  direction: "horizontal",
  noMargin: true
}, children)))) : (/*#__PURE__*/React__default.createElement("div", {
  className: `${ArticleStage_styles.hostClass}-spacer`
})), (pictureImgSrc || pictureSource) && (/*#__PURE__*/React__default.createElement(PicturePresentation.PicturePresentation, {
  source: pictureSource,
  imgSrc: pictureImgSrc,
  alt: pictureAlt,
  caption: pictureCaption,
  horizontalAlignment: horizontalAlignment
}))));
ArticleStagePresentation.displayName = "ArticleStagePresentation";

exports.ArticleStagePresentation = ArticleStagePresentation;
