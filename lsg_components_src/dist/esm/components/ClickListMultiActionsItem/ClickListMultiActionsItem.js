import * as React from 'react';
import { ClickListItemWrapper } from '../ClickListItem/shared/ClickListItemWrapper.js';

const ClickListMultiActionsItem = ({ ...props }) => (React.createElement(ClickListItemWrapper, { ...props, look: "multiaction", headlineAs: props.headlineAs || "strong" }));
// TODO v20 Use PascalCase for React Components correctly for alternative name with "." ->
//  "ClickList.MultiActions.Item"
ClickListMultiActionsItem.displayName = "ClickList.Multiactions.Item";

export { ClickListMultiActionsItem };
