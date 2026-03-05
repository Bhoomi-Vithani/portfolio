import * as React from 'react';
import { TeaserGroupPresentation } from './shared/TeaserGroupPresentation.js';

const TeaserGroup = ({ children, groupHeadlineSize = "h4", groupHeadlineAs, groupImageRatio = "16-9", hasFocusTeaser, }) => (React.createElement(TeaserGroupPresentation, { groupHeadlineSize: groupHeadlineSize, groupHeadlineAs: groupHeadlineAs, groupImageRatio: groupImageRatio, hasFocusTeaser: hasFocusTeaser }, children));
TeaserGroup.displayName = "Teaser.Group";

export { TeaserGroup };
