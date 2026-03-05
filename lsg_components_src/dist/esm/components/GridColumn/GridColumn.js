import * as React from 'react';
import { GridColumnWrapper } from './shared/GridColumnWrapper.js';

const GridColumn = ({ horizontalAlign, horizontalAlignXs, horizontalAlignSm, horizontalAlignMd, ...props }) => (React.createElement(GridColumnWrapper, { ...props, horizontalAlignment: horizontalAlign, horizontalAlignmentXs: horizontalAlignXs, horizontalAlignmentSm: horizontalAlignSm, horizontalAlignmentMd: horizontalAlignMd }));
GridColumn.displayName = "Grid.Column";

export { GridColumn };
