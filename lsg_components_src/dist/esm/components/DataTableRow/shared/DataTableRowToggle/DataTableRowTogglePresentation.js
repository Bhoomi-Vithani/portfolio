import React__default from 'react';
import { lsgPre } from '../../../../config/prefix.js';
import { cleanupClassObject } from '../../../../utils/DomUtils.js';
import { Host } from '../../../../utils/Host.js';
import { texts } from '../../../../utils/Localization.js';
import { hostClass } from '../../../DataTable/shared/DataTable.styles.js';

// @ts-strict-ignore
const DataTableRowTogglePresentation = ({ id, className, noMargin, as = "td", toggleAs, value, name, onChange, htmlAttrs, hasMouseHover, hasKeyboardFocus, onMouseHoverChange, onKeyboardFocusChange, isStencilHost, gridStructure, isFooter, isHeader, inputDisabled, inputHidden, inputType, cellRef, }) => {
    const ToggleComponent = toggleAs;
    const hiddenTableHeaderTitle = isHeader ? texts.lsg.component.DataTable.toggleColumnHeaderLabel : undefined;
    const style = { gridColumn: "1 / span 1", gridRow: `1 / span ${gridStructure.maxColLength}` };
    if (isFooter) {
        style.gridRow = "1 / span 1";
    }
    return (React__default.createElement(Host, { className: cleanupClassObject({
            [className]: !!className,
            [`${hostClass}-${as}`]: as,
            [`${hostClass}-tx`]: true,
            [`${hostClass}-toggle`]: true,
            [`${lsgPre}no-margin`]: noMargin,
            [`${hostClass}__has-top-margin`]: true,
            [`${hostClass}__first-column`]: true,
            [`${hostClass}-th__hidden`]: isHeader && inputHidden,
        }), isStencilHost: isStencilHost, as: as, style: style, "aria-label": hiddenTableHeaderTitle, htmlAttrs: {
            // @ts-ignore
            scope: isHeader ? "col" : undefined,
        }, ref: cellRef },
        React__default.createElement("div", { className: cleanupClassObject({
                [`${hostClass}-checkbox`]: true,
                [`${hostClass}-tx-inner`]: true,
                [`${hostClass}__first-column`]: true,
            }) },
            ToggleComponent && !inputHidden && (React__default.createElement(ToggleComponent, { noMargin: true, value: value, name: name, onChange: onChange, disabled: inputDisabled, id: id, htmlAttrs: htmlAttrs, hasMouseHover: hasMouseHover, onMouseHoverChange: onMouseHoverChange, hasKeyboardFocus: hasKeyboardFocus, onKeyboardFocusChange: onKeyboardFocusChange })),
            isHeader && !(inputType === "checkbox" && !inputHidden) && (React__default.createElement("span", null, `${texts.lsg.component.DataTable.toggleColumnHeaderLabel}`)))));
};
DataTableRowTogglePresentation.displayName = "DataTableRowTogglePresentation";

export { DataTableRowTogglePresentation };
