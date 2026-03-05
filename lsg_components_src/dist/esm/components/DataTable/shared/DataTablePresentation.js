import { interaction_arrows_arrowDown, interaction_arrows_arrowUp } from '@lsg/icons';
import React__default, { useRef, useEffect, useCallback } from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { zIndex } from '../../../styles/zIndex.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { usePrevious, useUniqueId, useResize, useScroll, useStickyY } from '../../../utils/Hooks/index.js';
import { texts } from '../../../utils/Localization.js';
import { fragmentMap } from '../../../utils/ReactUtils.js';
import { BadgePresentation } from '../../Badge/shared/BadgePresentation.js';
import { DataTableRowWrapper } from '../../DataTableRow/shared/DataTableRowWrapper.js';
import { IconLinkWrapper } from '../../IconLink/shared/IconLinkWrapper.js';
import { LiveRegionPresentation } from '../../LiveRegion/shared/LiveRegionPresentation.js';
import { hostClass } from './DataTable.styles.js';

// @ts-strict-ignore
const defaultProps = {
    onRadiosChange: () => { },
    width: "full",
    verticalAlignment: "top",
    spacing: "standard",
    isHeaderSticky: false,
};
const DataTablePresentation = (props) => {
    const { id, className, children, noMargin, inputType, checkboxName, checkboxValue, onCheckboxChange, columnsPreprocessed, columnsSeparated, footer, width, verticalAlignment, spacing, isHeaderSticky, tableHeadRef, tableHeadStickPosition, headerShadow, title, gridStructure, sortAscending, sortColumns, isMultiSort, onSort, ariaAttrs, checkboxHidden, checkboxDisabled, } = props;
    const subTables = [{ rows: [] }];
    fragmentMap(children, (child) => {
        const isLabel = child.props.leftLabel || child.props.rightLabel;
        const currentSubTable = subTables[subTables.length - 1];
        if (!isLabel) {
            currentSubTable.rows.push(React__default.cloneElement(child));
        }
        else {
            subTables.push({ rows: [], label: child });
        }
    });
    const liveRegionRef = useRef(null);
    const previousSortColumn = usePrevious(sortColumns) || [];
    const isTableSortable = columnsPreprocessed.reduce((result, currentCol) => currentCol.isSortable || result, false);
    const tableContainerRef = useRef(null);
    const backupTableHeadRef = useRef(null);
    const internalTableHeadRef = tableHeadRef ?? backupTableHeadRef;
    const tableHeadersArrayRef = useRef([]);
    const stickyColumnsStyleContainerRef = useRef(null);
    const stickyColumnShadowsStyleContainerRef = useRef(null);
    const firstSubTableRef = useRef(null);
    const toggleColumnCellRef = useRef(null);
    const toggleColumnLabelId = useUniqueId(`${hostClass}-toggle-column-label`);
    const hasStickyInput = props.isInputSticky && (inputType === "checkbox" || inputType === "radio");
    const createStickyStyles = () => {
        if (!stickyColumnsStyleContainerRef.current ||
            !tableContainerRef?.current ||
            tableHeadersArrayRef?.current?.length === 0 ||
            !tableHeadersArrayRef?.current[0]) {
            return;
        }
        stickyColumnsStyleContainerRef.current.innerHTML = "";
        stickyColumnShadowsStyleContainerRef.current.innerHTML = "";
        // Each DataTable column (th, td) gets a class that reflects the visible column (grid column) in the DataTable.
        // For example we have a table with 11 data columns, but only 8 grid columns.
        // So we create classes: "lsg-data-table__grid-col-0" ... "lsg-data-table__grid-col-7"
        // The first 4 columns are sticky on the left side: "Wertpapier", "WKN", "ISIN", "Typ".
        // Wertpapier, "WKN" and "ISIN" get the attribute "isStickyLeft".
        // The columns "Wertpapier" and "WKN" are wrapped and appear in the same column. And the columns "ISIN" and
        // "Typ" are wrapped also and appear in the same row.
        // ALL the th/td's in the columns "Wertpapier and "WKN" get the class "lsg-data-table__grid-col-0".
        // ALL the th/td's in the columns "ISIN" and "Typ" get the class "lsg-data-table__grid-col-1" EVEN if "Typ"
        // is not declared as sticky. "Typ" is sticky because it's in the same col as "ISIN" which is sticky.
        // The columns "Bestand" and "Kaufdatum" are the last data columns in the table. They are wrapped and appear
        // in the same column. "Bestand" has the attribute "isStickyRight" so ALL the th/td's in the columns
        // "Bestand" and "Kaufdatum" get the class "lsg-data-table__grid-col-7".
        // The following code creates the innerHTML of a style tag that is inserted into the DOM.
        // The style tag contains the sticky styles for the table columns.
        // Create the sticky styles for the table columns.
        const tableContainerLeft = tableContainerRef.current?.getBoundingClientRect().left || 0;
        let stickyColumnStyles = "";
        const horizontalScrollDepth = firstSubTableRef.current.getBoundingClientRect().left;
        if (gridStructure.stickyLeftGridColumns.length > 0) {
            gridStructure.stickyLeftGridColumns.forEach(gridColumn => {
                const left = tableHeadersArrayRef.current[gridStructure.gridHeaderCols[gridColumn][0]].getBoundingClientRect()
                    .left - tableContainerLeft;
                stickyColumnStyles +=
                    `  #${id.replaceAll(":", "\\:")} .${hostClass}__grid-col-${gridColumn} {position: sticky; z-index: ${zIndex.zAction};` +
                        `
                        left: ${left - horizontalScrollDepth + tableContainerRef.current.offsetLeft}px; }
                    `;
            });
        }
        if (gridStructure.stickyRightGridColumns.length > 0) {
            gridStructure.stickyRightGridColumns.forEach(gridColumn => {
                const right = firstSubTableRef.current.getBoundingClientRect().right -
                    tableHeadersArrayRef.current[gridStructure.gridHeaderCols[gridColumn][0]].getBoundingClientRect()
                        .right;
                stickyColumnStyles +=
                    `  #${id.replaceAll(":", "\\:")} .${hostClass}__grid-col-${gridColumn} {position: sticky; z-index: ${zIndex.zAction}; ` +
                        `
                        right: ${right}px; }
                    `;
            });
        }
        // insert styles in style tag.
        if (stickyColumnsStyleContainerRef.current) {
            stickyColumnsStyleContainerRef.current.innerHTML = stickyColumnStyles;
        }
        // The following code creates the innerHTML of the style tags for the vertical shadows (lines that indicate
        // the scroll borders. The shadows are positioned absolutely and have a certain width.
        // lastLeftStickyColumn is not the grid index, but the last index of columnPreprocessed, that is
        // sticky left. This is used to calculate the position of the left shadow.
        // we take the right position of the last left sticky column to find out the position.
        // for example: we have sticky header columns 0, 1, 2 and 3. Columns 0 and 1 are wrapped. We take the grid
        // column 3 element to find out the position of the shadow.
        // let stickyShadowStyles = "";
        let stickyShadowStyles = "";
        const hasScrollbar = tableContainerRef.current.scrollWidth > tableContainerRef.current.clientWidth;
        // left shadow  *******************
        if ((gridStructure.stickyLeftGridColumns.length > 0 || hasStickyInput) && hasScrollbar) {
            let lastLeftStickyColumn = -1;
            let lastLeftStickyColumnElem;
            if (gridStructure.stickyLeftGridColumns.length > 0) {
                lastLeftStickyColumn =
                    gridStructure.gridHeaderCols[gridStructure.stickyLeftGridColumns.slice(-1)[0]][0];
                lastLeftStickyColumnElem = tableHeadersArrayRef.current[lastLeftStickyColumn];
            }
            else if (hasStickyInput) {
                lastLeftStickyColumnElem = toggleColumnCellRef.current;
            }
            // if someone would like to debug the sticky columns, here are some console logs.
            // * cons...log("********* DataTablePresentation createStickyStyles ", {
            // *    horizontalScrollDepth,
            // *    tableContainerScrollLeft: tableContainerRef.current.scrollLeft,
            // *    tableContainerOffsetLeft: tableContainerRef.current.offsetLeft,
            // *    lastLeftStickyColumnElemBoundingRight: lastLeftStickyColumnElem.getBoundingClientRect().right,
            // *    lastLeftStickyColumnElemOffsetLeft: lastLeftStickyColumnElem.offsetLeft,
            // *    tableContainerRefBoundingLeft: tableContainerRef.current.getBoundingClientRect().left,
            // *    toggleColumnCellRef: toggleColumnCellRef.current,
            // * });
            const stickyLeftShadowPosX = lastLeftStickyColumnElem.getBoundingClientRect().right;
            const stickyLeftShadowTop = tableContainerRef.current.offsetTop;
            const stickyLeftShadowStyles = `
                        #${id.replaceAll(":", "\\:")}-sticky-shadow-left {
                        position: absolute;
                        z-index: ${zIndex.zHeader - 5};
                        width: 1px;
                        left: ${stickyLeftShadowPosX}px;
                        top: ${stickyLeftShadowTop}px;
                        height: ${tableContainerRef.current.clientHeight}px;
                      }
                  `;
            stickyShadowStyles += stickyLeftShadowStyles;
        }
        // right shadow  *******************
        let stickyRightShadowStyles = "";
        // The right shadow position is calculated similarily to the left column.
        if (gridStructure.stickyRightGridColumns.length > 0 && hasScrollbar) {
            const firstStickyRightColumn = gridStructure.gridHeaderCols[gridStructure.stickyRightGridColumns[0]][0];
            const firstStickyRightColumnElem = tableHeadersArrayRef.current[firstStickyRightColumn];
            const stickyRightShadowPosX = firstStickyRightColumnElem.getBoundingClientRect().left;
            const stickyRightShadowTop = tableContainerRef.current.offsetTop;
            stickyRightShadowStyles = `
                        #${id.replaceAll(":", "\\:")}-sticky-shadow-right {
                        position: absolute;
                        z-index: ${zIndex.zHeader - 5};
                        width: 1px;
                        left: ${stickyRightShadowPosX}px;
                        top: ${stickyRightShadowTop}px;
                        height: ${tableContainerRef.current.clientHeight}px;
                      }
                  `;
        }
        stickyShadowStyles += stickyRightShadowStyles;
        // insert styles in style tag.
        if (stickyColumnShadowsStyleContainerRef.current) {
            stickyColumnShadowsStyleContainerRef.current.innerHTML = stickyShadowStyles;
        }
    };
    useEffect(() => {
        // Live region announcing for sorting events
        if (previousSortColumn.length === 0 && sortColumns.length === 0)
            return;
        liveRegionRef.current?.announce(() => {
            let announceText = "";
            if (isMultiSort) {
                announceText +=
                    sortColumns.length < previousSortColumn.length
                        ? texts.lsg.component.DataTable.sortingRemoved
                        : texts.lsg.component.DataTable.sorted;
                sortColumns.forEach((columnIndex, priority) => {
                    const sortText = `${sortAscending[priority]
                        ? texts.lsg.component.DataTable.ascending
                        : texts.lsg.component.DataTable.descending} ${texts.lsg.component.DataTable.priority} ${priority + 1}`;
                    announceText += ` , ${columnsPreprocessed[columnIndex].title} ${sortText} `;
                });
            }
            // simple sorted - both sortColumn and sortAscending are arrays that contain the information as first item.
            else {
                if (sortColumns.length === 0 || !(sortColumns[0] > -1)) {
                    announceText = texts.lsg.component.DataTable.sortingRemoved;
                }
                if (sortAscending.length > 0 && sortColumns[0] > -1 && typeof sortAscending[0] === "boolean") {
                    announceText = texts.lsg.component.DataTable.sorted;
                    const sortText = `${sortAscending[0]
                        ? texts.lsg.component.DataTable.ascending
                        : texts.lsg.component.DataTable.descending}`;
                    announceText += ` , ${columnsPreprocessed[sortColumns[0]].title} ${sortText} `;
                }
            }
            return announceText;
        });
    }, [sortColumns.join(";"), sortAscending.join(";")]);
    const doHandleResizeOrHorizontalScroll = useCallback(() => {
        createStickyStyles();
    }, [columnsPreprocessed, gridStructure, tableContainerRef.current]);
    useResize(doHandleResizeOrHorizontalScroll);
    useScroll(doHandleResizeOrHorizontalScroll, true, tableContainerRef.current);
    useEffect(() => {
        createStickyStyles();
    }, [props.isInputSticky, inputType, gridStructure, columnsPreprocessed]);
    // Most browsers have a shortcoming regarding property sticky and overflow-x: scroll. Therefore we are simulating the sticky behaviour with this functionality
    useStickyY(tableContainerRef, internalTableHeadRef, isHeaderSticky);
    const handleSort = (newSortColumn) => {
        const initialSortOrders = columnsPreprocessed.map(column => !column.sortOrderType ||
            column.sortOrderType === "initialAscending" ||
            column.sortOrderType === "ascendingOnly");
        const uniDirectionalSortOrders = columnsPreprocessed.map(column => column.sortOrderType === "ascendingOnly" || column.sortOrderType === "descendingOnly");
        if (isMultiSort) {
            const priority = sortColumns.findIndex(s => s === newSortColumn);
            if (priority < 0) {
                // previously not sorted by this column, add it
                onSort?.([...sortColumns, newSortColumn], [...sortAscending, initialSortOrders[newSortColumn]]);
            }
            else if (sortAscending[priority] === initialSortOrders[newSortColumn] &&
                !uniDirectionalSortOrders[newSortColumn]) {
                // previously sorted initial sort order, switch to the second sort order
                const newAscending = [
                    ...sortAscending.slice(0, priority),
                    !initialSortOrders[newSortColumn],
                    ...sortAscending.slice(priority + 1),
                ];
                onSort?.(sortColumns, newAscending);
            }
            else {
                // previously sorted in second sort order, remove from sort
                onSort?.([...sortColumns.slice(0, priority), ...sortColumns.slice(priority + 1)], [...sortAscending.slice(0, priority), ...sortAscending.slice(priority + 1)]);
            }
        } // single sort
        else if (newSortColumn === sortColumns[0]) {
            if (sortAscending[0] === initialSortOrders[newSortColumn] && !uniDirectionalSortOrders[newSortColumn]) {
                // Second click: Sort in second sort order
                onSort?.(newSortColumn, !initialSortOrders[newSortColumn]);
            }
            else {
                // Third click: Reset sorting
                onSort?.(undefined, undefined);
            }
        }
        else {
            // First click: in inititial sort order
            onSort?.(newSortColumn, initialSortOrders[newSortColumn]);
        }
    };
    const captionSort = isTableSortable &&
        `, ${isMultiSort
            ? texts.lsg.component.DataTable.captionMultiSortable
            : texts.lsg.component.DataTable.captionSortable}`;
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement("style", { ref: stickyColumnsStyleContainerRef }, `
                // filled by createStickyStyles}
                `),
        React__default.createElement("style", { ref: stickyColumnShadowsStyleContainerRef }, `
                // filled by createStickyStyles}
                `),
        React__default.createElement("div", { id: `${id}-sticky-shadow-left`, className: `${hostClass}-sticky-shadow` }),
        React__default.createElement("div", { id: `${id}-sticky-shadow-right`, className: `${hostClass}-sticky-shadow` }),
        React__default.createElement("div", { id: id, className: cleanupClassObject({
                [className]: !!className,
                [hostClass]: true,
                [`${lsgPre}no-margin`]: noMargin,
                [`${hostClass}__width-${width}`]: width,
                [`${hostClass}__align-${verticalAlignment}`]: verticalAlignment,
                [`${hostClass}__spacing-${spacing}`]: spacing,
                [`${hostClass}__input-sticky`]: hasStickyInput || gridStructure.stickyLeftGridColumns.length > 0,
                [`${hostClass}__has-input`]: inputType === "checkbox" || inputType === "radio",
                [`${hostClass}__has-sticky-columns`]: gridStructure.stickyLeftGridColumns.length > 0 ||
                    gridStructure.stickyRightGridColumns.length > 0,
            }), style: { ...gridStructure.tableStyles }, 
            // A11y: the (horizontally scrollable) table needs a tab index to be scrollable by keyboard users.
            tabIndex: width === "scroll" ? 0 : -1, ref: tableContainerRef },
            React__default.createElement(LiveRegionPresentation, { ref: liveRegionRef }),
            inputType === "checkbox" && !checkboxHidden && (React__default.createElement("div", { id: toggleColumnLabelId, className: `${hostClass}-select-all-label`, "aria-hidden": "true", tabIndex: -1 }, texts.lsg.component.DataTable.toggleColumnHeaderCheckbox)),
            subTables.map((tableData, i) => {
                const isLastTable = i === subTables.length - 1;
                return (React__default.createElement("table", { className: cleanupClassObject({
                        [`${hostClass}-table`]: true,
                    }), style: gridStructure.tableHeaderAndBodyStyles, key: i, ...ariaAttrs, ref: i === 0 ? firstSubTableRef : undefined },
                    (title || tableData.label || captionSort) && (React__default.createElement("caption", { style: gridStructure.tableHeaderAndBodyStyles },
                        React__default.createElement("div", { className: `${hostClass}-text__hidden` },
                            title,
                            " ",
                            captionSort),
                        tableData.label)),
                    React__default.createElement("thead", { className: cleanupClassObject({
                            [`${hostClass}-thead`]: true,
                            [`${hostClass}-thead__sticky`]: isHeaderSticky,
                            [`${hostClass}-thead__sticky__shadow`]: isHeaderSticky && headerShadow,
                            [`${hostClass}-thead__hidden`]: i > 0,
                        }), ref: i === 0 ? internalTableHeadRef : undefined, style: {
                            top: (isHeaderSticky &&
                                tableHeadStickPosition !== undefined &&
                                `${tableHeadStickPosition}px`) ||
                                undefined,
                            zIndex: zIndex.zAction,
                            ...gridStructure.tableHeaderAndBodyStyles,
                        } },
                        React__default.createElement(DataTableRowWrapper, { data: columnsPreprocessed.map((header, i2) => {
                                if (!header.isSortable) {
                                    return header.title;
                                }
                                return (React__default.createElement(IconLinkWrapper, { key: i2, label: React__default.createElement("span", { id: `${id}-th${i2}-label` }, header.title), htmlAttrs: { "aria-labelledby": `${id}-th${i2}-label` }, icon: ((header.ariaSort === "descending" ||
                                        (!header.ariaSort &&
                                            header.sortOrderType === "initialDescending") ||
                                        ["descendingOnly"].includes(header.sortOrderType)) &&
                                        interaction_arrows_arrowDown) ||
                                        interaction_arrows_arrowUp, appearance: header.horizontalAlignment === "right" ? "left" : "right", iconColor: header.ariaSort ? "default" : "tertiary", iconVariant: header.ariaSort ? "outline" : "solid", iconOnHover: !header.ariaSort, badge: typeof header.sortPriority === "number" &&
                                        header.ariaSort && (React__default.createElement(BadgePresentation, { id: `${id}-th${i2}-badge` },
                                        React__default.createElement("span", { className: `${hostClass}-text__hidden` }, "Sort priority"),
                                        header.sortPriority + 1)), onClick: () => handleSort(i2) }));
                            }), htmlCellAttrs: columnsPreprocessed.map((header, i3) => ({
                                "aria-describedby": typeof header.sortPriority === "number" ? `${id}-th${i3}-badge` : undefined,
                            })), isHeader: true, isTopHeader: true, id: `${id}-th`, ids: columnsPreprocessed.map(header => header.id), columnsPreprocessed: columnsPreprocessed, columnsSeparated: columnsSeparated, inputType: inputType, inputName: checkboxName, inputValue: checkboxValue, inputDisabled: checkboxDisabled, inputHidden: checkboxHidden || inputType !== "checkbox", onInputChange: onCheckboxChange, htmlInputAttrs: {
                                "aria-labelledby": toggleColumnLabelId,
                            }, gridStructure: gridStructure, tableCellsArrayRef: i === 0 ? tableHeadersArrayRef : undefined, toggleColumnCellRef: toggleColumnCellRef, insetLevel: undefined })),
                    React__default.createElement("tbody", { className: `${hostClass}-tbody`, style: gridStructure.tableHeaderAndBodyStyles }, tableData.rows),
                    footer && isLastTable && (React__default.createElement("tfoot", { className: `${hostClass}-tfoot`, style: gridStructure.tableHeaderAndBodyStyles }, footer))));
            }))));
};
DataTablePresentation.displayName = "DataTablePresentation";

export { DataTablePresentation, defaultProps };
