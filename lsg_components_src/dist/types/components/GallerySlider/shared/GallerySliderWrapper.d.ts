import React from "react";
import { IGallerySliderSharedProps } from "./GallerySliderPresentation";
interface IGallerySliderWrapperState {
    /** Index of the first slide which is displayed */
    currentSlide: number;
    /** Previous value of currentSlide */
    previousSlide: number;
    /** Number of slides to be displayed */
    slidesPerPage: number;
    currentPage: number;
    elementWidth: number;
    animation: boolean;
    mouseDownPositionX: number;
    mouseDownPositionY: number;
    mouseDownTimestamp: number;
    mouseMovePosition: number;
}
interface IGallerySliderWrapperProps extends IGallerySliderSharedProps {
}
export declare class GallerySliderWrapper extends React.Component<IGallerySliderWrapperProps, IGallerySliderWrapperState> {
    static defaultProps: Partial<IGallerySliderWrapperProps>;
    private someInnerElement;
    private outerElement;
    constructor(props: IGallerySliderWrapperProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    addSwipeEventListeners: () => void;
    removeSwipeEventListeners: () => void;
    getPageBySlide: (slide: number, slidesPerPage: number) => number;
    getSlideByPage: (page: number) => number;
    getMaxSlide: (slidesPerPage: number) => number;
    setPage: (page: number, event?: React.SyntheticEvent<HTMLElement>) => void;
    getScreenX(e: any): any;
    getScreenY(e: any): any;
    onMouseDown: (e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>) => void;
    onMouseMove: (e: any) => boolean;
    setNextPage: (e: React.SyntheticEvent<HTMLElement>) => void;
    setPreviousPage: (e: React.SyntheticEvent<HTMLElement>) => void;
    onMouseUp: (e: any) => void;
    getSlidesPerPage: (viewport: string) => number;
    updateSlideWidth: () => void;
    render(): React.JSX.Element;
}
export {};
