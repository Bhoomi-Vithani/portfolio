'use strict';

var React__default = require('react');
var prefix = require('../../config/prefix.js');
var DomUtils = require('../../utils/DomUtils.js');
var ChipsItemContainer_styles = require('./ChipsItemContainer.styles.js');

const ChipsItemContainer = props => {
  const {
    as,
    containerRef,
    clicked,
    hasKeyboardFocus,
    hasMouseHover,
    isSelected,
    noMargin,
    children,
    appearance,
    className
  } = props;
  const Component = as || "div";
  return /*#__PURE__*/React__default.createElement(Component, {
    className: DomUtils.cleanupClassObject({
      [className || ""]: !!className,
      [ChipsItemContainer_styles.hostClass]: true,
      [`${ChipsItemContainer_styles.hostClass}-container`]: true,
      [`${ChipsItemContainer_styles.hostClass}__hover`]: hasMouseHover || hasKeyboardFocus,
      [`${ChipsItemContainer_styles.hostClass}__focus`]: hasKeyboardFocus,
      [`${ChipsItemContainer_styles.hostClass}__selected`]: isSelected,
      [`${prefix.lsgPre}no-margin`]: noMargin || false,
      [`${ChipsItemContainer_styles.hostClass}__clicked`]: clicked,
      [`${ChipsItemContainer_styles.hostClass}__no-space`]: appearance === "no-text"
    }),
    ref: containerRef
  }, children);
};

exports.ChipsItemContainer = ChipsItemContainer;
