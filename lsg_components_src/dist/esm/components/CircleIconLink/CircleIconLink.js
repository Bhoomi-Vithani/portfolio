import * as React from 'react';
import { CircleIconLinkPresentation } from './shared/CircleIconLinkPresentation.js';

const CircleIconLink = ({ color, look, disabled = false, centeredLayout = false, iconVariant = "outline", refCallback, ...props }) => (React.createElement(CircleIconLinkPresentation, { actionRef: refCallback, color: color || look || "primary", disabled: disabled, centeredLayout: centeredLayout, iconVariant: iconVariant, ...props }));
CircleIconLink.displayName = "CircleIconLink";

export { CircleIconLink };
