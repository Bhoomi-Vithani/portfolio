'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var Host = require('../../../utils/Host.js');
var HeadlinePresentation = require('../../Headline/shared/HeadlinePresentation.js');
var IconPresentation = require('../../Icon/shared/IconPresentation.js');
var ArticleList_styles = require('./ArticleList.styles.js');

const ArticleListPresentation = ({
  id,
  children,
  className,
  icon,
  iconColor = "default",
  iconName,
  iconVariant = "outline",
  headline,
  headlineAs = "h4",
  headlineId: headlineIdProp,
  noMargin,
  horizontalAlignment
}) => {
  const headlineId = index.useUniqueId(`${ArticleList_styles.hostClass}-`, headlineIdProp);
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    id: id,
    className: DomUtils.cleanupClassObject({
      [ArticleList_styles.hostClass]: true,
      [className]: !!className,
      [`${prefix.lsgPre}no-margin`]: noMargin
    })
  }, /*#__PURE__*/React__default.createElement(IconPresentation.IconPresentation, {
    name: iconName,
    icon: icon,
    variant: iconVariant,
    color: iconColor,
    size: "medium",
    horizontalAlignment: horizontalAlignment,
    title: ""
  }), /*#__PURE__*/React__default.createElement(HeadlinePresentation.HeadlinePresentation, {
    as: headlineAs,
    id: headlineId,
    size: "h4",
    horizontalAlignment: horizontalAlignment
  }, headline), /*#__PURE__*/React__default.createElement("ul", {
    className: `${ArticleList_styles.hostClass}-list`,
    "aria-labelledby": headlineId
  }, children));
};
ArticleListPresentation.displayName = "ArticleListPresentation";

exports.ArticleListPresentation = ArticleListPresentation;
