import { interaction___search, interaction___close, interaction___send } from '@lsg/icons';
import React__default, { useState } from 'react';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { useViewportRange, useUniqueId } from '../../../utils/Hooks/index.js';
import { texts } from '../../../utils/Localization.js';
import { IconPresentation } from '../../Icon/shared/IconPresentation.js';
import { IconLink } from '../../IconLink/IconLink.js';
import { IconLinkWrapper } from '../../IconLink/shared/IconLinkWrapper.js';
import { IconLinkGroupWrapper } from '../../IconLinkGroup/shared/IconLinkGroupWrapper.js';
import { SpinnerPresentation } from '../../Spinner/shared/SpinnerPresentation.js';
import { hostClass } from './Search.styles.js';

// @ts-strict-ignore
const SearchPresentation = (props) => {
    const { className, appearance: appearanceProp = "hero", value, inline, name, label, placeholder, disabled, loading, clearIcon, htmlAttrs, inputRef, onChange, onSearch, formAs = "form", formAttrs = {}, inlineSubmitHidden, additionalActions, } = props;
    const [hasMouseHover, setHasMouseHover] = useState(false);
    const [hasFocus, setHasFocus] = useState(false);
    const [hasKeyboardFocus, setHasKeyboardFocus] = useState(false);
    const isMobile = useViewportRange(undefined, "xs");
    const appearance = isMobile ? "default" : appearanceProp;
    const id = useUniqueId(`${hostClass}-`, props.id);
    let searchIconColor;
    if (disabled) {
        searchIconColor = "disabled";
    }
    else if (hasFocus || value) {
        searchIconColor = "default";
    }
    else {
        searchIconColor = "tertiary";
    }
    const FormComponent = formAs;
    return (React__default.createElement("search", { id: `${id}-base`, className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
            [`${hostClass}__${appearance}`]: true,
            [`${hostClass}__inline`]: inline,
            [`${hostClass}__disabled`]: disabled,
            [`${hostClass}__loading`]: loading,
            [`${hostClass}__has-hover`]: (hasMouseHover || hasFocus || hasKeyboardFocus) && !disabled,
            [`${hostClass}__has-focus`]: (hasFocus || hasKeyboardFocus) && !disabled,
            [`${hostClass}__has-keyboard-focus`]: hasKeyboardFocus && !disabled,
            [`${hostClass}__has-value`]: !!value,
        }), onMouseEnter: () => {
            if (document.documentElement.getAttribute("data-whatintent") === "mouse") {
                setHasMouseHover(true);
            }
        }, onMouseLeave: () => {
            setHasMouseHover(false);
        }, role: "search" // remove role attribute search when <search>-tag is widely supported by browsers
     },
        React__default.createElement(FormComponent, { ...formAttrs, id: `${id}-form`, onSubmit: (e) => {
                if (formAttrs.onSubmit) {
                    formAttrs.onSubmit?.(e);
                }
                else {
                    e.preventDefault();
                }
                onSearch?.(value, name, e);
            } },
            React__default.createElement("div", { className: `${hostClass}-input-wrapper`, id: `${id}-input-wrapper` },
                React__default.createElement(IconPresentation, { id: `${id}-icon`, className: `${hostClass}-icon`, icon: interaction___search, size: "small", variant: "outline", color: searchIconColor, hover: hasMouseHover, title: "" // will also set aria-hidden="true"
                    , noMargin: true }),
                React__default.createElement("div", { className: `${hostClass}-input-container` },
                    React__default.createElement("input", { ...htmlAttrs, ref: inputRef, id: `${id}`, key: `${id}-input`, className: `${hostClass}-input`, type: "search", value: value ?? "", disabled: disabled, onChange: e => onChange(e.target.value, name, e), onFocus: () => {
                            if (document.documentElement.getAttribute("data-whatinput") === "keyboard") {
                                setHasKeyboardFocus(true);
                            }
                            setHasFocus(true);
                        }, onBlur: () => {
                            setHasKeyboardFocus(false);
                            setHasFocus(false);
                        }, "aria-label": label, "aria-placeholder": placeholder, "aria-haspopup": false }),
                    placeholder && (React__default.createElement("span", { key: `${id}-placeholder`, className: `${hostClass}-placeholder` }, placeholder))),
                React__default.createElement(IconLinkGroupWrapper, { className: cleanupClassObject({
                        [`${hostClass}-input-actions`]: true,
                        [`${hostClass}-input-actions-clear`]: true,
                    }), direction: appearance === "hero" ? "hero-search" : "textfield", noMargin: true, as: "div" },
                    loading && (React__default.createElement(SpinnerPresentation, { loading: loading, size: 24, ariaLabel: "", id: `${id}-spinner` })),
                    !disabled && clearIcon && value && (React__default.createElement(IconLinkWrapper, { id: `${id}-clear-button`, label: texts.lsg.component.InputTextfield.clear, key: "clear-icon", className: `${hostClass}-clear`, color: "secondary", hasTabIndex: false, icon: interaction___close, onClick: e => {
                            onChange("", name, e);
                        } }))),
                React__default.createElement(IconLinkGroupWrapper, { id: `${id}-additional-actions`, className: cleanupClassObject({
                        [`${hostClass}-input-actions`]: true,
                        [`${hostClass}-input-actions-additional`]: true,
                    }), direction: appearance === "hero" ? "hero-search" : "textfield", noMargin: true },
                    !disabled && additionalActions,
                    !inlineSubmitHidden && (React__default.createElement(IconLink, { id: `${id}-submit-button`, className: `${hostClass}-input-actions-clear`, label: "Suchen", icon: interaction___send, appearance: "right", htmlAttrs: { type: "submit" }, disabled: disabled })))))));
};

export { SearchPresentation };
