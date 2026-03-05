'use strict';

var React__default = require('react');
var DescriptionListItem_styles = require('./DescriptionListItem.styles.js');

const DescriptionListItemPresentation = ({
  term,
  children
}) => (/*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("dt", {
  className: `${DescriptionListItem_styles.hostClass}-dt`
}, term), /*#__PURE__*/React__default.createElement("dd", {
  className: `${DescriptionListItem_styles.hostClass}-dd`
}, children)));
DescriptionListItemPresentation.displayName = "DescriptionListItemPresentation";

exports.DescriptionListItemPresentation = DescriptionListItemPresentation;
