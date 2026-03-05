'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var Host = require('../../../utils/Host.js');
var AccordionGroup_styles = require('./AccordionGroup.styles.js');

// @ts-strict-ignore
const AccordionGroupPresentation = ({
  id,
  children,
  className,
  noMargin,
  isStencilHost
}) => (/*#__PURE__*/React__default.createElement(Host.Host, {
  id: id,
  className: DomUtils.cleanupClassObject({
    [className]: !!className,
    [AccordionGroup_styles.hostClass]: true,
    [`${prefix.lsgPre}no-margin`]: noMargin
  }),
  isStencilHost: isStencilHost
}, children));
AccordionGroupPresentation.displayName = "AccordionGroupPresentation";

exports.AccordionGroupPresentation = AccordionGroupPresentation;
