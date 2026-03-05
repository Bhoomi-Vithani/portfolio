import React__default, { useState, useEffect } from 'react';
import { reuseRef } from '../../utils/FunctionalHelpers.js';
import { handleKeyDown } from './HandleKeyDownListFlyout.js';
import { SelectFlyoutPresentation } from './SelectFlyoutPresentation.js';

// @ts-strict-ignore
const SelectFlyoutInternalWrapper = ({ onFocussedValueChange = () => {
    /* empty */
}, withTextInput = false, ...props }) => {
    const [getFocussedRef, getFocussedElement] = reuseRef(() => props.focussedRef);
    const [getHostRef, getHostElement] = reuseRef(() => props.hostRef);
    const [mouseHover, setMouseHover] = useState("");
    const close = ev => {
        props.onCloseClick(ev);
        props.toggleElement?.focus();
    };
    // Key handling is passed down from SelectWrapper/AutocompletePresentation
    const onKeyDown = event => {
        handleKeyDown({
            event,
            options: props.options,
            focussedIndex: props.options.findIndex(x => x.value === props.focussedValue),
            onChange: value => props.onChange(props.options[value].value, props.name, event),
            onFocusIndex: value => onFocussedValueChange(props.options[value].value, true),
            flyoutElement: getHostElement(),
            focussedElement: getFocussedElement(),
            onClose: ev => close(ev),
            useTypeAhead: !withTextInput,
            isTextInputSelect: withTextInput,
        });
    };
    const scrollFocussedValueIntoView = (focusTop) => {
        const element = getFocussedElement();
        const host = getHostElement();
        if (element) {
            if (focusTop) {
                host.scrollTop = Math.min(element.offsetTop, host.scrollHeight - host.offsetHeight);
                return;
            }
            // scroll flyout-list to selected item
            const elementAboveUpperEdge = element.offsetTop < host.scrollTop;
            const elementBelowLowerEdge = element.offsetTop + element.offsetHeight > host.scrollTop + host.offsetHeight;
            if (elementAboveUpperEdge) {
                // scroll element to the upper edge
                host.scrollTop = element.offsetTop;
            }
            else if (elementBelowLowerEdge) {
                // scroll element to the lower edge
                host.scrollTop = element.offsetTop + element.offsetHeight - host.offsetHeight;
            }
        }
    };
    const handleChange = (value, name, event) => {
        props.onChange(value, name, event);
        close(event);
    };
    const handleMouseOver = (value) => {
        if (value !== mouseHover) {
            setMouseHover(value);
        }
    };
    useEffect(() => onFocussedValueChange(props.value, true), [props.value]);
    useEffect(() => {
        if (props.scrollFocussedElementIntoView) {
            scrollFocussedValueIntoView(props.scrollFocussedElementIntoView === "top");
        }
    }, [props.focussedValue, props.scrollFocussedElementIntoView]);
    useEffect(() => {
        if (props.open) {
            scrollFocussedValueIntoView(true);
        }
    }, [props.open]);
    // Todo: remove onChange and onKeyDown, as they are handled by the Textfield anyways??
    return (React__default.createElement(SelectFlyoutPresentation, { ...props, onChange: handleChange, onMouseOver: handleMouseOver, onKeyDown: onKeyDown, hoveredValue: mouseHover, hostRef: getHostRef(), focussedRef: getFocussedRef() }));
};

export { SelectFlyoutInternalWrapper };
