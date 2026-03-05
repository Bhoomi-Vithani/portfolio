'use strict';

var React__default = require('react');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var Host = require('../../../utils/Host.js');
var Localization = require('../../../utils/Localization.js');
var Icon_styles = require('./Icon.styles.js');

// Hack as a workaround for react bug: https://github.com/facebook/react/issues/31660
const MemoDiv = /*#__PURE__*/React__default.memo(({
  __html,
  ...props
}) => /*#__PURE__*/React__default.createElement("div", {
  ...props,
  dangerouslySetInnerHTML: {
    __html
  }
}));
const IconPresentation = ({
  icon,
  transform,
  name,
  id,
  size = "small",
  variant = "outline",
  color = "default",
  hover,
  svgAttrs = {},
  title,
  inline,
  className,
  noMargin,
  badge,
  horizontalAlignment
}) => {
  // Give the icon a uniqueId if id prop not set else title id will be undefined
  const iconId = index.useUniqueId(`${Icon_styles.hostClass}-`, id);
  // Use the default icon description as title if title prop not set.
  /** The Icon title is either the title (empty strings are allowed) or a fallback title */
  const iconTitle = title ?? (icon?.name && Localization.texts.lsg.icon[icon.name]) ?? (name && Localization.texts.lsg.icon[name]) ?? Localization.texts.lsg.icon._default;
  const iconFunction = icon || typeof window !== "undefined" && "lsgIcons" in window && window.lsgIcons?.[name];
  const isSizeXSAvailable = icon?.name === "symbols___info" || icon?.name === "symbols___exclamationmark" || icon?.name === "object___lock" || icon?.name === "object___lightbulb" || icon?.name === "interaction___close" || icon?.name === "interaction___checkmark" || icon?.name === "interaction___dashShort";
  const sizeNumeric = {
    "legacy-reduced": 18,
    xsmall: 12,
    small: 24,
    medium: 48,
    large: 96
    // eslint-disable-next-line no-nested-ternary
  }[size === "xsmall" ? isSizeXSAvailable ? "xsmall" : "small" : size];
  const sizeIconFile = {
    "legacy-reduced": 24,
    xsmall: 12,
    small: 24,
    medium: 48,
    large: 96
    // eslint-disable-next-line no-nested-ternary
  }[size === "xsmall" ? isSizeXSAvailable ? "xsmall" : "small" : size];
  // Add aria-hidden: "true" if no title is set (can be overwritten by svgAttrs, like done by IconLink).
  const ariaHidden = typeof iconTitle === "string" ? !iconTitle?.trim() : !iconTitle;
  // Set role: "img" only if a title is set, otherwise it will result in an a11y error.
  const role = !ariaHidden ? "img" : "";
  const iconString = iconFunction && iconFunction({
    id: iconId,
    svgAttrs: {
      fill: "currentColor",
      // use system color if forced https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors
      width: `${sizeNumeric}px`,
      height: `${sizeNumeric}px`,
      focusable: "false",
      role,
      "aria-hidden": ariaHidden,
      ...svgAttrs
    },
    title: iconTitle,
    size: sizeIconFile,
    variant
  });
  // Badge: show a smaller badge if there's no badgeText else show a larger badge if the badgeText contains a non-empty string.
  // Todo?: Abridge the text if the text is longer than 3 characters.
  // const badgeTextShortened = typeof badgeText === "string" ? badgeText.substr(0, 3) : undefined;
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [Icon_styles.hostClass]: true,
      [`${Icon_styles.hostClass}__align-${horizontalAlignment}`]: horizontalAlignment,
      [`${Icon_styles.hostClass}__margin-${size}`]: size && !noMargin && !inline,
      [`${Icon_styles.hostClass}__inline`]: inline,
      [`${Icon_styles.hostClass}__${size}`]: !!size
    }),
    "data-lsg-icon-name": name || icon?.name,
    "data-lsg-component": "icon"
  }, /*#__PURE__*/React__default.createElement(MemoDiv, {
    className: DomUtils.cleanupClassObject({
      [`${Icon_styles.hostClass}-inner`]: true,
      [`${Icon_styles.hostClass}__${color}`]: true,
      [`${Icon_styles.hostClass}__hover`]: hover,
      [`${Icon_styles.hostClass}__${transform}`]: !!transform
    }),
    __html: iconString || "<div></div>"
  }), badge && (/*#__PURE__*/React__default.createElement("div", {
    className: `${Icon_styles.hostClass}__badge`,
    "aria-hidden": !ariaHidden || !!svgAttrs["aria-label"] || undefined
  }, badge)));
};
IconPresentation.displayName = "IconPresentation";

exports.IconPresentation = IconPresentation;
