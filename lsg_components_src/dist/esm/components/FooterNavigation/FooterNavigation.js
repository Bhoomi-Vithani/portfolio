import * as React from 'react';
import { FooterNavigationBlock } from '../FooterNavigationBlock/FooterNavigationBlock.js';
import { FooterNavigationPresentation } from './shared/FooterNavigationPresentation.js';

const FooterNavigation = ({ ...props }) => React.createElement(FooterNavigationPresentation, { ...props });
FooterNavigation.displayName = "FooterNavigation";
FooterNavigation.Block = FooterNavigationBlock;

export { FooterNavigation };
