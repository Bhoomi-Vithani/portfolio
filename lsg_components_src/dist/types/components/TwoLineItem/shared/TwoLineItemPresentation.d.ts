import type { IIcon } from "@lsg/icons";
import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface ITwoLineItemPresentationProps extends IBasicPropsInternal {
    icon?: IIcon;
    iconName?: string;
    iconVariant?: "outline" | "solid";
    iconTitle?: string;
    text?: string;
    src?: string;
    label: string | React.ReactNode;
    appearance?: "no-text";
    subline?: string | React.ReactNode;
    sublineAs?: string;
    centeredLayout?: boolean;
    manualHyphenation?: boolean;
    badgeText?: string;
    badgeIcon?: IIcon;
    badgeIconVariant?: "solid" | "outline";
    badgeColor?: "primary" | "highlight" | "supplementary" | "error" | "success" | "alert";
    badgeScreenReaderLabel?: string;
    sublineId?: string;
    badgeId?: string;
    labelAs?: string;
    loading?: boolean;
    loadingAriaLabel?: string;
}
export declare const TwoLineItemPresentation: {
    (props: ITwoLineItemPresentationProps): React.JSX.Element;
    displayName: string;
};
