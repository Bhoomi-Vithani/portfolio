'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var Host = require('../../../utils/Host.js');
var Theme_styles = require('./Theme.styles.js');

// @ts-strict-ignore
const getThemeChildrenClass = (color, component) => {
  const whiteLabelColor = typeof window !== "undefined" && window.lsgWL?.componentMap?.[component] || typeof window !== "undefined" && window.lsgWL?.themeMap?.[color] || color;
  return `${prefix.lsgPreGlobal}theme__${whiteLabelColor}`;
};
const getThemeBackgroundClass = (color, component) => {
  const whiteLabelColor = typeof window !== "undefined" && window.lsgWL?.componentMap?.[component] || typeof window !== "undefined" && window.lsgWL?.themeMap?.[color] || color;
  return `${prefix.lsgPreGlobal}theme__bg-${whiteLabelColor}`;
};
const getThemeClass = (color, component) => `${getThemeBackgroundClass(color, component)} ${getThemeChildrenClass(color, component)}`;
const ThemePresentation = ({
  id,
  children,
  noMargin,
  className,
  color = "dark",
  componentContext,
  componentName
}) => (/*#__PURE__*/React__default.createElement(Host.Host, {
  id: id,
  className: DomUtils.cleanupClassObject({
    [className]: !!className,
    [Theme_styles.hostClass]: true,
    [`${prefix.lsgPre}no-margin`]: noMargin,
    [`${Theme_styles.hostClass}__prevent-margin-overlap`]: !componentContext,
    [getThemeClass(color, componentName)]: true
  })
}, children));
ThemePresentation.displayName = "ThemePresentation";

exports.ThemePresentation = ThemePresentation;
exports.getThemeBackgroundClass = getThemeBackgroundClass;
exports.getThemeChildrenClass = getThemeChildrenClass;
exports.getThemeClass = getThemeClass;
