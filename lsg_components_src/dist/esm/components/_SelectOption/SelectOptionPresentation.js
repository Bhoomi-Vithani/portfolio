import React__default from 'react';
import { fRef } from '../../utils/React.js';
import { MenulikeItemPresentation } from '../_MenulikeItem/MenulikeItemPresentation.js';

const SelectOptionPresentation = fRef(({ hasMouseHover, hasKeyboardFocus, ariaSelected, disabled, label, id, onClick, onMouseOver, ref, optionValue, children, }) => (React__default.createElement(MenulikeItemPresentation, { id, onClick, disabled, onMouseOver, hasMouseHover, ref, hasKeyboardFocus, optionValue, hasTabIndex: false, role: "option", ariaSelected: ariaSelected, as: "li" }, label || children)));
SelectOptionPresentation.displayName = "SelectOptionPresentation";

export { SelectOptionPresentation };
