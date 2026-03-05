import { interaction___more02 } from '@lsg/icons';
import React__default from 'react';
import { useUniqueId } from '../../../utils/Hooks/index.js';
import { texts } from '../../../utils/Localization.js';
import { ActionFlyoutPresentation } from '../../ActionFlyout/shared/ActionFlyoutPresentation.js';
import { ActionFlyoutItemPresentation } from '../../ActionFlyoutItem/shared/ActionFlyoutItemPresentation.js';
import { IconLinkPresentation } from '../../IconLink/shared/IconLinkPresentation.js';
import { hostClass } from './CardsCustomItem.styles.js';

const CardsMenu = (props) => {
    const { navigationTree, onMouseHoverChange, onKeyboardFocusChange, hasMouseHover, hasKeyboardFocus, disabled, setOpen, } = props;
    const id = useUniqueId(`${hostClass}-`, props.id);
    const buttonId = useUniqueId(`${hostClass}-`, props.buttonId);
    return (React__default.createElement(ActionFlyoutPresentation
    // TODO: Alternative?
    // eslint-disable-next-line react/no-unstable-nested-components
    , { 
        // TODO: Alternative?
        // eslint-disable-next-line react/no-unstable-nested-components
        menuButton: buttonProps => (React__default.createElement(IconLinkPresentation, { label: texts.lsg.component.CardsMenu.cardsMenuButtonA11Y, icon: interaction___more02, appearance: "no-text", id: buttonId, htmlAttrs: {
                "aria-controls": id,
                "aria-haspopup": true,
            }, onMouseHoverChange: onMouseHoverChange, onKeyboardFocusChange: onKeyboardFocusChange, hasMouseHover: hasMouseHover, hasKeyboardFocus: hasKeyboardFocus, disabled: disabled, ...buttonProps })), id: id, ariaLabelledBy: buttonId, onOpenChange: setOpen, buttonId: buttonId }, navigationTree.map(({ onClick, label, ...item }, i) => (React__default.createElement(ActionFlyoutItemPresentation, { ...item, onClick: onClick, key: i }, label)))));
};

export { CardsMenu };
