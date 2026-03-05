import * as React from 'react';
import { Tab } from '../Tab/Tab.js';
import { TabsStateful } from '../TabsStateful/TabsStateful.js';
import { TabsPresentation } from './shared/TabsPresentation.js';

/* eslint-disable react/require-default-props */
const Tabs = ({ ...props }) => React.createElement(TabsPresentation, { ...props });
Tabs.Stateful = TabsStateful;
Tabs.Tab = Tab;
// @ts-ignore
Tabs.Tab.displayName = "Tabs.Tab";
Tabs.displayName = "Tabs";

export { Tabs };
