import { interaction_arrows_chevronUp, interaction_arrows_chevronDown } from '@lsg/icons';
import React__default, { useContext, useRef } from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { useUniqueId } from '../../../utils/Hooks/index.js';
import { Host } from '../../../utils/Host.js';
import { fRef } from '../../../utils/React.js';
import { ChipsItemActionPresentation } from '../../ChipsItemAction/shared/ChipsItemActionPresentation.js';
import { SpacingContext } from '../../FormContainer/shared/SpacingContext.js';
import { hostClass as hostClass$1 } from '../../TextField/shared/TextField.styles.js';
import { TextFieldWrapper } from '../../TextField/shared/TextFieldWrapper.js';
import { SelectFlyoutInternalWrapper } from '../../_SelectFlyout/SelectFlyoutInternalWrapper.js';
import { hostClass } from './Select.styles.js';

// @ts-strict-ignore
const SelectPresentation = fRef(props => {
    const { className, noMargin, name, displayValue, label, flyoutValue, options = [], onFlyoutChange, open, onOpenChange, disabled, clearIcon = true, emptyListLabel, errorText, helperText, invalid, optional, optionalText, placeholder, readonly, withTextInput, onBlur = () => {
        /* empty */
    }, onFocus = () => {
        /* empty */
    }, onDisplayValueChange, onKeyDown, ref, containerRef, htmlAttrs, flyoutRef, focussedRef, focussedValue, scrollFocussedElementIntoView, onFocussedValueChange, hiddenSelectIcon, chipVariant = false, chipSelected = false, onChipResetFilter, isHidden, errorTextAriaLive, spacing, } = props;
    const { spacing: spacingFromContext } = useContext(SpacingContext); // For FormContainer with spacing="dense"
    const effectiveSpacing = spacing ?? spacingFromContext; // For spacing prop usage in Select
    const id = useUniqueId(`${hostClass}`, props.id);
    const focussedValueId = `${id}-flyout-option_${focussedValue}`;
    // Render Flyout only if an emptyListLabel is set or options aren't empty and it's not disabled or readonly
    const renderFlyout = (emptyListLabel || options.length !== 0) && !(readonly || disabled);
    const inputRef = useRef(null);
    const chipActionRef = useRef(null);
    const toggleContainerElement = chipVariant ? chipActionRef?.current?.chipContainerRef() : containerRef?.current;
    return (React__default.createElement(Host, { className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
            [`${lsgPre}no-margin`]: noMargin || chipVariant,
            [`${hostClass}-chip`]: chipVariant,
            [`${hostClass}-hidden`]: isHidden,
            [`${hostClass}__dense`]: effectiveSpacing === "dense",
        }), ref: ref, id: `${id}-host-base` },
        chipVariant ? (React__default.createElement(ChipsItemActionPresentation, { id: id, label: displayValue || label, onClick: () => onOpenChange(!open), onKeyDown: onKeyDown, ref: chipActionRef, onResetFilter: (ev, n) => onChipResetFilter(ev, n), 
            // TODO: Should disabled be supported?
            // disabled={disabled || readonly}
            isSelected: chipSelected, clearIcon: clearIcon, icon: open ? interaction_arrows_chevronUp : interaction_arrows_chevronDown, appearance: "right", iconVariant: "outline", iconInteractive: true, htmlAttrs: {
                ...htmlAttrs,
                autoComplete: htmlAttrs?.autoComplete || "on",
                ...(!readonly && {
                    role: "combobox",
                    "aria-controls": `${id}-flyout`,
                    "aria-activedescendant": open && focussedValue ? `${focussedValueId}` : "",
                    "aria-expanded": open ? "true" : "false",
                    "aria-haspopup": !disabled ? "listbox" : undefined,
                }),
            } })) : (React__default.createElement(TextFieldWrapper, { id: id, name: name, value: displayValue, clearIcon: clearIcon, label: label, noMargin: true, type: withTextInput || readonly ? "text" : "button", selectOpen: open ? "open" : "closed", hiddenSelectIcon: hiddenSelectIcon, ...(!readonly &&
                !disabled && {
                onInputClick: () => onOpenChange(!open),
                onIconClick: () => {
                    if (!open) {
                        inputRef.current.focus();
                    }
                    onOpenChange(!open);
                },
                onKeyDown,
            }), onBlur: onBlur, onFocus: onFocus, onChange: withTextInput ? onDisplayValueChange : undefined, onClearIconClick: event => {
                if (readonly) {
                    return;
                }
                onFlyoutChange("", name, event);
                onOpenChange(false);
            }, placeholder: placeholder, invalid: invalid || !!errorText, helperText: helperText, errorText: errorText, readonly: readonly, optional: optional, optionalText: optionalText, disabled: disabled, inputRef: inputRef, containerRef: containerRef, className: open && !disabled && !readonly && !invalid && `${hostClass$1}__has-open-flyout`, htmlAttrs: {
                ...htmlAttrs,
                autoComplete: htmlAttrs?.autoComplete || "on",
                ...(!readonly && {
                    role: "combobox",
                    "aria-controls": `${id}-flyout`,
                    "aria-activedescendant": open && focussedValue ? `${focussedValueId}` : "",
                    "aria-expanded": open ? "true" : "false",
                    "aria-haspopup": !disabled ? "listbox" : undefined,
                }),
            }, errorTextAriaLive: errorTextAriaLive, spacing: effectiveSpacing })),
        renderFlyout && (React__default.createElement(SelectFlyoutInternalWrapper, { id: `${id}-flyout`, open: open, name: name, onCloseClick: ev => {
                // Checking if click is outside textfield or the chip to close the Flyout
                if (ev.key === undefined &&
                    ((chipVariant && !chipActionRef?.current?.chipContainerRef().contains(ev.target)) ||
                        (!chipVariant && !containerRef?.current?.contains(ev.target)))) {
                    onOpenChange(false);
                }
            }, emptyListLabel: emptyListLabel, options: options, value: flyoutValue, onChange: onFlyoutChange, toggleElement: inputRef?.current, toggleContainerElement: toggleContainerElement, isToggleElmWidth: !chipVariant, focussedRef: focussedRef, focussedValue: focussedValue, scrollFocussedElementIntoView: scrollFocussedElementIntoView, onFocussedValueChange: onFocussedValueChange, hostRef: flyoutRef, hasTabIndex: false, role: "listbox", ariaLabel: label, withTextInput: withTextInput, autocomplete: htmlAttrs?.["aria-autocomplete"] === "list" }))));
});
SelectPresentation.displayName = "SelectPresentation";

export { SelectPresentation };
