import * as React from "react";
import { ICardsProps } from "../Cards/Cards";
interface ICardsRadiosProps extends ICardsProps {
    /** Sets the value of the Cards. */
    value?: string;
    /** Sets the name of the Cards. */
    name?: string;
    /** Called on each value change due to selection of a `CardsCheckboxesItem`, providing the new value. */
    onChange?: (value: string, name: string, event: React.SyntheticEvent<HTMLElement>) => void;
    /** If you render a fieldset or you're using Input Cards like Checkbox/Radio/Switch, you have to set the 'fieldsetLegend' prop. */
    fieldsetLegend?: string;
}
declare const CardsRadios: {
    ({ itemsPerRow, ...props }: ICardsRadiosProps): React.JSX.Element;
    displayName: string;
    CustomItem: {
        ({ ...props }: import("../CardsRadiosCustomItem/CardsRadiosCustomItem").ICardsRadiosCustomItem): React.JSX.Element;
        displayName: string;
    };
};
export { CardsRadios, ICardsRadiosProps };
