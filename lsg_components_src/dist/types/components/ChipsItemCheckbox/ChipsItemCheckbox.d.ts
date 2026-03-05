import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
import { IChipsItemBaseProps } from "../ChipsItemAction/ChipsItemAction";
interface IChipsItemCheckboxProps extends IChipsItemBaseProps, IBasicProps {
    /** Is Chip selected */
    value?: boolean;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React.InputHTMLAttributes<HTMLInputElement> | Record<`data-${string}`, string | number | boolean>;
    /** Function to be called whenever the checkbox is clicked. */
    onChange?: (value: boolean, name: string, event: React.SyntheticEvent<HTMLInputElement>) => void;
}
declare const ChipsItemCheckbox: React.ForwardRefExoticComponent<IChipsItemCheckboxProps & React.RefAttributes<HTMLInputElement>>;
export { ChipsItemCheckbox, IChipsItemCheckboxProps };
