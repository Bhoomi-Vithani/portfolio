'use strict';

var React__default = require('react');
var DomUtils = require('../../../utils/DomUtils.js');
var Host = require('../../../utils/Host.js');
var SpacingContext = require('../../FormContainer/shared/SpacingContext.js');
var Grid_styles = require('./Grid.styles.js');

// @ts-strict-ignore
const getGridClasses = ({
  className,
  spacing,
  gallerySliderSpacing,
  gallerySlider,
  centeredLayout
}, spacingFromContext) => {
  // For 'spacing' prop of Grid:
  let newSpacing;
  // If Grid is inside FormContainer with dense spacing, ignore Grid's own 'spacing' prop:
  const isDenseFromContext = spacingFromContext?.spacing === "dense";
  const effectiveSpacing = isDenseFromContext ? undefined : spacing;
  switch (effectiveSpacing) {
    case "section":
      newSpacing = "large";
      break;
    case "subsection":
      newSpacing = "small";
      break;
    case "subsectionlarge":
      newSpacing = "medium";
      break;
    case "doublesubsection":
      newSpacing = "medium";
      break;
    case "small":
      newSpacing = "small";
      break;
    case "medium":
      newSpacing = "medium";
      break;
    case "large":
      newSpacing = "large";
      break;
    default:
      newSpacing = "medium"; /* in the browser, styles equivalent to 'spacing="small"' will be
                             rendered if no Grid 'spacing' prop is provided AND if Grid is not in dense FormContainer */
      break;
  }
  return DomUtils.cleanupClassObject({
    [className]: !!className,
    [`${Grid_styles.hostClass}`]: true,
    [`${Grid_styles.hostClass}__gallery-slider-spacing`]: gallerySliderSpacing,
    [`${Grid_styles.hostClass}__gallery-slider`]: gallerySlider,
    [`${Grid_styles.hostClass}__additional-spacing-${newSpacing}`]: !!effectiveSpacing /* applies additional selector only if Grid 'spacing' prop is provided
                                                                           (not undefined) AND if Grid is not in dense FormContainer */,
    [`${Grid_styles.hostClass}__centered`]: centeredLayout,
    [`${Grid_styles.hostClass}__dense`]: isDenseFromContext || effectiveSpacing === "dense"
  });
};
const GridPresentation = ({
  id,
  children,
  ...otherProps
}) => {
  // For Grid in FormContainer:
  const spacingFromContext = React__default.useContext(SpacingContext.SpacingContext);
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    className: getGridClasses(otherProps, spacingFromContext),
    id: id
  }, children);
};
GridPresentation.displayName = "GridPresentation";

exports.GridPresentation = GridPresentation;
exports.getGridClasses = getGridClasses;
