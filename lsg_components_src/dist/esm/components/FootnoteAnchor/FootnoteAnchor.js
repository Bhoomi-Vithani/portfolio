import * as React from 'react';
import { FootnoteAnchorPresentation } from './shared/FootnoteAnchorPresentation.js';

const FootnoteAnchor = ({ ...props }) => React.createElement(FootnoteAnchorPresentation, { ...props });
FootnoteAnchor.displayName = "Footnote.Anchor";

export { FootnoteAnchor };
