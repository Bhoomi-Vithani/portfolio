import * as React from 'react';
import { GridColumn } from '../GridColumn/GridColumn.js';
import { GridRow } from '../GridRow/GridRow.js';
import { GridPresentation } from './shared/GridPresentation.js';

const Grid = ({ verticalSpacing, spacing, ...props }) => (React.createElement(GridPresentation, { ...props, spacing: spacing || verticalSpacing }));
Grid.displayName = "Grid";
Grid.Row = GridRow;
Grid.Column = GridColumn;

export { Grid };
