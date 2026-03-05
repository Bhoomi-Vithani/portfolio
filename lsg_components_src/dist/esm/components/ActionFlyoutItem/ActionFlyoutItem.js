import * as React from 'react';
import { ActionFlyoutItemPresentation } from './shared/ActionFlyoutItemPresentation.js';

const ActionFlyoutItem = ({ ...props }) => React.createElement(ActionFlyoutItemPresentation, { ...props });
ActionFlyoutItem.displayName = "ActionFlyout.Item";

export { ActionFlyoutItem };
