import * as React from 'react';
import { SkipLinksPresentation } from './shared/SkipLinksPresentation.js';

const SkipLinks = (props) => React.createElement(SkipLinksPresentation, { ...props });
SkipLinks.displayName = "SkipLinks";

export { SkipLinks };
