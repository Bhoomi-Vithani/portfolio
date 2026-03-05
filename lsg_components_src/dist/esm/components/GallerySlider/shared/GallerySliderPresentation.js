import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject, cleanupClassNames } from '../../../utils/DomUtils.js';
import { useUniqueId } from '../../../utils/Hooks/index.js';
import { usePreferReducedMotion } from '../../../utils/Hooks/animation.js';
import { Host } from '../../../utils/Host.js';
import { fRef } from '../../../utils/React.js';
import { fragmentMap } from '../../../utils/ReactUtils.js';
import { getGridClasses } from '../../Grid/shared/GridPresentation.js';
import { GridRowPresentation } from '../../GridRow/shared/GridRowPresentation.js';
import { SliderPaginationPresentation } from '../../SliderPagination/shared/SliderPaginationPresentation.js';
import { hostClass } from './GallerySlider.styles.js';

// @ts-strict-ignore
const getGalleryGridColumnClasses = ({ md, sm, colGap }) => cleanupClassObject({
    [`${hostClass}-md-col-${md}-${colGap}`]: true,
    [`${hostClass}-sm-col-${sm}-${colGap}`]: true,
    [`${hostClass}-xs-col-4-${colGap}`]: true,
});
// Hack to get rid of forwardRefs
const Div = fRef(({ ref, ...props }) => React__default.createElement("div", { ...props, ref: ref }));
const GallerySliderPresentation = ({ id: idProp, animation, animationOffset, animationDirection, translate, slidesPerPage, children, className, activeDot, dotCount, noMargin, isStencilHost, outerRef, onMouseDown, onDragStart, someElementRef, handlePointClick, handleArrowLeftClick, handleArrowRightClick, currentSlide, 
// childrenCallback,
slidesToDisplay = 3, appearance = "default", ariaLabel, ariaRoleDescription, ariaLabelledBy, pagination: { itemAriaLabelFormatter, previousButtonAriaLabel, nextButtonAriaLabel } = {}, }) => {
    const md = (Math.floor(12 / slidesToDisplay) || 1);
    const sm = (Math.floor(8 / Math.max(slidesToDisplay - 1, 1)) || 1);
    const reduceAnimation = usePreferReducedMotion();
    const id = useUniqueId(`${hostClass}`, idProp);
    const showPagination = dotCount > 1;
    return (React__default.createElement(Host, { id: id, className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
            [`${lsgPre}no-margin`]: noMargin,
        }), isStencilHost: isStencilHost, "data-lsg-component": "gallery-slider" },
        React__default.createElement("div", { className: cleanupClassNames([
                getGridClasses({ gallerySliderSpacing: appearance === "default", gallerySlider: true }),
                `${hostClass}-outer`,
                currentSlide > 0 && `${hostClass}-outer__notfirst`,
                animation && `${hostClass}-outer__animate`,
            ]), onMouseDown: e => onMouseDown(e), onTouchStart: e => onMouseDown(e), onDragStart: e => onDragStart(e), onSelect: e => onDragStart(e), ref: outerRef, role: "group", "aria-roledescription": ariaRoleDescription, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy },
            React__default.createElement("div", { "aria-live": "polite", "aria-atomic": "false", id: `${id}-slides-wrapper` },
                React__default.createElement(GridRowPresentation, { className: cleanupClassNames([
                        `${hostClass}-row`,
                        appearance === "cards" && `${hostClass}-row__card`,
                    ]) }, fragmentMap(children, (child, i) => (React__default.createElement(Div, { style: {
                        transform: `translateX(-${translate}) translateZ(0)`,
                        transition: animation && !reduceAnimation
                            ? `transform ${0.1 * (animationOffset + i * animationDirection)}s`
                            : "unset",
                    }, ref: someElementRef, key: child.key, className: cleanupClassNames([
                        getGalleryGridColumnClasses({ sm, md, colGap: appearance === "cards" ? 16 : 4 }),
                        `${hostClass}-column`,
                        appearance === "cards" && `${hostClass}-column__card`,
                    ]), "aria-hidden": !(i >= currentSlide && i < currentSlide + slidesPerPage) }, React__default.cloneElement(child, {
                    appearance,
                }))))))),
        showPagination && (React__default.createElement(SliderPaginationPresentation, { numDots: dotCount, activeDotIndex: activeDot, onPointClick: handlePointClick, onArrowLeftClick: handleArrowLeftClick, onArrowRightClick: handleArrowRightClick, actionHtmlAttrs: { "aria-controls": `${id}-slides-wrapper` }, itemAriaLabelFormatter, nextButtonAriaLabel, previousButtonAriaLabel }))));
};
GallerySliderPresentation.displayName = "GallerySliderPresentation";

export { GallerySliderPresentation };
