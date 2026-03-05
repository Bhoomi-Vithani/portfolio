'use strict';

var React__default = require('react');
var DataTableWrapper = require('./shared/DataTableWrapper.js');

// @ts-strict-ignore
const DataTable = ({
  width = "auto",
  ...props
}) => /*#__PURE__*/React__default.createElement(DataTableWrapper.DataTableWrapper, {
  ...props,
  width: width
});
DataTable.displayName = "DataTable";

exports.DataTable = DataTable;
