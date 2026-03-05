import * as React from 'react';
import { ClickListPresentation } from '../ClickList/shared/ClickListPresentation.js';
import { ClickListMultiActionsItem } from '../ClickListMultiActionsItem/ClickListMultiActionsItem.js';

const ClickListMultiActions = (props) => React.createElement(ClickListPresentation, { ...props });
ClickListMultiActions.displayName = "ClickList.Multiactions";
ClickListMultiActions.Item = ClickListMultiActionsItem;

export { ClickListMultiActions };
