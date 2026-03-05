import { interaction___close, interaction_arrows_chevronDown, interaction___eyeHide, interaction___eyeView } from '@lsg/icons';
import React__default, { useContext, useState } from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { combineRefs, useUniqueId } from '../../../utils/Hooks/index.js';
import { Host } from '../../../utils/Host.js';
import { texts } from '../../../utils/Localization.js';
import { fragmentMap } from '../../../utils/ReactUtils.js';
import { SpacingContext } from '../../FormContainer/shared/SpacingContext.js';
import { IconLinkWrapper } from '../../IconLink/shared/IconLinkWrapper.js';
import { IconLinkGroupWrapper } from '../../IconLinkGroup/shared/IconLinkGroupWrapper.js';
import { HelperTextPresentation } from '../../_HelperText/HelperTextPresentation.js';
import { hostClass } from './TextField.styles.js';

// @ts-strict-ignore
const TextFieldPresentation = (props) => {
    const { id: idProp, hostId: hostIdProp, value, name, hasWidget, iconExpanded, disabled, readonly, errorText, errorTextAriaLive, hasFocus, hasKeyboardFocus, hasHover, label, optional, optionalText = texts.lsg.component._general.optional, as = "input", placeholder, type, isPasswordVisible, onPasswordToggle, onBlur = () => {
        /* empty */
    }, onFocus = () => {
        /* empty */
    }, onKeyDown = () => {
        /* empty */
    }, clearIcon = true, helperText, iconLink, icon, iconFocusable, iconName, iconText, iconHtmlAttrs, selectOpen, hiddenSelectIcon, onInputClick = () => {
        /* empty */
    }, onClearIconClick, onIconClick = () => {
        /* empty */
    }, onChange, onClear, htmlAttrs = {}, className, noMargin, spacing, onMouseHoverChange, inputRef, iconRef, containerRef, innerContainerRef: innerContainerRefProp, suffix, suffixType = "inline", suffixRef, isSearchField = false, labelRef, } = props;
    const { spacing: spacingFromContext } = useContext(SpacingContext); // For FormContainer with spacing="dense"
    const effectiveSpacing = spacing ?? spacingFromContext; // For spacing prop usage in TextField
    // is currently interacted with by user (e.g. Tab key or mouse click)
    const [isFocused, setIsFocused] = useState(false);
    // same element for containerRef (positioning the flyout) and innerContainerRef (positioning the suffix)
    // TODO simplify when fixing things in the TextField
    const innerContainerRef = combineRefs(containerRef, innerContainerRefProp);
    const id = useUniqueId(`${hostClass}-`, idProp);
    const hostId = hostIdProp || `${id}-base`;
    const errorTextId = `${id}-error-text`;
    const helperTextId = `${id}-helper-text`;
    const suffixId = `${id}-suffix`;
    const labelId = `${id}-label`;
    const clearIconId = `${id}-clear-icon`;
    const selectIconId = `${id}-select-icon`;
    const placeholderId = `${id}-placeholder`;
    const iconId = `${id}-icon`;
    const passwordIconId = `${id}-password-icon`;
    const hasInlineLabel = !value && !(hasFocus && !hasWidget) && !readonly;
    const placeholderVisible = !value && !hasInlineLabel;
    const invalid = props.invalid || !!errorText;
    const typeProp = !type || (type === "password" && isPasswordVisible) ? "text" : type;
    const Component = as;
    const isButtonType = type === "button";
    return (React__default.createElement(Host, { id: hostId, className: cleanupClassObject({
            [`${hostClass}`]: true,
            [className]: className,
            [`${lsgPre}no-margin`]: noMargin,
            [`${hostClass}__dense`]: effectiveSpacing === "dense",
        }) },
        React__default.createElement("div", { className: cleanupClassObject({
                [`${hostClass}__label-inline`]: hasInlineLabel,
                [`${hostClass}__read-only`]: readonly,
                [`${hostClass}__has-widget`]: hasWidget,
                [`${hostClass}__has-focus`]: hasFocus && !disabled && !readonly,
                [`${hostClass}__has-keyboard-focus`]: hasKeyboardFocus,
                [`${hostClass}__has-hover`]: hasHover && !disabled && !readonly,
                [`${hostClass}__invalid`]: invalid,
                [`${hostClass}__disabled`]: disabled,
                [`${hostClass}__input-filled`]: !!value,
            }) },
            React__default.createElement("label", { className: cleanupClassObject({
                    [`${hostClass}-label`]: true,
                    [`${hostClass}-label__search`]: isSearchField,
                }), htmlFor: id, id: labelId, ref: labelRef },
                label,
                optional && ` (${optionalText})`),
            React__default.createElement("div", { className: cleanupClassObject({
                    [`${hostClass}-suffix-container`]: suffixType === "separated" && !readonly && !disabled,
                }) },
                React__default.createElement("div", { className: cleanupClassObject({
                        [`${hostClass}-container`]: true,
                        [`${hostClass}-container__search`]: isSearchField,
                    }), onMouseEnter: () => {
                        if (document.documentElement.getAttribute("data-whatintent") === "mouse") {
                            onMouseHoverChange(true);
                        }
                    }, onMouseLeave: () => onMouseHoverChange(false), ref: innerContainerRef },
                    placeholder && !suffix && !readonly && (React__default.createElement("span", { id: placeholderId, className: cleanupClassObject({
                            [`${hostClass}-placeholder`]: true,
                            [`${hostClass}-hidden`]: !placeholderVisible,
                        }), key: `${id}placeholder` }, !hasInlineLabel && placeholderVisible ? placeholder : undefined)),
                    React__default.createElement(Component, { ...htmlAttrs, readOnly: readonly || hasWidget, className: cleanupClassObject({
                            [`${hostClass}-input`]: true,
                            [`${hostClass}-input__filled`]: !!value,
                            [`${hostClass}-input__textarea`]: as === "textarea",
                        }), tabIndex: disabled ? -1 : htmlAttrs?.tabIndex || 0, onChange: ev => onChange(ev.target.value, name, ev), onFocus: e => {
                            setIsFocused(true);
                            onFocus(e, name);
                        }, onBlur: e => {
                            // Reset isFocused if no value is present
                            if (!value) {
                                setIsFocused(false);
                            }
                            onBlur(e, name);
                        }, disabled: disabled, name: name, "aria-required": htmlAttrs["aria-required"] ?? (!optional && !disabled && !readonly), "aria-describedby": [
                            suffix && suffixId,
                            helperText && helperTextId,
                            htmlAttrs["aria-describedby"],
                        ]
                            .filter(t => !!t)
                            .join(" "), "aria-errormessage": errorText ? errorTextId : undefined, "aria-invalid": !!errorText || !!invalid, "aria-placeholder": 
                        // TODO simplify this
                        htmlAttrs["aria-placeholder"] ??
                            (placeholder || (suffix && suffixType === "inline") ? placeholder || suffix : undefined), id: id, type: as === "input" ? typeProp : undefined, "aria-labelledby": typeProp === "button" ? labelId : undefined, 
                        // button, we need to reference the label explicitely
                        onKeyDown: (ev) => {
                            onKeyDown(ev);
                            if (htmlAttrs?.onKeyDown)
                                htmlAttrs?.onKeyDown(ev); // Fallback mechanism for public interface where onKeyDown has removed primarily
                        }, onClick: e => onInputClick(e, name), key: `${id}input`, value: value ?? "", ref: inputRef, rows: as === "textarea" ? 1 : undefined }),
                    suffix && suffixType === "inline" && (!readonly || !placeholder) && (React__default.createElement("div", { id: suffixId, className: cleanupClassObject({
                            [`${hostClass}-suffix`]: true,
                            [`${hostClass}-suffix__focusable`]: !readonly,
                        }), ref: suffixRef }, (hasFocus || value || readonly) && suffix)),
                    !disabled && (React__default.createElement(IconLinkGroupWrapper, { className: `${hostClass}-icons`, direction: "textfield", noMargin: true, as: "div" },
                        !readonly && clearIcon && value && (!isButtonType || selectOpen) && (React__default.createElement(IconLinkWrapper, { id: clearIconId, label: texts.lsg.component.InputTextfield.clear, key: "clear-icon", className: cleanupClassObject({
                                // only visibly when hovering - except if this is used as button (in Select)
                                [`${hostClass}-clear`]: !isButtonType,
                            }), hasTabIndex: isButtonType, icon: interaction___close, color: "secondary", htmlAttrs: {
                                "aria-describedby": isButtonType ? labelId : undefined,
                            }, onClick: ev => {
                                // Reset isFocused when clearing the field
                                setIsFocused(false);
                                if (onClearIconClick) {
                                    onClearIconClick(ev, name);
                                }
                                else {
                                    onClear(ev);
                                }
                                if (type === "button") {
                                    // if using the clear button with keyboard, the IconLink disappears.
                                    // Therefore we move the focus back to the Input.
                                    inputRef.current.focus();
                                }
                            } })),
                        selectOpen && !hiddenSelectIcon && !readonly && (React__default.createElement(IconLinkWrapper, { id: selectIconId, label: selectOpen === "open"
                                ? texts.lsg.component.InputSelect.open
                                : texts.lsg.component.InputSelect.close, key: "select-icon", htmlAttrs: {
                                "aria-expanded": selectOpen === "open",
                                "aria-controls": htmlAttrs["aria-controls"],
                            }, hasTabIndex: false, onClick: onIconClick, icon: interaction_arrows_chevronDown, color: selectOpen === "open" || value || isFocused ? "primary" : "secondary", transform: selectOpen === "open" ? "rotate" : undefined })),
                        (icon || iconName) && (React__default.createElement(IconLinkWrapper, { id: iconId, label: iconText, key: "second-icon", icon: icon, iconName: iconName, expanded: iconExpanded, onClick: onIconClick, hasTabIndex: iconFocusable, name: name, htmlAttrs: iconHtmlAttrs, actionRef: iconRef })),
                        fragmentMap(iconLink, (link) => iconLink &&
                            !(icon || iconName) &&
                            React__default.cloneElement(link, { appearance: "no-text" })),
                        type === "password" && !disabled && !readonly && (React__default.createElement(IconLinkWrapper, { id: passwordIconId, label: texts.lsg.component.InputTextfield.reveal, key: "password-icon", icon: isPasswordVisible ? interaction___eyeHide : interaction___eyeView, 
                            // Changed because Keyboard Users need a different behaviour
                            // for the password reveal
                            // https://medium.com/kiipco/password-creation-3-ways-to-make-it-accessible-bc8f2b53b7ee#1751
                            onClick: onPasswordToggle, htmlAttrs: {
                                role: "switch",
                                "aria-checked": isPasswordVisible,
                            } }))))),
                suffix && suffixType === "separated" && !readonly && !disabled && (React__default.createElement("div", { id: suffixId, className: cleanupClassObject({
                        [`${hostClass}-suffix-separated`]: true,
                    }) }, suffix))),
            React__default.createElement(HelperTextPresentation, { errorTextAriaLive: errorTextAriaLive, helperText: helperText, errorText: errorText, helperTextId: helperTextId, errorTextId: errorTextId, disabled: disabled, spacing: effectiveSpacing === "dense" ? "dense" : undefined }))));
};
TextFieldPresentation.displayName = "TextFieldPresentation";

export { TextFieldPresentation };
