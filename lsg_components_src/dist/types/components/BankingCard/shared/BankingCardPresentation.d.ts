import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IBankingCardSharedProps extends IBasicPropsInternal {
    card?: "giro" | "giro_old" | "info" | "spar" | "flexi" | "einzahl";
    cardImgSrc?: string;
    isLightCard?: boolean;
    flag?: "cirrus" | "maestro" | "mastercard" | "visa" | "girocard";
    cardNumber?: string;
    expirationDate?: string;
    cardOwner?: string;
    cardOwnerLine2?: string;
    tilted?: boolean;
    noNFC?: boolean;
    disabled?: boolean;
    ariaHidden?: boolean;
}
export interface IBankingCardPresentationProps extends IBankingCardSharedProps {
}
export declare const BankingCardPresentation: {
    ({ id, className, noMargin, card, flag, cardNumber, expirationDate, cardOwner, cardOwnerLine2, tilted, disabled, noNFC, cardImgSrc, ariaHidden, isLightCard: isLightCardProp, }: IBankingCardPresentationProps): React.JSX.Element;
    displayName: string;
};
