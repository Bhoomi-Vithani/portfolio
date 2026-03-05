import * as React from 'react';
import { useUniqueId } from '../../utils/Hooks/index.js';
import { ActionFlyoutItem } from '../ActionFlyoutItem/ActionFlyoutItem.js';
import { hostClass } from './shared/ActionFlyout.styles.js';
import { ActionFlyoutPresentation } from './shared/ActionFlyoutPresentation.js';

const ActionFlyout = ({ children, menuButton, preferOpenToLeft, id: idProp, ...props }) => {
    const id = useUniqueId(`${hostClass}-`, idProp);
    const menuId = useUniqueId(`${hostClass}-menu`, props.menuId);
    return (React.createElement(ActionFlyoutPresentation, { menuButton: ({ actionRef, ...btnProps }) => menuButton({ refCallback: actionRef, ...btnProps }), id: menuId, buttonId: id, preferOpenToLeft: preferOpenToLeft, ...props }, children));
};
ActionFlyout.displayName = "ActionFlyout";
ActionFlyout.Item = ActionFlyoutItem;

export { ActionFlyout };
