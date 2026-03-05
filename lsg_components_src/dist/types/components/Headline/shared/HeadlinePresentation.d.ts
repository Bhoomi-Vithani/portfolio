import type { IIcon } from "@lsg/icons";
import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IHeadlineProps extends IBasicPropsInternal {
    size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    as?: string;
    overline?: any;
    overlineAs?: string;
    subline?: any;
    sublineAs?: string;
    balanced?: boolean;
    lineLength?: "default" | "wide";
    actions?: any;
    centeredLayout?: boolean;
    manualHyphenation?: boolean;
    badgeText?: string;
    badgeIcon?: IIcon;
    badgeIconVariant?: "solid" | "outline";
    badgeColor?: "primary" | "highlight" | "supplementary" | "optional" | "inactive" | "error" | "success" | "alert" | "secondary-1" | "secondary-2" | "secondary-3" | "secondary-4" | "secondary-5" | "secondary-6";
    badgePosition?: "overline" | "subline";
    htmlAttrs?: React.HTMLAttributes<HTMLElement> | Record<`data-${string}`, string | number | boolean>;
}
export declare const HeadlinePresentation: {
    ({ as, children, className, id: idProp, noMargin, overline, overlineAs, subline, sublineAs, balanced, lineLength, size, centeredLayout, horizontalAlignment, htmlAttrs, actions, manualHyphenation, badgeText, badgeIcon, badgeIconVariant, badgeColor, badgePosition, }: IHeadlineProps): React.JSX.Element;
    displayName: string;
};
