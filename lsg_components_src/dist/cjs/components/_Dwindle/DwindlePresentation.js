'use strict';

var React__default = require('react');
var DomUtils = require('../../utils/DomUtils.js');
var React = require('../../utils/React.js');
var ThemePresentation = require('../Theme/shared/ThemePresentation.js');
var Dwindle_styles = require('./Dwindle.styles.js');

const defaultProps = {
  shape: "rectangular"
};
const DwindlePresentation = React.fRef(props => {
  const {
    children,
    ref,
    color,
    shape,
    hover,
    clicked,
    floating,
    disabled,
    focus: keyboardFocus,
    className
  } = props;
  return /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${Dwindle_styles.mainClass}`]: true,
      [`${Dwindle_styles.mainClass}__${color}`]: !disabled,
      [`${Dwindle_styles.mainClass}__disabled`]: disabled,
      [`${Dwindle_styles.mainClass}__${shape}`]: !!shape,
      [`${Dwindle_styles.mainClass}__hover`]: hover,
      [`${Dwindle_styles.mainClass}__clicked`]: clicked,
      [`${Dwindle_styles.mainClass}__${color}__focus`]: keyboardFocus,
      [`${Dwindle_styles.mainClass}__inner_floating`]: floating,
      [ThemePresentation.getThemeChildrenClass("brand")]: color === "primary" && !disabled,
      [className]: className
    }),
    ref: ref
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${Dwindle_styles.mainClass}-inner`
  }, children));
}, defaultProps);
DwindlePresentation.displayName = "DwindlePresentation";

exports.DwindlePresentation = DwindlePresentation;
