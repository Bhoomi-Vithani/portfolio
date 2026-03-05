import { interaction___more02 } from '@lsg/icons';
import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { Host } from '../../../utils/Host.js';
import { texts } from '../../../utils/Localization.js';
import { ActionFlyoutPresentation } from '../../ActionFlyout/shared/ActionFlyoutPresentation.js';
import { ActionFlyoutItemPresentation } from '../../ActionFlyoutItem/shared/ActionFlyoutItemPresentation.js';
import { IconLinkWrapper } from '../../IconLink/shared/IconLinkWrapper.js';
import { IconLinkGroupWrapper } from '../../IconLinkGroup/shared/IconLinkGroupWrapper.js';
import { hostClass } from './TableActionMenu.styles.js';

// @ts-strict-ignore
/* eslint-disable react/no-array-index-key */
const TableActionMenu = (props) => {
    let verticalMenuActionProps = [];
    let horizontalMenuActionProps = [];
    const { id, tableActionsProperties, isMobile, className, noMargin } = props;
    if ((isMobile && tableActionsProperties.length > 1) || props.rowActionsLook === "menu-only") {
        // in mobile view and with one action should display the icon and not more icon
        verticalMenuActionProps = tableActionsProperties;
    }
    else if (tableActionsProperties.length <= 3 || props.rowActionsLook === "icons-only") {
        horizontalMenuActionProps = tableActionsProperties;
    }
    else {
        verticalMenuActionProps = tableActionsProperties.slice(2);
        horizontalMenuActionProps = tableActionsProperties.slice(0, 2);
    }
    const menuButtonId = `${id}-action-menu-button`;
    const menuId = `${id}-action-menu`;
    return (React__default.createElement(Host, { id: id, className: cleanupClassObject({
            [hostClass]: true,
            [className]: !!className,
            [`${lsgPre}no-margin`]: noMargin,
        }), onClick: event => event.stopPropagation() },
        React__default.createElement(IconLinkGroupWrapper
        /* className={`${hostClass}-action-wrapper`} */
        , { 
            /* className={`${hostClass}-action-wrapper`} */
            direction: "table", noMargin: true }, horizontalMenuActionProps.map((actionProp, index) => (React__default.createElement(IconLinkWrapper, { key: index, ...actionProp, label: actionProp.children ? actionProp.children : actionProp.label, appearance: "no-text" })))),
        verticalMenuActionProps.length > 0 && (React__default.createElement(ActionFlyoutPresentation
        // TODO: Alternative?
        // eslint-disable-next-line react/no-unstable-nested-components
        , { 
            // TODO: Alternative?
            // eslint-disable-next-line react/no-unstable-nested-components
            menuButton: menuProps => (React__default.createElement(IconLinkWrapper, { label: texts.lsg.component.TableActionMenu.menuButton, appearance: "no-text", id: menuButtonId, icon: interaction___more02, htmlAttrs: {
                    "aria-controls": menuId,
                    "aria-haspopup": true,
                }, ...menuProps })), preferOpenToLeft: true, id: menuId, ariaLabelledBy: menuButtonId }, verticalMenuActionProps.map((item, i) => (React__default.createElement(ActionFlyoutItemPresentation, { ...item, key: i, onClick: (event, name) => {
                item.onClick(event, name);
            } }, item.label || item.children)))))));
};

export { TableActionMenu };
