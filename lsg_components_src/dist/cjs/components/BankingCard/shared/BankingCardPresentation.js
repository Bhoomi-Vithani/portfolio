'use strict';

var icons = require('@lsg/icons');
var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var Host = require('../../../utils/Host.js');
var Localization = require('../../../utils/Localization.js');
var ResizeEvents = require('../../../utils/windowEvents/ResizeEvents.js');
var IconPresentation = require('../../Icon/shared/IconPresentation.js');
var BankingCard_styles = require('./BankingCard.styles.js');
var CardShadow_png = require('./images/Card-Shadow.png.js');
var CirrusBlack_svg = require('./images/Cirrus-Black.svg.js');
var CirrusWhite_svg = require('./images/Cirrus-White.svg.js');
var Flexicard_svg = require('./images/Flexicard.svg.js');
var GirocardOld_svg = require('./images/Girocard-Old.svg.js');
var GirocardSymbol_svg = require('./images/Girocard-Symbol.svg.js');
var Girocard_svg = require('./images/Girocard.svg.js');
var Infocard_svg = require('./images/Infocard.svg.js');
var MaestroBlack_svg = require('./images/Maestro-Black.svg.js');
var MaestroWhite_svg = require('./images/Maestro-White.svg.js');
var MasterCardBlack_svg = require('./images/MasterCard-Black.svg.js');
var MasterCardWhite_svg = require('./images/MasterCard-White.svg.js');
var Sparcard_svg = require('./images/Sparcard.svg.js');
var VisaBlack_svg = require('./images/Visa-Black.svg.js');
var VisaWhite_svg = require('./images/Visa-White.svg.js');

// @ts-strict-ignore
const BankingCardPresentation = ({
  id,
  className,
  noMargin,
  card = "giro",
  flag,
  cardNumber,
  expirationDate,
  cardOwner,
  cardOwnerLine2,
  tilted,
  disabled,
  noNFC = true,
  cardImgSrc,
  ariaHidden = false,
  isLightCard: isLightCardProp
}) => {
  const [resizeAmount, setResizeAmount] = React__default.useState(1);
  const hostRef = React__default.useRef(null);
  const maxWidth = 77 * 4;
  const onResize = () => {
    if (hostRef.current) {
      setResizeAmount(Math.min(1, hostRef.current.offsetWidth / maxWidth));
    }
  };
  React__default.useEffect(() => {
    ResizeEvents.addResizeCallback(onResize);
    return () => ResizeEvents.removeResizeCallback(onResize);
  }, []);
  const tilt = tilted ? `rotate(-10deg)` : `rotate(0deg)`;
  const tiltModifier = tilted ? 0.9124 : 1;
  const isLightCard = typeof isLightCardProp !== "undefined" ? isLightCardProp : ["giro_old", "flexi", "info", "spar", "einzahl"].includes(card);
  const imageSource = cardImgSrc || card === "giro" && Girocard_svg || card === "giro" && GirocardSymbol_svg || card === "giro_old" && GirocardOld_svg || card === "flexi" && Flexicard_svg || card === "info" && Infocard_svg || card === "spar" && Sparcard_svg || card === "einzahl" && Infocard_svg;
  const flagSource = flag === "cirrus" && (isLightCard ? CirrusBlack_svg : CirrusWhite_svg) || flag === "maestro" && (isLightCard ? MaestroBlack_svg : MaestroWhite_svg) || flag === "mastercard" && (isLightCard ? MasterCardBlack_svg : MasterCardWhite_svg) || flag === "visa" && (isLightCard ? VisaBlack_svg : VisaWhite_svg) || flag === "girocard" && GirocardSymbol_svg; // girocard with girocard-symbol hasn't a distinction in white or black
  const pictureFormat = flag === "girocard" ? "1-1" : "2-1"; // simulate svg format, which can be set as interface prop later
  const descriptionId = index.useUniqueId(BankingCard_styles.hostClass);
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    id: id,
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [BankingCard_styles.hostClass]: true,
      [`${prefix.lsgPre}no-margin`]: noMargin,
      [`${BankingCard_styles.hostClass}__isDarkCard`]: !isLightCard,
      [`${BankingCard_styles.hostClass}__disabled`]: disabled
    }),
    ref: hostRef,
    role: "figure",
    "aria-hidden": ariaHidden,
    "aria-label": Localization.texts.lsg.component.BankingCard.label,
    "aria-describedby": descriptionId
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${BankingCard_styles.hostClass}-visually-hidden`,
    id: descriptionId
  }, Localization.texts.lsg.component.BankingCard.description), /*#__PURE__*/React__default.createElement("div", {
    style: {
      transform: tilted ? `translateY(${59 * resizeAmount}px) scale(${tiltModifier})` : "",
      transformOrigin: "top left"
    }
  }, /*#__PURE__*/React__default.createElement("img", {
    src: DomUtils.formatSvgBase64Src(imageSource),
    className: DomUtils.cleanupClassObject({
      [`${BankingCard_styles.hostClass}-image`]: true,
      [`${BankingCard_styles.hostClass}__shadow`]: !tilted
    }),
    style: {
      transform: `${tilt}`,
      transformOrigin: "top left"
    },
    alt: ""
  }), /*#__PURE__*/React__default.createElement("div", {
    className: `${BankingCard_styles.hostClass}-content`,
    style: {
      transform: `scale(${resizeAmount}) ${tilt}`,
      transformOrigin: `top left`
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${BankingCard_styles.hostClass}-card-name-container`
  }, /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${BankingCard_styles.hostClass}-card-name-label`]: true,
      [`${BankingCard_styles.hostClass}-visually-hidden`]: true
    })
  }, Localization.texts.lsg.component.BankingCard.titleLabel), /*#__PURE__*/React__default.createElement("div", {
    className: `${BankingCard_styles.hostClass}-card-name`
  }, Localization.texts.lsg.component.BankingCard.titles[card])), /*#__PURE__*/React__default.createElement(IconPresentation.IconPresentation, {
    className: `${BankingCard_styles.hostClass}-contactless-icon`,
    icon: noNFC ? undefined : icons.banking___contactless,
    noMargin: true,
    title: Localization.texts.lsg.component.BankingCard.NFC
  }), /*#__PURE__*/React__default.createElement("div", {
    className: `${BankingCard_styles.hostClass}-details`
  }, cardNumber && (/*#__PURE__*/React__default.createElement("div", {
    className: `${BankingCard_styles.hostClass}-card-number`
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${BankingCard_styles.hostClass}-card-number-label`
  }, Localization.texts.lsg.component.BankingCard.cardNumberAria), /*#__PURE__*/React__default.createElement("div", {
    className: `${BankingCard_styles.hostClass}-card-number-value`
  }, cardNumber))), expirationDate && (/*#__PURE__*/React__default.createElement("div", {
    className: `${BankingCard_styles.hostClass}-expiration`
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${BankingCard_styles.hostClass}-expiration-label`
  }, Localization.texts.lsg.component.BankingCard.validThru), /*#__PURE__*/React__default.createElement("div", {
    className: `${BankingCard_styles.hostClass}-expiration-value`
  }, expirationDate)))), /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${BankingCard_styles.hostClass}-bottom`]: true,
      [`${BankingCard_styles.hostClass}-bottom-twoline`]: flag === "girocard",
      [`${BankingCard_styles.hostClass}-bottom__right`]: !cardOwner
    })
  }, cardOwnerLine2 && cardOwner && (/*#__PURE__*/React__default.createElement("div", {
    className: `${BankingCard_styles.hostClass}-owner-twoline`
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${BankingCard_styles.hostClass}-visually-hidden`
  }, Localization.texts.lsg.component.BankingCard.cardOwner), /*#__PURE__*/React__default.createElement("div", null, cardOwner), /*#__PURE__*/React__default.createElement("div", null, cardOwnerLine2))), !cardOwnerLine2 && cardOwner && (/*#__PURE__*/React__default.createElement("div", {
    className: `${BankingCard_styles.hostClass}-owner-container`
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${BankingCard_styles.hostClass}-visually-hidden`
  }, Localization.texts.lsg.component.BankingCard.cardOwner), /*#__PURE__*/React__default.createElement("div", {
    className: `${BankingCard_styles.hostClass}-owner`
  }, cardOwner))), flag && (/*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${BankingCard_styles.hostClass}-type-flag-label`]: true,
      [`${BankingCard_styles.hostClass}-visually-hidden`]: true
    })
  }, Localization.texts.lsg.component.BankingCard.flagLabel), /*#__PURE__*/React__default.createElement("img", {
    src: DomUtils.formatSvgBase64Src(flagSource),
    className: `${BankingCard_styles.hostClass}-type-flag-${pictureFormat}`,
    alt: Localization.texts.lsg.component.BankingCard.flags[flag]
  })))))), tilted && (/*#__PURE__*/React__default.createElement("img", {
    className: `${BankingCard_styles.hostClass}__tilted-shadow`,
    style: {
      marginTop: `${41 * resizeAmount}px`,
      marginLeft: `-${24 * resizeAmount}px`
    },
    src: CardShadow_png,
    alt: ""
  })));
};
BankingCardPresentation.displayName = "BankingCardPresentation";

exports.BankingCardPresentation = BankingCardPresentation;
