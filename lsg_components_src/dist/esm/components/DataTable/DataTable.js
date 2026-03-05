import React__default from 'react';
import { DataTableWrapper } from './shared/DataTableWrapper.js';

// @ts-strict-ignore
const DataTable = ({ width = "auto", ...props }) => React__default.createElement(DataTableWrapper, { ...props, width: width });
DataTable.displayName = "DataTable";

export { DataTable };
