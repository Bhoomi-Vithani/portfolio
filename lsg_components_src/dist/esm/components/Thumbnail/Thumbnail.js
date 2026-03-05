import * as React from 'react';
import { ThumbnailPresentation } from './shared/ThumbnailPresentation.js';

const Thumbnail = ({ iconVariant = "outline", ...props }) => (React.createElement(ThumbnailPresentation, { ...props, iconVariant }));
Thumbnail.displayName = "Thumbnail";

export { Thumbnail };
