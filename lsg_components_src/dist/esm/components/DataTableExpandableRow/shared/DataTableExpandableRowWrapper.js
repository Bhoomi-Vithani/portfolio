import { interaction_arrows_chevronUp, interaction_arrows_chevronDown } from '@lsg/icons';
import React__default, { cloneElement } from 'react';
import { fragmentMap, fragmentCount } from '../../../utils/ReactUtils.js';
import { BadgePresentation } from '../../Badge/shared/BadgePresentation.js';
import { hostClass } from '../../DataTable/shared/DataTable.styles.js';
import { DataTableRowWrapper } from '../../DataTableRow/shared/DataTableRowWrapper.js';
import { IconPresentation } from '../../Icon/shared/IconPresentation.js';

// @ts-strict-ignore
const getId = (child, id, i) => child.props.id || `${id}-e${i}`;
const DataTableExpandableRowWrapper = ({ id, children, badgeColor = "supplementary", columnsPreprocessed, columnsSeparated, gridStructure, inputType, data: dataProp = [], colspans, label: labelProp, open: openProp, onOpenChange, defaultOpen, hideBadge, insetLevel, spacing, inactive = false, ...otherProps }) => {
    const [openState, setOpenState] = React__default.useState(typeof defaultOpen === "boolean" ? defaultOpen : false);
    const open = typeof openProp === "boolean" ? openProp : openState;
    const isInteractive = !inactive;
    const getLabel = (labelText) => (React__default.createElement(React__default.Fragment, null,
        React__default.createElement("span", { className: `${hostClass}-expandable-label` }, labelText),
        !hideBadge && (React__default.createElement(BadgePresentation, { color: badgeColor, inline: true, margin: "right" }, fragmentCount(children).toString(10))),
        isInteractive && (React__default.createElement(IconPresentation, { icon: open ? interaction_arrows_chevronUp : interaction_arrows_chevronDown, inline: true, svgAttrs: { "aria-hidden": true } }))));
    // The aim of the following code (consider it as a "black box" is to place the DataTableExpandableRow label (select)
    // on the label column of the DataTable (prop DataTable -> labelColumn).
    // This is done by modifying the colspans array, which is a prop for the DataTableRowWrapper.
    // Examples:
    // a) DataTable: no colspan and no data attribute, 8 columns.
    // if the labelColumn is 0, an colspans array: [8] for the DataTableRowWrapper,
    // if the labelColumn is 1, an colspans array: [1, 7] is generated.
    // b) DataTable: 9 columns. The DataTableExpandableRow contains values at position 7, 9.
    // The data prop for this component is [undefined, "Betrag", "1000 EUR"]
    // The colspans prop for this component is [6, 2]
    // if the labelColumn is 0, the colspans array stays the same, the label object is rendered in the data like this:
    // [Object, "Betrag", "1000 EUR"]
    // if the labelColumn is 1, a colspans array: [1, 5, 1, 2] is generated, and the data for DataTableRowWrapper is
    // modified to: "", Object, "Betrag", "1000 EUR".
    const dataProcessed = columnsPreprocessed.reduce((acc, h, i) => {
        const isLastValue = !dataProp || acc.dataIndex >= dataProp.length;
        const val = dataProp?.[acc.dataIndex];
        const colspan = isLastValue
            ? columnsPreprocessed.length - i
            : Math.max(colspans?.[acc.dataIndex] || 1, acc.remaining);
        const startColumns = [0];
        if (colspans?.length > 1) {
            colspans.forEach(cs => startColumns.push(startColumns.slice(-1)[0] + cs));
        }
        // Modify the colspans and data here, if label column is found.
        // Hint for development: If you ever need to analyze this code, it helps to remove the
        // following block to get a basic understanding of the function.
        if (h.isLabelColumn) {
            const previousColumns = acc.columns.length > 0
                ? [
                    ...acc.columns.slice(0, -1),
                    {
                        ...acc.columns.slice(-1)[0],
                        colspan: acc.columns.slice(-1)[0].colspan - acc.remaining + 1,
                    },
                ]
                : [];
            const reduceCurrentColumn = !startColumns.includes(i);
            // the splitting works differently if the label is on a "start" column or within a colspan.
            let newDataIndex = acc.dataIndex + 1;
            let newColspan = colspan;
            if (reduceCurrentColumn) {
                newDataIndex = acc.dataIndex;
                newColspan = colspan - 1;
            }
            return {
                columns: [
                    ...previousColumns,
                    {
                        contents: getLabel(labelProp || val),
                        colspan: newColspan,
                    },
                ],
                remaining: colspan,
                dataIndex: newDataIndex,
                labelColumn: acc.dataIndex,
            };
        }
        if (acc.remaining > 1) {
            // reduce the remaining colspan.
            return {
                columns: acc.columns,
                remaining: acc.remaining - 1,
                dataIndex: acc.dataIndex,
                labelColumn: acc.labelColumn,
            };
        }
        // create new data content and colspan.
        return {
            columns: [
                ...acc.columns,
                {
                    contents: val,
                    colspan,
                },
            ],
            remaining: colspan,
            dataIndex: acc.dataIndex + 1,
            labelColumn: acc.labelColumn,
        };
    }, {
        columns: [],
        remaining: 0,
        dataIndex: 0,
        labelColumn: undefined,
    });
    const childrenIds = fragmentMap(children, (child, i) => getId(child, id, i))?.join(" ");
    const currentInsetLevel = insetLevel >= 0 ? insetLevel : 0;
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(DataTableRowWrapper, { ...otherProps, spacing: spacing, isExpandableHeader: true, columnsPreprocessed: columnsPreprocessed, gridStructure: gridStructure, inputType: inputType, data: dataProcessed.columns.map(c => c.contents), colspans: dataProcessed.columns.map(c => c.colspan), ids: [...Array.from(Array(dataProcessed.labelColumn).keys()).map(_ => undefined), `${id}-th`], id: id, onLinkClick: isInteractive
                ? () => {
                    if (onOpenChange) {
                        onOpenChange(!open);
                    }
                    if (typeof openProp !== "boolean") {
                        setOpenState(!openState);
                    }
                }
                : undefined, htmlLinkAttrs: isInteractive && childrenIds
                ? {
                    "aria-controls": childrenIds,
                    "aria-expanded": open,
                }
                : undefined, isHeader: false, insetLevel: currentInsetLevel }),
        fragmentMap(children, (child, i) => cloneElement(child, {
            id: getId(child, id, i),
            columnsSeparated,
            columnsPreprocessed,
            gridStructure,
            inputType,
            hidden: !open,
            className: i === 0
                ? `${child.props.className || ""} ${hostClass}-tr__expandable__first-child`
                : child.props.className,
            // open, onOpenChange: A child can also be another ExpandableRow. In this case,
            // close the child ExpandableRow (set open to false) when this ExpandableRow is closed.
            open: open && child.props.open,
            onOpenChange: newOpen => {
                if (child.props.onOpenChange) {
                    child.props.onOpenChange(newOpen);
                }
            },
            insetLevel: React__default.isValidElement(child) && child.type?.displayName === "DataTableExpandableRow"
                ? currentInsetLevel + 1
                : undefined,
        }))));
};

export { DataTableExpandableRowWrapper };
