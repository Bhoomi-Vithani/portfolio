import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IBankingCardProps extends IBasicProps {
    /** You can choose the card design from BankingCard.Cards.[...] */
    card?: "giro" | "giro_old" | "info" | "spar" | "flexi" | "einzahl";
    /** You can choose the card flag from BankingCard.Flags.[...] - <b> option maestro and none marked as deprecated </b> */
    flag?: "none" | "cirrus" | "maestro" | "mastercard" | "visa" | "girocard";
    /** Card number, example: 1234 / 56789 */
    cardNumber?: string;
    /** Expiration Date - should look like MM/YY */
    expirationDate?: string;
    /** Card owner - make sure it fits in one line, will be cut off with "..." if not */
    cardOwner?: string;
    /** Card owner information line 2 (optional) - will be cut off analogue to owner line */
    cardOwnerLine2?: string;
    /** Card will be rotated by -10 degrees in tilted mode and receive a special shadow */
    tilted?: boolean;
    /** Will remove the NFC Icon when enabled */
    noNFC?: boolean;
    /** Disabled state will be desaturated and a little opaque */
    disabled?: boolean;
    /** If set `true`, the card will be ignored in the accessibility tree. */
    ariaHidden?: boolean;
    /** @Deprecated no effect */
    cardTitle?: string;
}
declare const BankingCard: {
    ({ flag, ...props }: IBankingCardProps): React.JSX.Element;
    displayName: string;
};
export { BankingCard, IBankingCardProps };
