'use strict';

var React__default = require('react');
var DomUtils = require('../../utils/DomUtils.js');
var Host = require('../../utils/Host.js');
var NavigationSeparator_styles = require('./NavigationSeparator.styles.js');

// @ts-strict-ignore
const NavigationSeparatorPresentation = ({
  id,
  children,
  className,
  isStencilHost
}) => (/*#__PURE__*/React__default.createElement(Host.Host, {
  id: id,
  className: DomUtils.cleanupClassObject({
    [className]: !!className,
    [NavigationSeparator_styles.hostClass]: true
  }),
  isStencilHost: isStencilHost
}, children));
NavigationSeparatorPresentation.displayName = "NavigationSeparatorPresentation";

exports.NavigationSeparatorPresentation = NavigationSeparatorPresentation;
