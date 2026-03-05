import { IIcon } from "@lsg/icons";
import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IStatusIndicatorPresentation extends IBasicPropsInternal {
    statusColor?: "inactive" | "success" | "warning" | "error" | "neutral";
    icon?: IIcon;
    tag?: string;
    tagHidden?: boolean;
    helperText?: string;
    tagRole?: "none" | "status";
}
export declare const StatusIndicatorPresentation: {
    ({ id, statusColor, icon, tag, tagHidden, tagRole, noMargin, className, helperText, }: IStatusIndicatorPresentation): React.JSX.Element;
    displayName: string;
};
