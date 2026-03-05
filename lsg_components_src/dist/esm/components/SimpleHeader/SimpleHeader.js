import * as React from 'react';
import { SimpleHeaderWrapper } from './shared/SimpleHeaderWrapper.js';

const SimpleHeader = ({ logoLabel, logoAlt, navigationTreeAriaLabel, navigationAriaLabel, ...props }) => (React.createElement(SimpleHeaderWrapper, { navigationAriaLabel: navigationAriaLabel || navigationTreeAriaLabel, logoLabel: logoLabel || logoAlt, ...props }));
SimpleHeader.displayName = "SimpleHeader";

export { SimpleHeader };
