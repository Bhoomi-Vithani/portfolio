import { interaction___close } from '@lsg/icons';
import React__default, { useMemo, useRef, useImperativeHandle, useEffect } from 'react';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { useUniqueId, useDwindle } from '../../../utils/Hooks/index.js';
import { texts } from '../../../utils/Localization.js';
import { A11yMeaningfulLabelContext } from '../../A11yMeaningfulLabel/shared/A11yMeaningfulLabelContext.js';
import { A11yMeaningfulLabelPresentation } from '../../A11yMeaningfulLabel/shared/A11yMeaningfulLabelPresentation.js';
import { BadgePresentation } from '../../Badge/shared/BadgePresentation.js';
import { IconPresentation } from '../../Icon/shared/IconPresentation.js';
import { IconLinkWrapper } from '../../IconLink/shared/IconLinkWrapper.js';
import { ChipsItemContainer } from '../../_ChipsItemContainer/ChipsItemContainer.js';
import { hostClass } from '../../_ChipsItemContainer/ChipsItemContainer.styles.js';

// @ts-strict-ignore
const ChipsItemActionPresentation = React__default.forwardRef((props, ref) => {
    const { onFocusLoss = () => { }, 
    // actionRef, // TODO: Fix ref problem with actionFlyout
    id: idProp, noMargin, label, loading, as, onClick, actionProps, actionAs, appearance, iconVariant, icon, badgeText, isSelected, clearIcon, onResetFilter, name, htmlAttrs: htmlAttrsProp, iconInteractive = false, className, ...otherProps } = props;
    const id = useUniqueId(`${hostClass}-`, idProp);
    const [{ hasKeyboardFocus, hasMouseHover, clicked }, { setHasKeyboardFocus, setHasMouseHover }, { onMouseDown, onMouseUp, onMouseLeave, onKeyDown, onKeyUp },] = useDwindle(props);
    const actionValue = useMemo(() => ({
        onMouseHoverChange: setHasMouseHover,
        onKeyboardFocusChange: setHasKeyboardFocus,
        onMouseUp,
        onMouseDown,
        onMouseLeave,
        onKeyDown,
        onKeyUp,
        disabled: false,
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
        loading,
        clicked,
        hasMouseHover,
        hasKeyboardFocus,
    ]);
    // TODO: actionRef muss weitergebene werden, aber chipRef weiterhin funktionieren sonst funktioniert actionFlyout mit chipsItem nicht
    const chipRef = useRef(null);
    const containerRef = useRef(null);
    const deleteButtonRef = useRef(null);
    const htmlAttrs = { ...htmlAttrsProp, "data-lsg-component": "chip-item-action" };
    useImperativeHandle(ref, () => ({
        focus: () => {
            chipRef.current?.focus();
        },
        chipContainerRef: () => containerRef?.current,
    }));
    // TODO: just a workaround until ref management will be refactored:
    // The problem is, that actionRef is necessary for button interface and actionFlyout
    // but the component needs ref and forwardRefs vor focus-handling
    // TODO: actionRef and chipRef have a ref to the same elemenent
    // actionRef.current = chipRef.current; // Triggers unwanted side effects
    const handleDeleteClick = () => {
        chipRef.current?.focus();
    };
    const focusLossRef = useRef(onFocusLoss);
    useEffect(() => {
        focusLossRef.current = onFocusLoss;
    }, [onFocusLoss]);
    useEffect(() => () => {
        focusLossRef?.current();
        // TODO: Element gets removed from DOM before we get here.
        // TODO: Check like this does not work for the last element
        // TODO: Save if focus is on element at another place (e.g. onFocus)
    }, []);
    const dissmissLabel = `${texts.lsg.component.Chips.removeFilter} ${label} ${badgeText || ""}`;
    const conditionalColor = isSelected === true ? "default" : "tertiary";
    return (React__default.createElement(A11yMeaningfulLabelContext.Provider, { value: actionValue },
        React__default.createElement(ChipsItemContainer, { id: `${id}-base`, containerRef: containerRef, as: as, noMargin: noMargin, hasKeyboardFocus: hasKeyboardFocus, hasMouseHover: hasMouseHover, isSelected: isSelected, clicked: clicked, appearance: appearance, className: className },
            appearance !== "right" && icon && (React__default.createElement(IconPresentation, { icon: icon, size: "small", noMargin: true, variant: iconVariant, hover: hasMouseHover, color: conditionalColor, title: "" // will also set aria-hidden="true"
             })),
            React__default.createElement(A11yMeaningfulLabelPresentation, { id: id, onClick: onClick, actionAs: actionAs, actionProps: actionProps, htmlAttrs: htmlAttrs, name: name, ...otherProps, actionRef: chipRef },
                React__default.createElement("span", { className: appearance === "no-text" ? `${hostClass}__no-text` : undefined }, label),
                badgeText && (React__default.createElement(BadgePresentation, { id: `${id}-badge`, className: cleanupClassObject({
                        [`${hostClass}-badge`]: true,
                        [`${hostClass}-badge__margin-left`]: icon || label,
                    }), color: "supplementary", inline: true }, badgeText))),
            appearance === "right" && icon && !iconInteractive && (React__default.createElement(IconPresentation, { color: conditionalColor, icon: icon, size: "small", noMargin: true, variant: iconVariant, hover: hasMouseHover, title: "" // will also set aria-hidden="true"
             })),
            (clearIcon || (isSelected && clearIcon === undefined)) && (React__default.createElement(IconLinkWrapper, { actionRef: deleteButtonRef, label: dissmissLabel, id: `${id}-dismissible-icon`, className: `${hostClass}-dismissable-icon`, icon: interaction___close, color: "secondary", noMargin: true, appearance: "no-text", onClick: (event, n) => {
                    handleDeleteClick();
                    onResetFilter(event, n);
                } })),
            appearance === "right" && icon && iconInteractive && (React__default.createElement(IconPresentation, { color: conditionalColor, icon: icon, size: "small", noMargin: true, variant: iconVariant, hover: hasMouseHover, title: "" // will also set aria-hidden="true"
             })))));
});

export { ChipsItemActionPresentation };
