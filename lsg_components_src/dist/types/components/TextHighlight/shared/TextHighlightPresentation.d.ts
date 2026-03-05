import { IIcon } from "@lsg/icons";
import React, { ReactNode } from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface ITextHighlightPresentationProps extends IBasicPropsInternal {
    headline?: string;
    subline?: string;
    isLongText?: boolean;
    noQuotes?: boolean;
    text: string;
    thumbIcon?: IIcon;
    thumbIconName?: string;
    thumbIconVariant?: "outline" | "solid";
    thumbIconTitle?: string;
    thumbText?: string;
    thumbImgSrc?: string;
    iconLinks?: ReactNode;
    centeredLayout?: boolean;
    manualHyphenation?: boolean;
}
export declare const defaultProps: Partial<ITextHighlightPresentationProps>;
export declare const TextHighlightPresentation: {
    ({ id, className, noMargin, headline, subline, isLongText, noQuotes, text, thumbIcon, thumbIconName, thumbIconVariant, thumbIconTitle, thumbText, thumbImgSrc, iconLinks, centeredLayout, manualHyphenation, }: ITextHighlightPresentationProps): React.JSX.Element;
    displayName: string;
};
