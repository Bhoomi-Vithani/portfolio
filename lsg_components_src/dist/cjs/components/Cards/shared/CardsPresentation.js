'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var Host = require('../../../utils/Host.js');
var GridPresentation = require('../../Grid/shared/GridPresentation.js');
var GridRowPresentation = require('../../GridRow/shared/GridRowPresentation.js');
var Cards_styles = require('./Cards.styles.js');

// @ts-strict-ignore
const CardsPresentation = ({
  id,
  children,
  className,
  noMargin,
  as = "ul",
  centeredLayout,
  type,
  fieldsetLegend,
  ariaDescribedby
}) => {
  const InnerComponent = as;
  if (type === "SingleOptionToggle" || type === "MultiOptionToggle") {
    return /*#__PURE__*/React__default.createElement(Host.Host, {
      id: id,
      className: DomUtils.cleanupClassObject({
        [className]: !!className,
        [Cards_styles.hostClass]: true,
        [`${prefix.lsgPre}no-margin`]: noMargin,
        [GridPresentation.getGridClasses({
          spacing: "subsection",
          centeredLayout
        })]: true
      })
    }, /*#__PURE__*/React__default.createElement("fieldset", {
      className: DomUtils.cleanupClassObject({
        [GridRowPresentation.getGridRowClasses({})]: true,
        [`${Cards_styles.hostClass}-fieldset`]: true
      }),
      key: "selection-card-row",
      "aria-describedby": ariaDescribedby
    }, /*#__PURE__*/React__default.createElement("legend", null, fieldsetLegend), children));
  }
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    id: id,
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [Cards_styles.hostClass]: true,
      [`${prefix.lsgPre}no-margin`]: noMargin,
      [GridPresentation.getGridClasses({
        spacing: "subsection",
        centeredLayout
      })]: true
    })
  }, /*#__PURE__*/React__default.createElement(InnerComponent, {
    className: DomUtils.cleanupClassObject({
      [GridRowPresentation.getGridRowClasses({})]: true,
      [`${Cards_styles.hostClass}-ul`]: true
    }),
    key: "selection-card-row",
    "aria-describedby": ariaDescribedby
  }, children));
};
CardsPresentation.displayName = "CardsPresentation";

exports.CardsPresentation = CardsPresentation;
