import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IFocalPoint {
    offsetLeft: number;
    offsetTop: number;
}
interface IPictureProps extends IBasicProps {
    /** Alternative text for the image (required). */
    alt: string;
    /** Array of objects that have the format of the `<source>` element. */
    source?: (React.SourceHTMLAttributes<HTMLSourceElement> & {
        focalPoint?: IFocalPoint;
    })[];
    /** src attribute of the `<img>` element (required). Is used as a fallback for browsers that do not support the picture element.  */
    imgSrc?: string;
    /**
     * @deprecated Use the props source and imgSrc instead.
     * Image source. Either just string or object
     * { default: *default/fallbackImageUrl*, *xs: *urlForXsViewport*, sm: *...*, md: *...*, lg: *...*, xl: *...*, }
     */
    src?: string | {
        default: string;
        xs?: string;
        sm?: string;
        md?: string;
        lg?: string;
        xl?: string;
    };
    /** If set to true, no `<img />` tag will be used. Instead a div container with the img provided in src is set as background. */
    asBackgroundImage?: boolean;
    /** Whether the element will be styled as display: inline. */
    asInline?: boolean;
    /**
     * Focal Point is set to the most interesting feature in the image. The point will be placed in the center if the
     * image needs to be cropped.
     */
    focalPoint?: IFocalPoint;
    /** @deprecated use focalPoint instead */
    backgroundFocalPoint?: IFocalPoint;
    /** If set, the image is cropped to ensure one of the provided ratios. */
    ratio?: "16-9" | "21-9" | "4-3" | "1-1" | "3-4" | "9-16" | "full-height";
    /** Caption below the image. Only available when Picture is not set `asBackgroundImage`. */
    caption?: string;
    /** Width of the `<img />`. */
    imgWidth?: number;
    /** Height of the `<img />`. */
    imgHeight?: number;
    /** Max-width of the `<img />`. */
    maxWidth?: number;
    /** @ignore */
    style?: React.CSSProperties;
    /** Additional attributes for the `<img>` element inside the picture. */
    imgAttrs?: React.ImgHTMLAttributes<HTMLImageElement>;
    /** Shows a yellow surface layering on top of each image. */
    yellowElevator?: boolean;
}
declare const Picture: {
    ({ focalPoint, backgroundFocalPoint, ...props }: IPictureProps): React.JSX.Element;
    displayName: string;
};
export { Picture, IFocalPoint, IPictureProps };
