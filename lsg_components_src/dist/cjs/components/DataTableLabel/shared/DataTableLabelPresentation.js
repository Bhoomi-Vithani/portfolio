'use strict';

var React__default = require('react');
var DataTable_styles = require('../../DataTable/shared/DataTable.styles.js');
var ParagraphPresentation = require('../../Paragraph/shared/ParagraphPresentation.js');

// @ts-strict-ignore
/* eslint-disable jsx-a11y/no-interactive-element-to-noninteractive-role */
const DataTableLabelPresentation = ({
  id,
  leftLabel,
  rightLabel,
  gridStructure
}) => (
/*#__PURE__*/
// todo: role=irgendwas
//  z.B. role="banner" (man muss die eslint-Regel dafür umgehen s.o.)
//  und nicht tr/th der richtige Weg? Wenn ja, benötigt man kein th (vermutlich).
// -> Mindscreen-Termin
React__default.createElement("div", {
  id: id,
  className: `${DataTable_styles.hostClass}-label`,
  style: gridStructure.tableRowStyles
}, /*#__PURE__*/React__default.createElement(ParagraphPresentation.ParagraphPresentation, {
  className: `${DataTable_styles.hostClass}-label-left`,
  as: "div",
  size: "helper-text"
}, leftLabel), /*#__PURE__*/React__default.createElement(ParagraphPresentation.ParagraphPresentation, {
  className: `${DataTable_styles.hostClass}-label-right`,
  as: "div",
  size: "helper-text"
}, rightLabel)));
DataTableLabelPresentation.displayName = "DataTableLabelPresentation";

exports.DataTableLabelPresentation = DataTableLabelPresentation;
