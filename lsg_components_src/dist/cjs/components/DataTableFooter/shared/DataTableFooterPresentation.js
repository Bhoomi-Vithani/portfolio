'use strict';

var React__default = require('react');
var DomUtils = require('../../../utils/DomUtils.js');
var DataTable_styles = require('../../DataTable/shared/DataTable.styles.js');
var DataTableRowPresentation = require('../../DataTableRow/shared/DataTableRowPresentation.js');

const DataTableFooterPresentation = props => (/*#__PURE__*/React__default.createElement(DataTableRowPresentation.DataTableRowPresentation, {
  ...props,
  visibility: "visible",
  className: DomUtils.cleanupClassObject({
    [`${DataTable_styles.hostClass}-footer`]: true,
    [`${DataTable_styles.hostClass}-footer__default`]: true
  })
}));
DataTableFooterPresentation.displayName = "DataTableFooterPresentation";

exports.DataTableFooterPresentation = DataTableFooterPresentation;
