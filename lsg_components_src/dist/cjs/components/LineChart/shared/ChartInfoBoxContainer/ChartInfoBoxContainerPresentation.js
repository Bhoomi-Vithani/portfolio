'use strict';

var React__default = require('react');
var prefix = require('../../../../config/prefix.js');
var DomUtils = require('../../../../utils/DomUtils.js');
var Host = require('../../../../utils/Host.js');
var ReactUtils = require('../../../../utils/ReactUtils.js');
var ChartInfoBoxContainer_styles = require('./ChartInfoBoxContainer.styles.js');

// @ts-strict-ignore
const ChartInfoBoxContainerPresentation = ({
  id,
  children,
  className,
  noMargin,
  isStencilHost,
  positionTop,
  positionLeft,
  look,
  title,
  titleFormatter,
  containerRef
}) => (/*#__PURE__*/React__default.createElement(Host.Host, {
  id: id,
  className: DomUtils.cleanupClassObject({
    [className]: !!className,
    [ChartInfoBoxContainer_styles.hostClass]: true,
    [`${prefix.lsgPre}no-margin`]: noMargin,
    [`${ChartInfoBoxContainer_styles.hostClass}-${look}`]: look
  }),
  isStencilHost: isStencilHost,
  style: {
    top: `${positionTop}px`,
    left: `${positionLeft}px`
  },
  ref: containerRef
}, /*#__PURE__*/React__default.createElement("div", {
  className: `${ChartInfoBoxContainer_styles.hostClass}-title`
}, " ", titleFormatter ? titleFormatter(title) : title), ReactUtils.fragmentMap(children, child => /*#__PURE__*/React__default.cloneElement(child, {
  // overwrite only look is not defined in child, because child first
  look: child.props.look || look
}))));
ChartInfoBoxContainerPresentation.displayName = "ChartInfoBoxContainerPresentation";

exports.ChartInfoBoxContainerPresentation = ChartInfoBoxContainerPresentation;
