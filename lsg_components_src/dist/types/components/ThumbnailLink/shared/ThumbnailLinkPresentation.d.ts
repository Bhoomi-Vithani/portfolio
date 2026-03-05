import type { IIcon } from "@lsg/icons";
import React, { ReactNode } from "react";
import { IActionBaseProps } from "../../Action/shared/ActionPresentation";
export interface IThumbnailLinkSharedProps extends IActionBaseProps {
    label: ReactNode;
    icon?: IIcon;
    iconVariant?: "outline" | "solid";
    iconTitle?: string;
    thumbnailText?: string;
    thumbnailImgSrc?: string;
    size?: "small" | "regular";
    look?: "filled" | "clear" | "thick-border";
}
interface IThumbnailLinkPresentationOnlyProps {
}
interface IThumbnailLinkPresentationProps extends IThumbnailLinkSharedProps, IThumbnailLinkPresentationOnlyProps {
}
export declare const ThumbnailLinkPresentation: {
    ({ id, className, noMargin, isStencilHost, label, icon, iconVariant, iconTitle, thumbnailText, thumbnailImgSrc, look, size, ...otherProps }: IThumbnailLinkPresentationProps): React.JSX.Element;
    displayName: string;
};
export {};
