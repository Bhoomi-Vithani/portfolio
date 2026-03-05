import * as React from 'react';
import { TabsItemPresentation } from './shared/TabsItemPresentation.js';

const Tab = ({ label: _, ...props }) => React.createElement(TabsItemPresentation, { ...props });

export { Tab };
