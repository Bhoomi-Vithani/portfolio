import React__default from 'react';
import { DataTableExpandableRowWrapper } from './shared/DataTableExpandableRowWrapper.js';

const DataTableExpandableRow = ({ badgeColor, badgeLook, ...props }) => (React__default.createElement(DataTableExpandableRowWrapper, { badgeColor: badgeColor || badgeLook, ...props }));
DataTableExpandableRow.displayName = "DataTableExpandableRow";

export { DataTableExpandableRow };
