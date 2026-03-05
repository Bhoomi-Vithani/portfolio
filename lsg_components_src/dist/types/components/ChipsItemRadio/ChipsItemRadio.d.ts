import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
import { IChipsItemBaseProps } from "../ChipsItemAction/ChipsItemAction";
interface IChipsItemRadioProps extends IChipsItemBaseProps, IBasicProps {
    /** Is Chip selected */
    value?: boolean;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React.InputHTMLAttributes<HTMLInputElement> | Record<`data-${string}`, string | number | boolean>;
    /** Function to be called whenever the checkbox is clicked. */
    onChange?: (value: boolean, name: string, event: React.SyntheticEvent<HTMLInputElement>) => void;
}
declare const ChipsItemRadio: React.ForwardRefExoticComponent<IChipsItemRadioProps & React.RefAttributes<HTMLInputElement>>;
export { ChipsItemRadio, IChipsItemRadioProps };
