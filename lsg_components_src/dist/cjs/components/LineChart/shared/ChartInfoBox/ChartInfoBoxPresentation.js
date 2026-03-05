'use strict';

var React__default = require('react');
var prefix = require('../../../../config/prefix.js');
var DomUtils = require('../../../../utils/DomUtils.js');
var Host = require('../../../../utils/Host.js');
var ChartInfoBox_styles = require('./ChartInfoBox.styles.js');

// @ts-strict-ignore
const ChartInfoBoxPresentation = ({
  id,
  className,
  noMargin,
  isStencilHost,
  label,
  value,
  indicatorColor,
  look,
  valueColor,
  valueFormatter
}) => {
  const valColor = valueColor ? `__${valueColor}` : ``;
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    id: id,
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [ChartInfoBox_styles.hostClass]: true,
      [`${prefix.lsgPre}no-margin`]: noMargin
    }),
    isStencilHost: isStencilHost
  }, /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${ChartInfoBox_styles.hostClass}-indicator__${indicatorColor}`]: true,
      [`${ChartInfoBox_styles.hostClass}-indicator`]: true
    })
  }), /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${ChartInfoBox_styles.hostClass}-content`]: true,
      [`${ChartInfoBox_styles.hostClass}-content-${look}`]: true
    })
  }, /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${ChartInfoBox_styles.hostClass}-label__bold`]: ["legend", "tooltip"].includes(look),
      [`${ChartInfoBox_styles.hostClass}-label`]: true
    })
  }, label), /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${ChartInfoBox_styles.hostClass}-value__bold`]: ["infoarea"].includes(look),
      [`${ChartInfoBox_styles.hostClass}-value${valColor}`]: valueColor,
      [`${ChartInfoBox_styles.hostClass}-value`]: true
    })
  }, valueFormatter ? valueFormatter(value) : value)), " ");
};
ChartInfoBoxPresentation.displayName = "ChartInfoBoxPresentation";

exports.ChartInfoBoxPresentation = ChartInfoBoxPresentation;
