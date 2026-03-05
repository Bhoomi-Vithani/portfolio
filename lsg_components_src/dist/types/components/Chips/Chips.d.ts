import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
export interface IChipsBaseProps {
    /** Chips group label */
    groupLabel: string;
    /** Visually Hidden Chips group label */
    appearance?: "default" | "no-text";
}
interface IChipsProps extends IChipsBaseProps, IBasicProps {
    /** The inline variant enforces the display in a single line, inline-scroll provides a scroll container for mobile viewports */
    direction?: "wrap" | "scroll";
    /** @deprecated - Use direction instead. [March 2024] */
    look?: "wrap" | "scroll";
    /** whether to render chips as an ordered (`<ol>`) or unordered (`<ul>`) list */
    as?: "ul" | "ol" | "div";
    /** Callback for keyboard focus handling, if focus get lost */
    onFocusLoss: () => void;
}
declare const Chips: {
    ({ as, direction, appearance, groupLabel, ...props }: IChipsProps): React.JSX.Element;
    displayName: string;
    Radios: {
        ({ direction, as, groupLabel, ...props }: import("../ChipsRadios/ChipsRadios").IChipsRadiosProps): React.JSX.Element;
        displayName: string;
        Item: React.ForwardRefExoticComponent<import("../ChipsItemRadio/ChipsItemRadio").IChipsItemRadioProps & React.RefAttributes<HTMLInputElement>>;
    };
    RadioItem: React.ForwardRefExoticComponent<import("../ChipsItemRadio/ChipsItemRadio").IChipsItemRadioProps & React.RefAttributes<HTMLInputElement>>;
    Checkboxes: {
        ({ direction, as, ...props }: import("../ChipsCheckboxes/ChipsCheckboxes").IChipsCheckboxesProps): React.JSX.Element;
        displayName: string;
        Item: React.ForwardRefExoticComponent<import("../ChipsItemCheckbox/ChipsItemCheckbox").IChipsItemCheckboxProps & React.RefAttributes<HTMLInputElement>>;
    };
    CheckboxItem: React.ForwardRefExoticComponent<import("../ChipsItemCheckbox/ChipsItemCheckbox").IChipsItemCheckboxProps & React.RefAttributes<HTMLInputElement>>;
};
export { Chips, IChipsProps };
