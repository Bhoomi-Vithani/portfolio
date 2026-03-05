'use strict';

var React__default = require('react');
var prefix = require('../../../../config/prefix.js');
var DomUtils = require('../../../../utils/DomUtils.js');
var Host = require('../../../../utils/Host.js');
var GridColumnPresentation = require('../../../GridColumn/shared/GridColumnPresentation.js');
var HeadlinePresentation = require('../../../Headline/shared/HeadlinePresentation.js');
var IconPresentation = require('../../../Icon/shared/IconPresentation.js');
var ParagraphPresentation = require('../../../Paragraph/shared/ParagraphPresentation.js');
var StepperItem_styles = require('./StepperItem.styles.js');

const StepperItemPresentation = ({
  children,
  noMargin,
  className,
  iconName,
  icon,
  headline,
  overline,
  headlineAs,
  iconSize = "medium",
  gridColumnSize = 3,
  centeredLayout,
  iconColor = "default"
}) => {
  const horizontalAlignment = centeredLayout ? "center" : "left";
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [StepperItem_styles.hostClass]: true,
      [`${prefix.lsgPre}no-margin`]: noMargin,
      [GridColumnPresentation.getGridColumnClasses({
        size: 4,
        md: gridColumnSize
      })]: true,
      [`${prefix.lsgPre}-centered-layout`]: centeredLayout
    })
  }, /*#__PURE__*/React__default.createElement(IconPresentation.IconPresentation, {
    name: iconName,
    icon: icon,
    size: iconSize,
    color: iconColor,
    title: "",
    horizontalAlignment: horizontalAlignment
  }), /*#__PURE__*/React__default.createElement(HeadlinePresentation.HeadlinePresentation, {
    size: "h4",
    as: headlineAs,
    centeredLayout: centeredLayout,
    overline: overline
  }, headline), /*#__PURE__*/React__default.createElement(ParagraphPresentation.ParagraphPresentation, {
    centeredLayout: centeredLayout
  }, children));
};
StepperItemPresentation.displayName = "StepperItemPresentation";

exports.StepperItemPresentation = StepperItemPresentation;
