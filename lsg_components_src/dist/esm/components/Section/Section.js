import * as React from 'react';
import { Subsection } from '../Subsection/Subsection.js';
import { SectionPresentation } from './shared/SectionPresentation.js';

const Section = ({ separatorBottom, look, spacing, as = "section", fullWidth, contentWidth, ...props }) => (React.createElement(SectionPresentation, { ...props, separator: separatorBottom, spacing: spacing || look || "marketing", as: as, contentWidth: fullWidth ? "full-width" : contentWidth }));
/** @deprecated rename to Subsection with the correct english casing */
Section.SubSection = Subsection;
Section.Subsection = Subsection;
Section.displayName = "Section";

export { Section };
