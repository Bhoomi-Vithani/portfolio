import React from "react";
import { IBasicPropsInternal } from "../../utils/IBasicPropsInternal";
export declare const extensionKnobIdLower = "-lower";
export declare const extensionKnobIdUpper = "-upper";
export interface ISliderSharedProps extends IBasicPropsInternal {
    /** The name of the slider e.g. for forms */
    name?: string;
    /** The current value of the slider. The value is (should at least be) between minValue and maxValue
     * In a multi range look the value contains a lower and upper value within a tupel type [lower, upper], otherwise single value
     */
    value: number | number[];
    /** The label (at the top left side) */
    label?: string;
    /** Aria Label - either a string (single slider) or an array with two string values (range slider) */
    ariaLabel?: string | string[];
    /** Is the label visible (default: true) */
    showLabel?: boolean;
    /** Formatter for current value, screen reader friendly. In a multi range look, map toan array with the current lower and upper aria value text e.g. ["1000 €", "3000 €"]  */
    ariaValueTextFormatter?: (value: any | any[]) => string | string[];
    /** Disables all actions */
    disabled?: boolean;
    /** A fraction of maxValue - minValue. The steps are marked on the slider. */
    step?: number;
    /** The precision - If the precision is 1, the slider gives back integers only; if precision = 0.01,
     * there are 2 decimals of each value. You can also add a precision of 100
     * to enforce values (e.g. Euros) to be divisible by 100, no precision provides more than 2 decimals
     */
    precision?: number;
    /** This is a helper text appearing at the bottom left side to indicate the minimum Value. Could also contain JSX  */
    helperMinValue?: any;
    /** This is a helper text appearing at the bottom rigth side to indicate the maximum Value. Could also contain JSX  */
    helperMaxValue?: any;
    /** The minimal value of the slider */
    minValue?: number;
    /** The maximal value of the slider */
    maxValue: number;
    /** Object with additional html attributs for the slider. Also, you can provide a tabIndex like.  */
    htmlAttrs?: any;
    /** determine the type of slider basically */
    look?: "singleSlider" | "rangeSlider";
    /** @deprecated - do not use, for internal purposes only */
    showThumb?: boolean;
    /** Provide onFocus event */
    onFocus?: (event: React.FocusEvent<HTMLElement>, name: string) => void;
    /** Provide onBlur event */
    onBlur?: (event: React.FocusEvent<HTMLElement>, name: string) => void;
}
interface ISliderPresentationOnlyProps {
    activeSlider?: "none" | "lower" | "upper";
    keyboardFocus?: "none" | "lower" | "upper";
    onTrackClick?: any;
    onKeyDown?: any;
    onMouseDown?: any;
    onHelperMinClick?: any;
    onHelperMaxClick?: any;
    sliderTrackContainerRef?: any;
    hostRef?: any;
    lowerSliderThumbRef?: any;
    upperSliderThumbRef?: any;
    lowerSliderThumbPercentage?: number;
    upperSliderThumbPercentage?: number;
    sliderMarkerTrackBaseColor?: string;
    handleOnSliderBlur?: (event: React.FocusEvent<HTMLElement>) => void;
}
interface ISliderPresentationProps extends ISliderSharedProps, ISliderPresentationOnlyProps {
}
export declare const defaultProps: Partial<ISliderPresentationProps>;
export declare const SliderPresentation: React.ForwardRefExoticComponent<ISliderPresentationProps & React.RefAttributes<HTMLElement>>;
export {};
