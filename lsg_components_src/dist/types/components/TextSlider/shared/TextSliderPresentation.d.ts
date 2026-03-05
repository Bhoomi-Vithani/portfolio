import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export declare const formatNumber: (value: number | string, decimalDigits: number) => any;
export interface ITextSliderSharedProps extends IBasicPropsInternal {
    /** Disables all actions */
    disabled?: boolean;
    /** Is called on blur. */
    onBlur?: (event: React.FocusEvent<HTMLElement>) => void;
    /** Is called on focus. */
    onFocus?: (event: React.FocusEvent<HTMLElement>) => void;
    /** @deprecated Called on change, triggered by letting go of a slider knob or change in a text field. Provides a simple number in single slider mode, an array of two numbers  [lower, upper] in range slider mode.
     * Note: this handler is not called when you delete a value in a text field. To handle empty text inputs in a better way, use onInputChange instead.
     * */
    onChange?: (value: number | number[], name: string) => void;
    /** Called on change, triggered by letting go of a slider knob or change in a text field. Provides a simple number (or empty string) in single slider mode, an array of two values  [lower, upper] in range slider mode
     * The behavior is the same as in the onChange handler, but also reflects empty text fields. If a text field is empty, an empty string is returned as a value, so you can set an appropriate error text.
     * This behaviour is analogous to the onChange handler in the Text Field of type "number".
     * */
    onInputChange?: (value: any | any[], name: string) => void;
    /** Called on drag and value change events. Similar to onInputChange, but is also called while dragging the slider. The value contains one number value on single slider, two values in an array on range slider with [lower, upper] */
    onSliderInput?: (value: any | any[], name: string) => void;
    /** Event is raised when the user tries to close the text field area by click on the "return to slider" button or by enter key.
     * In this case, the text field is not necessarily closed because you set invalidInput to true.
     * Also, for this event you can do a validation on your own and if necessary, set the invalid input prop to false.
     * */
    onInputClose?: (event: React.SyntheticEvent) => void;
    /** Event is raised when the user opens the text input area in order to enter values into the text fields. */
    onInputOpen?: (event: React.SyntheticEvent) => void;
    /** Current simple value or lower | upper value */
    value?: number | number[];
    /**  This is the name of the component.  */
    name?: string;
    /** Label on top of the lower input field (required). */
    label: string;
    /** Label for connection word between text fields or display field */
    labelTo?: string;
    /** Text on the left bottom of the slider. */
    helperMinValue?: string;
    /** Text on the right bottom of the slider. */
    helperMaxValue?: string;
    /** Helper text below the text field, when the slider is hidden. In case of a range slider, insert an array of two string values. In case of an invalid text field, you have to set an errorText prop. In this case, you can unset the helperText of the field or set both helperText and errorText. */
    helperTextValue?: string | string[];
    /** Minimum value */
    minValue?: number;
    /** Maximum value */
    maxValue: number;
    /** Steps are visually displayed on the slider. The step prop overrides the sliderStep prop. Keep in mind to use large steps in terms of good design. If that's not possible, use the sliderStep prop  */
    step?: number;
    /** This is the value accuracy when you use the slider. Example: If you need a value accurate to 0 decimals (e.g. rounded to 1 Euro) set the step to 1 (default), if accurate to e.g. cent, set a sliderStep of 0.01 and if you need a value rounded to 100, set the sliderStep to 100.  */
    precision?: number;
    /** Callback function for pretty-printing of displaying values  */
    formatter?: (value: any | any[]) => string | string[];
    /** Formatter for current value, screen reader friendly. In a multi range look, map toan array with the current lower and upper aria value text e.g. ["1000 €", "3000 €"]  */
    ariaValueTextFormatter?: (value: any | any[]) => string | string[];
    /** Aria label for the slider knob(s) - either a string (single slider) or an array with two string values (range slider). Defaults to label and in case of range slider: label plus a default text indicating min/max value. */
    ariaSliderLabel?: string | string[];
    /** Aria label for the text field(s) - either a string (single value) or an array with two string values (range values). Defaults to label and in case of range values: label plus a default text indicating min/max value. */
    ariaTextFieldLabel?: string | string[];
    /** Number of decimal digits that are appended when switching to the text input, e.g. 2 for € with cents. */
    decimalDigits?: number;
    /** Decision which slider variation should be used  */ look?: "singleSlider" | "rangeSlider";
    /** Input validation element: Responsible prop which reflects that an input is not valid. This prop is also implicitly set if you insert an errorText prop. */
    invalidInput?: boolean;
    /** Input validation element: Prop specifies the affected field that is not valid. This prop is also implicitly set if you insert a corresponding errorText prop. */
    invalidInputField?: "lower" | "upper" | "both";
    /** Input validation element: Provides the error text beneath invalid input fields. In case of the range slider variant, insert an array of two string values. */
    errorText?: string | string[];
    /** On blur, incorrect values in input field(s) are restored to the last values by triggering an onInputChange event. You can prevent this behaviour by this prop. If this prop is set, the input field area will not close if the values in the text fields are incorrect.  */
    preventAutoCorrection?: boolean;
}
interface ITextSliderPresentationOnlyProps {
    /** Called on input handle internally. */
    handleOnIconClick?: (event: React.SyntheticEvent, name: string) => void;
    handleInputOnClear?: (event: React.SyntheticEvent, name: string) => void;
    handleInputOnChange?: (value: string, name: string) => void;
    handleSliderOnChange?: (value: number | number[], name: string) => void;
    handleSliderOnInput?: (value: number | number[], name: string) => void;
    handleOnBlur?: (event: React.FocusEvent<HTMLElement>) => void;
    handleOnFocus?: (event: React.FocusEvent<HTMLElement>) => void;
    handleInputOnFocus?: (event: React.FocusEvent<HTMLElement>, name: string) => void;
    handleTextInputAreaKeydown?: (event: React.KeyboardEvent) => void;
    sliderVisible: boolean;
    isMobile: boolean;
    hostRef: any;
    inputTextLowerRef: any;
    inputTextUpperRef: any;
    openTextInputAreaButtonRef: any;
    /** Deprecated */
    setFocusOnSlider?: () => void;
}
interface ITextSliderPresentationProps extends ITextSliderSharedProps, ITextSliderPresentationOnlyProps {
}
export declare const TextSliderPresentation: {
    (props: ITextSliderPresentationProps): React.JSX.Element;
    displayName: string;
};
export {};
