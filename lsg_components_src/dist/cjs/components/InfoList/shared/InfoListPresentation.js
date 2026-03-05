'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var Host = require('../../../utils/Host.js');
var GridPresentation = require('../../Grid/shared/GridPresentation.js');
var GridRowPresentation = require('../../GridRow/shared/GridRowPresentation.js');
var InfoList_styles = require('./InfoList.styles.js');

// @ts-strict-ignore
const InfoListPresentation = ({
  id,
  children,
  noMargin,
  className
}) => (/*#__PURE__*/React__default.createElement(Host.Host, {
  id: id,
  className: DomUtils.cleanupClassObject({
    [className]: !!className,
    [InfoList_styles.hostClass]: true,
    [`${prefix.lsgPre}no-margin`]: noMargin,
    [GridPresentation.getGridClasses({
      spacing: "doublesubsection"
    })]: true
  })
}, /*#__PURE__*/React__default.createElement("div", {
  className: GridRowPresentation.getGridRowClasses({})
}, children)));
InfoListPresentation.displayName = "InfoListPresentation";

exports.InfoListPresentation = InfoListPresentation;
