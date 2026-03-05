import * as React from 'react';
import { NavigationBlockWrapper } from './shared/NavigationBlockWrapper.js';

const NavigationBlock = (props) => React.createElement(NavigationBlockWrapper, { ...props });
NavigationBlock.displayName = "NavigationBlock";

export { NavigationBlock };
