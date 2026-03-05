'use strict';

var React__default = require('react');
var DomUtils = require('./DomUtils.js');
var React = require('./React.js');

// @ts-strict-ignore
const StencilHost = props => /*#__PURE__*/React__default.createElement("div", {
  ...props
});
// @deprecated. Use `div` or `span` or </> instead.
const Host = React.fRef(props => {
  const {
    hostClass,
    className,
    isStencilHost,
    children,
    as,
    htmlAttrs = {},
    ...otherProps
  } = props;
  const HostComponent = isStencilHost ? StencilHost : as || "div";
  return /*#__PURE__*/React__default.createElement(HostComponent, {
    ...htmlAttrs,
    className: DomUtils.cleanupClassObject({
      [hostClass]: !!hostClass,
      [className]: !!className
    }),
    ...otherProps
  }, children);
});

exports.Host = Host;
