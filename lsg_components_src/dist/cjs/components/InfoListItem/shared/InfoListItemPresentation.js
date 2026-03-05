'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var Host = require('../../../utils/Host.js');
var GridColumnPresentation = require('../../GridColumn/shared/GridColumnPresentation.js');
var HeadlinePresentation = require('../../Headline/shared/HeadlinePresentation.js');
var ParagraphPresentation = require('../../Paragraph/shared/ParagraphPresentation.js');
var ThumbnailPresentation = require('../../Thumbnail/shared/ThumbnailPresentation.js');
var InfoListItem_styles = require('./InfoListItem.styles.js');

// @ts-strict-ignore
const InfoListItemPresentation = ({
  id,
  noMargin,
  className,
  gridColumnSize = 5,
  headline,
  headlineAs,
  enumerationValue,
  text
}) => (/*#__PURE__*/React__default.createElement(Host.Host, {
  id: id,
  className: DomUtils.cleanupClassObject({
    [className]: !!className,
    [InfoListItem_styles.hostClass]: true,
    [`${prefix.lsgPre}no-margin`]: noMargin,
    [GridColumnPresentation.getGridColumnClasses({
      size: gridColumnSize
    })]: true
  })
}, /*#__PURE__*/React__default.createElement(ThumbnailPresentation.ThumbnailPresentation, {
  text: enumerationValue
}), /*#__PURE__*/React__default.createElement(HeadlinePresentation.HeadlinePresentation, {
  size: "h4",
  as: headlineAs
}, headline), /*#__PURE__*/React__default.createElement(ParagraphPresentation.ParagraphPresentation, null, text)));
InfoListItemPresentation.displayName = "InfoListItemPresentation";

exports.InfoListItemPresentation = InfoListItemPresentation;
