'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var Host = require('../../../utils/Host.js');
var IconPresentation = require('../../Icon/shared/IconPresentation.js');
var ThemePresentation = require('../../Theme/shared/ThemePresentation.js');
var Thumbnail_styles = require('./Thumbnail.styles.js');

const ThumbnailPresentation = ({
  id: idProp,
  className,
  icon,
  iconName,
  iconVariant,
  iconTitle,
  text,
  src,
  imgAltText,
  htmlAttrs,
  noMargin,
  size = "regular",
  look = "clear"
}) => {
  let visual = null;
  const ariaHidden = htmlAttrs?.["aria-hidden"] ? "true" : false;
  const id = index.useUniqueId(`${Thumbnail_styles.hostClass}-`, idProp);
  if (!!iconName || !!icon) {
    if (!!text || !!src) {
      console.info("Multiple visuals defined for the thumbnail (please only specify the props for either text, icon or src).");
    } else {
      visual = /*#__PURE__*/React__default.createElement(IconPresentation.IconPresentation, {
        icon: icon,
        name: iconName,
        variant: iconVariant,
        size: "small",
        title: iconTitle,
        noMargin: true,
        svgAttrs: {
          "aria-hidden": ariaHidden
        }
      });
    }
  } else if (text) {
    if (src) {
      console.info("Multiple visuals defined for the thumbnail (please only specify the props for either text, icon or src).");
    } else {
      visual = /*#__PURE__*/React__default.createElement("div", {
        className: `${Thumbnail_styles.hostClass}__text`,
        "aria-label": text + (iconTitle ? `, ${iconTitle}` : ""),
        role: "img"
      }, text);
    }
  } else if (src) {
    visual = /*#__PURE__*/React__default.createElement("img", {
      "aria-hidden": htmlAttrs?.["aria-hidden"],
      className: `${Thumbnail_styles.hostClass}__img`,
      src: src,
      alt: imgAltText,
      title: iconTitle
    });
  } else {
    console.info("No visual defined for the thumbnail (please specify the props for either text, icon or src).");
  }
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    id: id,
    className: DomUtils.cleanupClassObject({
      [Thumbnail_styles.hostClass]: true,
      [className]: !!className,
      [`${prefix.lsgPre}no-margin`]: noMargin,
      [`${Thumbnail_styles.hostClass}__size-${size}`]: size,
      [`${Thumbnail_styles.hostClass}__thick-border`]: look === "thick-border",
      [`${Thumbnail_styles.hostClass}__no_border`]: look === "filled",
      // TODO: @as: Probably looks weird in dark theme. Should be implemented with color inversion rather
      //  than theming.
      [ThemePresentation.getThemeClass("dark")]: look === "filled"
    })
  }, visual);
};
ThumbnailPresentation.displayName = "ThumbnailPresentation";

exports.ThumbnailPresentation = ThumbnailPresentation;
