import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
interface ICardPreset {
    cardImage: any;
    title: string;
    masterCardFlag?: any;
    visaFlag?: any;
    isLightCard: boolean;
}
export interface ICreditCardSharedProps extends IBasicPropsInternal {
    cardPreset?: ICardPreset;
    title?: string;
    cardImgSrc?: string;
    isLightCard?: boolean;
    flag?: "mastercard" | "visa" | any;
    flagAlt?: string;
    cardNumber: string;
    cardOwner: string;
    cardCompany?: string;
    tilted?: boolean;
    disabled?: boolean;
    ariaHidden?: boolean;
}
export interface ICreditCardPresentationProps extends ICreditCardSharedProps {
}
export declare const CreditCardPresentation: {
    (props: ICreditCardPresentationProps): React.JSX.Element;
    displayName: string;
};
export {};
