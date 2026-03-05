import * as React from 'react';
import { BarDiagramGroupPresentation } from './shared/BarDiagramGroupPresentation.js';

const BarDiagramGroup = (props) => React.createElement(BarDiagramGroupPresentation, { ...props });
BarDiagramGroup.displayName = "BarDiagram.Group";

export { BarDiagramGroup };
