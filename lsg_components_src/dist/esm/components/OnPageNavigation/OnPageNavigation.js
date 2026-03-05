import * as React from 'react';
import { OnPageNavigationPresentation } from './shared/OnPageNavigationPresentation.js';

/* eslint-disable react/require-default-props */
const OnPageNavigation = (props) => React.createElement(OnPageNavigationPresentation, { ...props });
OnPageNavigation.displayName = "OnPageNavigation";

export { OnPageNavigation };
