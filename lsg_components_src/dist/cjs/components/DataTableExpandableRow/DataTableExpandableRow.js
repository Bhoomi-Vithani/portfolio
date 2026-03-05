'use strict';

var React__default = require('react');
var DataTableExpandableRowWrapper = require('./shared/DataTableExpandableRowWrapper.js');

const DataTableExpandableRow = ({
  badgeColor,
  badgeLook,
  ...props
}) => (/*#__PURE__*/React__default.createElement(DataTableExpandableRowWrapper.DataTableExpandableRowWrapper, {
  badgeColor: badgeColor || badgeLook,
  ...props
}));
DataTableExpandableRow.displayName = "DataTableExpandableRow";

exports.DataTableExpandableRow = DataTableExpandableRow;
