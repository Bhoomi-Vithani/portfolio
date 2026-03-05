import React from "react";
import { ISliderSharedProps } from "./SliderPresentation";
interface ISliderWrapperState {
    keyboardFocus: "none" | "lower" | "upper";
    activeSlider: "none" | "lower" | "upper";
    sliderMarkerTrackBaseColor: string;
}
export interface ISliderWrapperProps extends Omit<ISliderSharedProps, "activeSlider" | "onTrackClick" | "sliderTrackContainerRef" | "lowerSliderThumbRef" | "upperSliderThumbRef" | "hostRef" | "sliderMarkerTrackBaseColor" | "lowerSliderThumbPercentage" | "upperSliderThumbPercentage" | "onMouseDown" | "onHelperMinClick" | "onHelperMaxClick" | "handleOnSliderBlur"> {
    /** Called on change (after key change or letting go of the slider). Use this function to set the new value of the slider. The value contains one value on single slider, two on range slider with [lower, upper] */
    onChange?: (value: number | number[], name: string) => void;
    /** Called on drag. Similar to onChange, but is also called while dragging the slider. The value contains one value on single slider, two on range slider with [lower, upper] */
    onInput?: (value: number | number[], name: string) => void;
    /** For internal use only:
     * The distance factor can manage the approximation between 2 thumbs. The calculation is a result of
     * factor multiplied with thumb width. The default is set on 0.0. The value > 0 hasn't an effect on range
     * slider with step or precision (precision > 1).
     */
    distanceFactor?: number;
}
export declare class SliderWrapper extends React.Component<ISliderWrapperProps, ISliderWrapperState> {
    private mousedownOffsetX;
    private isMouseDrag;
    private afterMouseDrag;
    private hostRef;
    private lowerSliderThumbRef;
    private upperSliderThumbRef;
    private lowerSliderThumbPercentage;
    private upperSliderThumbPercentage;
    private sliderTrackContainerRef;
    private eventListeners;
    static defaultProps: Partial<ISliderWrapperProps>;
    constructor(props: ISliderWrapperProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    shouldComponentUpdate(nextProps: Readonly<ISliderWrapperProps>): boolean;
    private getLowerValueProp;
    private getUpperValueProp;
    registerMouseDownEventListeners: () => void;
    deregisterMouseDownEventListeners: () => void;
    calculateValueToPercent: (value: number, minValue: number, maxValue: number) => number;
    calculatePercentToValue: (percentage: number, minValue: number, maxValue: number) => number;
    tidyDecimals: (value: any) => number;
    getNearestStep: (percentage: number) => number;
    getPercentageByMousePosition: (e: MouseEvent | TouchEvent, slider: "none" | "lower" | "upper") => number;
    getClosestSlider: (currentPercentMousePosition: number) => "lower" | "upper";
    getThumbSliderWidth: (slider: "none" | "lower" | "upper", asPercent?: boolean) => number;
    getCalculatedRangeSliderPosition(newPosition: number, slider: "none" | "lower" | "upper", stepSliderInPercent: any): number;
    resetValueByMissingOnChange: () => void;
    setValue: (percentage: number, slider?: "none" | "lower" | "upper") => void;
    setTemporaryValue: (percentage: number, slider?: "none" | "lower" | "upper") => void;
    onMouseDown: (event: any) => void;
    onDragStart: () => void;
    onDocumentMouseUp: (event: any) => void;
    onDocumentMouseLeave: (event: any) => void;
    onMouseMove: (event: any) => void;
    onTrackClick: (event: any) => void;
    onFocus: (event: any, name: any) => void;
    handleOnSliderBlur: (event: any) => void;
    onHelperMinClick: () => void;
    onHelperMaxClick: () => void;
    handleNavKeyPressed: (newPercentage: any, oldPercentage: any, stepOnSliderInPercent: any, slider: "none" | "lower" | "upper") => void;
    onKeyDown: (ev: any) => void;
    render(): React.JSX.Element;
}
export {};
