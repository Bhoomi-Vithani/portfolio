'use strict';

var React__default = require('react');
var DomUtils = require('../../../utils/DomUtils.js');
var ThemePresentation = require('../../Theme/shared/ThemePresentation.js');
var CardContainer_styles = require('./CardContainer.styles.js');

const CardContainerPresentation = ({
  topArea,
  bottomArea,
  hasHover,
  disabled,
  active,
  separator,
  contentAlignment,
  innerSpacing
}) => (/*#__PURE__*/React__default.createElement("div", {
  className: DomUtils.cleanupClassObject({
    [CardContainer_styles.mainClass]: true,
    [`${CardContainer_styles.mainClass}__has-hover`]: hasHover && !disabled,
    [`${CardContainer_styles.mainClass}__disabled`]: disabled,
    [`${CardContainer_styles.mainClass}__active`]: active,
    [`${CardContainer_styles.mainClass}__${innerSpacing}`]: innerSpacing,
    [ThemePresentation.getThemeChildrenClass("elevated")]: true
  })
}, /*#__PURE__*/React__default.createElement("div", {
  className: `${CardContainer_styles.mainClass}__before`
}), /*#__PURE__*/React__default.createElement("div", {
  className: DomUtils.cleanupClassObject({
    [`${CardContainer_styles.mainClass}-top-area`]: true,
    [`${CardContainer_styles.mainClass}__${contentAlignment}`]: !!contentAlignment
  })
}, topArea), bottomArea && (/*#__PURE__*/React__default.createElement("div", {
  className: DomUtils.cleanupClassObject({
    [`${CardContainer_styles.mainClass}-bottom-area`]: true,
    [`${CardContainer_styles.mainClass}-bottom-area__centered`]: !!contentAlignment,
    [`${CardContainer_styles.mainClass}-bottom-area__separator`]: !!separator
  })
}, bottomArea))));
CardContainerPresentation.displayName = "CardContainerPresentation";

exports.CardContainerPresentation = CardContainerPresentation;
