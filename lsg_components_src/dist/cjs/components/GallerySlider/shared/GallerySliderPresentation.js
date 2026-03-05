'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var animation = require('../../../utils/Hooks/animation.js');
var Host = require('../../../utils/Host.js');
var React = require('../../../utils/React.js');
var ReactUtils = require('../../../utils/ReactUtils.js');
var GridPresentation = require('../../Grid/shared/GridPresentation.js');
var GridRowPresentation = require('../../GridRow/shared/GridRowPresentation.js');
var SliderPaginationPresentation = require('../../SliderPagination/shared/SliderPaginationPresentation.js');
var GallerySlider_styles = require('./GallerySlider.styles.js');

// @ts-strict-ignore
const getGalleryGridColumnClasses = ({
  md,
  sm,
  colGap
}) => DomUtils.cleanupClassObject({
  [`${GallerySlider_styles.hostClass}-md-col-${md}-${colGap}`]: true,
  [`${GallerySlider_styles.hostClass}-sm-col-${sm}-${colGap}`]: true,
  [`${GallerySlider_styles.hostClass}-xs-col-4-${colGap}`]: true
});
// Hack to get rid of forwardRefs
const Div = React.fRef(({
  ref,
  ...props
}) => /*#__PURE__*/React__default.createElement("div", {
  ...props,
  ref: ref
}));
const GallerySliderPresentation = ({
  id: idProp,
  animation: animation$1,
  animationOffset,
  animationDirection,
  translate,
  slidesPerPage,
  children,
  className,
  activeDot,
  dotCount,
  noMargin,
  isStencilHost,
  outerRef,
  onMouseDown,
  onDragStart,
  someElementRef,
  handlePointClick,
  handleArrowLeftClick,
  handleArrowRightClick,
  currentSlide,
  // childrenCallback,
  slidesToDisplay = 3,
  appearance = "default",
  ariaLabel,
  ariaRoleDescription,
  ariaLabelledBy,
  pagination: {
    itemAriaLabelFormatter,
    previousButtonAriaLabel,
    nextButtonAriaLabel
  } = {}
}) => {
  const md = Math.floor(12 / slidesToDisplay) || 1;
  const sm = Math.floor(8 / Math.max(slidesToDisplay - 1, 1)) || 1;
  const reduceAnimation = animation.usePreferReducedMotion();
  const id = index.useUniqueId(`${GallerySlider_styles.hostClass}`, idProp);
  const showPagination = dotCount > 1;
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    id: id,
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [GallerySlider_styles.hostClass]: true,
      [`${prefix.lsgPre}no-margin`]: noMargin
    }),
    isStencilHost: isStencilHost,
    "data-lsg-component": "gallery-slider"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassNames([GridPresentation.getGridClasses({
      gallerySliderSpacing: appearance === "default",
      gallerySlider: true
    }), `${GallerySlider_styles.hostClass}-outer`, currentSlide > 0 && `${GallerySlider_styles.hostClass}-outer__notfirst`, animation$1 && `${GallerySlider_styles.hostClass}-outer__animate`]),
    onMouseDown: e => onMouseDown(e),
    onTouchStart: e => onMouseDown(e),
    onDragStart: e => onDragStart(e),
    onSelect: e => onDragStart(e),
    ref: outerRef,
    role: "group",
    "aria-roledescription": ariaRoleDescription,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy
  }, /*#__PURE__*/React__default.createElement("div", {
    "aria-live": "polite",
    "aria-atomic": "false",
    id: `${id}-slides-wrapper`
  }, /*#__PURE__*/React__default.createElement(GridRowPresentation.GridRowPresentation, {
    className: DomUtils.cleanupClassNames([`${GallerySlider_styles.hostClass}-row`, appearance === "cards" && `${GallerySlider_styles.hostClass}-row__card`])
  }, ReactUtils.fragmentMap(children, (child, i) => (/*#__PURE__*/React__default.createElement(Div, {
    style: {
      transform: `translateX(-${translate}) translateZ(0)`,
      transition: animation$1 && !reduceAnimation ? `transform ${0.1 * (animationOffset + i * animationDirection)}s` : "unset"
    },
    ref: someElementRef,
    key: child.key,
    className: DomUtils.cleanupClassNames([getGalleryGridColumnClasses({
      sm,
      md,
      colGap: appearance === "cards" ? 16 : 4
    }), `${GallerySlider_styles.hostClass}-column`, appearance === "cards" && `${GallerySlider_styles.hostClass}-column__card`]),
    "aria-hidden": !(i >= currentSlide && i < currentSlide + slidesPerPage)
  }, /*#__PURE__*/React__default.cloneElement(child, {
    appearance
  }))))))), showPagination && (/*#__PURE__*/React__default.createElement(SliderPaginationPresentation.SliderPaginationPresentation, {
    numDots: dotCount,
    activeDotIndex: activeDot,
    onPointClick: handlePointClick,
    onArrowLeftClick: handleArrowLeftClick,
    onArrowRightClick: handleArrowRightClick,
    actionHtmlAttrs: {
      "aria-controls": `${id}-slides-wrapper`
    },
    itemAriaLabelFormatter,
    nextButtonAriaLabel,
    previousButtonAriaLabel
  })));
};
GallerySliderPresentation.displayName = "GallerySliderPresentation";

exports.GallerySliderPresentation = GallerySliderPresentation;
