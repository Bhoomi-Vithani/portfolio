import { banking___contactless } from '@lsg/icons';
import React__default, { useState, useRef, useEffect } from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject, formatSvgBase64Src } from '../../../utils/DomUtils.js';
import { useUniqueId } from '../../../utils/Hooks/index.js';
import { Host } from '../../../utils/Host.js';
import { texts } from '../../../utils/Localization.js';
import { addResizeCallback, removeResizeCallback } from '../../../utils/windowEvents/ResizeEvents.js';
import { IconPresentation } from '../../Icon/shared/IconPresentation.js';
import { hostClass } from './BankingCard.styles.js';
import CardShadowPng from './images/Card-Shadow.png.js';
import CirrusBlackSvg from './images/Cirrus-Black.svg.js';
import CirrusWhiteSvg from './images/Cirrus-White.svg.js';
import FlexicardSvg from './images/Flexicard.svg.js';
import GirocardOldSvg from './images/Girocard-Old.svg.js';
import GirocardSymbolSvg from './images/Girocard-Symbol.svg.js';
import GirocardSvg from './images/Girocard.svg.js';
import InfocardSvg from './images/Infocard.svg.js';
import MaestroBlackSvg from './images/Maestro-Black.svg.js';
import MaestroWhiteSvg from './images/Maestro-White.svg.js';
import MasterCardBlackSvg from './images/MasterCard-Black.svg.js';
import MasterCardWhiteSvg from './images/MasterCard-White.svg.js';
import SparcardSvg from './images/Sparcard.svg.js';
import VisaBlackSvg from './images/Visa-Black.svg.js';
import VisaWhiteSvg from './images/Visa-White.svg.js';

// @ts-strict-ignore
const BankingCardPresentation = ({ id, className, noMargin, card = "giro", flag, cardNumber, expirationDate, cardOwner, cardOwnerLine2, tilted, disabled, noNFC = true, cardImgSrc, ariaHidden = false, isLightCard: isLightCardProp, }) => {
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
    const tilt = tilted ? `rotate(-10deg)` : `rotate(0deg)`;
    const tiltModifier = tilted ? 0.9124 : 1;
    const isLightCard = typeof isLightCardProp !== "undefined"
        ? isLightCardProp
        : ["giro_old", "flexi", "info", "spar", "einzahl"].includes(card);
    const imageSource = cardImgSrc ||
        (card === "giro" && GirocardSvg) ||
        (card === "giro" && GirocardSymbolSvg) ||
        (card === "giro_old" && GirocardOldSvg) ||
        (card === "flexi" && FlexicardSvg) ||
        (card === "info" && InfocardSvg) ||
        (card === "spar" && SparcardSvg) ||
        (card === "einzahl" && InfocardSvg);
    const flagSource = (flag === "cirrus" && (isLightCard ? CirrusBlackSvg : CirrusWhiteSvg)) ||
        (flag === "maestro" && (isLightCard ? MaestroBlackSvg : MaestroWhiteSvg)) ||
        (flag === "mastercard" && (isLightCard ? MasterCardBlackSvg : MasterCardWhiteSvg)) ||
        (flag === "visa" && (isLightCard ? VisaBlackSvg : VisaWhiteSvg)) ||
        (flag === "girocard" && GirocardSymbolSvg); // girocard with girocard-symbol hasn't a distinction in white or black
    const pictureFormat = flag === "girocard" ? "1-1" : "2-1"; // simulate svg format, which can be set as interface prop later
    const descriptionId = useUniqueId(hostClass);
    return (React__default.createElement(Host, { id: id, className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
            [`${lsgPre}no-margin`]: noMargin,
            [`${hostClass}__isDarkCard`]: !isLightCard,
            [`${hostClass}__disabled`]: disabled,
        }), ref: hostRef, role: "figure", "aria-hidden": ariaHidden, "aria-label": texts.lsg.component.BankingCard.label, "aria-describedby": descriptionId },
        React__default.createElement("div", { className: `${hostClass}-visually-hidden`, id: descriptionId }, texts.lsg.component.BankingCard.description),
        React__default.createElement("div", { style: {
                transform: tilted ? `translateY(${59 * resizeAmount}px) scale(${tiltModifier})` : "",
                transformOrigin: "top left",
            } },
            React__default.createElement("img", { src: formatSvgBase64Src(imageSource), className: cleanupClassObject({
                    [`${hostClass}-image`]: true,
                    [`${hostClass}__shadow`]: !tilted,
                }), style: {
                    transform: `${tilt}`,
                    transformOrigin: "top left",
                }, alt: "" }),
            React__default.createElement("div", { className: `${hostClass}-content`, style: {
                    transform: `scale(${resizeAmount}) ${tilt}`,
                    transformOrigin: `top left`,
                } },
                React__default.createElement("div", { className: `${hostClass}-card-name-container` },
                    React__default.createElement("div", { className: cleanupClassObject({
                            [`${hostClass}-card-name-label`]: true,
                            [`${hostClass}-visually-hidden`]: true,
                        }) }, texts.lsg.component.BankingCard.titleLabel),
                    React__default.createElement("div", { className: `${hostClass}-card-name` }, texts.lsg.component.BankingCard.titles[card])),
                React__default.createElement(IconPresentation, { className: `${hostClass}-contactless-icon`, icon: noNFC ? undefined : banking___contactless, noMargin: true, title: texts.lsg.component.BankingCard.NFC }),
                React__default.createElement("div", { className: `${hostClass}-details` },
                    cardNumber && (React__default.createElement("div", { className: `${hostClass}-card-number` },
                        React__default.createElement("div", { className: `${hostClass}-card-number-label` }, texts.lsg.component.BankingCard.cardNumberAria),
                        React__default.createElement("div", { className: `${hostClass}-card-number-value` }, cardNumber))),
                    expirationDate && (React__default.createElement("div", { className: `${hostClass}-expiration` },
                        React__default.createElement("div", { className: `${hostClass}-expiration-label` }, texts.lsg.component.BankingCard.validThru),
                        React__default.createElement("div", { className: `${hostClass}-expiration-value` }, expirationDate)))),
                React__default.createElement("div", { className: cleanupClassObject({
                        [`${hostClass}-bottom`]: true,
                        [`${hostClass}-bottom-twoline`]: flag === "girocard",
                        [`${hostClass}-bottom__right`]: !cardOwner,
                    }) },
                    cardOwnerLine2 && cardOwner && (React__default.createElement("div", { className: `${hostClass}-owner-twoline` },
                        React__default.createElement("div", { className: `${hostClass}-visually-hidden` }, texts.lsg.component.BankingCard.cardOwner),
                        React__default.createElement("div", null, cardOwner),
                        React__default.createElement("div", null, cardOwnerLine2))),
                    !cardOwnerLine2 && cardOwner && (React__default.createElement("div", { className: `${hostClass}-owner-container` },
                        React__default.createElement("div", { className: `${hostClass}-visually-hidden` }, texts.lsg.component.BankingCard.cardOwner),
                        React__default.createElement("div", { className: `${hostClass}-owner` }, cardOwner))),
                    flag && (React__default.createElement(React__default.Fragment, null,
                        React__default.createElement("div", { className: cleanupClassObject({
                                [`${hostClass}-type-flag-label`]: true,
                                [`${hostClass}-visually-hidden`]: true,
                            }) }, texts.lsg.component.BankingCard.flagLabel),
                        React__default.createElement("img", { src: formatSvgBase64Src(flagSource), className: `${hostClass}-type-flag-${pictureFormat}`, alt: texts.lsg.component.BankingCard.flags[flag] })))))),
        tilted && (React__default.createElement("img", { className: `${hostClass}__tilted-shadow`, style: {
                marginTop: `${41 * resizeAmount}px`,
                marginLeft: `-${24 * resizeAmount}px`,
            }, src: CardShadowPng, alt: "" }))));
};
BankingCardPresentation.displayName = "BankingCardPresentation";

export { BankingCardPresentation };
