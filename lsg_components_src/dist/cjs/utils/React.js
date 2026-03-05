'use strict';

var React__default = require('react');
var FunctionalHelpers = require('./FunctionalHelpers.js');

/** @deprecated: Use standard react definitions */
function fRef(render, defaultProps) {
  return /*#__PURE__*/React__default.forwardRef((props, ref) => {
    const mergedProps = FunctionalHelpers.functionalHelpers(props, defaultProps);
    return render({
      ...mergedProps,
      ref
    });
  });
}

exports.fRef = fRef;
