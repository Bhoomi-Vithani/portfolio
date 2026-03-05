import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface ICardPreset {
    cardImage: any;
    title: string;
    masterCardFlag?: any;
    visaFlag?: any;
    isLightCard: boolean;
}
interface ICreditCardProps extends IBasicProps {
    /** You can choose the card design from BankingCard.Cards.[...] */
    cardPreset?: ICardPreset;
    /** Logo of the payment system ("mastercard" | "visa" | <custom image source>). You need to ensure, that the payment system is available for the selected card. */
    flag?: "mastercard" | "visa" | string;
    /** Alternative text for the flag image. Needs to be set in terms of a11y if a custom image is provided. */
    flagAlt?: string;
    /** Card number, for example "1234 45** **** 3456". Due to sensitivity of the field, numbers need to be anonymized with stars. */
    cardNumber: string;
    /** Name of the card owner */
    cardOwner: string;
    /** Company of the card owner */
    cardCompany: string;
    /** Card will be rotated by -10 degrees in tilted mode and receive a special shadow */
    tilted?: boolean;
    /** Disabled state will be desaturated and a little opaque */
    disabled?: boolean;
    /** Source of the card image. If not specified, is taken from the cardPreset */
    cardImgSrc?: string;
    /** The title is printed on top of the card and visualizes the card type such as "Credit", "Debit", etc.. If not specified, is taken from the cardPreset */
    title?: string;
    /** Whether the card is a light card with black text, or the other way around. If not specified, is taken from the cardPreset */
    isLightCard?: boolean;
    /** If set `true`, the card will be ignored in the accessibility tree. */
    ariaHidden?: boolean;
}
declare const CreditCard: {
    (props: ICreditCardProps): React.JSX.Element;
    displayName: string;
};
export { CreditCard, ICreditCardProps };
