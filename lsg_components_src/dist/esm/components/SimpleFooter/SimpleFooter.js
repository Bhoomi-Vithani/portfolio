import * as React from 'react';
import { SimpleFooterPresentation } from './shared/SimpleFooterPresentation.js';

const SimpleFooter = ({ logoAlt, logoLabel, navigationAriaLabel, navigationTreeAriaLabel, ...props }) => (React.createElement(SimpleFooterPresentation, { navigationAriaLabel: navigationAriaLabel || navigationTreeAriaLabel, logoLabel: logoLabel || logoAlt, ...props }));
SimpleFooter.displayName = "SimpleFooter";

export { SimpleFooter };
