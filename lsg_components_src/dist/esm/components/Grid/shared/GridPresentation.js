import React__default, { useContext } from 'react';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { Host } from '../../../utils/Host.js';
import { SpacingContext } from '../../FormContainer/shared/SpacingContext.js';
import { hostClass } from './Grid.styles.js';

// @ts-strict-ignore
const getGridClasses = ({ className, spacing, gallerySliderSpacing, gallerySlider, centeredLayout }, spacingFromContext) => {
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
    return cleanupClassObject({
        [className]: !!className,
        [`${hostClass}`]: true,
        [`${hostClass}__gallery-slider-spacing`]: gallerySliderSpacing,
        [`${hostClass}__gallery-slider`]: gallerySlider,
        [`${hostClass}__additional-spacing-${newSpacing}`]: !!effectiveSpacing /* applies additional selector only if Grid 'spacing' prop is provided
    (not undefined) AND if Grid is not in dense FormContainer */,
        [`${hostClass}__centered`]: centeredLayout,
        [`${hostClass}__dense`]: isDenseFromContext || effectiveSpacing === "dense",
    });
};
const GridPresentation = ({ id, children, ...otherProps }) => {
    // For Grid in FormContainer:
    const spacingFromContext = useContext(SpacingContext);
    return (React__default.createElement(Host, { className: getGridClasses(otherProps, spacingFromContext), id: id }, children));
};
GridPresentation.displayName = "GridPresentation";

export { GridPresentation, getGridClasses };
