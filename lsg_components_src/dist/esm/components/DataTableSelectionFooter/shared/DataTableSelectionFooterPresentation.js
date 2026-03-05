import React__default from 'react';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { useUniqueId } from '../../../utils/Hooks/index.js';
import { CheckboxPresentation } from '../../Checkbox/shared/CheckboxPresentation.js';
import { hostClass } from '../../DataTable/shared/DataTable.styles.js';
import { DataTableRowTogglePresentation } from '../../DataTableRow/shared/DataTableRowToggle/DataTableRowTogglePresentation.js';
import { LabelPresentation } from '../../_Label/LabelPresentation.js';

// @ts-strict-ignore
const DataTableSelectionFooterPresentation = ({ id: idProp, className, 
// columnsPreprocessed,
inputType, inputValue, onInputChange, inputName, label, actions, hasMouseHover, hasKeyboardFocus, onMouseHoverChange, onKeyboardFocusChange, gridStructure, inputHidden, inputDisabled, }) => {
    const id = useUniqueId(`${hostClass}-footer__selection-`, idProp);
    const hasToggleColumn = inputType === "checkbox" || inputType === "radio";
    const labelId = `${id}-label`;
    return (React__default.createElement("tr", { className: cleanupClassObject({
            [`${hostClass}-tr`]: true,
        }), id: id, style: gridStructure.tableRowStyles },
        hasToggleColumn && (React__default.createElement(DataTableRowTogglePresentation, { id: `${id}-input`, as: "td", toggleAs: inputType === "checkbox" && CheckboxPresentation, value: inputValue, name: inputName, onChange: onInputChange, inputHidden: inputHidden, inputDisabled: inputDisabled, htmlAttrs: { "aria-labelledby": labelId }, hasMouseHover: hasMouseHover, hasKeyboardFocus: hasKeyboardFocus, onMouseHoverChange: onMouseHoverChange, onKeyboardFocusChange: onKeyboardFocusChange, gridStructure: gridStructure, isFooter: true })),
        React__default.createElement("td", { className: cleanupClassObject({
                [`${hostClass}-tx`]: true,
                [`${hostClass}-td`]: true,
                [`${hostClass}__first-column`]: !hasToggleColumn,
                [`${hostClass}__last-column`]: true,
                [`${hostClass}__has-top-margin`]: true,
                [`${hostClass}__has-bottom-margin`]: true,
            }), style: {
                gridColumn: `span ${gridStructure.gridHeaderCols.length}`,
            } },
            React__default.createElement("div", { className: cleanupClassObject({
                    [className]: className,
                    [`${hostClass}-footer`]: true,
                    [`${hostClass}-footer__selection`]: true,
                    [`${hostClass}-tx-inner`]: true,
                    [`${hostClass}__has-top-margin`]: true,
                }) },
                React__default.createElement("div", { className: `${hostClass}-footer__selection-left` },
                    React__default.createElement(LabelPresentation, { id: `${id}-label`, htmlFor: `${id}-input`, expandToOverlay: true, onMouseHoverChange: onMouseHoverChange, onKeyboardFocusChange: onKeyboardFocusChange }, label)),
                React__default.createElement("div", { className: `${hostClass}-footer__selection-right` }, actions)))));
};
DataTableSelectionFooterPresentation.displayName = "DataTableSelectionFooterPresentation";

export { DataTableSelectionFooterPresentation };
