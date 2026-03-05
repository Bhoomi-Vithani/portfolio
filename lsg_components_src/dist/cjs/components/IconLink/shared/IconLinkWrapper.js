'use strict';

var React__default = require('react');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var IconLinkPresentation = require('./IconLinkPresentation.js');

const IconLinkWrapper = props => {
  const [{
    hasKeyboardFocus,
    hasMouseHover
  }, {
    setHasKeyboardFocus,
    setHasMouseHover
  }, {
    onMouseDown,
    onMouseUp,
    onMouseLeave
  }, {
    onTouchStart,
    onTouchEnd
  }] = index.useLinkHover(props);
  const [renderCount, setRenderCount] = React__default.useState(0);
  React__default.useEffect(() => {
    // Safari-specific issue: Forcing a re-render to correct link layout.
    // Without this, the IconLink layout breaks (sometimes) on the initial render, causing all letters to be
    // displayed stacked on top of each other.
    // So on Safari: the IconLink is initially rendered in the DOM (important for SSR), it is not rendered on the
    // second iteration and then rendered again.
    if (DomUtils.isSafari() && renderCount < 2) {
      setRenderCount(renderCount + 1);
    }
  });
  return /*#__PURE__*/React__default.createElement(IconLinkPresentation.IconLinkPresentation, {
    ...props,
    key: DomUtils.isSafari() ? renderCount : undefined,
    hasKeyboardFocus: hasKeyboardFocus,
    onKeyboardFocusChange: setHasKeyboardFocus,
    hasMouseHover: hasMouseHover,
    onMouseHoverChange: newHover => {
      if (props.onMouseHoverChange) {
        props.onMouseHoverChange(newHover);
      }
      setHasMouseHover(newHover);
    },
    onMouseDown: onMouseDown,
    onMouseUp: onMouseUp,
    onMouseLeave: onMouseLeave,
    onTouchStart: onTouchStart,
    onTouchEnd: onTouchEnd
  });
};

exports.IconLinkWrapper = IconLinkWrapper;
