import * as React from "react";
import type { ITextFieldProps } from "../TextField/TextField";
interface INumberTextFieldProps extends Omit<ITextFieldProps, "onChange" | "value"> {
    /** Is called on each change and passes the new value and the id of the component. Expected types are string |
     *  Date | number */
    onChange?: (value: any, name: string, event: React.SyntheticEvent<HTMLElement>) => void;
    /** Sets the value of the input. */
    value: string | number;
    /** Used only, when value type is a number. If no formatter is defined by user, an internal formatter become applied (default-format: decimal, fractionMin 0, fractionMax 5) */
    valueNumberFormatter?: (value: number) => string;
    /** Number of decimal places (fraction digits)
     * Example, when working with currencies, you can set this to 2.
     * Maximum number is 21, anything above will be set to 21.
     * */
    decimalDigits?: number;
    /** With spacing="dense", the text input whitespace of the NumberTextField is reduced by smaller paddings and bottom-margins.
     * Set spacing="default" only in special FormContainer with spacing="dense" prop (edge) cases where you wish to override the "dense" spacing
     *   in an individual NumberTextField. In this case, the NumberTextField will receive its default whitespace within the FormContainer. */
    spacing?: "default" | "dense";
}
declare const NumberTextField: {
    ({ optional, readOnly, clearIcon, ...otherProps }: INumberTextFieldProps): React.JSX.Element;
    displayName: string;
};
export { NumberTextField, INumberTextFieldProps };
