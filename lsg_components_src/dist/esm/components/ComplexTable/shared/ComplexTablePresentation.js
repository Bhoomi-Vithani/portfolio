import { interaction___filter01, interaction_arrows_arrowUp, interaction_arrows_arrowDown, interaction_arrows_chevronRight } from '@lsg/icons';
import { format } from 'date-fns';
import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { getLocaleDateFormat } from '../../../utils/DateUtils.js';
import { cleanupClassObject, cleanupClassNames } from '../../../utils/DomUtils.js';
import { Host } from '../../../utils/Host.js';
import { texts } from '../../../utils/Localization.js';
import { IconPresentation } from '../../Icon/shared/IconPresentation.js';
import { IconLinkWrapper } from '../../IconLink/shared/IconLinkWrapper.js';
import { IconLinkGroupWrapper } from '../../IconLinkGroup/shared/IconLinkGroupWrapper.js';
import { LayerPresentation } from '../../Layer/shared/LayerPresentation.js';
import { hostClass } from './ComplexTable.styles.js';
import { TableActionMenu } from './TableActionMenu.js';

// @ts-strict-ignore
const formatTableColumnData = (colData, colIndex, columnProperties) => {
    let result;
    if (columnProperties[colIndex].formatter) {
        result = columnProperties[colIndex].formatter(colData);
    }
    else if (colData instanceof Date) {
        const formatString = getLocaleDateFormat();
        result = format(colData, formatString);
    }
    else {
        result = colData;
    }
    return result;
};
const ComplexTablePresentation = ({ id, isMobile, className, columnProperties, tableBodyData, sortColumnIndex, isSortedAscending = false, onOpenLayerChange, isSortLayerOpen, onTableColumnHeadClick, onTableBodyRowClick, noMargin, onBodyRowClick, }) => {
    // Check, whether a bodyClick event is defined by user to display chevron icon then for body row actions events
    const isBodyRowClickEventDefinedByUser = !!onBodyRowClick;
    const hasActions = tableBodyData &&
        tableBodyData.reduce((acc, val) => acc || (val.rowActions && val.rowActions.length > 0), false);
    return (React__default.createElement(Host, { className: cleanupClassObject({
            [hostClass]: true,
            [className]: className,
            [`${lsgPre}no-margin`]: noMargin,
        }) },
        isMobile && columnProperties.some(col => col.isSortable) && (React__default.createElement("header", { className: `${hostClass}-mobile-header` },
            React__default.createElement(IconLinkWrapper, { label: texts.lsg.component.ComplexTable.labelSortMenu, icon: interaction___filter01, onClick: () => onOpenLayerChange(true) }),
            React__default.createElement(LayerPresentation, { closeLinkLabel: texts.lsg.component.ComplexTable.labelSortLayerBackButton, open: isSortLayerOpen, onCloseClick: () => onOpenLayerChange(false) },
                React__default.createElement("div", { className: `${hostClass}-mobile-header-layer-headline` }, texts.lsg.component.ComplexTable.labelSortLayer),
                React__default.createElement(IconLinkGroupWrapper, { direction: "vertical" }, columnProperties.map((th, colIndex) => {
                    const isSortColumn = colIndex === sortColumnIndex;
                    return (th.isSortable && (React__default.createElement(IconLinkWrapper, { label: th.title, className: `${hostClass}-layer-full-width-button`, key: colIndex, onClick: e => onTableColumnHeadClick(colIndex, e), disabled: false, noMargin: true },
                        React__default.createElement(IconPresentation, { className: cleanupClassNames([
                                `${hostClass}-wrap-icon__sort`,
                                isSortColumn && `${hostClass}-wrap-icon__sort-column__sort`,
                            ]), icon: 
                            // down arrow = isSortedAscending !
                            isSortColumn && !isSortedAscending
                                ? interaction_arrows_arrowUp
                                : interaction_arrows_arrowDown, noMargin: false, title: "" }))));
                }))))),
        React__default.createElement("table", { id: id, className: cleanupClassNames([`${hostClass}-table`, className]) },
            !isMobile && (React__default.createElement("thead", null,
                React__default.createElement("tr", { className: `${hostClass}-head-tr` },
                    columnProperties.map((th, colIndex) => {
                        const isSortColumn = colIndex === sortColumnIndex;
                        return (React__default.createElement("th", { key: colIndex, className: cleanupClassNames([
                                `${hostClass}-th`,
                                columnProperties[colIndex].alignRight && `${hostClass}-th__alignright`,
                                columnProperties[colIndex].isSortable && `${hostClass}-th__sortable`,
                                colIndex === sortColumnIndex && `${lsgPre}-th__sorted`,
                                `${lsgPre}h5`,
                            ]), onClick: e => onTableColumnHeadClick(colIndex, e) },
                            React__default.createElement("div", { className: `${hostClass}-wrap` },
                                React__default.createElement("div", { className: `${hostClass}-wrap-label` }, th.title),
                                columnProperties[colIndex].isSortable && (React__default.createElement(IconPresentation, { className: cleanupClassNames([
                                        `${hostClass}-wrap-icon__sort`,
                                        isSortColumn && `${hostClass}-wrap-icon__sort-column__sort`,
                                    ]), noMargin: noMargin, icon: 
                                    // down arrow = isSortedAscending !
                                    isSortColumn && !isSortedAscending
                                        ? interaction_arrows_arrowUp
                                        : interaction_arrows_arrowDown, title: !isSortColumn || !isSortedAscending
                                        ? texts.lsg.component.ComplexTable
                                            .sortAscending
                                        : texts.lsg.component.ComplexTable
                                            .sortDescending })))));
                    }),
                    (isBodyRowClickEventDefinedByUser || hasActions) && !isMobile && React__default.createElement("th", null)))),
            React__default.createElement("tbody", { className: `${hostClass}-body` }, tableBodyData &&
                tableBodyData.map((row, rowIndex) => (React__default.createElement("tr", { key: rowIndex, className: cleanupClassNames([
                        `${hostClass}-body-tr`,
                        isBodyRowClickEventDefinedByUser && `${hostClass}-body-tr__clickable`,
                    ]), onClick: e => onTableBodyRowClick(rowIndex, row.rowId, e) },
                    row.rowData.map((column, colIndex) => (React__default.createElement("td", { key: colIndex, className: cleanupClassNames([
                            `${hostClass}-td`,
                            columnProperties[colIndex].alignRight && `${hostClass}-td__alignright`,
                            `${lsgPre}copy-text`,
                        ]) },
                        isMobile && (React__default.createElement("span", { className: `${hostClass}-inline-heading` }, columnProperties[colIndex].title)),
                        formatTableColumnData(column, colIndex, columnProperties)))),
                    (isBodyRowClickEventDefinedByUser || row.rowActions) && (React__default.createElement("td", { className: cleanupClassNames([
                            `${hostClass}-td`,
                            `${hostClass}-action-column`,
                        ]) },
                        isBodyRowClickEventDefinedByUser && !row.rowActions && (React__default.createElement(IconPresentation, { className: `${hostClass}-body-tr-action-arrow`, noMargin: true, icon: interaction_arrows_chevronRight, size: "small", title: "" })),
                        // Todo for IconLink -> Should have a tooltip if iconOnly
                        // Todo: As an alternative for the complextable-td-action-wrapper: Take a IconlinkGroup instead?
                        //    -> to do this, paddings, hovereffect and wrapping must be specified in IconLinkGroup
                        row.rowActions && (React__default.createElement(TableActionMenu, { tableActionsProperties: row.rowActions, rowActionsLook: row.rowActionsLook, tableRowIndex: rowIndex, isMobile: isMobile })))))))))));
};
ComplexTablePresentation.displayName = "ComplexTablePresentation";

export { ComplexTablePresentation };
