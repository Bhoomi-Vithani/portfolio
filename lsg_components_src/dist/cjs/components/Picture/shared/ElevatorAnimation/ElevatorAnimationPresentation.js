'use strict';

var React__default = require('react');
var DomUtils = require('../../../../utils/DomUtils.js');
var Host = require('../../../../utils/Host.js');
var React = require('../../../../utils/React.js');
var ElevatorAnimation_styles = require('./ElevatorAnimation.styles.js');

// @ts-strict-ignore
const defaultProps = {
  active: true
};
const ElevatorAnimationPresentation = React.fRef(props => {
  const {
    children,
    noMargin,
    className,
    isVisible,
    hostRef,
    active
  } = props;
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    className: DomUtils.cleanupClassObject({
      [className]: className,
      [ElevatorAnimation_styles.hostClass]: true,
      [`${ElevatorAnimation_styles.hostClass}no-margin`]: noMargin
    }),
    ref: hostRef
  }, /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${ElevatorAnimation_styles.hostClass}-inner`]: true,
      [`${ElevatorAnimation_styles.hostClass}-inner__visible`]: isVisible && active
    })
  }, children), active && (/*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${ElevatorAnimation_styles.hostClass}-overlay`]: true,
      [`${ElevatorAnimation_styles.hostClass}-overlay__visible`]: isVisible
    })
  })));
}, defaultProps);
ElevatorAnimationPresentation.displayName = "ElevatorAnimationPresentation";

exports.ElevatorAnimationPresentation = ElevatorAnimationPresentation;
exports.defaultProps = defaultProps;
