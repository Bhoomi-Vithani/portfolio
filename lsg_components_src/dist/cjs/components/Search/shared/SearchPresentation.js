'use strict';

var icons = require('@lsg/icons');
var React__default = require('react');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var Localization = require('../../../utils/Localization.js');
var IconPresentation = require('../../Icon/shared/IconPresentation.js');
var IconLink = require('../../IconLink/IconLink.js');
var IconLinkWrapper = require('../../IconLink/shared/IconLinkWrapper.js');
var IconLinkGroupWrapper = require('../../IconLinkGroup/shared/IconLinkGroupWrapper.js');
var SpinnerPresentation = require('../../Spinner/shared/SpinnerPresentation.js');
var Search_styles = require('./Search.styles.js');

// @ts-strict-ignore
const SearchPresentation = props => {
  const {
    className,
    appearance: appearanceProp = "hero",
    value,
    inline,
    name,
    label,
    placeholder,
    disabled,
    loading,
    clearIcon,
    htmlAttrs,
    inputRef,
    onChange,
    onSearch,
    formAs = "form",
    formAttrs = {},
    inlineSubmitHidden,
    additionalActions
  } = props;
  const [hasMouseHover, setHasMouseHover] = React__default.useState(false);
  const [hasFocus, setHasFocus] = React__default.useState(false);
  const [hasKeyboardFocus, setHasKeyboardFocus] = React__default.useState(false);
  const isMobile = index.useViewportRange(undefined, "xs");
  const appearance = isMobile ? "default" : appearanceProp;
  const id = index.useUniqueId(`${Search_styles.hostClass}-`, props.id);
  let searchIconColor;
  if (disabled) {
    searchIconColor = "disabled";
  } else if (hasFocus || value) {
    searchIconColor = "default";
  } else {
    searchIconColor = "tertiary";
  }
  const FormComponent = formAs;
  return /*#__PURE__*/React__default.createElement("search", {
    id: `${id}-base`,
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [Search_styles.hostClass]: true,
      [`${Search_styles.hostClass}__${appearance}`]: true,
      [`${Search_styles.hostClass}__inline`]: inline,
      [`${Search_styles.hostClass}__disabled`]: disabled,
      [`${Search_styles.hostClass}__loading`]: loading,
      [`${Search_styles.hostClass}__has-hover`]: (hasMouseHover || hasFocus || hasKeyboardFocus) && !disabled,
      [`${Search_styles.hostClass}__has-focus`]: (hasFocus || hasKeyboardFocus) && !disabled,
      [`${Search_styles.hostClass}__has-keyboard-focus`]: hasKeyboardFocus && !disabled,
      [`${Search_styles.hostClass}__has-value`]: !!value
    }),
    onMouseEnter: () => {
      if (document.documentElement.getAttribute("data-whatintent") === "mouse") {
        setHasMouseHover(true);
      }
    },
    onMouseLeave: () => {
      setHasMouseHover(false);
    },
    role: "search" // remove role attribute search when <search>-tag is widely supported by browsers
  }, /*#__PURE__*/React__default.createElement(FormComponent, {
    ...formAttrs,
    id: `${id}-form`,
    onSubmit: e => {
      if (formAttrs.onSubmit) {
        formAttrs.onSubmit?.(e);
      } else {
        e.preventDefault();
      }
      onSearch?.(value, name, e);
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${Search_styles.hostClass}-input-wrapper`,
    id: `${id}-input-wrapper`
  }, /*#__PURE__*/React__default.createElement(IconPresentation.IconPresentation, {
    id: `${id}-icon`,
    className: `${Search_styles.hostClass}-icon`,
    icon: icons.interaction___search,
    size: "small",
    variant: "outline",
    color: searchIconColor,
    hover: hasMouseHover,
    title: "" // will also set aria-hidden="true"
    ,
    noMargin: true
  }), /*#__PURE__*/React__default.createElement("div", {
    className: `${Search_styles.hostClass}-input-container`
  }, /*#__PURE__*/React__default.createElement("input", {
    ...htmlAttrs,
    ref: inputRef,
    id: `${id}`,
    key: `${id}-input`,
    className: `${Search_styles.hostClass}-input`,
    type: "search",
    value: value ?? "",
    disabled: disabled,
    onChange: e => onChange(e.target.value, name, e),
    onFocus: () => {
      if (document.documentElement.getAttribute("data-whatinput") === "keyboard") {
        setHasKeyboardFocus(true);
      }
      setHasFocus(true);
    },
    onBlur: () => {
      setHasKeyboardFocus(false);
      setHasFocus(false);
    },
    "aria-label": label,
    "aria-placeholder": placeholder,
    "aria-haspopup": false
  }), placeholder && (/*#__PURE__*/React__default.createElement("span", {
    key: `${id}-placeholder`,
    className: `${Search_styles.hostClass}-placeholder`
  }, placeholder))), /*#__PURE__*/React__default.createElement(IconLinkGroupWrapper.IconLinkGroupWrapper, {
    className: DomUtils.cleanupClassObject({
      [`${Search_styles.hostClass}-input-actions`]: true,
      [`${Search_styles.hostClass}-input-actions-clear`]: true
    }),
    direction: appearance === "hero" ? "hero-search" : "textfield",
    noMargin: true,
    as: "div"
  }, loading && (/*#__PURE__*/React__default.createElement(SpinnerPresentation.SpinnerPresentation, {
    loading: loading,
    size: 24,
    ariaLabel: "",
    id: `${id}-spinner`
  })), !disabled && clearIcon && value && (/*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
    id: `${id}-clear-button`,
    label: Localization.texts.lsg.component.InputTextfield.clear,
    key: "clear-icon",
    className: `${Search_styles.hostClass}-clear`,
    color: "secondary",
    hasTabIndex: false,
    icon: icons.interaction___close,
    onClick: e => {
      onChange("", name, e);
    }
  }))), /*#__PURE__*/React__default.createElement(IconLinkGroupWrapper.IconLinkGroupWrapper, {
    id: `${id}-additional-actions`,
    className: DomUtils.cleanupClassObject({
      [`${Search_styles.hostClass}-input-actions`]: true,
      [`${Search_styles.hostClass}-input-actions-additional`]: true
    }),
    direction: appearance === "hero" ? "hero-search" : "textfield",
    noMargin: true
  }, !disabled && additionalActions, !inlineSubmitHidden && (/*#__PURE__*/React__default.createElement(IconLink.IconLink, {
    id: `${id}-submit-button`,
    className: `${Search_styles.hostClass}-input-actions-clear`,
    label: "Suchen",
    icon: icons.interaction___send,
    appearance: "right",
    htmlAttrs: {
      type: "submit"
    },
    disabled: disabled
  }))))));
};

exports.SearchPresentation = SearchPresentation;
