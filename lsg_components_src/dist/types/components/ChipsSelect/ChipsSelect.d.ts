import * as React from "react";
import { IChipsItemBaseProps } from "../ChipsItem/ChipsItem";
import { IOptions } from "../Select/Select";
interface IChipsSelectProps extends Omit<IChipsItemBaseProps, "onClick" | "label"> {
    /** Chip Select label to describe the selection category. */
    label: string;
    /** Is called if user triggers selection for select option items. */
    onChange?: (value: string, name: string, event: React.SyntheticEvent<HTMLElement>) => void;
    /** @deprecated 20.03.24: Select Chip does not provide a disabled state */
    disabled?: boolean;
    /** Actual selected option of the select chip. */
    value: string;
    /** If clearIcon is true, an X-icon is displayed for non-empty/selected fields on focus and hover, in order to reset
     *  a selection. A click will call the 'onChange' method -> with an empty string - default is "true". */
    clearIcon?: boolean;
    /** Sets the 'name'-attribute of the input. */
    options?: IOptions[];
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React.InputHTMLAttributes<HTMLInputElement> | React.HTMLAttributes<HTMLDivElement> | Record<`data-${string}`, string | number | boolean>;
}
declare const ChipsSelect: {
    ({ isSelected, clearIcon, isHidden, ...props }: IChipsSelectProps): React.JSX.Element;
    displayName: string;
};
export { ChipsSelect, IChipsSelectProps };
