'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var Localization = require('../../../utils/Localization.js');
var IconLinkGroupWrapper = require('../../IconLinkGroup/shared/IconLinkGroupWrapper.js');
var TwoLineItemPresentation = require('../../TwoLineItem/shared/TwoLineItemPresentation.js');
var TextHighlight_styles = require('./TextHighlight.styles.js');

const TextHighlightPresentation = ({
  id,
  className,
  noMargin,
  headline,
  subline,
  isLongText,
  noQuotes,
  text,
  thumbIcon,
  thumbIconName,
  thumbIconVariant,
  thumbIconTitle,
  thumbText,
  thumbImgSrc,
  iconLinks,
  centeredLayout,
  manualHyphenation
}) => {
  const hasInformation = !!thumbText || !!thumbIconName || !!thumbImgSrc || !!headline;
  const openingQuote = Localization.formats.quotationMarkOpening;
  const closingQuote = Localization.formats.quotationMarkClosing;
  const displayedText = !noQuotes ? `${openingQuote}${text}${closingQuote}` : text;
  return /*#__PURE__*/React__default.createElement("figure", {
    id: id,
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [TextHighlight_styles.hostClass]: true,
      [`${prefix.lsgPre}no-margin`]: noMargin,
      [`${prefix.lsgPre}-centered-layout`]: centeredLayout
    })
  }, /*#__PURE__*/React__default.createElement("blockquote", {
    className: DomUtils.cleanupClassObject({
      [`${TextHighlight_styles.hostClass}-quote`]: true,
      [`${TextHighlight_styles.hostClass}-quote__long-text`]: isLongText,
      [`${TextHighlight_styles.hostClass}-quote__long-text____hyphens-manual`]: manualHyphenation
    })
  }, displayedText), /*#__PURE__*/React__default.createElement("figcaption", {
    className: `${TextHighlight_styles.hostClass}-footer`
  }, hasInformation && (/*#__PURE__*/React__default.createElement(TwoLineItemPresentation.TwoLineItemPresentation, {
    noMargin: true,
    src: thumbImgSrc,
    text: thumbText,
    icon: thumbIcon,
    iconName: thumbIconName,
    iconVariant: thumbIconVariant,
    iconTitle: thumbIconTitle,
    label: headline,
    subline: subline,
    centeredLayout: centeredLayout
  })), iconLinks && (/*#__PURE__*/React__default.createElement(IconLinkGroupWrapper.IconLinkGroupWrapper, {
    direction: "table",
    noMargin: true
  }, iconLinks))));
};
TextHighlightPresentation.displayName = "TextHighlightPresentation";

exports.TextHighlightPresentation = TextHighlightPresentation;
