'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var SpacingContext = require('./SpacingContext.js');

const FormContainerPresentation = ({
  id,
  className,
  children,
  as = "form",
  style,
  htmlAttrs,
  spacing
}) => {
  const Container = as;
  const hostClass = `${prefix.lsgPre}form-container`;
  const classes = DomUtils.cleanupClassObject({
    [hostClass]: true,
    [className]: !!className,
    [`${hostClass}__dense`]: spacing === "dense"
  });
  const contextValue = React__default.useMemo(() => ({
    spacing
  }), [spacing]);
  //  https://react.dev/learn/passing-data-deeply-with-context
  return /*#__PURE__*/React__default.createElement(Container, {
    id: id,
    className: classes,
    style: style,
    ...htmlAttrs
  }, /*#__PURE__*/React__default.createElement(SpacingContext.SpacingContext.Provider, {
    value: contextValue
  }, children));
};

exports.FormContainerPresentation = FormContainerPresentation;
