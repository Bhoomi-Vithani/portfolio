'use strict';

var React__default = require('react');
var prefix = require('../../config/prefix.js');
var DomUtils = require('../../utils/DomUtils.js');
var ThemePresentation = require('../Theme/shared/ThemePresentation.js');
var IndicatorWrapper = require('../_Indicator/shared/IndicatorWrapper.js');
var HeaderContainer_styles = require('./HeaderContainer.styles.js');

// @ts-strict-ignore
const Nav = props => {
  const Element = props.label ? "nav" : "div";
  const {
    label,
    children,
    elRef,
    ...otherProps
  } = props;
  return /*#__PURE__*/React__default.createElement(Element, {
    ...(label && {
      "aria-label": label
    }),
    ref: elRef,
    ...otherProps
  }, children);
};
const HeaderContainerPresentation = ({
  noMargin,
  className,
  logo,
  topLeft,
  topRight,
  topRightAriaLabel,
  bottomLeft,
  bottomLeftAriaLabel,
  bottomRight,
  bottomRightAriaLabel,
  activeElement,
  isMobile,
  isFullUnderline,
  hasOpenFlyout,
  progress,
  width = "page",
  topLeftMaxWidth,
  position,
  isHidden,
  scrollPosition,
  theme,
  onClick,
  segmentLabel,
  mainContainerRightTopRef,
  mainContainerRightBottomRef,
  noSemanticElements
}) => {
  const height = isMobile && 16 || !bottomLeft && !bottomRight && 22 || 32;
  const Header = noSemanticElements ? "div" : "header";
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, position === "fixed" && (/*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${HeaderContainer_styles.mainClass}__sticky-${height}`]: true
    })
  })), /*#__PURE__*/React__default.createElement(Header, {
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [HeaderContainer_styles.mainClass]: true,
      [`${HeaderContainer_styles.mainClass}__double-line`]: bottomLeft || bottomRight,
      [`${HeaderContainer_styles.mainClass}__mobile`]: isMobile,
      [`${HeaderContainer_styles.mainClass}__${width}`]: true,
      [`${HeaderContainer_styles.mainClass}__height-${height}`]: true,
      [`${HeaderContainer_styles.mainClass}__sticky-${position}`]: position,
      // TODO: Check if obsolete when `position: sticky`
      [`${HeaderContainer_styles.mainClass}__hide`]: isHidden,
      [`${HeaderContainer_styles.mainClass}__flyout`]: hasOpenFlyout,
      [`${prefix.lsgPre}no-margin`]: noMargin,
      [`${HeaderContainer_styles.mainClass}__bg`]: !theme,
      [ThemePresentation.getThemeClass(theme, "header")]: theme
    }),
    style: {
      top: scrollPosition ? -scrollPosition : undefined
    },
    onClick: onClick,
    ...(!noSemanticElements && {
      role: "banner"
    })
  }, /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${HeaderContainer_styles.mainClass}-wrapper`]: true,
      [`${HeaderContainer_styles.mainClass}-wrapper__flyout`]: hasOpenFlyout
    })
  }, logo && (/*#__PURE__*/React__default.createElement("div", {
    className: `${HeaderContainer_styles.mainClass}-logo`,
    style: !isMobile ? {
      transform: `translateY(${scrollPosition * 5 / 8}px) scale(${1.0 - scrollPosition / 130})`
    } : {}
  }, logo)), /*#__PURE__*/React__default.createElement("div", {
    className: `${HeaderContainer_styles.mainClass}-main`
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${HeaderContainer_styles.mainClass}-row`
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${HeaderContainer_styles.mainClass}-group ${HeaderContainer_styles.mainClass}-group-left`,
    style: topLeftMaxWidth && {
      maxWidth: topLeftMaxWidth
    }
  }, !isMobile && segmentLabel && (/*#__PURE__*/React__default.createElement("p", {
    className: `${HeaderContainer_styles.mainClass}-segment-label`
  }, segmentLabel)), topLeft), /*#__PURE__*/React__default.createElement(Nav, {
    className: `${HeaderContainer_styles.mainClass}-group ${HeaderContainer_styles.mainClass}-group-right`,
    elRef: mainContainerRightTopRef,
    label: topRightAriaLabel
  }, topRight)), (bottomLeft || bottomRight) && (/*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${HeaderContainer_styles.mainClass}-row`]: true,
      [`${HeaderContainer_styles.mainClass}-row__logo`]: true
    })
  }, /*#__PURE__*/React__default.createElement(Nav, {
    className: `${HeaderContainer_styles.mainClass}-group ${HeaderContainer_styles.mainClass}-group-left`,
    label: bottomLeftAriaLabel
  }, bottomLeft), /*#__PURE__*/React__default.createElement(Nav, {
    className: `${HeaderContainer_styles.mainClass}-group ${HeaderContainer_styles.mainClass}-group-right`,
    elRef: mainContainerRightBottomRef,
    label: bottomRightAriaLabel
  }, bottomRight))))), (activeElement || isFullUnderline || progress !== undefined) && (/*#__PURE__*/React__default.createElement(IndicatorWrapper.IndicatorWrapper, {
    activeElement: activeElement,
    isFullUnderline: isFullUnderline,
    progress: progress
  }))));
};
HeaderContainerPresentation.displayName = "HeaderContainerPresentation";

exports.HeaderContainerPresentation = HeaderContainerPresentation;
