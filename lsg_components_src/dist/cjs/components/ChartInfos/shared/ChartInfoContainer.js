'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var Host = require('../../../utils/Host.js');
var ReactUtils = require('../../../utils/ReactUtils.js');
var ResizeEvents = require('../../../utils/windowEvents/ResizeEvents.js');
var HeadlinePresentation = require('../../Headline/shared/HeadlinePresentation.js');
var ChartInfoContainer_styles = require('./ChartInfoContainer.styles.js');

// @ts-strict-ignore
/**  Mapping to a valid position when position = auto
Return possible values:
 - mapped position when auto is given
 - unmapped position when not auto is given
 - no-position (default: when undefined) */
const mapChartInfoPosition = (originalPosition, viewPort) => {
  let pos = originalPosition;
  if (originalPosition === "auto" && ["xs", "sm"].includes(viewPort)) {
    pos = "bottom";
  }
  if (originalPosition === "auto" && ["md", "lg", "xl"].includes(viewPort)) {
    pos = "right";
  }
  return pos || "";
};
const ChartInfoContainer = props => {
  const {
    children,
    id,
    className,
    noMargin,
    position = "auto",
    titleFormatter,
    title,
    appearance,
    ariaDescription,
    htmlAttrs = {},
    onItemActive
  } = props;
  const uniqueId = index.useUniqueId(`${ChartInfoContainer_styles.hostClass}-description`, `${id}-description`);
  const viewPort = ResizeEvents.getViewportSize();
  const itemOrder = position === "right" && ["md", "lg", "xl"].includes(viewPort) || appearance === "tooltip" ? "column" : "row";
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    id: id,
    className: DomUtils.cleanupClassObject({
      [className]: className,
      [`${prefix.lsgPre}no-margin`]: noMargin,
      [ChartInfoContainer_styles.hostClass]: true,
      [`${ChartInfoContainer_styles.hostClass}-appearance-${appearance}`]: !!appearance,
      [`${ChartInfoContainer_styles.hostClass}__shadow`]: appearance === "tooltip"
    }),
    role: "list",
    "aria-label": [title, htmlAttrs["aria-label"]]?.filter(t => !!t).join(" "),
    "aria-labelledby": htmlAttrs["aria-labelledby"],
    "aria-describedby": ariaDescription || undefined
  }, /*#__PURE__*/React__default.createElement("span", {
    id: uniqueId,
    className: `${ChartInfoContainer_styles.hostClass}-description__hidden`
  }, ariaDescription), /*#__PURE__*/React__default.createElement(HeadlinePresentation.HeadlinePresentation, {
    as: "span",
    size: "h6"
  }, " ", titleFormatter ? titleFormatter(title) : title), /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${ChartInfoContainer_styles.hostClass}-items`]: true,
      [`${ChartInfoContainer_styles.hostClass}-items-order-${itemOrder}`]: true
    })
  }, ReactUtils.fragmentMap(children, (child, index) => /*#__PURE__*/React__default.cloneElement(child, {
    role: "listitem",
    appearance,
    onMouseEnter: () => onItemActive?.(index),
    onMouseLeave: () => onItemActive?.(null)
  }))));
};

exports.ChartInfoContainer = ChartInfoContainer;
exports.mapChartInfoPosition = mapChartInfoPosition;
