'use strict';

var icons = require('@lsg/icons');
var React__default = require('react');
var index = require('../../../utils/Hooks/index.js');
var Localization = require('../../../utils/Localization.js');
var ActionFlyoutPresentation = require('../../ActionFlyout/shared/ActionFlyoutPresentation.js');
var ActionFlyoutItemPresentation = require('../../ActionFlyoutItem/shared/ActionFlyoutItemPresentation.js');
var IconLinkPresentation = require('../../IconLink/shared/IconLinkPresentation.js');
var CardsCustomItem_styles = require('./CardsCustomItem.styles.js');

const CardsMenu = props => {
  const {
    navigationTree,
    onMouseHoverChange,
    onKeyboardFocusChange,
    hasMouseHover,
    hasKeyboardFocus,
    disabled,
    setOpen
  } = props;
  const id = index.useUniqueId(`${CardsCustomItem_styles.hostClass}-`, props.id);
  const buttonId = index.useUniqueId(`${CardsCustomItem_styles.hostClass}-`, props.buttonId);
  return /*#__PURE__*/React__default.createElement(ActionFlyoutPresentation.ActionFlyoutPresentation
  // TODO: Alternative?
  // eslint-disable-next-line react/no-unstable-nested-components
  , {
    // TODO: Alternative?
    // eslint-disable-next-line react/no-unstable-nested-components
    menuButton: buttonProps => (/*#__PURE__*/React__default.createElement(IconLinkPresentation.IconLinkPresentation, {
      label: Localization.texts.lsg.component.CardsMenu.cardsMenuButtonA11Y,
      icon: icons.interaction___more02,
      appearance: "no-text",
      id: buttonId,
      htmlAttrs: {
        "aria-controls": id,
        "aria-haspopup": true
      },
      onMouseHoverChange: onMouseHoverChange,
      onKeyboardFocusChange: onKeyboardFocusChange,
      hasMouseHover: hasMouseHover,
      hasKeyboardFocus: hasKeyboardFocus,
      disabled: disabled,
      ...buttonProps
    })),
    id: id,
    ariaLabelledBy: buttonId,
    onOpenChange: setOpen,
    buttonId: buttonId
  }, navigationTree.map(({
    onClick,
    label,
    ...item
  }, i) => (/*#__PURE__*/React__default.createElement(ActionFlyoutItemPresentation.ActionFlyoutItemPresentation, {
    ...item,
    onClick: onClick,
    key: i
  }, label))));
};

exports.CardsMenu = CardsMenu;
