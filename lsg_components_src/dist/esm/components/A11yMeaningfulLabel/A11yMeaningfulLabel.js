import * as React from 'react';
import { A11yMeaningfulLabelPresentation } from './shared/A11yMeaningfulLabelPresentation.js';

/**
 * 'Stretches' a clickable area.
 * To get an idea of what's happening here, see:
 * https://inclusive-components.design/cards/
 */
const A11yMeaningfulLabel = ({ inline = true, ...props }) => (React.createElement(A11yMeaningfulLabelPresentation, { inline: inline, ...props }));
A11yMeaningfulLabel.displayName = "A11yMeaningfulLabel";

export { A11yMeaningfulLabel };
