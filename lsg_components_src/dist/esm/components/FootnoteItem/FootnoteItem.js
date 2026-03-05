import * as React from 'react';
import { FootnoteItemPresentation } from './shared/FootnoteItemPresentation.js';

const FootnoteItem = (props) => React.createElement(FootnoteItemPresentation, { ...props });
FootnoteItem.displayName = "Footnote.Item";

export { FootnoteItem };
