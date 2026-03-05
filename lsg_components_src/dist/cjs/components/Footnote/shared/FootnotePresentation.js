'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var Footnote_styles = require('./Footnote.styles.js');

// @ts-strict-ignore
const FootnotePresentation = ({
  id,
  className,
  children,
  noMargin
}) => (/*#__PURE__*/React__default.createElement("ol", {
  className: DomUtils.cleanupClassObject({
    [Footnote_styles.mainClass]: true,
    [className]: !!className,
    [`${prefix.lsgPre}no-margin`]: noMargin
  }),
  id: id
}, children));
FootnotePresentation.displayName = "FootnotePresentation";

exports.FootnotePresentation = FootnotePresentation;
