import type { IIcon } from "@lsg/icons";
import React, { ReactNode } from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
interface IBannerMessagePresentationRef {
    focus: () => void;
}
export interface IBannerMessagePresentationProps extends IBasicPropsInternal {
    heading?: string;
    headlineSize?: "h5" | "h6";
    headlineAs: string;
    overline?: string;
    subline?: string;
    role?: string;
    isCollapsible?: boolean;
    isOpen?: boolean;
    badgeIcon?: IIcon;
    badgeIconVariant?: "solid" | "outline";
    showLargeIconBadge?: boolean;
    illustration?: ReactNode;
    illustrationAltText?: string;
    badgeText?: string;
    badgeColor?: "primary" | "highlight" | "supplementary" | "optional" | "inactive" | "error" | "success" | "alert";
    isVisible?: boolean;
    content?: ReactNode;
    as?: "div" | "aside";
}
export declare const BannerMessagePresentation: React.ForwardRefExoticComponent<IBannerMessagePresentationProps & React.RefAttributes<IBannerMessagePresentationRef>>;
export {};
