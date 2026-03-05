'use strict';

var React__default = require('react');
var DescriptionListItemPresentation = require('../DescriptionListItem/shared/DescriptionListItemPresentation.js');

const DescriptionListRow = ({
  title,
  ...props
}) => (
/*#__PURE__*/
// TODO check if div inside dt or dd is allowed
React__default.createElement(DescriptionListItemPresentation.DescriptionListItemPresentation, {
  ...props,
  term: title
}));
DescriptionListRow.displayName = "DescriptionList.Row";

exports.DescriptionListRow = DescriptionListRow;
