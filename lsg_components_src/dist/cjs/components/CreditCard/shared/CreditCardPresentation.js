'use strict';

var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var index = require('../../../utils/Hooks/index.js');
var Host = require('../../../utils/Host.js');
var Localization = require('../../../utils/Localization.js');
var ResizeEvents = require('../../../utils/windowEvents/ResizeEvents.js');
var CreditCard_styles = require('./CreditCard.styles.js');
var CardShadow_png = require('./images/Card-Shadow.png.js');
var MasterCard_svg = require('./images/MasterCard.svg.js');
var VisaBlack_svg = require('./images/Visa-Black.svg.js');
var VisaWhite_svg = require('./images/Visa-White.svg.js');

// @ts-strict-ignore
const CreditCardPresentation = props => {
  const {
    id,
    className,
    noMargin,
    cardPreset,
    flag,
    cardNumber,
    cardOwner,
    cardCompany,
    tilted,
    disabled,
    cardImgSrc,
    ariaHidden = false
  } = props;
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
  const tilt = tilted ? "rotate(-10deg)" : "rotate(0deg)";
  const tiltModifier = props.tilted ? 0.9124 : 1;
  const imageSource = cardImgSrc || cardPreset?.cardImage;
  const isLightCard = props.isLightCard === undefined ? cardPreset?.isLightCard : props.isLightCard;
  let flagSrc = flag;
  switch (flag) {
    case "mastercard":
      flagSrc = DomUtils.formatSvgBase64Src(cardPreset?.masterCardFlag || MasterCard_svg);
      break;
    case "visa":
      flagSrc = DomUtils.formatSvgBase64Src(cardPreset?.visaFlag || (isLightCard ? VisaBlack_svg : VisaWhite_svg));
      break;
  }
  const flagAlt = props.flagAlt || Localization.texts.lsg.component.CreditCard.flags[flag];
  const title = props.title || cardPreset?.title;
  const descriptionId = index.useUniqueId(CreditCard_styles.hostClass);
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    id: id,
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [CreditCard_styles.hostClass]: true,
      [`${prefix.lsgPre}no-margin`]: noMargin,
      [`${CreditCard_styles.hostClass}__isDarkCard`]: !isLightCard,
      [`${CreditCard_styles.hostClass}__disabled`]: disabled
    }),
    ref: hostRef,
    role: "figure",
    "aria-hidden": ariaHidden,
    "aria-label": Localization.texts.lsg.component.CreditCard.label,
    "aria-describedby": descriptionId
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${CreditCard_styles.hostClass}-visually-hidden`,
    id: descriptionId
  }, Localization.texts.lsg.component.CreditCard.description), /*#__PURE__*/React__default.createElement("div", {
    style: {
      transform: tilted ? `translateY(${59 * resizeAmount}px) scale(${tiltModifier})` : "none",
      transformOrigin: "top left",
      height: `${192 * resizeAmount}px`
    }
  }, /*#__PURE__*/React__default.createElement("img", {
    src: imageSource,
    className: DomUtils.cleanupClassObject({
      [`${CreditCard_styles.hostClass}-image`]: true,
      [`${CreditCard_styles.hostClass}__shadow`]: !tilted
    }),
    style: {
      transform: `scale(${resizeAmount}) ${tilt}`,
      transformOrigin: "top left"
    },
    alt: ""
  }), /*#__PURE__*/React__default.createElement("div", {
    className: `${CreditCard_styles.hostClass}-content`,
    style: {
      transform: `scale(${resizeAmount}) ${tilt}`,
      transformOrigin: `top left`
    }
  }, title && (/*#__PURE__*/React__default.createElement("div", {
    className: `${CreditCard_styles.hostClass}-card-name-container`
  }, /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${CreditCard_styles.hostClass}-card-name-label`]: true,
      [`${CreditCard_styles.hostClass}-visually-hidden`]: true
    })
  }, Localization.texts.lsg.component.CreditCard.titleLabel), /*#__PURE__*/React__default.createElement("div", {
    className: `${CreditCard_styles.hostClass}-card-name`
  }, title))), cardNumber && (/*#__PURE__*/React__default.createElement("div", {
    className: `${CreditCard_styles.hostClass}-card-number-container`
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${CreditCard_styles.hostClass}-visually-hidden`
  }, Localization.texts.lsg.component.CreditCard.cardNumberAria), /*#__PURE__*/React__default.createElement("div", {
    className: `${CreditCard_styles.hostClass}-card-number-value`
  }, cardNumber))), /*#__PURE__*/React__default.createElement("div", {
    className: `${CreditCard_styles.hostClass}-bottom`
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${CreditCard_styles.hostClass}-owner-container`
  }, cardOwner && (/*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${CreditCard_styles.hostClass}-owner`]: true,
      [`${CreditCard_styles.hostClass}-owner__no-company`]: !cardCompany
    })
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${CreditCard_styles.hostClass}-visually-hidden`
  }, Localization.texts.lsg.component.CreditCard.cardOwner), cardOwner)), cardCompany && (/*#__PURE__*/React__default.createElement("div", {
    className: `${CreditCard_styles.hostClass}-company-container`
  }, /*#__PURE__*/React__default.createElement("div", {
    className: `${CreditCard_styles.hostClass}-visually-hidden`
  }, Localization.texts.lsg.component.CreditCard.cardCompany), /*#__PURE__*/React__default.createElement("div", {
    className: `${CreditCard_styles.hostClass}-company`
  }, cardCompany)))), flagSrc && (/*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${CreditCard_styles.hostClass}-visually-hidden`]: true
    })
  }, Localization.texts.lsg.component.CreditCard.flagLabel), /*#__PURE__*/React__default.createElement("img", {
    src: flagSrc,
    className: `${CreditCard_styles.hostClass}-type-flag`,
    alt: flagAlt
  })))))), tilted && (/*#__PURE__*/React__default.createElement("img", {
    className: `${CreditCard_styles.hostClass}__tilted-shadow`,
    style: {
      marginTop: `${41 * resizeAmount}px`,
      marginLeft: `-${20 * resizeAmount}px`
    },
    src: CardShadow_png,
    alt: ""
  })));
};
CreditCardPresentation.displayName = "CreditCardPresentation";

exports.CreditCardPresentation = CreditCardPresentation;
