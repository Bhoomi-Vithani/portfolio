import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
import { IChipsBaseProps } from "../Chips/Chips";
interface IChipsRadiosProps extends IChipsBaseProps, IBasicProps {
    /** @deprecated - Use direction instead. [March 2024] */
    look?: "wrap" | "scroll";
    /** @deprecated - Use direction instead. [March 2024] */
    radioGroupLook?: "default" | "condensed";
    /**
     * Controls the layout and behavior of the Radio Chips group:
     * - "wrap": Chips wrap automatically to another line when space runs out.
     * - "scroll": Chips are displayed in a single horizontal line with a scroll container for overflow, ideal for mobile viewports.
     * - "condensed": Chips are grouped together within a border with no gap between items, displayed in a horizontal scrollable container.
     */
    direction?: "wrap" | "scroll" | "condensed";
    /** Sets the value of the input. */
    value?: string;
    /** Sets the name of the input. */
    name?: string;
    /** Is called on every text change and passes the new value and the id of the component. */
    onChange?: (value: string, name: string, event: React.SyntheticEvent<HTMLElement>) => void;
    /** Renders Chips container in different native HTML tags. Just set if necessary. <fieldset> is and should be default for Checkbox and RadioGroup. */
    as?: "ul" | "ol" | "div" | "fieldset";
}
declare const ChipsRadios: {
    ({ direction, as, groupLabel, ...props }: IChipsRadiosProps): React.JSX.Element;
    displayName: string;
    Item: React.ForwardRefExoticComponent<import("../ChipsItemRadio/ChipsItemRadio").IChipsItemRadioProps & React.RefAttributes<HTMLInputElement>>;
};
export { ChipsRadios, IChipsRadiosProps };
