'use strict';

var React__default = require('react');
var index = require('../../../utils/Hooks/index.js');
var ReactUtils = require('../../../utils/ReactUtils.js');
var IconLinkGroupPresentation = require('./IconLinkGroupPresentation.js');

const IconLinkGroupWrapper = props => {
  // INFO: There is a bug in safari obviously. On special condition in conjunction with noText option
  // the icon link don't have a correct appearance. Means there is a overlay of icon links. Therefore
  // a workaround is implemented to avoid the initial(fall back) xs viewport, but still support the forced viewport, which is set from outside
  const {
    children,
    as: asProp,
    iconOnly,
    ...otherProps
  } = props;
  const forceUl = !asProp && ReactUtils.fragmentCount(children) > 1;
  const as = forceUl ? "ul" : asProp;
  const viewport = index.useViewport();
  return /*#__PURE__*/React__default.createElement(IconLinkGroupPresentation.IconLinkGroupPresentation, {
    ...otherProps,
    viewport: viewport,
    as: as
  }, ReactUtils.fragmentMap(children, child => /*#__PURE__*/React__default.cloneElement(child, {
    as: as === "ul" || as === "ol" ? "li" : child.props.as,
    appearance: iconOnly ? "no-text" : child.props.appearance
  })));
};

exports.IconLinkGroupWrapper = IconLinkGroupWrapper;
