import * as React from 'react';
import { LinkWrapper } from './shared/LinkWrapper.js';

const Link = ({ loadingText, ...props }) => React.createElement(LinkWrapper, { loadingAriaLabel: loadingText, ...props });
Link.displayName = "Link";

export { Link };
