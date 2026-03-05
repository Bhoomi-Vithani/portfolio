import React__default, { useState, useRef, useEffect } from 'react';
import { isTargetInsideContainer } from '../../../utils/DomUtils.js';
import { functionalHelpers } from '../../../utils/FunctionalHelpers.js';
import { setLsgTimeout } from '../../../utils/timing.js';
import { handleKeydownListFlyout } from '../../_SelectFlyout/HandleKeyDownListFlyout.js';
import { SelectPresentation } from './SelectPresentation.js';

// @ts-strict-ignore
/* eslint-disable react/default-props-match-prop-types */
// do not import defaultProps from SelectPresentationProps because of circular dependency issues.
const defaultProps = {
    clearIcon: true,
    options: [],
    searchFunction: "startOfWord",
    onBlur: () => {
        /* empty */
    },
    onFocus: () => {
        /* empty */
    },
    onChange: () => {
        /* empty */
    },
};
// The principle of the SelectWrapper is that the Textfield is always focussed and takes care of
// the Flyout open/close/keyhandling.
const SelectWrapper = (externalProps) => {
    const props = functionalHelpers(externalProps, defaultProps);
    const [isOpen, setIsOpen] = useState(false);
    const [currentValue, setCurrentValue] = useState(props.value);
    const [displayValue, setDisplayValue] = useState(props.options.find(o => o.value === props.value)?.label || "");
    const [focussedValue, setFocussedValue] = useState();
    const [scrollFocussedElementIntoView, setScrollFocussedElementIntoView] = useState();
    const hostRef = useRef(undefined);
    const focussedElementRef = useRef(undefined);
    const containerElementRef = useRef(undefined);
    const flyoutElementRef = useRef(undefined);
    const currentPropsRef = useRef(props);
    // Keep props reference up to date
    useEffect(() => {
        currentPropsRef.current = props;
    }, [props]);
    // close flyout if state changes to non-interactable
    useEffect(() => {
        if ((props.disabled || props.readonly) && isOpen) {
            setIsOpen(false);
        }
    }, [props.disabled, props.readonly, isOpen]); // Use props instead of externalProps
    useEffect(() => {
        setIsOpen(false);
        setCurrentValue(props.value);
        setDisplayValue(props.options.find(o => o.value === props.value)?.label || "");
    }, [props.value, props.options]);
    const handleBlur = (ev, name) => {
        const currentProps = currentPropsRef.current;
        const target = ev.relatedTarget;
        // For the use case of dynamic disabling Selects (Select disables on choosing a
        // certain value for example) we need to get access to the current props.
        // For disabled elements, only close flyout but don't trigger onBlur callback
        if (currentProps.disabled) {
            setIsOpen(false);
            return;
        }
        // Check if the target is still inside the relevant container
        // Pattern: the clear-icon ist part of the select.
        // Do not trigger an onBlur when tabbing to the clear-icon.
        if ((!currentProps.withTextInput &&
            (isTargetInsideContainer(target, hostRef.current) ||
                isTargetInsideContainer(target, flyoutElementRef.current))) ||
            target === hostRef.current) {
            return;
        }
        // Execute standard blur events for text input
        if (currentProps.withTextInput) {
            const selectedOption = currentProps.options.find(o => o.value === currentValue);
            if (!selectedOption || selectedOption.disabled || selectedOption.label !== displayValue) {
                // make sure that a wrong displayValue ("Aquamann") is removed (display + value)
                setDisplayValue(() => selectedOption?.label || "");
            }
            else if (currentValue !== currentProps.value) {
                // In case options are different, execute onChange.
                currentProps.onChange(currentValue, name, ev);
            }
        }
        currentProps.onBlur(ev, name);
    };
    const handleFocus = (ev, name) => {
        // TODO: Bug: If if the focus event is comes from the clear icon
        // (the clear icon is focussed via shift-tab), no onFocus is triggered (though should be).
        // Expected: onFocus should be triggered when focusing the clear icon as well.
        const target = ev.relatedTarget;
        if (target &&
            (isTargetInsideContainer(target, hostRef.current) ||
                isTargetInsideContainer(target, flyoutElementRef.current))) {
            return;
        }
        props.onFocus(ev, name);
    };
    const handleDisplayValueChange = (value) => {
        const option = value
            ? props.options.find(o => {
                switch (props.searchFunction) {
                    case "startsWith":
                        return o.label.toLowerCase().startsWith(value.toLowerCase());
                    case "everywhere":
                        return o.label.toLowerCase().includes(value.toLowerCase());
                    case "startOfWord":
                        return o.label
                            .toLowerCase()
                            .split(" ")
                            .some(word => word.startsWith(value.toLowerCase()));
                    default:
                        return false;
                }
            })
            : props.options[0];
        setDisplayValue(value);
        setFocussedValue(option?.value);
        setScrollFocussedElementIntoView("top");
    };
    // the Textfield handles the keydowns, also for the Flyout.
    // TODO:
    //  Get rid of duplicate/similar logic of `Select` using `withTextInput` and `Autocomplete`.
    //  A combobox (Select) with Text input should behave precisely as the Autocomplete example in the .stories file.
    //  Most likely `Autocomplete` itself should be used by `Select` using `withTextInput` internally.
    //  Furthermore, the documentation of `Autocomplete` should mention that the example can be achieved with a `Select`
    //  (see also `handleDisplayValueChange`).
    const handleKeyDown = event => {
        handleKeydownListFlyout({
            event,
            open: isOpen,
            focussedIndex: props.options.findIndex(opt => opt.value === focussedValue),
            options: props.options,
            onFocusIndex: value => 
            // TODO: Find alternative to timeout hack. Prevents timing issues when opening flyout and changing
            //  selection with the same keystroke (e.g. when opening with HOME, END, or "letter keys").
            setLsgTimeout(() => {
                setFocussedValue(props.options[value].value);
                setScrollFocussedElementIntoView(true);
            }),
            onChange: value => {
                if (props.withTextInput) {
                    const newCurrentValue = props.options[value].value || "";
                    setCurrentValue(newCurrentValue);
                    handleDisplayValueChange(props.options[value].label);
                }
                props.onChange(props.options[value].value, props.name, event);
            },
            onOpen: () => {
                setIsOpen(true);
                if (!props.withTextInput) {
                    event.preventDefault();
                }
            },
            onClose: () => setIsOpen(false),
            flyoutElement: flyoutElementRef.current,
            focussedElement: focussedElementRef.current,
            // additionalConfirmKeys: [Key.Space], // -> HS: commented out; why use it? w3c and mui ignore space.
            additionalConfirmKeys: [],
            useTypeAhead: !props.withTextInput,
            isTextInputSelect: props.withTextInput,
        });
    };
    const handleFlyoutChange = (value, name, event) => {
        setCurrentValue(value);
        props.onChange(value, name, event);
    };
    const { value, ...otherProps } = props;
    return (React__default.createElement(SelectPresentation, { ...otherProps, onFlyoutChange: handleFlyoutChange, flyoutValue: value, open: isOpen, onOpenChange: newOpen => setIsOpen(newOpen), displayValue: displayValue, onDisplayValueChange: handleDisplayValueChange, onBlur: handleBlur, onFocus: handleFocus, onKeyDown: handleKeyDown, onChipResetFilter: (ev, name) => props.onChange("", name, ev), ref: hostRef, flyoutRef: flyoutElementRef, focussedRef: focussedElementRef, focussedValue: focussedValue, containerRef: containerElementRef, scrollFocussedElementIntoView: scrollFocussedElementIntoView, onFocussedValueChange: (newValue, newScroll) => {
            setFocussedValue(newValue);
            setScrollFocussedElementIntoView(newScroll);
        } }));
};

export { SelectWrapper };
