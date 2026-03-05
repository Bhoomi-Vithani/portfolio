import React from "react";
import { IPicturePresentationProps } from "../PicturePresentation";
export interface IPictureBackgroundPresentationProps extends Omit<IPicturePresentationProps, "asBackgroundImage" | "src"> {
    viewportSource: string;
    imgSrc: string;
}
export declare const PictureBackgroundPresentation: {
    ({ id, children, className, noMargin, isStencilHost, focalPoint, style, viewportSource, }: IPictureBackgroundPresentationProps): React.JSX.Element;
    displayName: string;
};
