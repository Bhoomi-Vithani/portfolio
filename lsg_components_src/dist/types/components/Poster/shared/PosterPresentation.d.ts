import React from "react";
import type { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IPosterPresentationProps extends IBasicPropsInternal {
    imageSrc?: string;
    title?: string;
    description?: string;
    backgroundColor?: "neutral1" | "neutral2" | "neutral3" | "neutral4" | "neutral5" | "neutral6" | "neutral7" | "neutral8" | "secondary-1" | "secondary-2" | "secondary-3" | "secondary-4" | "secondary-5" | "secondary-6";
    backgroundImage?: string;
    blurredBackground?: boolean;
    badgeText?: string;
    badgeIcon?: any;
    badgeIconVariant?: "solid" | "outline";
    headlineSize: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    headlineAs: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
export declare const PosterPresentation: (props: IPosterPresentationProps) => React.JSX.Element;
