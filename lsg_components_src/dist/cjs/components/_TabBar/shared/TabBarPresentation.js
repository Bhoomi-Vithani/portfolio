'use strict';

var icons = require('@lsg/icons');
var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var Host = require('../../../utils/Host.js');
var Localization = require('../../../utils/Localization.js');
var IconLinkWrapper = require('../../IconLink/shared/IconLinkWrapper.js');
var IndicatorWrapper = require('../../_Indicator/shared/IndicatorWrapper.js');
var NavigationBarPresentation = require('../../_NavigationBar/NavigationBarPresentation.js');
var TabBar_styles = require('./TabBar.styles.js');

// @ts-strict-ignore
const Div = /*#__PURE__*/React__default.forwardRef((props, ref) => /*#__PURE__*/React__default.createElement("div", {
  ...props,
  ref: ref
}));
const TabBarPresentation = props => {
  const {
    id,
    className,
    noMargin,
    innerRef,
    showArrowLeft,
    showArrowRight,
    value,
    onClickArrowLeft,
    onClickArrowRight,
    centeredLayout,
    ariaLabel,
    ariaLabelledBy,
    onChange = () => {},
    ...restProps
  } = props;
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    id: id,
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [TabBar_styles.hostClass]: true,
      [`${prefix.lsgPre}no-margin`]: noMargin,
      [`${prefix.lsgPre}-centered-layout`]: centeredLayout
    }),
    role: "tablist",
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "data-lsg-component": "tab-bar"
  }, /*#__PURE__*/React__default.createElement(Div, {
    className: `${TabBar_styles.hostClass}-outer`
  }, /*#__PURE__*/React__default.createElement(Div, {
    className: `${TabBar_styles.hostClass}-inner`,
    ref: innerRef
  }, /*#__PURE__*/React__default.createElement(NavigationBarPresentation.NavigationBarPresentation, {
    size: "tab-bar",
    value: value,
    onChange: onChange,
    ...restProps
  }), /*#__PURE__*/React__default.createElement(IndicatorWrapper.IndicatorWrapper, {
    activeElement: props.activeElement
  }))), showArrowLeft && (/*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
    icon: icons.interaction_arrows_chevronLeft,
    onClick: onClickArrowLeft,
    noMargin: false,
    color: "primary",
    label: Localization.texts.lsg.component.TabBar.scrollLeft,
    appearance: "no-text",
    className: `${TabBar_styles.hostClass}-arrow-left`,
    htmlAttrs: {
      "aria-hidden": true
    },
    hasTabIndex: false
  })), showArrowRight && (/*#__PURE__*/React__default.createElement(IconLinkWrapper.IconLinkWrapper, {
    icon: icons.interaction_arrows_chevronRight,
    onClick: onClickArrowRight,
    color: "primary",
    label: Localization.texts.lsg.component.TabBar.scrollRight,
    appearance: "no-text",
    className: `${TabBar_styles.hostClass}-arrow-right`,
    htmlAttrs: {
      "aria-hidden": true
    },
    hasTabIndex: false
  })));
};
TabBarPresentation.displayName = "TabBarPresentation";

exports.TabBarPresentation = TabBarPresentation;
