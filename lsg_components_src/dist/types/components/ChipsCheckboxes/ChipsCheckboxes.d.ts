import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
import { IChipsBaseProps } from "../Chips/Chips";
interface IChipsCheckboxesProps extends IChipsBaseProps, IBasicProps {
    /** The inline variant enforces the display in a single line, inline-scroll provides a scroll container for mobile viewports */
    direction?: "wrap" | "scroll";
    /** Renders Chips Container in different native HTML tags. Just set if necessary. <fieldset> is and should be default for Checkbox and RadioGroup. */
    as?: "ul" | "ol" | "div" | "fieldset";
}
declare const ChipsCheckboxes: {
    ({ direction, as, ...props }: IChipsCheckboxesProps): React.JSX.Element;
    displayName: string;
    Item: React.ForwardRefExoticComponent<import("../ChipsItemCheckbox/ChipsItemCheckbox").IChipsItemCheckboxProps & React.RefAttributes<HTMLInputElement>>;
};
export { ChipsCheckboxes, IChipsCheckboxesProps };
