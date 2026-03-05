'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var Host = require('../../../utils/Host.js');
var BadgePresentation = require('../../Badge/shared/BadgePresentation.js');
var HeadlinePresentation = require('../../Headline/shared/HeadlinePresentation.js');
var IconPresentation = require('../../Icon/shared/IconPresentation.js');
var ParagraphPresentation = require('../../Paragraph/shared/ParagraphPresentation.js');
var SpinnerPresentation = require('../../Spinner/shared/SpinnerPresentation.js');
var ThumbnailPresentation = require('../../Thumbnail/shared/ThumbnailPresentation.js');
var TwoLineItem_styles = require('./TwoLineItem.styles.js');

const TwoLineItemPresentation = props => {
  const {
    id: idProp,
    className,
    icon,
    iconName,
    iconVariant,
    text,
    src,
    label = "",
    subline,
    sublineAs,
    centeredLayout,
    badgeText,
    badgeIcon,
    badgeIconVariant,
    badgeColor = "primary",
    appearance,
    iconTitle,
    noMargin,
    sublineId: sublineIdProp,
    badgeId: badgeIdProp,
    labelAs = "strong",
    // TODO V20 : Decide if labelAs default value is needed
    // https://confluence.intranet.commerzbank.com/display/LSG/Release+20.0
    loading,
    loadingAriaLabel
  } = props;
  const hasThumb = !!text || !!iconName || !!icon || !!src;
  const hasSubline = !!subline;
  const id = index.useUniqueId(`${TwoLineItem_styles.hostClass}-`, idProp);
  const sublineId = index.useUniqueId(`${TwoLineItem_styles.hostClass}-subline-`, sublineIdProp);
  const badgeId = index.useUniqueId(`${TwoLineItem_styles.hostClass}-badge-`, badgeIdProp);
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    id: id,
    className: DomUtils.cleanupClassObject({
      [TwoLineItem_styles.hostClass]: true,
      [className]: !!className,
      [`${prefix.lsgPre}-centered-layout`]: centeredLayout,
      [`${prefix.lsgPre}no-margin`]: noMargin
    })
  }, hasThumb && (/*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${TwoLineItem_styles.hostClass}__thumbnail`]: true,
      [`${TwoLineItem_styles.hostClass}__loading`]: !!loading
    })
  }, /*#__PURE__*/React__default.createElement(ThumbnailPresentation.ThumbnailPresentation, {
    id: `${id}-thumbnail`,
    icon: icon,
    iconName: iconName,
    iconVariant: iconVariant,
    // A11y-Decision: Thumbnail always hidden bc it is decorative and described by headline text.
    // Exception: iconTitle is set, which will be read.
    htmlAttrs: {
      "aria-hidden": !iconTitle,
      role: "img"
    },
    iconTitle: iconTitle,
    text: text,
    src: src,
    noMargin: !centeredLayout
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${TwoLineItem_styles.hostClass}__loading`]: !!loading,
      [`${TwoLineItem_styles.hostClass}__text-container`]: true,
      [`${TwoLineItem_styles.hostClass}__text-container-thumb`]: hasThumb,
      [`${TwoLineItem_styles.hostClass}__no-text`]: appearance === "no-text"
    })
  }, /*#__PURE__*/React__default.createElement(HeadlinePresentation.HeadlinePresentation, {
    id: `${id}-headline`,
    as: labelAs,
    size: "h5",
    className: DomUtils.cleanupClassObject({
      [`${TwoLineItem_styles.hostClass}__label-text`]: true,
      [`${TwoLineItem_styles.hostClass}__label-text--centered`]: !hasSubline
    }),
    noMargin: true
  }, label), subline && (/*#__PURE__*/React__default.createElement(ParagraphPresentation.ParagraphPresentation, {
    as: sublineAs,
    id: sublineId,
    className: `${TwoLineItem_styles.hostClass}__helper-text`,
    size: "helper-text",
    noMargin: true
  }, subline))), (badgeText && badgeText?.trim() !== "" || badgeIcon) && (/*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${TwoLineItem_styles.hostClass}__loading`]: !!loading,
      [`${TwoLineItem_styles.hostClass}-badge-container`]: true,
      [`${TwoLineItem_styles.hostClass}-badge-container__centered`]: centeredLayout
    })
  }, /*#__PURE__*/React__default.createElement(BadgePresentation.BadgePresentation, {
    id: badgeId,
    color: badgeColor,
    size: "default"
  }, badgeIcon ? (/*#__PURE__*/React__default.createElement(IconPresentation.IconPresentation, {
    icon: badgeIcon,
    size: "xsmall",
    noMargin: true,
    variant: badgeIconVariant
  })) : badgeText))), loading && (/*#__PURE__*/React__default.createElement(SpinnerPresentation.SpinnerPresentation, {
    expandToOverlay: true,
    variant: "indeterminate",
    size: 24,
    ariaLabel: loadingAriaLabel,
    loading: loading
  })));
};
TwoLineItemPresentation.displayName = "TwoLineItemPresentation";

exports.TwoLineItemPresentation = TwoLineItemPresentation;
