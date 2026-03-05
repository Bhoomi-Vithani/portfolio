'use strict';

var React__default = require('react');
var ScrollEvents = require('../../../utils/windowEvents/ScrollEvents.js');
var ProductStagePresentation = require('./ProductStagePresentation.js');

// @ts-strict-ignore
const ProductStageWrapper = props => {
  const buttonRef = React__default.useRef(null);
  const [isSticky, setIsSticky] = React__default.useState(undefined);
  const doHandleScroll = () => {
    const nonStickyButtonBounds = buttonRef.current?.getBoundingClientRect();
    // check if position of button (including 16px margin) is in viewport
    if ((nonStickyButtonBounds?.bottom ?? 0) + 16 <= window.innerHeight) {
      // Element is in the viewport
      setIsSticky(false);
    } else {
      // Element is not in the viewport
      setIsSticky(true);
    }
  };
  React__default.useEffect(() => {
    ScrollEvents.addScrollCallback(doHandleScroll);
    return () => {
      ScrollEvents.removeScrollCallback(doHandleScroll);
    };
  }, []);
  return /*#__PURE__*/React__default.createElement(ProductStagePresentation.ProductStagePresentation, {
    ...props,
    buttonSticky: isSticky,
    buttonRef: buttonRef
  });
};

exports.ProductStageWrapper = ProductStageWrapper;
