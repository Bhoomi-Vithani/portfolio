import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface ISliderProps extends IBasicProps {
    /** The name of the input element */
    name?: string;
    /** Label on top of the slider. Always give in a label, for a11y purposes, even if you hide it with showLabel=false. */
    label: string;
    /** Is the label visible (default: true). If set to false, please make sure the slider is visually described in
     *  another way. */
    showLabel?: boolean;
    /** Aria label for the slider knob(s) - either a string (single slider) or an array with two string values (range slider). Defaults to label and in case of range slider: label plus a default text indicating min/max value. */
    ariaLabel?: string | string[];
    /** This is the value you have to provide; set it with the value of the onChange event.
     * In combination with rangeSlider flag, the value accept tuple with lower and upper value [lower, upper]
     */
    value: number | number[];
    /** Screen readers speak the current value when changed e.g. 1000. To improve a11y, you can change this text by this formatter, e.g. to "1000 €" (instead of the value 1000, which would be read by a screen reader)
     * In a multi range look, map the upper and lower value to an array with the screen reader friendly texts.
     */
    ariaValueTextFormatter?: (value: any | any[]) => string | string[];
    /** Disables all actions */
    disabled?: boolean;
    /** Text on the left bottom of the slider. */
    helperMinValue?: string;
    /** Text on the right bottom of the slider. */
    helperMaxValue?: string;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React.InputHTMLAttributes<HTMLInputElement> | Record<`data-${string}`, string | number | boolean>;
    /** Minimum value */
    minValue?: number;
    /** Maximum value */
    maxValue: number;
    /** This works similarily to precision, but the steps are visible on the slider. Use this only if the steps are large enough to look good from the design perspective.  */
    step?: number;
    /** If you need a value accurate to one decimal places, you should set the value of step to e.g. 0.01. To receive a value without decimal places, set the value to 1 .  */
    precision?: number;
    /** Called on change (after key press or letting go of the slider). The value contains one value on single slider, two values in an array on range slider with [lower, upper] */
    onChange?: (value: number | number[], name: string) => void;
    /** Called on drag and value change events. Similar to onChange, but is also called while dragging the slider. The value contains one number value on single slider, two values in an array on range slider with [lower, upper] */
    onInput?: (value: number | number[], name: string) => void;
    /** Called on blur. */
    onBlur?: (event: React.FocusEvent<HTMLElement>, name: string) => void;
    /** Called on focus. */
    onFocus?: (event: React.FocusEvent<HTMLElement>, name: string) => void;
}
declare const Slider: {
    (props: ISliderProps): React.JSX.Element;
    displayName: string;
};
export { Slider, ISliderProps };
