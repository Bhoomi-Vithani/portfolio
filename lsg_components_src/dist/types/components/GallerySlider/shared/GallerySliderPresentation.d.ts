import React, { ReactNode } from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IGallerySliderSharedProps extends IBasicPropsInternal {
    initialSlide?: number;
    onChange?: (openIndex: number, event: React.SyntheticEvent<HTMLElement>) => void;
    slidesToDisplay?: number;
    children?: ReactNode;
    appearance?: "default" | "cards";
    ariaLabel?: string;
    ariaRoleDescription?: string;
    ariaLabelledBy?: string;
    pagination?: {
        itemAriaLabelFormatter?: (page?: number, isSelected?: boolean) => string;
        previousButtonAriaLabel?: string;
        nextButtonAriaLabel?: string;
    };
}
interface IGallerySliderPresentationOnlyProps {
    animation: boolean;
    outerRef: any;
    someElementRef: any;
    dotCount: number;
    activeDot: number;
    translate: any;
    animationOffset: number;
    animationDirection: number;
    /** Index of the first slide which is displayed */
    currentSlide: number;
    slidesPerPage: number;
    onMouseDown: (e: any) => void;
    onDragStart: (e: any) => void;
    handlePointClick: (e: any) => void;
    handleArrowRightClick: (e: any) => void;
    handleArrowLeftClick: (e: any) => void;
    mouseDownPositionX: number;
    mouseDownPositionY: number;
    mouseDownTimestamp: number;
    mouseMovePosition: number;
}
export interface GallerySliderPresentationProps extends IGallerySliderSharedProps, IGallerySliderPresentationOnlyProps {
}
export declare const GallerySliderPresentation: {
    ({ id: idProp, animation, animationOffset, animationDirection, translate, slidesPerPage, children, className, activeDot, dotCount, noMargin, isStencilHost, outerRef, onMouseDown, onDragStart, someElementRef, handlePointClick, handleArrowLeftClick, handleArrowRightClick, currentSlide, slidesToDisplay, appearance, ariaLabel, ariaRoleDescription, ariaLabelledBy, pagination: { itemAriaLabelFormatter, previousButtonAriaLabel, nextButtonAriaLabel }, }: GallerySliderPresentationProps): React.JSX.Element;
    displayName: string;
};
export {};
