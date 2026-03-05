import * as React from 'react';
import { FooterMetabarPresentation } from '../FooterMetabar/shared/FooterMetabarPresentation.js';

/** @deprecated 19.2.2025 - Use metaBar props directly from Footer instead. For the ProcessPage, use the
 *  FooterMetabar component instead.   */
const Metabar = ({ navigationAriaLabel, horizontallyCentered, navigationTreeAriaLabel, ...props }) => (React.createElement(FooterMetabarPresentation, { navigationAriaLabel: navigationAriaLabel || navigationTreeAriaLabel, ...props, horizontalAlignment: horizontallyCentered ? "center" : undefined }));
Metabar.displayName = "Metabar";

export { Metabar };
