import * as React from 'react';
import { GridRowPresentation } from './shared/GridRowPresentation.js';

const GridRow = ({ as = "div", verticalAlign, ...props }) => (React.createElement(GridRowPresentation, { as: as, verticalAlignment: verticalAlign, ...props }));
GridRow.displayName = "Grid.Row";

export { GridRow };
