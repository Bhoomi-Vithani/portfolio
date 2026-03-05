import React from "react";
import { IActionBaseProps } from "../../Action/shared/ActionPresentation";
export interface ITeaserPresentationProps extends Omit<IActionBaseProps, "disabled" | "clicked" | "loading"> {
    headline?: string;
    headlineSize?: "h4" | "h5";
    headlineAs: string;
    overline?: any;
    overlineAs?: string;
    subline?: any;
    sublineAs?: any;
    imgSrc?: string;
    imgAlt?: string;
    imageRatio?: "16-9" | "21-9";
    as?: string;
    onCLick?: (event: React.MouseEvent<HTMLElement>, name: string) => void | undefined;
    linkLabel?: string;
}
export declare const TeaserPresentation: {
    ({ children, id, className, noMargin, headline, headlineSize, headlineAs, overline, overlineAs, subline, sublineAs, imgSrc, imgAlt, imageRatio, actionRef, href, as, onClick, htmlAttrs, actionAs, actionProps, }: ITeaserPresentationProps): React.JSX.Element;
    displayName: string;
};
