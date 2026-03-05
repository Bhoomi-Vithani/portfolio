import React__default from 'react';
import { hostClass } from '../../DataTable/shared/DataTable.styles.js';
import { ParagraphPresentation } from '../../Paragraph/shared/ParagraphPresentation.js';

// @ts-strict-ignore
/* eslint-disable jsx-a11y/no-interactive-element-to-noninteractive-role */
const DataTableLabelPresentation = ({ id, leftLabel, rightLabel, gridStructure, }) => (
// todo: role=irgendwas
//  z.B. role="banner" (man muss die eslint-Regel dafür umgehen s.o.)
//  und nicht tr/th der richtige Weg? Wenn ja, benötigt man kein th (vermutlich).
// -> Mindscreen-Termin
React__default.createElement("div", { id: id, className: `${hostClass}-label`, style: gridStructure.tableRowStyles },
    React__default.createElement(ParagraphPresentation, { className: `${hostClass}-label-left`, as: "div", size: "helper-text" }, leftLabel),
    React__default.createElement(ParagraphPresentation, { className: `${hostClass}-label-right`, as: "div", size: "helper-text" }, rightLabel)));
DataTableLabelPresentation.displayName = "DataTableLabelPresentation";

export { DataTableLabelPresentation };
