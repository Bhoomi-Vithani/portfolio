import React__default from 'react';
import { TeaserGroup } from '../TeaserGroup/TeaserGroup.js';
import { TeaserPresentation } from './shared/TeaserPresentation.js';

const Teaser = ({ imageRatio = "16-9", headlineSize = "h4", headlineAs = "h4", ...props }) => (React__default.createElement(TeaserPresentation, { headlineSize: headlineSize, headlineAs: headlineAs, imageRatio: imageRatio, ...props }));
Teaser.displayName = "Teaser";
Teaser.Group = TeaserGroup;

export { Teaser };
