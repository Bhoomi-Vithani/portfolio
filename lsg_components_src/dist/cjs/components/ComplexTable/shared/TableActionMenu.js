'use strict';

var icons = require('@lsg/icons');
var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var Host = require('../../../utils/Host.js');
var Localization = require('../../../utils/Localization.js');
var ActionFlyoutPresentation = require('../../ActionFlyout/shared/ActionFlyoutPresentation.js');
var ActionFlyoutItemPresentation = require('../../ActionFlyoutItem/shared/ActionFlyoutItemPresentation.js');
var IconLinkWrapper = require('../../IconLink/shared/IconLinkWrapper.js');
var IconLinkGroupWrapper = require('../../IconLinkGroup/shared/IconLinkGroupWrapper.js');
var TableActionMenu_styles = require('./TableActionMenu.styles.js');

// @ts-strict-ignore
/* eslint-disable react/no-array-index-key */
const TableActionMenu = props => {
  let verticalMenuActionProps = [];
  let horizontalMenuActionProps = [];
  const {
    id,
    tableActionsProperties,
    isMobile,
    className,
    noMargin
  } = props;
  if (isMobile && tableActionsProperties.length > 1 || props.rowActionsLook === "menu-only") {
    // in mobile view and with one action should display the icon and not more icon
    verticalMenuActionProps = tableActionsProperties;
  } else if (tableActionsProperties.length <= 3 || props.rowActionsLook === "icons-only") {
    horizontalMenuActionProps = tableActionsProperties;
  } else {
    verticalMenuActionProps = tableActionsProperties.slice(2);
    horizontalMenuActionProps = tableActionsProperties.slice(0, 2);
  }
  const menuButtonId = `${id}-action-menu-button`;
  const menuId = `${id}-action-menu`;
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    id: id,
    className: DomUtils.cleanupClassObject({
      [TableActionMenu_styles.hostClass]: true,
      [className]: !!className,
      [`${prefix.lsgPre}no-margin`]: noMargin
    }),
    onClick: event => event.stopPropagation()
  }, /*#__PURE__*/React__default.createElement(IconLinkGroupWrapper.IconLinkGroupWrapper
  /* className={`${hostClass}-action-wrapper`} */, {
    /* className={`${hostClass}-action-wrapper`} */
    direction: "table",
    noMargin: true
  }, horizontalMenuActionProps.map((actionProp, index) => (/*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
    key: index,
    ...actionProp,
    label: actionProp.children ? actionProp.children : actionProp.label,
    appearance: "no-text"
  })))), verticalMenuActionProps.length > 0 && (/*#__PURE__*/React__default.createElement(ActionFlyoutPresentation.ActionFlyoutPresentation
  // TODO: Alternative?
  // eslint-disable-next-line react/no-unstable-nested-components
  , {
    // TODO: Alternative?
    // eslint-disable-next-line react/no-unstable-nested-components
    menuButton: menuProps => (/*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
      label: Localization.texts.lsg.component.TableActionMenu.menuButton,
      appearance: "no-text",
      id: menuButtonId,
      icon: icons.interaction___more02,
      htmlAttrs: {
        "aria-controls": menuId,
        "aria-haspopup": true
      },
      ...menuProps
    })),
    preferOpenToLeft: true,
    id: menuId,
    ariaLabelledBy: menuButtonId
  }, verticalMenuActionProps.map((item, i) => (/*#__PURE__*/React__default.createElement(ActionFlyoutItemPresentation.ActionFlyoutItemPresentation, {
    ...item,
    key: i,
    onClick: (event, name) => {
      item.onClick(event, name);
    }
  }, item.label || item.children))))));
};

exports.TableActionMenu = TableActionMenu;
