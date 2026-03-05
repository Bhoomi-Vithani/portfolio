import * as React from 'react';
import { DrawerPresentation } from './shared/DrawerPresentation.js';

// @ts-strict-ignore
const Drawer = ({ layout = "layer-right", ...props }) => (React.createElement(DrawerPresentation, { layout: layout, ...props }));
Drawer.displayName = "Drawer";

export { Drawer };
