import * as React from 'react';
import { FooterNavigationBlockPresentation } from './shared/FooterNavigationBlockPresentation.js';

const FooterNavigationBlock = ({ footerNavigationBlockAs = "h3", ...props }) => (React.createElement(FooterNavigationBlockPresentation, { footerNavigationBlockAs: footerNavigationBlockAs, ...props }));
FooterNavigationBlock.displayName = "FooterNavigation.Block";

export { FooterNavigationBlock };
