import * as React from 'react';
import { SubsectionPresentation } from './shared/SubsectionPresentation.js';

const Subsection = ({ look, spacing, as = "div", ...props }) => (React.createElement(SubsectionPresentation, { spacing: spacing || look || "standard", separator: props.separatorBottom, as: as, ...props }));
Subsection.displayName = "Section.SubSection";

export { Subsection };
