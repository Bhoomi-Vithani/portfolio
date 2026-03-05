import * as React from 'react';
import { ListItemPresentation } from './shared/ListItemPresentation.js';

const ListItem = ({ iconColor = "default", ...props }) => (React.createElement(ListItemPresentation, { iconColor: iconColor, ...props }));
ListItem.displayName = "List.Item";

export { ListItem };
