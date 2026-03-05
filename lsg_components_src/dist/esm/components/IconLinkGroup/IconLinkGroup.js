import * as React from 'react';
import { IconLinkGroupWrapper } from './shared/IconLinkGroupWrapper.js';

const IconLinkGroup = ({ direction = "vertical", ...props }) => (React.createElement(IconLinkGroupWrapper, { ...props, direction: direction }));
IconLinkGroup.displayName = "IconLinkGroup";

export { IconLinkGroup };
