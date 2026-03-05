'use strict';

var icons = require('@lsg/icons');
var React__default = require('react');
var FocusLock = require('react-focus-lock');
var DomUtils = require('../../utils/DomUtils.js');
var ActionPresentation = require('../Action/shared/ActionPresentation.js');
var BadgePresentation = require('../Badge/shared/BadgePresentation.js');
var HeadlinePresentation = require('../Headline/shared/HeadlinePresentation.js');
var IconPresentation = require('../Icon/shared/IconPresentation.js');
var IconLinkGroupWrapper = require('../IconLinkGroup/shared/IconLinkGroupWrapper.js');
var IllustrationPresentation = require('../_Illustration/IllustrationPresentation.js');
var MessageContainer_styles = require('./MessageContainer.styles.js');

// @ts-strict-ignore
const MessageContainerPresentation = ({
  headline,
  headlineId,
  headlineSize,
  headlineAs,
  overline,
  subline,
  sublineAs,
  badgeIcon,
  illustration,
  illustrationAltText,
  badgeText,
  showLargeIconBadge,
  badgeColor,
  content,
  contentId,
  children,
  isCollapsible,
  hostRef,
  detailsRef,
  badgeIconVariant,
  isOpen,
  handleClick,
  iconLinkGroupRef,
  className,
  contentRole,
  ariaLabel,
  contentRef,
  containerDisplay = "flex"
}) => {
  // todo: @vh refactor this whole code block for message visual
  // check if more then one visual was defined
  const multipleVisuals = !!(badgeIcon !== undefined && illustration !== undefined || badgeIcon !== undefined && badgeText !== undefined || illustration !== undefined && badgeText !== undefined);
  // TODO: move to wrapper
  const [hasKeyboardFocus, setHasKeyboardFocus] = React__default.useState(false);
  // check if no visual was set
  const noVisual = badgeIcon === undefined && illustration === undefined;
  // set visual
  const visual = multipleVisuals ? (/*#__PURE__*/React__default.createElement("code", null, "Warning: Multiple visuals defined")) : (/*#__PURE__*/React__default.createElement(React__default.Fragment, null, badgeIcon && (/*#__PURE__*/React__default.createElement(BadgePresentation.BadgePresentation, {
    color: badgeColor || "supplementary",
    size: showLargeIconBadge ? "icon-large" : "default"
  }, /*#__PURE__*/React__default.createElement(IconPresentation.IconPresentation, {
    icon: badgeIcon,
    size: showLargeIconBadge ? "small" : "xsmall",
    variant: badgeIconVariant || "solid",
    title: "" // will also set aria-hidden="true"
  }))), illustration && (/*#__PURE__*/React__default.createElement(IllustrationPresentation.IllustrationPresentation, {
    src: illustration,
    alt: illustrationAltText,
    size: "small",
    noMargin: true,
    ariaHidden: !illustrationAltText
  }))));
  const AutoFocusText = contentRole === "dialog" ? FocusLock.AutoFocusInside : "div";
  return !isCollapsible ? (/*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${MessageContainer_styles.hostClass}`]: true,
      [`${MessageContainer_styles.hostClass}_flex`]: containerDisplay === "flex",
      [`${MessageContainer_styles.hostClass}__large-icon-badge`]: showLargeIconBadge,
      [`${MessageContainer_styles.hostClass}__illustration`]: illustration,
      [className]: true
    }),
    ref: hostRef
  }, illustration !== undefined && (
  /*#__PURE__*/
  // Place illustration outside the main div to enable vertical layout in mobile
  React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${MessageContainer_styles.hostClass}-visual`]: true
    })
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${MessageContainer_styles.hostClass}-visual-illustration-wrapper`
  }, visual))), /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${MessageContainer_styles.hostClass}-main`]: true,
      [`${MessageContainer_styles.hostClass}-main_flex`]: containerDisplay === "flex"
    }),
    role: contentRole === "dialog" ? contentRole : undefined,
    "aria-label": ariaLabel
  }, badgeIcon !== undefined && (/*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${MessageContainer_styles.hostClass}-visual`]: true
    })
  }, visual)), /*#__PURE__*/React__default.createElement(AutoFocusText, null, /*#__PURE__*/React__default.createElement("div", {
    className: `${MessageContainer_styles.hostClass}-content`,
    id: contentId,
    ref: contentRef,
    tabIndex: -1,
    // Set role to inner element so that changes are announced
    role: contentRole !== "dialog" ? contentRole : undefined,
    "aria-live": contentRole === "status" ? "polite" : undefined
  }, headline && (/*#__PURE__*/React__default.createElement(HeadlinePresentation.HeadlinePresentation, {
    id: headlineId,
    className: `${MessageContainer_styles.hostClass}-headline`,
    size: headlineSize,
    as: headlineAs,
    overline: overline,
    subline: subline,
    sublineAs: sublineAs,
    noMargin: true,
    badgeText: !multipleVisuals && badgeText,
    badgeColor: badgeColor
  }, headline)), content))), children && (
  /*#__PURE__*/
  // todo: should IconLinkGroup be part of the component or a child? (see ClickList component)
  React__default.createElement("div", {
    className: `${MessageContainer_styles.hostClass}-actions`,
    ref: iconLinkGroupRef
  }, /*#__PURE__*/React__default.createElement(IconLinkGroupWrapper.IconLinkGroupWrapper, {
    direction: "horizontal",
    horizontalAlignment: "right",
    noMargin: true
  }, children))))) : (/*#__PURE__*/React__default.createElement("details", {
    className: DomUtils.cleanupClassObject({
      [`${MessageContainer_styles.hostClass}`]: true,
      [`${MessageContainer_styles.hostClass}__collapsible`]: true,
      [`${MessageContainer_styles.hostClass}__text-badge`]: badgeText,
      [`${MessageContainer_styles.hostClass}__icon-badge`]: badgeIcon && !showLargeIconBadge,
      [`${MessageContainer_styles.hostClass}__large-icon-badge`]: showLargeIconBadge,
      [`${MessageContainer_styles.hostClass}__illustration`]: illustration,
      [className]: true
    }),
    ref: detailsRef,
    open: isOpen
  }, /*#__PURE__*/React__default.createElement(ActionPresentation.ActionPresentation, {
    actionAs: "summary",
    actionProps: {
      type: undefined
    },
    onClick: handleClick,
    hasKeyboardFocus: hasKeyboardFocus,
    onKeyboardFocusChange: setHasKeyboardFocus,
    "aria-label": ariaLabel,
    "aria-labelledby": !ariaLabel && headline ? headlineId : undefined,
    "aria-describedby": contentId
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${MessageContainer_styles.hostClass}-collapsible-header`,
    role: contentRole,
    "aria-live": contentRole === "status" ? "polite" : undefined,
    ref: contentRef,
    tabIndex: -1
  }, !noVisual && (/*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${MessageContainer_styles.hostClass}-visual`]: true,
      [`${MessageContainer_styles.hostClass}-visual__text-badge`]: badgeText,
      [`${MessageContainer_styles.hostClass}-visual__large-icon-badge`]: showLargeIconBadge,
      [`${MessageContainer_styles.hostClass}-visual__illustration`]: illustration
    })
  }, visual)), headline && (/*#__PURE__*/React__default.createElement("div", {
    className: `${MessageContainer_styles.hostClass}-headline-container`
  }, /*#__PURE__*/React__default.createElement(HeadlinePresentation.HeadlinePresentation, {
    className: `${MessageContainer_styles.hostClass}-headline`,
    size: "h5",
    as: headlineAs,
    overline: overline,
    subline: subline,
    noMargin: true,
    badgeText: badgeText,
    badgeColor: badgeColor
  }, headline))), /*#__PURE__*/React__default.createElement(IconPresentation.IconPresentation, {
    className: `${MessageContainer_styles.hostClass}-collapsible-header-chevron`,
    icon: icons.interaction_arrows_chevronDown,
    size: "small",
    noMargin: true
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: `${MessageContainer_styles.hostClass}-collapsible-content`
  }, /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${MessageContainer_styles.hostClass}-content`]: true,
      [`${MessageContainer_styles.hostClass}-spacing__icon-badge`]: badgeIcon,
      [`${MessageContainer_styles.hostClass}-spacing__large-icon-badge`]: showLargeIconBadge,
      [`${MessageContainer_styles.hostClass}-spacing__illustration`]: illustration
    }),
    id: contentId
  }, content), children && (
  /*#__PURE__*/
  // todo: should IconLinkGroup be part of the component or a child (analogue Cards)
  React__default.createElement("div", {
    className: `${MessageContainer_styles.hostClass}-actions`,
    ref: iconLinkGroupRef
  }, /*#__PURE__*/React__default.createElement(IconLinkGroupWrapper.IconLinkGroupWrapper, {
    horizontalAlignment: "right",
    direction: "horizontal",
    noMargin: true
  }, children))))));
};
MessageContainerPresentation.displayName = "MessageContainerPresentation";

exports.MessageContainerPresentation = MessageContainerPresentation;
