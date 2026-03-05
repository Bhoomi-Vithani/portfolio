import * as React from 'react';
import { ActionGroupPresentation } from './shared/ActionGroupPresentation.js';

const ActionGroup = ({ left = null, centeredLayout = false, ...props }) => (React.createElement(ActionGroupPresentation, { left, centeredLayout, ...props }));
ActionGroup.displayName = "Action.Group";

export { ActionGroup };
