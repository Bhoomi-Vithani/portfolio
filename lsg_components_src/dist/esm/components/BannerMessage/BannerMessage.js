import * as React from 'react';
import { forwardRef } from 'react';
import { BannerMessagePresentation } from './shared/BannerMessagePresentation.js';

const BannerMessage = forwardRef(({ iconLinks, children, ...props }, ref) => (React.createElement(BannerMessagePresentation, { headlineAs: "h5", content: children, ...props, ref: ref }, iconLinks)));
BannerMessage.displayName = "BannerMessage";

export { BannerMessage };
