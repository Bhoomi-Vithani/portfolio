import * as React from "react";
import { ISelectProps } from "../Select/Select";
import { ITextFieldProps } from "../TextField/TextField";
interface IOptionsTextFieldProps extends Omit<ITextFieldProps, "type" | "hostId" | "value"> {
    /** This label is the leading label of the molecular `OptionsTextField` combining a Text Field and a Select option element.
     * A11y relevant field - hidden */
    groupLabel: string;
    /** Input type defined by a literal type */
    type?: "text" | "password" | "date" | "number";
    /** Provides more context for the value of the Text Field such as options for the Select element */
    optionsProps?: ISelectProps;
    /** Sets the value of the input. (String or number.) Date handled with string type */
    value: string | number;
    /** Is called on every change and passes the new value and the name of the component. Date types are handled with string */
    onChange?: (value: string | number, name: string, event: React.SyntheticEvent<HTMLElement>) => void;
    /** @deprecated Triggered on key press. The anticipated removal goes along with the removal in the basic Text Field */
    onKeyDown?: (key: string, name: string, event: React.KeyboardEvent<HTMLElement>) => void;
    /** @deprecated: Will be removed with the next major release, because it was only intended to use internally. Contact us
     * if still required. Triggered on click of the input */
    onClick?: (event: React.MouseEvent<HTMLElement>, name: string) => void;
    /** @deprecated: Use as="textarea" instead. Changed in terms of consistency with other components. Multi-Line, render as `<TextArea />`. */
    textArea?: boolean;
    /** @deprecated Please use the new DateTextField instead
     * Date Object with the earliest date that can be selected. The minimum date is included in the selectable range.
     * Ensure, that minDate <= maxDate. Only year, month and day information are used. The time information is ignored.
     */
    minDate?: Date;
    /** @deprecated Please use new DateTextField instead
     * Date Object with the latest date that can be selected. The maximum date is included in the selectable range.
     * Ensure, that minDate <= maxDate. Only year, month and day information are used. The time information is ignored.
     */
    maxDate?: Date;
    /** Used only when value type is a number and when you want to use your own formatter */
    valueNumberFormatter?: (value: number) => string;
    /** Number of decimal places (fraction digits), if prop "type" = "number"
     * Example: When working with currencies, you can set this to 2.
     * The use of this prop only makes sense in combination with the option list - not in combination with a user-defined number formatter.
     * */
    decimalDigits?: number;
    /** With spacing="dense", the text input whitespace of the OptionsTextField is reduced by smaller paddings and bottom-margins.
     * Set spacing="default" only in special FormContainer with spacing="dense" prop (edge) cases where you wish to override the "dense" spacing
     *   in an individual OptionsTextField. In this case, the OptionsTextField will receive its default whitespace within the FormContainer. */
    spacing?: "default" | "dense";
}
declare const OptionsTextField: {
    ({ optional, readOnly, clearIcon, optionsProps, onKeyDown, onClick, type, value, textArea, groupLabel, as, ...otherProps }: IOptionsTextFieldProps): React.JSX.Element;
    displayName: string;
};
export { OptionsTextField, IOptionsTextFieldProps };
