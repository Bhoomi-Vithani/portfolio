import * as React from 'react';
import { BarDiagramGroup } from '../BarDiagramGroup/BarDiagramGroup.js';
import { BarDiagramPresentation } from './shared/BarDiagramPresentation.js';

/* eslint-disable react/require-default-props */
const BarDiagram = (props) => React.createElement(BarDiagramPresentation, { ...props });
BarDiagram.displayName = "BarDiagram";
BarDiagram.Group = BarDiagramGroup;

export { BarDiagram };
