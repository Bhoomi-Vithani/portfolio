'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var SimpleTable_styles = require('./SimpleTable.styles.js');

// @ts-strict-ignore
// TODO: Ration become not resolved, so ration seems redundancy. J-Ticket will open for diving in and improve
const SimpleTablePresentation = ({
  id,
  ratio,
  children,
  className,
  noMargin,
  description,
  title
}) => (/*#__PURE__*/React__default.createElement("table", {
  id: id,
  className: DomUtils.cleanupClassObject({
    [className]: !!className,
    [SimpleTable_styles.hostClass]: true,
    [`${SimpleTable_styles.hostClass}__${ratio}`]: !!ratio,
    [`${prefix.lsgPre}no-margin`]: noMargin
  }),
  summary: description
}, title && /*#__PURE__*/React__default.createElement("caption", {
  className: `${SimpleTable_styles.hostClass}title__notext`
}, title), /*#__PURE__*/React__default.createElement("tbody", null, children)));
SimpleTablePresentation.displayName = "SimpleTablePresentation";

exports.SimpleTablePresentation = SimpleTablePresentation;
