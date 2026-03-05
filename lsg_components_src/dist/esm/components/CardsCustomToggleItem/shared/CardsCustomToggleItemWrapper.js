import React__default, { useState, useMemo } from 'react';
import { useUniqueId, useDwindle } from '../../../utils/Hooks/index.js';
import { A11yMeaningfulLabelContext } from '../../A11yMeaningfulLabel/shared/A11yMeaningfulLabelContext.js';
import { CardsCustomToggleItemPresentation } from './CardsCustomToggleItemPresentation.js';

// @ts-strict-ignore
const CardsCustomToggleItemWrapper = ({ id, menuNavigationTree, ...props }) => {
    const checkboxId = useUniqueId("cards-custom-checkbox-item", id);
    const { loading, disabled } = props;
    const [{ hasKeyboardFocus, hasMouseHover, clicked }, { setHasKeyboardFocus, setHasMouseHover }, { onMouseDown, onMouseUp, onMouseLeave, onKeyDown, onKeyUp },] = useDwindle(props);
    const [hasMenuMouseHover, setMenuMouseHover] = useState(false);
    const [hasMenuKeyboardFocus, setMenuKeyboardFocus] = useState(false);
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
        type: "label",
        htmlFor: checkboxId,
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
        checkboxId,
    ]);
    return (React__default.createElement(A11yMeaningfulLabelContext.Provider, { value: value },
        React__default.createElement(CardsCustomToggleItemPresentation, { ...props, id: checkboxId, menuNavigationTree: menuNavigationTree, hasKeyboardFocus: hasKeyboardFocus, onKeyboardFocusChange: setHasKeyboardFocus, hasMouseHover: hasMouseHover || hasMenuMouseHover || hasMenuKeyboardFocus, onMouseHoverChange: setHasMouseHover, onMenuMouseHoverChange: setMenuMouseHover, onMenuKeyboardFocusChange: setMenuKeyboardFocus, hasMenuMouseHover: hasMenuMouseHover, hasMenuKeyboardFocus: hasMenuKeyboardFocus, isActive: clicked })));
};

export { CardsCustomToggleItemWrapper };
