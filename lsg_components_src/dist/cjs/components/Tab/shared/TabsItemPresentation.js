'use strict';

var React__default = require('react');
var ReactUtils = require('../../../utils/ReactUtils.js');

// TabsItem is the content of the tabs - under the TabBar
const TabsItemPresentation = ({
  horizontalAlignment,
  ...otherProps
}) => (/*#__PURE__*/React__default.createElement(React__default.Fragment, null, ReactUtils.fragmentMap(otherProps.children, child => /*#__PURE__*/React__default.cloneElement(child, {
  horizontalAlignment
}))));
TabsItemPresentation.displayName = "TabsItemPresentation";

exports.TabsItemPresentation = TabsItemPresentation;
