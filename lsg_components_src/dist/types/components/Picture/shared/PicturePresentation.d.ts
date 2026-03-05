import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IFocalPoint {
    offsetLeft: number;
    offsetTop: number;
}
export type PictureInputSourceType = string | {
    default: string;
    xs?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
};
export interface IPicturePresentationProps extends IBasicPropsInternal {
    alt: string;
    source?: (React.SourceHTMLAttributes<HTMLSourceElement> & {
        focalPoint?: IFocalPoint;
    })[];
    imgSrc?: string;
    src?: PictureInputSourceType;
    asBackgroundImage?: boolean;
    asInline?: boolean;
    focalPoint?: IFocalPoint;
    ratio?: "16-9" | "21-9" | "4-3" | "1-1" | "3-4" | "9-16" | "full-height";
    caption?: string;
    imgWidth?: number;
    imgHeight?: number;
    maxWidth?: number;
    /** @ignore */
    style?: React.CSSProperties;
    imgAttrs?: React.ImgHTMLAttributes<HTMLImageElement>;
    yellowElevator?: boolean;
}
export declare const PicturePresentation: {
    (props: IPicturePresentationProps): React.JSX.Element;
    displayName: string;
};
