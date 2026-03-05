import * as React from 'react';
import { SideNavigationPagePresentation } from './shared/SideNavigationPagePresentation.js';

const SideNavigationPage = ({ logoAlt, logoAriaLabel, ...props }) => (React.createElement(SideNavigationPagePresentation, { ...props, logoAriaLabel: logoAriaLabel || logoAlt }));

export { SideNavigationPage };
