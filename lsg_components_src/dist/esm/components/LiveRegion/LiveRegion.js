import * as React from 'react';
import { forwardRef } from 'react';
import { LiveRegionPresentation } from './shared/LiveRegionPresentation.js';

const LiveRegion = forwardRef((props, ref) => (React.createElement(LiveRegionPresentation, { ...props, ref: ref })));
LiveRegion.displayName = "LiveRegion";

export { LiveRegion };
