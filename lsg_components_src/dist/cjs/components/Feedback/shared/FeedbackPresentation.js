'use strict';

var icons = require('@lsg/icons');
var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var Host = require('../../../utils/Host.js');
var Localization = require('../../../utils/Localization.js');
var IconLinkWrapper = require('../../IconLink/shared/IconLinkWrapper.js');
var IconLinkGroupWrapper = require('../../IconLinkGroup/shared/IconLinkGroupWrapper.js');
var Feedback_styles = require('./Feedback.styles.js');

// @ts-strict-ignore
const FeedbackPresentation = ({
  id,
  className,
  noMargin,
  isStencilHost,
  textBefore,
  textAfter,
  textResult = Localization.texts.lsg.component.Feedback.result,
  textButtonTrue = Localization.texts.lsg.component.Feedback.trueButton,
  textButtonFalse = Localization.texts.lsg.component.Feedback.falseButton,
  result,
  onTrueClick,
  onFalseClick,
  animationHide
}) => {
  const showResult = result !== undefined && !animationHide;
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    id: id,
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [Feedback_styles.hostClass]: true,
      [`${prefix.lsgPre}no-margin`]: noMargin,
      [`${Feedback_styles.hostClass}-hide`]: animationHide && result !== undefined
    }),
    isStencilHost: isStencilHost
  }, !showResult && (/*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    className: `${Feedback_styles.hostClass}-text-before`
  }, textBefore), /*#__PURE__*/React__default.createElement(IconLinkGroupWrapper.IconLinkGroupWrapper, {
    noMargin: true
  }, /*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
    icon: icons.communication_feedback_happy,
    onClick: onTrueClick,
    label: textButtonTrue
  }), /*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
    icon: icons.communication_feedback_neutral,
    onClick: onFalseClick,
    label: textButtonFalse
  })), /*#__PURE__*/React__default.createElement("div", {
    className: `${Feedback_styles.hostClass}-text-after`
  }, textAfter))), showResult && /*#__PURE__*/React__default.createElement("div", {
    className: `${Feedback_styles.hostClass}-text-result`
  }, textResult));
};
FeedbackPresentation.displayName = "FeedbackPresentation";

exports.FeedbackPresentation = FeedbackPresentation;
