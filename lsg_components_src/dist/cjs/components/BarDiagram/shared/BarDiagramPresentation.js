'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var Host = require('../../../utils/Host.js');
var BarDiagram_styles = require('./BarDiagram.styles.js');

// @ts-strict-ignore
const BarDiagramPresentation = ({
  id: idProp,
  className,
  noMargin,
  isStencilHost,
  label,
  labelSubline,
  percent,
  valueLabel,
  valueLabelSubline,
  status,
  color = "primary-1",
  width,
  hide
}) => {
  const id = index.useUniqueId(`${BarDiagram_styles.hostClass}-`, idProp);
  const labelId = `${id}-label`;
  const percentClean = Math.min(100, Math.max(0, percent));
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    id: id,
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [BarDiagram_styles.hostClass]: true,
      [`${BarDiagram_styles.hostClass}__feedback-${status}`]: status,
      [`${prefix.lsgPre}no-margin`]: noMargin
    }),
    isStencilHost: isStencilHost,
    "aria-labelledby": labelId,
    style: {
      width: width > 0 ? `${width}px` : undefined,
      visibility: hide ? "hidden" : "visible"
    },
    role: "img"
  }, /*#__PURE__*/React__default.createElement("span", {
    id: labelId,
    className: `${BarDiagram_styles.hostClass}-label__hidden`
  }, [label, labelSubline, valueLabel, valueLabelSubline].join(", ")), /*#__PURE__*/React__default.createElement("div", {
    className: `${BarDiagram_styles.hostClass}-header`
  }, /*#__PURE__*/React__default.createElement("div", {
    "aria-hidden": true,
    className: `${BarDiagram_styles.hostClass}-header-label`
  }, label), /*#__PURE__*/React__default.createElement("div", {
    "aria-hidden": true,
    className: `${BarDiagram_styles.hostClass}-header-valuelabel`
  }, valueLabel)), /*#__PURE__*/React__default.createElement("div", {
    className: `${BarDiagram_styles.hostClass}-bar`
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${BarDiagram_styles.hostClass}-bar-track ${BarDiagram_styles.hostClass}-bar-track_${color}`,
    style: {
      width: `${percentClean}%`
    }
  }, "\u00A0")), /*#__PURE__*/React__default.createElement("div", {
    className: `${BarDiagram_styles.hostClass}-footer`
  }, /*#__PURE__*/React__default.createElement("div", {
    "aria-hidden": true,
    className: `${BarDiagram_styles.hostClass}-footer-label-subline`
  }, labelSubline), /*#__PURE__*/React__default.createElement("div", {
    "aria-hidden": true,
    className: `${BarDiagram_styles.hostClass}-footer-valuelabel-subline`
  }, valueLabelSubline)));
};
BarDiagramPresentation.displayName = "BarDiagramPresentation";

exports.BarDiagramPresentation = BarDiagramPresentation;
