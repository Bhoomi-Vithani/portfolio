import * as React from 'react';
import { ListItem } from '../ListItem/ListItem.js';
import { ListPresentation } from './shared/ListPresentation.js';

const List = ({ isAlphabetical, textSize = "copy-text", iconColor = "default", ...props }) => (React.createElement(ListPresentation, { ...props, iconColor: iconColor, orderedMode: isAlphabetical ? "alphabetic" : "numeric", textSize: textSize }));
List.Item = ListItem;
List.displayName = "List";

export { List };
