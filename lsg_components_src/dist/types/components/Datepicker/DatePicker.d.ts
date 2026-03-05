import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
export interface IDatePickerProps extends IBasicProps {
    /** Sets a helper text below the component. */
    helperText?: string;
    /** Adds an error text below the component. If you use this prop, the errorText is added below the helperText (if
     *  defined), and the component is implicitly set to invalid. */
    errorText?: string;
    /** Sets text field and style to disabled. */
    disabled?: boolean;
    /** Sets text field and style to 'error'. 'errorText' becomes visible if set. */
    invalid?: boolean;
    /** Sets the label text. */
    label: string;
    /** Is called on blur. */
    onBlur?: (event: React.FocusEvent<HTMLElement> | FocusEvent, name: string) => void;
    /** Is called on focus. */
    onFocus?: (event: React.FocusEvent<HTMLElement>, name: string) => void;
    /** Is called on every text change and passes the new value and the id of the component. */
    onChange?: (value: Date | string, name: string) => void;
    /** Sets the placeholder text (visible on a focused input with empty value). */
    placeholder?: string;
    /** Setting this prop to "month" will show a "month picker" */
    dateFormat?: "day" | "month";
    /** @Deprecated Use dateFormat instead. */
    datepickerFormat?: "day" | "month";
    /** Sets text field and style to read-only. */
    readOnly?: boolean;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React.InputHTMLAttributes<HTMLInputElement> | Record<`data-${string}`, string | number | boolean>;
    /** Sets the value of the input. */
    value: Date | string;
    /** Sets the 'name'-attribute of the input. */
    name?: string;
    /**
     * If set to true, the text "(optional)" is appended to the label. You can also pass in a predefined string.
     */
    optional?: boolean | string;
    /** Sets the visibility of the clear icon. Default is true. A click will call the 'onChange' method. */
    clearIcon?: boolean;
    /**
     * Date Object with the earliest date that can be selected. The minimum date is included in the selectable range.
     * Ensure, that minDate <= maxDate. Only year, month and day information are used, the time information is ignored.
     */
    minDate?: Date;
    /**
     * Date Object with the latest date that can be selected. The maximum date is included in the selectable range.
     * Ensure, that minDate <= maxDate. Only year, month and day information are used, the time information is ignored.
     */
    maxDate?: Date;
    /**
     * Set the disabledDates list which contains e.g. the business holiday days.
     * Days contained in the list will be displayed disabled in the dropdown widget.
     * With a DatePicker dateformat="month", give in a list of "firstOfMonth" dates to disable distinct dates.
     * This prop is ruled out by the "selectableDates" prop.
     */
    disabledDates?: Date[];
    /**
     * Weekends are enabled by default. Disable sunday and saturday in the dropdown widget by setting the prop
     * `weekendsDisabled` to true.
     */
    weekendsDisabled?: boolean;
    /**
     * Only dates that are contained in the list will be enabled in the dropdown widget.
     * Note: Some of these dates can be ruled out by the maxDate, minDate, weekendsDisabled rules.
     * With a DatePicker dateformat="month", give in a list of "firstOfMonth" dates to enable distinct dates.
     * This prop is ruled out by the "selectableDates" prop.
     */
    selectableDates?: Date[];
    /** Use this prop to control if the aria-live attribute is set for the errorText */
    errorTextAriaLive?: boolean;
    /**
     * Opt-out for the year picker, that by default opens on click on the <month year> label on top of the
     * DatePicker flyout.
     */
    noYearPicker?: boolean;
    /** With spacing="dense", the text input whitespace of the DatePicker is reduced by smaller paddings and bottom-margins.
     * Set spacing="default" only in special FormContainer with spacing="dense" prop (edge) cases where you wish to override the "dense" spacing
     *   in an individual DatePicker. In this case, the DatePicker will receive its default whitespace within the FormContainer. */
    spacing?: "default" | "dense";
}
declare const DatePicker: {
    ({ optional, datepickerFormat, dateFormat, ...otherProps }: IDatePickerProps): React.JSX.Element;
    displayName: string;
};
export { DatePicker };
