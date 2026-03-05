import * as React from 'react';
import { ComplexTableStateful } from './ComplexTableStateful.js';
import { ComplexTableWrapper } from './shared/ComplexTableWrapper.js';

// @ts-strict-ignore
/*
    This helper (fall back, backward compatibility) function supports the target prop of unknown object from outside.
    The new and better way filling a htmlAttrs-Prop with required properties, but bose are supported now.
 */
const mapPropData = props => {
    // if no action are defined then returning 1:1 without supplementation
    if (!props.tableBodyData)
        return props;
    let withActions = 0;
    props.tableBodyData.forEach((data) => {
        withActions += !data.rowActions ? 0 : 1;
    });
    if (withActions === 0)
        return props;
    const tableDataProps = props.tableBodyData.map((data) => ({
        ...data, // Immutable: Hier machen wir eine Kopie, damit wir nicht die Original-Daten versehentlich überschreiben.
        rowActions: data.rowActions.map(action => ({
            ...action, // Das gleiche hier
            htmlAttrs: { target: action.target, ...action.htmlAttrs }, // Hier werden die htmlAttrs und die legacy target prop zusammengeführt.
        })),
    }));
    return { ...props, tableData: tableDataProps };
};
/** @deprecated This component will not be further maintained and will not receive a11y updates. Use DataTable instead. */
const ComplexTable = ({ isSortedAscending = false, onHeadingClick, sortColumn, ...props }) => (React.createElement(ComplexTableWrapper, { isSortedAscending, ...mapPropData(props), onColumnHeadClick: onHeadingClick, sortColumnIndex: sortColumn }));
ComplexTable.displayName = "ComplexTable";
ComplexTable.Stateful = ComplexTableStateful;

export { ComplexTable };
