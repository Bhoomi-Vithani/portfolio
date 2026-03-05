'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var BadgePresentation = require('../../Badge/shared/BadgePresentation.js');
var IconPresentation = require('../../Icon/shared/IconPresentation.js');
var IconLinkGroupWrapper = require('../../IconLinkGroup/shared/IconLinkGroupWrapper.js');
var Headline_styles = require('./Headline.styles.js');

const HeadlinePresentation = ({
  as,
  children,
  className,
  id: idProp,
  noMargin,
  overline,
  overlineAs,
  subline,
  sublineAs,
  balanced,
  lineLength,
  size = "h1",
  centeredLayout,
  horizontalAlignment,
  htmlAttrs,
  actions,
  manualHyphenation,
  badgeText,
  badgeIcon,
  badgeIconVariant,
  badgeColor = "primary",
  badgePosition = "overline"
}) => {
  const HeadlineComponent = as || size;
  const OverlineComponent = overlineAs || "span";
  const SublineComponent = sublineAs || "p";
  const id = index.useUniqueId(`${Headline_styles.hostClass}-`, idProp);
  const align = centeredLayout ? "center" : horizontalAlignment;
  const overlineBadge = badgePosition === "overline" && (badgeText && badgeText.trim() !== "" || badgeIcon);
  const sublineBadge = badgePosition === "subline" && (badgeText && badgeText.trim() !== "" || badgeIcon);
  const overlineRequired = overline || overlineBadge;
  const sublineRequired = subline || sublineBadge;
  // eslint-disable-next-line no-nested-ternary
  const isBalanced = balanced === true ? "balanced" : balanced === false ? "unbalanced" : undefined;
  const overlineSize = {
    h1: "xlarge",
    h2: "large",
    h3: "medium",
    h4: "small",
    h5: "small",
    h6: "small"
  }[size] || "small";
  // Convert headline sizes of Overline and Headline to integer to be able to compare them.
  // The goal is to know if overline or headline should render first for seo & a11y reasons.
  // Returns 1-6 for h1-h6 or 10 for "span", "div", "p" and undefined.
  const headlineAsInt = ["span", "div", "p", undefined].includes(as) ? 10 : parseInt(as?.replace(/\D/g, ""), 10);
  const overlineAsInt = ["span", "div", "p", undefined].includes(overlineAs) ? 10 : parseInt(overlineAs?.replace(/\D/g, ""), 10);
  // overlineFirst means, the overline is the sibling before the headline, not the first child (part) of the headline.
  // If the overline has a smaller number than the headline, the overline gets a part of the headline.
  const overlineFirst = as ? overlineAsInt <= headlineAsInt : overlineAsInt <= parseInt(size?.replace(/\D/g, ""), 10);
  const overlineComponent =
  /*#__PURE__*/
  // @ts-ignore
  React__default.createElement(OverlineComponent, {
    className: DomUtils.cleanupClassObject({
      [`${prefix.lsgPre}overline`]: true,
      [`${prefix.lsgPre}overline-${overlineSize}`]: true,
      [`${prefix.lsgPre}overline__hyphens-manual`]: manualHyphenation,
      [`${prefix.lsgPre}overline-container`]: true,
      [`${prefix.lsgPre}overline-container__align-${align}`]: align,
      [`${prefix.lsgPre}headline__line-length__${lineLength}`]: lineLength
    })
  }, /*#__PURE__*/React__default.createElement("span", null, overline), overlineBadge && (/*#__PURE__*/React__default.createElement(BadgePresentation.BadgePresentation, {
    color: badgeColor,
    size: "default",
    margin: overline && align !== "center" ? "left" : undefined,
    inline: true
  }, badgeText || badgeIcon && (/*#__PURE__*/React__default.createElement(IconPresentation.IconPresentation, {
    icon: badgeIcon,
    size: "xsmall",
    noMargin: true,
    variant: badgeIconVariant
  })))));
  const headlineGroup = /*#__PURE__*/React__default.createElement(React__default.Fragment, null, overlineFirst && overlineComponent, /*#__PURE__*/React__default.createElement(HeadlineComponent, {
    className: DomUtils.cleanupClassObject({
      [`${prefix.lsgPre}${size}`]: true,
      [className]: !!className,
      [`${prefix.lsgPre}no-margin`]: noMargin,
      [`${prefix.lsgPre}headline__align-${align}`]: align,
      [`${prefix.lsgPre}headline__${isBalanced}`]: isBalanced,
      [`${prefix.lsgPre}headline__line-length__${lineLength}`]: lineLength,
      [`${prefix.lsgPre}headline__hyphens-manual`]: manualHyphenation
    }),
    id: id,
    ...htmlAttrs
  }, overlineRequired && !overlineFirst && (/*#__PURE__*/React__default.createElement(React__default.Fragment, null, overlineComponent, /*#__PURE__*/React__default.createElement("span", {
    className: `${prefix.lsgPre}overline-comma`
  }, ", "))), children), sublineRequired && (
  /*#__PURE__*/
  // @ts-ignore
  React__default.createElement(SublineComponent, {
    className: DomUtils.cleanupClassObject({
      [`${prefix.lsgPre}subline`]: true,
      [`${prefix.lsgPre}subline__hyphens-manual`]: manualHyphenation,
      [`${prefix.lsgPre}subline-container`]: true,
      [`${prefix.lsgPre}subline-container__align-${align}`]: align,
      [`${prefix.lsgPre}headline__line-length__${lineLength}`]: lineLength
    })
  }, /*#__PURE__*/React__default.createElement("span", null, subline), sublineBadge && (/*#__PURE__*/React__default.createElement(BadgePresentation.BadgePresentation, {
    color: badgeColor,
    size: "default",
    margin: subline && align !== "center" ? "left" : undefined,
    inline: true
  }, badgeText || badgeIcon && (/*#__PURE__*/React__default.createElement(IconPresentation.IconPresentation, {
    icon: badgeIcon,
    size: "xsmall",
    noMargin: true,
    variant: badgeIconVariant
  })))))));
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, actions && (/*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${prefix.lsgPre}headline-action-group`]: true,
      [`${prefix.lsgPre}${size}-action-group`]: true,
      [`${prefix.lsgPre}headline-overline-action-group`]: overline
    })
  }, /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${prefix.lsgPre}action-group-headline-area`]: true
    })
  }, headlineGroup), /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${prefix.lsgPre}action-group-action-area`]: true
    })
  }, /*#__PURE__*/React__default.createElement(IconLinkGroupWrapper.IconLinkGroupWrapper, {
    direction: "horizontal",
    className: DomUtils.cleanupClassObject({
      [`${prefix.lsgPre}no-margin`]: true,
      [`${prefix.lsgPre}headline__actions`]: true
    })
  }, actions)))), !actions && headlineGroup);
};
HeadlinePresentation.displayName = "HeadlinePresentation";

exports.HeadlinePresentation = HeadlinePresentation;
