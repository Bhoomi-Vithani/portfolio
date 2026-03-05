import React, { ReactNode } from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
import { IFocalPoint } from "../../Picture/shared/PicturePresentation";
export interface IStageSharedProps extends IBasicPropsInternal {
    headline: React.ReactNode;
    headlineAs?: string;
    overline?: React.ReactNode;
    overlineAs?: string;
    subline?: React.ReactNode;
    sublineAs?: string;
    button?: ReactNode;
    manualHyphenation?: boolean;
    backgroundImageImgSrc?: string;
    backgroundImageSource?: (React.SourceHTMLAttributes<HTMLSourceElement> & {
        focalPoint?: IFocalPoint;
    })[];
    backgroundImageFocalPoint?: IFocalPoint;
    backgroundImageAltText?: string;
    backgroundVideoSrc?: string;
    backgroundGradientDisabled?: boolean;
    theme?: "light" | "dark";
    nextTheme?: "light" | "dark";
    eyeCatcherAppearanceTime?: number;
    eyeCatcherText?: ReactNode;
    eyeCatcherTextLong?: ReactNode;
    eyeCatcherFontSize?: "small" | "medium" | "large" | "xlarge";
    eyeCatcherIncreaseWidth?: boolean;
    eyeCatcherId?: string;
    onScrollerClick?: () => void;
}
export interface IStagePresentationProps extends IStageSharedProps {
    viewport?: string;
    hideEyeCatcher: boolean;
    layout: "regular" | "breaking" | "breaking-full";
    eyeCatcherPosition?: any;
    eyeCatcherRef?: React.Ref<HTMLDivElement>;
    hostRef?: React.Ref<HTMLDivElement>;
    innerRef?: React.Ref<HTMLDivElement>;
    scrollerRef?: React.Ref<HTMLDivElement>;
    layoutRegularRef?: React.Ref<HTMLDivElement>;
    layoutBreakingRef?: React.Ref<HTMLDivElement>;
}
export declare const defaultProps: Partial<IStagePresentationProps>;
export declare const StagePresentation: {
    (props: IStagePresentationProps): React.JSX.Element;
    displayName: string;
};
