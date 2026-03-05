import React__default, { useState, useMemo } from 'react';
import { useDwindle } from '../../../utils/Hooks/index.js';
import { A11yMeaningfulLabelContext } from '../../A11yMeaningfulLabel/shared/A11yMeaningfulLabelContext.js';
import { CardsCustomItemPresentation } from './CardsCustomItemPresentation.js';

// @ts-strict-ignore
const CardsCustomItemWrapper = ({ menuNavigationTree, ...props }) => {
    const { disabled, loading } = props;
    const [{ hasKeyboardFocus, hasMouseHover, clicked }, { setHasKeyboardFocus, setHasMouseHover }, { onMouseDown, onMouseUp, onMouseLeave, onKeyDown, onKeyUp },] = useDwindle(props);
    const [hasMenuMouseHover, setMenuMouseHover] = useState(false);
    const [hasMenuKeyboardFocus, setMenuKeyboardFocus] = useState(false);
    const [menuOpen, setMenuOpen] = React__default.useState(false);
    const value = useMemo(() => ({
        onMouseHoverChange: setHasMouseHover,
        onKeyboardFocusChange: setHasKeyboardFocus,
        onMouseUp,
        onMouseDown,
        onMouseLeave,
        onKeyDown,
        onKeyUp,
        disabled,
        loading,
        isActive: clicked,
        hasMouseHover,
        hasKeyboardFocus,
        type: "link",
    }), [
        setHasMouseHover,
        setHasKeyboardFocus,
        onMouseUp,
        onMouseDown,
        onMouseLeave,
        onKeyDown,
        onKeyUp,
        disabled,
        loading,
        clicked,
        hasMouseHover,
        hasKeyboardFocus,
    ]);
    return (React__default.createElement(A11yMeaningfulLabelContext.Provider, { value: value },
        React__default.createElement(CardsCustomItemPresentation, { ...props, onOpenChange: setMenuOpen, menuNavigationTree: menuNavigationTree, hasKeyboardFocus: hasKeyboardFocus, hasMouseHover: hasMouseHover || menuOpen || hasMenuMouseHover || hasMenuKeyboardFocus, onMenuMouseHoverChange: setMenuMouseHover, onMenuKeyboardFocusChange: setMenuKeyboardFocus, hasMenuMouseHover: hasMenuMouseHover, hasMenuKeyboardFocus: hasMenuKeyboardFocus, isActive: clicked, menuOpen: menuOpen })));
};

export { CardsCustomItemWrapper };
