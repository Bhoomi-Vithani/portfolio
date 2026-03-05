'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var Host = require('../../../utils/Host.js');
var ChartInfoItem_styles = require('./ChartInfoItem.styles.js');

// @ts-strict-ignore
const ChartInfoItemPresentation = props => {
  const {
    id,
    className,
    noMargin,
    isStencilHost,
    label,
    labelColor = "primary",
    value,
    valueColor = "primary",
    valueFormatter,
    indicatorColor,
    // internal props
    appearance,
    isActive,
    role,
    onMouseEnter,
    onMouseLeave
  } = props;
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    id: id,
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [ChartInfoItem_styles.hostClass]: true,
      [`${prefix.lsgPre}no-margin`]: noMargin,
      [`${ChartInfoItem_styles.hostClass}-active`]: isActive,
      [`${ChartInfoItem_styles.hostClass}-inactive`]: isActive === undefined
    }),
    isStencilHost: isStencilHost,
    role: role,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave
  }, isActive, /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${ChartInfoItem_styles.hostClass}-indicator__${indicatorColor}`]: !!indicatorColor,
      [`${ChartInfoItem_styles.hostClass}-indicator`]: true
    })
  }), /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${ChartInfoItem_styles.hostClass}-content`]: true,
      [`${ChartInfoItem_styles.hostClass}-content-${appearance}`]: !!appearance
    })
  }, /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${ChartInfoItem_styles.hostClass}-label__${labelColor}`]: !!labelColor,
      [`${ChartInfoItem_styles.hostClass}-label`]: true,
      [`${ChartInfoItem_styles.hostClass}-label-infoarea`]: appearance === "infoarea",
      [`${ChartInfoItem_styles.hostClass}-label-other`]: appearance !== "infoarea"
    })
  }, label), /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${ChartInfoItem_styles.hostClass}-value__${valueColor}`]: !!valueColor,
      [`${ChartInfoItem_styles.hostClass}-value`]: true,
      [`${ChartInfoItem_styles.hostClass}-value__hidden`]: appearance === "legend",
      [`${ChartInfoItem_styles.hostClass}-value-${appearance}`]: !!appearance
    })
  }, valueFormatter ? valueFormatter(value) : value)));
};

exports.ChartInfoItemPresentation = ChartInfoItemPresentation;
