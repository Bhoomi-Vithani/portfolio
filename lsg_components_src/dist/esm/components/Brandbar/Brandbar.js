import * as React from 'react';
import { BrandbarPresentation } from './shared/BrandbarPresentation.js';

/** @deprecated 27.11.2024 - Use brandBar props directly from Footer instead. */
const Brandbar = ({ logoAlt, logoLabel, ...props }) => (React.createElement(BrandbarPresentation, { logoLabel: logoLabel || logoAlt, ...props }));
Brandbar.displayName = "Brandbar";

export { Brandbar };
