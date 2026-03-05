import { IIcon } from "@lsg/icons";
import React, { ReactNode } from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface ISnackbarPresentationProps extends IBasicPropsInternal {
    heading?: string;
    headlineSize?: "h5" | "h6";
    subline?: string;
    badgeIcon?: IIcon;
    badgeIconVariant?: "solid" | "outline";
    badgeColor?: "primary" | "highlight" | "supplementary" | "error" | "success" | "alert";
    illustration?: ReactNode;
    illustrationAlt?: string;
    iconLinks?: ReactNode;
    onClose?: () => void;
    ariaLabel?: string;
    time?: number;
    open?: boolean;
    role: "status" | "alert" | "dialog";
    showLargeIconBadge?: boolean;
    onFocusLoss?: () => void;
    containerDisplay?: "flex" | "block";
}
export declare const SnackbarPresentation: {
    (props: ISnackbarPresentationProps): React.JSX.Element;
    displayName: string;
};
