import type { IIcon } from "@lsg/icons";
import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IThumbnailProps extends IBasicPropsInternal {
    icon?: IIcon;
    iconName?: string;
    iconVariant?: "outline" | "solid";
    look?: "filled" | "clear" | "thick-border";
    iconTitle?: string;
    text?: string;
    src?: string;
    imgAltText?: string;
    /** Experimental. Use case does not exist anymore. Don't adopt in lsg.components.  */
    size?: "small" | "regular";
    htmlAttrs?: React.HTMLAttributes<HTMLElement> | Record<`data-${string}`, string | number | boolean>;
}
export declare const ThumbnailPresentation: {
    ({ id: idProp, className, icon, iconName, iconVariant, iconTitle, text, src, imgAltText, htmlAttrs, noMargin, size, look, }: IThumbnailProps): React.JSX.Element;
    displayName: string;
};
