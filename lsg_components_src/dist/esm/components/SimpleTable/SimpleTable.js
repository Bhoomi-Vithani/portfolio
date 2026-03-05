import * as React from 'react';
import { SimpleTablePresentation } from './shared/SimpleTablePresentation.js';
import { SimpleTableRowPresentation } from './shared/SimpleTableRow/SimpleTableRowPresentation.js';

// @ts-strict-ignore
/* eslint-disable react/require-default-props */
const SimpleTable = ({ ratio = "2-1", ...otherProps }) => (React.createElement(SimpleTablePresentation, { ratio: { none: "" }[ratio] || ratio, ...otherProps }));
SimpleTable.Row = ({ children, ...restProps }) => (React.createElement(SimpleTableRowPresentation, { ...restProps }, children));
SimpleTable.displayName = "SimpleTable";
// @ts-ignore
SimpleTable.Row.displayName = "SimpleTable.Row";

export { SimpleTable };
