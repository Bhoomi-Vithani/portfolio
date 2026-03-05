'use strict';

var React__default = require('react');
var DescriptionListRow = require('./DescriptionListRow.js');
var DescriptionListPresentation = require('./shared/DescriptionListPresentation.js');

const DescriptionList = ({
  titleWrap,
  ...props
}) => (/*#__PURE__*/React__default.createElement(DescriptionListPresentation.DescriptionListPresentation, {
  ...props,
  termWrap: titleWrap
}));
DescriptionList.displayName = "DescriptionList";
DescriptionList.Row = DescriptionListRow.DescriptionListRow;

exports.DescriptionList = DescriptionList;
