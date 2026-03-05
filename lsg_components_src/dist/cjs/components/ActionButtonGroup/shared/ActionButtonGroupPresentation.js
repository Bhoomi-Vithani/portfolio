'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var Host = require('../../../utils/Host.js');
var ReactUtils = require('../../../utils/ReactUtils.js');
var ActionButtonGroup_styles = require('./ActionButtonGroup.styles.js');

// @ts-strict-ignore
const ActionButtonGroupPresentation = ({
  id,
  children,
  noMargin,
  className,
  as: asProp
}) => {
  const forceUl = asProp !== "ul" && asProp !== "li" && ReactUtils.fragmentCount(children) > 1;
  const as = forceUl ? "ul" : asProp;
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    id: id,
    className: DomUtils.cleanupClassObject({
      [className]: className,
      [ActionButtonGroup_styles.hostClass]: true,
      [`${prefix.lsgPre}no-margin`]: noMargin
    }),
    as: as
  }, ReactUtils.fragmentMap(children, child => /*#__PURE__*/React__default.cloneElement(child, {
    as: as === "ul" || as === "ol" ? "li" : child.props.as
  })));
};
ActionButtonGroupPresentation.displayName = "ActionButtonGroupPresentation";

exports.ActionButtonGroupPresentation = ActionButtonGroupPresentation;
