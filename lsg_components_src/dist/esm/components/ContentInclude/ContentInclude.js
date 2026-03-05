import * as React from 'react';
import { ContentIncludePresentation } from './shared/ContentIncludePresentation.js';

const ContentInclude = ({ cid }) => React.createElement(ContentIncludePresentation, { cid: cid });
ContentInclude.displayName = "ContentInclude";

export { ContentInclude };
