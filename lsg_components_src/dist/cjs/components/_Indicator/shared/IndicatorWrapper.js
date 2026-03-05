'use strict';

var React__default = require('react');
var IndicatorPresentation = require('./IndicatorPresentation.js');
var index = require('../../../utils/Hooks/index.js');

// @ts-strict-ignore
const IndicatorWrapper = ({
  activeElement,
  progress,
  isFullUnderline,
  direction = "horizontal",
  translateOrthogonal = 0
}) => {
  const ref = React__default.useRef(null);
  const [fadeAnimation, setFadeAnimation] = React__default.useState(false);
  const [counter, setCounter] = React__default.useState(0);
  const [noAnimation, setNoAnimation] = React__default.useState(false);
  const {
    translate,
    scale
  } = IndicatorPresentation.getTransform(ref.current, activeElement, progress, isFullUnderline, direction === "horizontal");
  const previousTranslate = index.usePrevious(translate);
  const previousScale = index.usePrevious(scale);
  const previousActiveElement = index.usePrevious(activeElement);
  const onResize = React__default.useCallback(() => {
    setNoAnimation(true);
    setCounter(counter + 1);
  }, [counter]);
  index.useResize(onResize);
  React__default.useEffect(() => {
    if (activeElement === undefined || previousActiveElement === undefined) {
      setFadeAnimation(true);
    }
  }, [activeElement, previousActiveElement]);
  React__default.useEffect(() => {
    // animate if selected element changes
    setNoAnimation(false);
  }, [activeElement, progress, isFullUnderline]);
  React__default.useEffect(() => {
    const activeElementRect = activeElement?.getBoundingClientRect();
    const activeElementStable = activeElement === undefined || activeElementRect?.width > 0 && activeElementRect?.height > 0;
    if (activeElementStable && previousTranslate === translate && previousScale === scale) {
      // if the animation was disabled (resize) or set to fade (previously unselected), reset it for future changes
      setNoAnimation(true);
      setFadeAnimation(false);
      // element is stable, no need to update
      return;
    }
    // check again after a short delay in case of resize or initial render
    setTimeout(() => setCounter(counter + 1), 100);
  }, [activeElement, progress, isFullUnderline, direction, counter, scale, translate, previousTranslate, previousScale]);
  return /*#__PURE__*/React__default.createElement(IndicatorPresentation.IndicatorPresentation, {
    noAnimation: noAnimation,
    translate: translate,
    translateOrthogonal: translateOrthogonal,
    scale: scale,
    direction: direction,
    fadeAnimation: fadeAnimation,
    ref: ref
  });
};

exports.IndicatorWrapper = IndicatorWrapper;
