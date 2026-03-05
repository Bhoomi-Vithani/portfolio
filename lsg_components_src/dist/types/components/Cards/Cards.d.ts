import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface ICardsProps extends IBasicProps {
    /**  Aligns the whole content to center, default is left */
    centeredLayout?: boolean;
    /** Number of items per row */
    itemsPerRow?: 2 | 3 | 4 | 6;
    /** Whether to render Cards container as an ordered, unordered list. Default is unordered list.
     * If you're using an Input Cards group like Cards.Radios, the property will be ignored and a fieldset will be
     * rendered. */
    as?: "ul" | "ol";
    /** Aria-describedby for a Cards group.
     * Helpful accessibility feature to connect the headline or description text with the Cards group. */
    ariaDescribedby?: string;
}
declare const Cards: {
    ({ itemsPerRow, as, ...props }: ICardsProps): React.JSX.Element;
    displayName: string;
    CustomItem: {
        ({ appearance, look, ...props }: import("../CardsCustomItem/CardsCustomItem").ICardsCustomItem): React.JSX.Element;
        displayName: string;
    };
    Checkboxes: {
        ({ itemsPerRow, ...props }: import("../CardsCheckboxes/CardsCheckboxes").ICardsCheckboxesProps): React.JSX.Element;
        displayName: string;
        CustomItem: {
            ({ ...props }: import("../CardsCheckboxesCustomItem/CardsCheckboxesCustomItem").ICardsCheckboxesCustomItem): React.JSX.Element;
            displayName: string;
        };
    };
    Radios: {
        ({ itemsPerRow, ...props }: import("../CardsRadios/CardsRadios").ICardsRadiosProps): React.JSX.Element;
        displayName: string;
        CustomItem: {
            ({ ...props }: import("../CardsRadiosCustomItem/CardsRadiosCustomItem").ICardsRadiosCustomItem): React.JSX.Element;
            displayName: string;
        };
    };
    Switches: {
        ({ itemsPerRow, ...props }: import("../CardsSwitches/CardsSwitches").ICardsSwitchesProps): React.JSX.Element;
        displayName: string;
        CustomItem: {
            ({ ...props }: import("../CardsSwitchesCustomItem/CardsSwitchesCustomItem").ICardsSwitchesCustomItem): React.JSX.Element;
            displayName: string;
        };
    };
};
export { Cards, ICardsProps };
