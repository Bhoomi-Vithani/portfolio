import type { IIcon } from "@lsg/icons";
import React from "react";
import { IBasicPropsInternal } from "../../../../utils/IBasicPropsInternal";
export interface IStepperItemProps extends IBasicPropsInternal {
    iconName?: string;
    icon?: IIcon;
    headline: string;
    headlineAs: string;
    overline?: string;
    iconSize?: "medium" | "large";
    iconColor?: "default" | "primary";
    gridColumnSize?: 3 | 4 | 5;
    centeredLayout?: boolean;
}
export declare const StepperItemPresentation: {
    ({ children, noMargin, className, iconName, icon, headline, overline, headlineAs, iconSize, gridColumnSize, centeredLayout, iconColor, }: IStepperItemProps): React.JSX.Element;
    displayName: string;
};
