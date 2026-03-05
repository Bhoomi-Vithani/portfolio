'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var HeadlinePresentation = require('../../Headline/shared/HeadlinePresentation.js');
var ParagraphPresentation = require('../../Paragraph/shared/ParagraphPresentation.js');
var ArticleListItem_styles = require('./ArticleListItem.styles.js');

// @ts-strict-ignore
const ArticleListItemPresentation = ({
  id,
  className,
  noMargin,
  itemHeadline,
  itemHeadlineAs = "h5",
  children,
  horizontalAlignment
}) => (/*#__PURE__*/React__default.createElement("li", {
  id: id,
  className: DomUtils.cleanupClassObject({
    [ArticleListItem_styles.hostClass]: true,
    [className]: !!className,
    [`${ArticleListItem_styles.hostClass}__align-${horizontalAlignment}`]: horizontalAlignment,
    [`${prefix.lsgPre}no-margin`]: noMargin
  })
}, /*#__PURE__*/React__default.createElement(HeadlinePresentation.HeadlinePresentation, {
  as: itemHeadlineAs,
  size: "h6",
  horizontalAlignment: horizontalAlignment
}, itemHeadline), /*#__PURE__*/React__default.createElement(ParagraphPresentation.ParagraphPresentation, {
  size: "info-text",
  horizontalAlignment: horizontalAlignment
}, children)));
ArticleListItemPresentation.displayName = "ArticleListItemPresentation";

exports.ArticleListItemPresentation = ArticleListItemPresentation;
