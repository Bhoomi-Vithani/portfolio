import type { IIcon } from "@lsg/icons";
import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export declare const ListContext: React.Context<number[]>;
export interface IListShareIconProps {
    /** Parameter: can be 'interaction___checkmark' to overwrite default icon */
    icon?: IIcon;
    /** Parameter: can be 'primary', 'secondary' to the item selectively, but it can be overwritten by List element. List element is first serve */
    iconColor?: "default" | "error" | "success" | "note" | "primary-1" | "primary-2" | "secondary-1" | "secondary-2" | "secondary-3" | "secondary-4" | "secondary-5" | "secondary-6";
    iconLabel?: string;
}
export interface IListPresentationProps extends IBasicPropsInternal, IListShareIconProps {
    isOrdered?: boolean;
    orderedMode?: "numeric" | "alphabetic";
    textSize?: "copy-text" | "helper-text" | "lead-text";
}
export declare const ListPresentation: {
    ({ id, children, className, noMargin, isOrdered, orderedMode, icon, iconColor, iconLabel, textSize, }: IListPresentationProps): React.JSX.Element;
    displayName: string;
};
