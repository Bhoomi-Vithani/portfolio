import * as React from 'react';
import { FootnoteAnchor } from '../FootnoteAnchor/FootnoteAnchor.js';
import { FootnoteItem } from '../FootnoteItem/FootnoteItem.js';
import { FootnotePresentation } from './shared/FootnotePresentation.js';

const Footnote = (props) => React.createElement(FootnotePresentation, { ...props });
Footnote.displayName = "Footnote";
Footnote.Item = FootnoteItem;
Footnote.Anchor = FootnoteAnchor;

export { Footnote };
