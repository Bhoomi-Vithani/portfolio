import React__default, { useRef, useState, useEffect } from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { isTargetInsideContainer } from '../../../utils/DomUtils.js';
import { useUniqueId } from '../../../utils/Hooks/index.js';
import { setLsgTimeout } from '../../../utils/timing.js';
import { SelectPresentation } from '../../Select/shared/SelectPresentation.js';
import { handleKeydownListFlyout } from '../../_SelectFlyout/HandleKeyDownListFlyout.js';

// @ts-strict-ignore
/* eslint-disable @typescript-eslint/no-shadow,react/default-props-match-prop-types */
const AutoCompletePresentation = ({ value, onFocus = () => {
    /* empty */
}, onBlur = () => {
    /* empty */
}, onChange = () => {
    /* empty */
}, onKeyDown = () => {
    /* empty */
}, id: idProp, ...props }) => {
    const hostRef = useRef(undefined);
    const focusedElementRef = useRef(undefined);
    const containerElementRef = useRef(undefined);
    const flyoutElementRef = useRef(undefined);
    const id = useUniqueId(`${lsgPre}autocomplete-`, idProp);
    const [state, setState] = useState({
        open: false,
        focusedValue: "",
    });
    // close flyout if state changes to non-interactable
    useEffect(() => {
        if (props.disabled || props.readonly) {
            setState(prevState => ({
                ...prevState,
                open: false,
            }));
        }
    }, [props.disabled, props.readonly]);
    const handleOnFocus = (event, name) => {
        const target = event.relatedTarget;
        if (target &&
            (isTargetInsideContainer(target, hostRef.current) ||
                isTargetInsideContainer(target, flyoutElementRef.current))) {
            return;
        }
        onFocus(event, name);
    };
    const handleOnKeyDown = event => {
        handleKeydownListFlyout({
            event,
            open: state.open,
            focussedIndex: props.options?.findIndex(opt => opt.value === state.focusedValue),
            options: props.options,
            onChange: value => onChange(props.options[value].value, props.name, true, event),
            onOpen: () => setState(prevState => ({ ...prevState, open: true })),
            onClose: () => {
                if (state.open) {
                    setState(prevState => ({ ...prevState, open: false }));
                }
                else {
                    onChange("", event.name, false, event);
                }
            },
            onFocusIndex: value => 
            // TODO: Find alternative to timeout hack. Prevents timing issues when opening flyout and changing
            //  selection with the same keystroke (e.g. when opening with HOME, END, or "letter keys").
            setLsgTimeout(() => setState(prevState => ({
                ...prevState,
                focusedValue: props.options[value].value,
                scrollFocussedElementIntoView: true,
            }))),
            flyoutElement: flyoutElementRef.current,
            focussedElement: focusedElementRef.current,
            afterAction: () => onKeyDown(event.key, props.name, event),
            useTypeAhead: false,
            isTextInputSelect: true,
        });
    };
    const handleOnBlur = (event, name) => {
        const target = event.relatedTarget;
        if (isTargetInsideContainer(target, hostRef.current) ||
            isTargetInsideContainer(target, flyoutElementRef.current) ||
            target === hostRef.current) {
            return;
        }
        onBlur(event, name);
    };
    const { open, focusedValue, scrollFocussedElementIntoView } = state;
    return (React__default.createElement(SelectPresentation, { ...props, id: id, htmlAttrs: { "aria-autocomplete": "list" }, withTextInput: true, displayValue: value, onDisplayValueChange: (newValue, name, event) => {
            onChange(newValue, name, false, event);
        }, open: open, flyoutValue: "", onFlyoutChange: (newValue, name, event) => {
            // newValue === "" -> X-Icon clicked.
            const isSelected = newValue !== "";
            onChange(newValue, name, isSelected, event);
        }, onKeyDown: handleOnKeyDown, onBlur: handleOnBlur, ref: hostRef, onOpenChange: isOpen => setState(prevState => ({ ...prevState, open: isOpen })), onFocus: handleOnFocus, containerRef: containerElementRef, flyoutRef: flyoutElementRef, focussedValue: focusedValue, focussedRef: focusedElementRef, scrollFocussedElementIntoView: scrollFocussedElementIntoView, onFocussedValueChange: (newValue, newScroll) => setState(prevState => ({
            ...prevState,
            focusedValue: newValue,
            scrollFocussedElementIntoView: newScroll,
        })) }));
};

export { AutoCompletePresentation };
