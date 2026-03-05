import * as React from "react";
import { ITextFieldProps } from "../TextField/TextField";
interface IDateTextFieldProps extends Omit<ITextFieldProps, "onChange" | "value"> {
    /** Is called on every changes and passes the new value and the id of the component. Expected types are string | Date | number */
    onChange?: (value: string | Date, name: string, event: React.SyntheticEvent<HTMLElement>) => void;
    /** Sets the value of the input. */
    value: string | Date;
    /** @deprecated (see also documentation Markenportal - chapter `Accessibility` )
     * Date Object with the earliest date that can be selected. The minimum date is included in the selectable range.
     * Ensure, that minDate <= maxDate. Only year, month and day information are used, the time information is ignored.
     */
    minDate?: Date;
    /** @deprecated (see also documentation Markenportal - chapter `Accessibility` )
     * Date Object with the latest date that can be selected. The maximum date is included in the selectable range.
     * Ensure, that minDate <= maxDate. Only year, month and day information are used, the time information is ignored.
     */
    maxDate?: Date;
    /** Setting this prop to "month" will show a "month picker" */
    dateFormat?: "day" | "month";
    /** With spacing="dense", the text input whitespace of the DateTextField is reduced by smaller paddings and bottom-margins.
     * Set spacing="default" only in special FormContainer with spacing="dense" prop (edge) cases where you wish to override the "dense" spacing
     *   in an individual DateTextField. In this case, the DateTextField will receive its default whitespace within the FormContainer. */
    spacing?: "default" | "dense";
}
declare const DateTextField: {
    ({ optional, readOnly, clearIcon, minDate, maxDate, dateFormat, ...otherProps }: IDateTextFieldProps): React.JSX.Element;
    displayName: string;
};
export { DateTextField, IDateTextFieldProps };
