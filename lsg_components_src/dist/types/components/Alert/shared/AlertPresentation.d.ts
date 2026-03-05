import type { IIcon } from "@lsg/icons";
import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IAlertSharedProps extends IBasicPropsInternal {
}
interface IAlertPresentationOnlyProps {
    text: string;
    look?: "primary" | "secondary" | "error" | "success" | "alert";
    altStyle?: boolean;
    fitWidthToContent?: boolean;
    icon?: IIcon;
    onClose?: (newValue: string) => void;
}
interface IAlertPresentationProps extends IAlertSharedProps, IAlertPresentationOnlyProps {
}
export declare const AlertPresentation: {
    ({ id, className, noMargin, isStencilHost, text, look, altStyle, fitWidthToContent, icon, onClose, }: IAlertPresentationProps): React.JSX.Element;
    displayName: string;
};
export {};
