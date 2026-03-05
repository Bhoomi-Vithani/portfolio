import * as React from 'react';
import { ActionButtonGroup } from '../ActionButtonGroup/ActionButtonGroup.js';
import { ActionButtonPresentation } from './shared/ActionButtonPresentation.js';

const ActionButton = ({ color = "primary", refCallback, disabled = false, label, children, loadingText, ...props }) => (React.createElement(ActionButtonPresentation, { actionRef: refCallback, loadingAriaLabel: loadingText, label: label || children, color, disabled, ...props }));
ActionButton.displayName = "ActionButton";
ActionButton.Group = ActionButtonGroup;

export { ActionButton };
