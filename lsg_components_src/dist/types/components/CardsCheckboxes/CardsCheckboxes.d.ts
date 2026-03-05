import * as React from "react";
import { ICardsProps } from "../Cards/Cards";
interface ICardsCheckboxesProps extends ICardsProps {
    /** If you render a fieldset or you're using Input Cards like Checkbox/Radio/Switch, you have to set the 'fieldsetLegend' prop. */
    fieldsetLegend?: string;
}
declare const CardsCheckboxes: {
    ({ itemsPerRow, ...props }: ICardsCheckboxesProps): React.JSX.Element;
    displayName: string;
    CustomItem: {
        ({ ...props }: import("../CardsCheckboxesCustomItem/CardsCheckboxesCustomItem").ICardsCheckboxesCustomItem): React.JSX.Element;
        displayName: string;
    };
};
export { CardsCheckboxes, ICardsCheckboxesProps };
