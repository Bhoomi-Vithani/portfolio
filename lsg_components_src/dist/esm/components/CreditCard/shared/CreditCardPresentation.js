import React__default, { useState, useRef, useEffect } from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { formatSvgBase64Src, cleanupClassObject } from '../../../utils/DomUtils.js';
import { useUniqueId } from '../../../utils/Hooks/index.js';
import { Host } from '../../../utils/Host.js';
import { texts } from '../../../utils/Localization.js';
import { addResizeCallback, removeResizeCallback } from '../../../utils/windowEvents/ResizeEvents.js';
import { hostClass } from './CreditCard.styles.js';
import CardShadowPng from './images/Card-Shadow.png.js';
import MasterCardSvg from './images/MasterCard.svg.js';
import VisaBlackSvg from './images/Visa-Black.svg.js';
import VisaWhiteSvg from './images/Visa-White.svg.js';

// @ts-strict-ignore
const CreditCardPresentation = (props) => {
    const { id, className, noMargin, cardPreset, flag, cardNumber, cardOwner, cardCompany, tilted, disabled, cardImgSrc, ariaHidden = false, } = props;
    const [resizeAmount, setResizeAmount] = useState(1);
    const hostRef = useRef(null);
    const maxWidth = 77 * 4;
    const onResize = () => {
        if (hostRef.current) {
            setResizeAmount(Math.min(1, hostRef.current.offsetWidth / maxWidth));
        }
    };
    useEffect(() => {
        addResizeCallback(onResize);
        return () => removeResizeCallback(onResize);
    }, []);
    const tilt = tilted ? "rotate(-10deg)" : "rotate(0deg)";
    const tiltModifier = props.tilted ? 0.9124 : 1;
    const imageSource = cardImgSrc || cardPreset?.cardImage;
    const isLightCard = props.isLightCard === undefined ? cardPreset?.isLightCard : props.isLightCard;
    let flagSrc = flag;
    switch (flag) {
        case "mastercard":
            flagSrc = formatSvgBase64Src(cardPreset?.masterCardFlag || MasterCardSvg);
            break;
        case "visa":
            flagSrc = formatSvgBase64Src(cardPreset?.visaFlag || (isLightCard ? VisaBlackSvg : VisaWhiteSvg));
            break;
    }
    const flagAlt = props.flagAlt || texts.lsg.component.CreditCard.flags[flag];
    const title = props.title || cardPreset?.title;
    const descriptionId = useUniqueId(hostClass);
    return (React__default.createElement(Host, { id: id, className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
            [`${lsgPre}no-margin`]: noMargin,
            [`${hostClass}__isDarkCard`]: !isLightCard,
            [`${hostClass}__disabled`]: disabled,
        }), ref: hostRef, role: "figure", "aria-hidden": ariaHidden, "aria-label": texts.lsg.component.CreditCard.label, "aria-describedby": descriptionId },
        React__default.createElement("div", { className: `${hostClass}-visually-hidden`, id: descriptionId }, texts.lsg.component.CreditCard.description),
        React__default.createElement("div", { style: {
                transform: tilted ? `translateY(${59 * resizeAmount}px) scale(${tiltModifier})` : "none",
                transformOrigin: "top left",
                height: `${192 * resizeAmount}px`,
            } },
            React__default.createElement("img", { src: imageSource, className: cleanupClassObject({
                    [`${hostClass}-image`]: true,
                    [`${hostClass}__shadow`]: !tilted,
                }), style: {
                    transform: `scale(${resizeAmount}) ${tilt}`,
                    transformOrigin: "top left",
                }, alt: "" }),
            React__default.createElement("div", { className: `${hostClass}-content`, style: {
                    transform: `scale(${resizeAmount}) ${tilt}`,
                    transformOrigin: `top left`,
                } },
                title && (React__default.createElement("div", { className: `${hostClass}-card-name-container` },
                    React__default.createElement("div", { className: cleanupClassObject({
                            [`${hostClass}-card-name-label`]: true,
                            [`${hostClass}-visually-hidden`]: true,
                        }) }, texts.lsg.component.CreditCard.titleLabel),
                    React__default.createElement("div", { className: `${hostClass}-card-name` }, title))),
                cardNumber && (React__default.createElement("div", { className: `${hostClass}-card-number-container` },
                    React__default.createElement("div", { className: `${hostClass}-visually-hidden` }, texts.lsg.component.CreditCard.cardNumberAria),
                    React__default.createElement("div", { className: `${hostClass}-card-number-value` }, cardNumber))),
                React__default.createElement("div", { className: `${hostClass}-bottom` },
                    React__default.createElement("div", { className: `${hostClass}-owner-container` },
                        cardOwner && (React__default.createElement("div", { className: cleanupClassObject({
                                [`${hostClass}-owner`]: true,
                                [`${hostClass}-owner__no-company`]: !cardCompany,
                            }) },
                            React__default.createElement("div", { className: `${hostClass}-visually-hidden` }, texts.lsg.component.CreditCard.cardOwner),
                            cardOwner)),
                        cardCompany && (React__default.createElement("div", { className: `${hostClass}-company-container` },
                            React__default.createElement("div", { className: `${hostClass}-visually-hidden` }, texts.lsg.component.CreditCard.cardCompany),
                            React__default.createElement("div", { className: `${hostClass}-company` }, cardCompany)))),
                    flagSrc && (React__default.createElement(React__default.Fragment, null,
                        React__default.createElement("div", { className: cleanupClassObject({
                                [`${hostClass}-visually-hidden`]: true,
                            }) }, texts.lsg.component.CreditCard.flagLabel),
                        React__default.createElement("img", { src: flagSrc, className: `${hostClass}-type-flag`, alt: flagAlt })))))),
        tilted && (React__default.createElement("img", { className: `${hostClass}__tilted-shadow`, style: {
                marginTop: `${41 * resizeAmount}px`,
                marginLeft: `-${20 * resizeAmount}px`,
            }, src: CardShadowPng, alt: "" }))));
};
CreditCardPresentation.displayName = "CreditCardPresentation";

export { CreditCardPresentation };
