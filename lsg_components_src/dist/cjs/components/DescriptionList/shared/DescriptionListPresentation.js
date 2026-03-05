'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var DescriptionList_styles = require('./DescriptionList.styles.js');

// @ts-strict-ignore
const DescriptionListPresentation = ({
  termWrap,
  id,
  className,
  noMargin,
  children,
  horizontalAlignment
}) => (/*#__PURE__*/React__default.createElement("dl", {
  className: DomUtils.cleanupClassObject({
    [`${DescriptionList_styles.hostClass}`]: true,
    [className]: !!className,
    [`${DescriptionList_styles.hostClass}__align-${horizontalAlignment}`]: horizontalAlignment,
    [`${DescriptionList_styles.hostClass}__term-wrap`]: termWrap === true,
    [`${prefix.lsgPre}no-margin`]: noMargin
  }),
  id: id
}, children));
DescriptionListPresentation.displayName = "DescriptionListPresentation";

exports.DescriptionListPresentation = DescriptionListPresentation;
