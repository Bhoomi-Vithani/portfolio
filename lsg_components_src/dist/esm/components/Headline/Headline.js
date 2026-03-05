import * as React from 'react';
import { HeadlinePresentation } from './shared/HeadlinePresentation.js';

const Headline = ({ size = "h1", overlineAs = "div", sublineAs = "div", children, badgeColor, badgeLook, badgePosition = "overline", badgeIconVariant = "solid", ...props }) => (React.createElement(HeadlinePresentation, { size, overlineAs, sublineAs, ...props, badgeColor: badgeColor || badgeLook || "primary", badgePosition: badgePosition, badgeIconVariant: badgeIconVariant }, children));
const H1 = (props) => React.createElement(Headline, { size: "h1", ...props });
const H2 = (props) => React.createElement(Headline, { size: "h2", ...props });
const H3 = (props) => React.createElement(Headline, { size: "h3", ...props });
const H4 = (props) => React.createElement(Headline, { size: "h4", ...props });
const H5 = (props) => React.createElement(Headline, { size: "h5", ...props });
const H6 = (props) => React.createElement(Headline, { size: "h6", ...props });
Headline.displayName = "Headline";
H1.displayName = "H1";
H2.displayName = "H2";
H3.displayName = "H3";
H4.displayName = "H4";
H5.displayName = "H5";
H6.displayName = "H6";

export { H1, H2, H3, H4, H5, H6, Headline };
