'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var Host = require('../../../utils/Host.js');
var ActionPresentation = require('../../Action/shared/ActionPresentation.js');
var HeadlinePresentation = require('../../Headline/shared/HeadlinePresentation.js');
var Link_styles = require('../../Link/shared/Link.styles.js');
var PicturePresentation = require('../../Picture/shared/PicturePresentation.js');
var Teaser_styles = require('./Teaser.styles.js');

// @ts-strict-ignore
const TeaserPresentation = ({
  children,
  id,
  className,
  noMargin,
  headline,
  headlineSize = "h4",
  headlineAs,
  overline,
  overlineAs,
  subline,
  sublineAs,
  imgSrc,
  imgAlt,
  imageRatio = "16-9",
  actionRef,
  href,
  as = "li",
  onClick = undefined,
  htmlAttrs = {},
  actionAs,
  actionProps
}) => {
  const [hasKeyboardFocus, setHasKeyboardFocus] = React__default.useState(false);
  const [hasMouseHover, setHasMouseHover] = React__default.useState(false);
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    className: DomUtils.cleanupClassObject({
      [Teaser_styles.hostClass]: true,
      [className]: !!className,
      [`${prefix.lsgPre}no-margin`]: noMargin,
      [`${Teaser_styles.hostClass}__image-21-9`]: imageRatio === "21-9",
      [`${Teaser_styles.hostClass}__hover`]: hasMouseHover,
      [`${Link_styles.hostClass}__hover-area`]: hasMouseHover
    }),
    as: as
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${prefix.lsgPre}teaser-content-container`
  }, /*#__PURE__*/React__default.createElement(HeadlinePresentation.HeadlinePresentation, {
    size: headlineSize,
    as: headlineAs,
    overline: overline,
    overlineAs: overlineAs,
    subline: subline,
    sublineAs: sublineAs
  }, /*#__PURE__*/React__default.createElement(ActionPresentation.ActionPresentation, {
    id: id,
    actionAs: actionAs,
    nonInteractive: !onClick && !href,
    actionProps: actionProps,
    expandToOverlay: true,
    ref: actionRef,
    href: href,
    onClick: onClick,
    htmlAttrs: htmlAttrs,
    hasKeyboardFocus: hasKeyboardFocus,
    onKeyboardFocusChange: newFocus => setHasKeyboardFocus(newFocus),
    onMouseHoverChange: newHover => setHasMouseHover(newHover)
  }, headline)), children), /*#__PURE__*/React__default.createElement("div", {
    className: `${prefix.lsgPre}teaser-image-container`
  }, /*#__PURE__*/React__default.createElement(PicturePresentation.PicturePresentation, {
    src: imgSrc,
    alt: imgAlt,
    className: `${prefix.lsgPre}teaser-image`,
    yellowElevator: false
  })));
};
TeaserPresentation.displayName = "TeaserPresentation";

exports.TeaserPresentation = TeaserPresentation;
