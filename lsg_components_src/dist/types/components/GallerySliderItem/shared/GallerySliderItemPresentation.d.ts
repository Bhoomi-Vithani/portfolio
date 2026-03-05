import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
import { IFocalPoint } from "../../Picture/shared/PicturePresentation";
export interface IGallerySliderItemPresentationProps extends IBasicPropsInternal {
    pictureAlt?: string;
    pictureSource?: (React.SourceHTMLAttributes<HTMLSourceElement> & {
        focalPoint?: IFocalPoint;
    })[];
    pictureImgSrc?: string;
    pictureImgAttrs?: React.ImgHTMLAttributes<HTMLImageElement>;
    appearance?: "cards" | "default";
    ariaLabel?: string;
    ariaRoleDescription?: string;
    ariaLabelledBy?: string;
}
export declare const GallerySliderItemPresentation: {
    ({ id, children, className, noMargin, isStencilHost, pictureAlt, pictureSource, pictureImgSrc, pictureImgAttrs, appearance, ariaLabel, ariaRoleDescription, ariaLabelledBy, }: IGallerySliderItemPresentationProps): React.JSX.Element;
    displayName: string;
};
