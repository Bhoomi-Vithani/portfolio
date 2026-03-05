import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface ITextSliderProps extends IBasicProps {
    /** Disables all actions, which is also reflected by the styling of the component */
    disabled?: boolean;
    /** Is called on blur. */
    onBlur?: (event: React.FocusEvent<HTMLElement>) => void;
    /** Is called on focus. */
    onFocus?: (event: React.FocusEvent<HTMLElement>) => void;
    /**  This is the name of the component.  */
    name?: string;
    /** Label on top of the slider. The label is mandatory for accessibility reasons. */
    label: string;
    /** Label for the text field(s) - either a string (single value) or an array with two string values (range values). Is set to label by default and in case of range values: label plus a default text indicating min/max value. */
    inputTextfieldLabel?: string | string[];
    /** Text on the left bottom of the slider. */
    helperMinValue?: string;
    /** Text on the right bottom of the slider. */
    helperMaxValue?: string;
    /** Helper text for the text field, when the slider is hidden. Either a string (for a single slider) or an array with two string values (range slider). In case of an invalid text field, you have to set an errorText prop. In this case, you can unset the helperText of the field or set both helperText and errorText. */
    helperTextValue?: string | string[];
    /** Minimum value */
    minValue?: number;
    /** Maximum value */
    maxValue: number;
    /** Steps are visually displayed on the slider. The step prop overrides the sliderStep prop. Keep in mind to use large steps in terms of good design. If that's not possible, use the sliderStep prop  */
    step?: number;
    /** This is the value accuracy when you use the slider. Example: If you need a value accurate to 0 decimals (e.g. rounded to 1 Euro) set the step to 1 (default), if accurate to e.g. cent, set a sliderStep of 0.01 and if you need a value rounded to 100, set the sliderStep to 100.  */
    precision?: number;
    /** @deprecated This is the value accuracy when you use the slider. Use precision instead!! */
    sliderStep?: number;
    /** Number of decimal digits that are appended when switching to displaying text input, e.g. 2 for € with cents. */
    decimalDigits?: number;
    /** @deprecated Called on change, triggered by letting go of a slider knob or change in a text field. Provides a simple number in single slider mode, an array of two numbers  [lower, upper] in range slider mode.
     * Note: this handler is not called when you delete a value in a text field. To handle empty text inputs in a better way, use onInputChange instead.
     * */
    onChange?: (value: number | number[], name: string) => void;
    /** Called on change, triggered by letting go of a slider knob or change in a text field. Provides a simple number (or empty string) in single slider mode, an array of two values  [lower, upper] in range slider mode
     * The behavior is the same as in the (deprecated) onChange handler, but also reflects empty text fields. If a text field is empty, an empty string is returned as a value so you can set an appropriate error text.
     * This behaviour is analogous to the onChange handler in the Text Field of type "number".
     * Note: Do not use the onChange handler at the same time to prevent side effects.
     * */
    onInputChange?: (value: any | any[], name: string) => void;
    /** Called on drag and value change events of the slider and is not called on change of the text fields. The value contains one number value on single slider, two values in an array on range slider with [lower, upper] */
    onSliderInput?: (value: any | any[], name: string) => void;
    /** Event is raised when the user tries to close the text field area by click on the "return to slider" button or by enter key.
     * In this case, the text field area is not necessarily closed when you set invalidInput to true.
     * Also, for this event you can do a validation on your own and if necessary, set the invalid input prop to false.
     * */
    onInputClose?: (event: React.SyntheticEvent) => void;
    /** Event is raised when the user opens the text input area in order to enter values into the text fields. */
    onInputOpen?: (event: React.SyntheticEvent) => void;
    /** This is the value you have to provide; set it with the value of the onChange event. */
    /** In the value accept single value(number | "") or an array with lower and upper value [number | "", number | ""] */
    value: any | any[];
    /** Callback function for pretty-printing a value */
    formatter?: (value: any | any[]) => string | string[];
    /** Screen readers speak the current value when changed e.g. 1000. To improve a11y, you can change this text by this formatter, e.g. to "1000 €" (instead of the value 1000, which would be read by a screen reader)
     * In a multi range look, map the upper and lower value to an array with the screen reader friendly texts.
     */
    ariaValueTextFormatter?: (value: any | any[]) => string | string[];
    /** Aria label for the slider knob(s) - either a string (single slider) or an array with two string values (range slider). Is set to label by default and in case of range slider: label plus a default text indicating min/max value. */
    ariaSliderLabel?: string | string[];
    /** Aria label for the text field(s) - either a string (single value) or an array with two string values (range values). Is set to label by default and in case of range values: label plus a default text indicating min/max value. */
    ariaTextFieldLabel?: string | string[];
    /** Label for a connection word between lower and upper text fields or display field in range slider mode */
    labelTo?: string;
    /** Input validation element: Responsible prop which reflects that a text field input is not valid. If you set this prop to true, the text input area won't close. This prop is also implicitly set if you insert an errorText prop. */
    invalidInput?: boolean;
    /** Input validation element: Prop specifies the affected field that is not valid in range mode. In single slider mode, the affected field will be marked automatically. This prop is also implicitly set if you insert a corresponding errorText prop. */
    invalidInputField?: "lower" | "upper" | "both";
    /** Input validation element: Provides the error text beneath the input field(s). In case of the range slider variant, insert an array of two string values. */
    errorText?: string | string[];
    /** On blur, incorrect values in input field(s) are restored to the last values by triggering an onInputChange event. You can prevent this behaviour by this prop. If this prop is set, the input field area will not close if the values in the text fields are incorrect.  */
    preventAutoCorrection?: boolean;
}
declare const TextSlider: {
    ({ sliderStep, precision, ...props }: ITextSliderProps): React.JSX.Element;
    displayName: string;
};
export { TextSlider, ITextSliderProps };
