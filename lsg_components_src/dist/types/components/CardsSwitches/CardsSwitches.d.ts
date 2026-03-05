import * as React from "react";
import { ICardsProps } from "../Cards/Cards";
interface ICardsSwitchesProps extends ICardsProps {
    /** If you render a fieldset or you're using Input Cards like Checkbox/Radio/Switch, you have to set the
     *  'fieldsetLegend' prop. */
    fieldsetLegend?: string;
}
declare const CardsSwitches: {
    ({ itemsPerRow, ...props }: ICardsSwitchesProps): React.JSX.Element;
    displayName: string;
    CustomItem: {
        ({ ...props }: import("../CardsSwitchesCustomItem/CardsSwitchesCustomItem").ICardsSwitchesCustomItem): React.JSX.Element;
        displayName: string;
    };
};
export { CardsSwitches, ICardsSwitchesProps };
