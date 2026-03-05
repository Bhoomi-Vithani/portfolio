import type { IIcon } from "@lsg/icons";
import React, { ReactNode } from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
import { IFocalPoint } from "../../Picture/shared/PicturePresentation";
export interface IProductStageSharedProps extends IBasicPropsInternal {
    headline: React.ReactNode;
    headlineAs: string;
    overline?: React.ReactNode;
    overlineAs?: string;
    subline?: React.ReactNode;
    sublineAs?: string;
    content?: React.ReactNode;
    foregroundImageSrc?: string;
    backgroundImageSource?: (React.SourceHTMLAttributes<HTMLSourceElement> & {
        focalPoint?: IFocalPoint;
    })[];
    backgroundImageImgSrc?: string;
    backgroundImageFocalPoint?: IFocalPoint;
    backgroundColor?: "primary" | "medium" | "light";
    alt?: string;
    button?: ReactNode;
    /** @deprecated (2024-07-03) Scroller is removed from component.  */
    onScrollerClick?: () => void;
    manualHyphenation?: boolean;
    badgeText?: string;
    badgeIcon?: IIcon;
    badgeColor?: "highlight" | "supplementary" | "optional";
    badgePosition?: "overline" | "subline";
}
export interface IProductStagePresentationProps extends IProductStageSharedProps {
    buttonRef?: React.MutableRefObject<HTMLDivElement>;
    buttonSticky?: boolean;
}
export declare const defaultProps: Partial<IProductStagePresentationProps>;
export declare const ProductStagePresentation: {
    ({ id, className, headline, headlineAs, overline, overlineAs, subline, sublineAs, content, backgroundColor, backgroundImageImgSrc, backgroundImageSource, backgroundImageFocalPoint, badgeText, badgeIcon, badgeColor, badgePosition, foregroundImageSrc, noMargin, button, buttonRef, buttonSticky, manualHyphenation, alt, }: IProductStagePresentationProps): React.JSX.Element;
    displayName: string;
};
