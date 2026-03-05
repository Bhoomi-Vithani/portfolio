import * as React from 'react';
import { PortalHeaderPresentation } from './shared/PortalHeaderPresentation.js';

const PortalHeader = ({ logoLabel, logoAlt, navigationAriaLabel, navigationTreeAriaLabel, 
// @ts-ignore // remove, when segmentNavigationTreeAriaLabel is removed
segmentNavigationAriaLabel, segmentNavigationTreeAriaLabel, ...restProps }) => (React.createElement(PortalHeaderPresentation, { navigationAriaLabel: navigationAriaLabel || navigationTreeAriaLabel, segmentNavigationAriaLabel: segmentNavigationAriaLabel || segmentNavigationTreeAriaLabel, logoLabel: logoLabel || logoAlt, ...restProps }));
PortalHeader.displayName = "PortalHeader";

export { PortalHeader };
