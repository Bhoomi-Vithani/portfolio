import * as React from "react";
import { IChipsItemActionProps } from "../ChipsItemAction/ChipsItemAction";
interface IChipsDatePickerProps extends Omit<IChipsItemActionProps, "onBlur" | "onFocus"> {
    /** Is called on blur. */
    onBlur?: (event: React.FocusEvent<HTMLElement> | FocusEvent, name: string) => void;
    /** Is called on focus. */
    onFocus?: (event: React.FocusEvent<HTMLElement>, name: string) => void;
    /** Is called on every text change and passes the new value and the id of the component. */
    onChange?: (value: Date | string, name: string) => void;
    /** Setting this prop to "month" will show a "monthpicker" */
    datepickerFormat?: "day" | "month";
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React.InputHTMLAttributes<HTMLInputElement> | Record<`data-${string}`, string | number | boolean>;
    /** Sets the value of the input. */
    value: Date | string;
    /** If clearIcon is true, an X-icon is displayed for non-empty/selected fields on focus and hover, in order to reset
     *  a selection. A click will call the 'onChange' method -> with an empty string - default is "true". */
    clearIcon?: boolean;
    /** Sets the 'name'-attribute of the input. */
    name?: string;
    /** Date Object with the earliest date that can be selected. The minimum date is included in the selectable range.
     * Ensure, that minDate <= maxDate. Only year, month and day information are used, the time information is ignored.
     */
    minDate?: Date;
    /** Date Object with the latest date that can be selected. The maximum date is included in the selectable range.
     * Ensure, that minDate <= maxDate. Only year, month and day information are used, the time information is ignored.
     */
    maxDate?: Date;
    /** Set the disabledDates list which contains e.g. the business holiday days.
     * Days contained in the list will be displayed disabled in the dropdown widget
     */
    disabledDates?: Date[];
    /** Weekends are enabled by default
     *  Disable sunday and saturday in the dropdown widget by setting the prop weekendsDisabled to true.
     */
    weekendsDisabled?: boolean;
    /**
     * Only dates that are contained in the list will be enabled in the dropdown widget.
     * Note: Some of these dates can be ruled out by the maxDate, minDate, weekendsDisabled rules.
     */
    selectableDates?: Date[];
}
declare const ChipsDatePicker: {
    ({ label, isSelected, onResetFilter, ...props }: IChipsDatePickerProps): React.JSX.Element;
    displayName: string;
};
export { ChipsDatePicker, IChipsDatePickerProps };
