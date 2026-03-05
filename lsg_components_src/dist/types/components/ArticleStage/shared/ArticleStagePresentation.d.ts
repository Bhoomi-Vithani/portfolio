import type { IIcon } from "@lsg/icons";
import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
import { IFocalPoint } from "../../Picture/shared/PicturePresentation";
export interface IArticleStagePresentationProps extends IBasicPropsInternal {
    helperText?: string;
    thumbIcon?: IIcon;
    thumbIconName?: string;
    thumbIconVariant?: "outline" | "solid";
    thumbIconTitle?: string;
    thumbText?: string;
    thumbImgSrc?: string;
    thumbHeadline?: string;
    thumbSubline?: string;
    thumbSublineAs?: string;
    pictureSource?: (React.SourceHTMLAttributes<HTMLSourceElement> & {
        focalPoint?: IFocalPoint;
    })[];
    pictureImgSrc: string;
    pictureCaption?: string;
    pictureAlt?: string;
    headlineOverline?: React.ReactNode;
    headlineOverlineAs?: string;
    headlineSubline?: React.ReactNode;
    headlineSublineAs?: string;
    headline?: React.ReactNode;
    headlineAs: string;
    manualHyphenation?: boolean;
}
export declare const ArticleStagePresentation: {
    ({ id, className, headline, headlineAs, headlineSubline, headlineSublineAs, headlineOverline, headlineOverlineAs, helperText, thumbIcon, thumbIconName, thumbIconVariant, thumbIconTitle, thumbText, thumbImgSrc, thumbHeadline, thumbSubline, thumbSublineAs, pictureCaption, pictureAlt, pictureImgSrc, pictureSource, noMargin, children, horizontalAlignment, manualHyphenation, }: IArticleStagePresentationProps): React.JSX.Element;
    displayName: string;
};
