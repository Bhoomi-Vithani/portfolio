import { interaction___close } from '@lsg/icons';
import React__default, { useMemo, useRef, useEffect } from 'react';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { useUniqueId, useDwindle } from '../../../utils/Hooks/index.js';
import { texts } from '../../../utils/Localization.js';
import { A11yMeaningfulLabelContext } from '../../A11yMeaningfulLabel/shared/A11yMeaningfulLabelContext.js';
import { BadgePresentation } from '../../Badge/shared/BadgePresentation.js';
import { IconPresentation } from '../../Icon/shared/IconPresentation.js';
import { IconLinkWrapper } from '../../IconLink/shared/IconLinkWrapper.js';
import { ChipsItemContainer } from '../../_ChipsItemContainer/ChipsItemContainer.js';
import { hostClass } from '../../_ChipsItemContainer/ChipsItemContainer.styles.js';

const ChipsItemDismissiblePresentation = React__default.forwardRef((props, ref) => {
    const { id, noMargin, onDismiss, onFocusLoss = () => { }, htmlAttrs, label, as, appearance, iconVariant, icon, badgeText, ...otherProps } = props;
    const dismissableChipId = useUniqueId("chips-dismiss-item", id);
    const dissmissLabel = `${texts.lsg.component.Chips.removeFilter} ${label} ${badgeText || ""}`;
    const [{ hasKeyboardFocus, hasMouseHover, clicked }, { setHasKeyboardFocus, setHasMouseHover }, { onMouseDown, onMouseUp, onMouseLeave, onKeyDown, onKeyUp },] = useDwindle(props);
    const actionValue = useMemo(() => ({
        onMouseHoverChange: setHasMouseHover,
        onKeyboardFocusChange: setHasKeyboardFocus,
        onMouseUp,
        onMouseDown,
        onMouseLeave,
        onKeyDown,
        onKeyUp,
        loading: false,
        disabled: false,
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
        clicked,
        hasMouseHover,
        hasKeyboardFocus,
    ]);
    // Init the focus loss callback for the chips Item
    const focusLossRef = useRef(onFocusLoss);
    // Update the focus loss ref for the chips group, if property onFocusLoss changes.
    // Triggers focus for other item before this chips item gets unmounted.
    useEffect(() => {
        focusLossRef.current = onFocusLoss;
    }, [onFocusLoss]);
    useEffect(() => () => {
        // Element gets removed from DOM before we get here.
        focusLossRef.current();
    }, []);
    return (React__default.createElement(A11yMeaningfulLabelContext.Provider, { value: actionValue },
        React__default.createElement(ChipsItemContainer, { as: as, noMargin: noMargin, hasKeyboardFocus: hasKeyboardFocus, hasMouseHover: hasMouseHover, isSelected: true, clicked: clicked },
            appearance !== "right" && icon && (React__default.createElement(IconPresentation, { icon: icon, size: "small", noMargin: true, variant: iconVariant, hover: hasMouseHover, color: "default" })),
            React__default.createElement("span", { className: appearance === "no-text" ? `${hostClass}__no-text` : undefined }, label),
            badgeText && (React__default.createElement(BadgePresentation, { className: cleanupClassObject({
                    [`${hostClass}-badge`]: true,
                    [`${hostClass}-badge__margin-left`]: icon || label,
                }), color: "supplementary" }, badgeText)),
            appearance === "right" && icon && (React__default.createElement(IconPresentation, { color: "default", icon: icon, size: "small", noMargin: true, variant: iconVariant, hover: hasMouseHover })),
            React__default.createElement(IconLinkWrapper, { a11yMeaningfulLabel: true, label: dissmissLabel, id: `${dismissableChipId}-dismissible-icon`, className: `${hostClass}-dismissable-icon`, icon: interaction___close, noMargin: true, appearance: "no-text", onClick: onDismiss, color: "secondary", name: props.name, htmlAttrs: htmlAttrs, actionRef: ref, ...otherProps }))));
});

export { ChipsItemDismissiblePresentation };
