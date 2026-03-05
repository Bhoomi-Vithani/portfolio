import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IThemePresentationProps extends IBasicPropsInternal {
    color?: "light" | "dark" | "medium" | "elevated" | "contrast" | "hover" | "brand";
    componentContext?: boolean;
    componentName?: string;
}
export declare const getThemeChildrenClass: (color: IThemePresentationProps["color"], component?: string) => string;
export declare const getThemeBackgroundClass: (color: IThemePresentationProps["color"], component?: string) => string;
export declare const getThemeClass: (color: IThemePresentationProps["color"], component?: string) => string;
export declare const ThemePresentation: {
    ({ id, children, noMargin, className, color, componentContext, componentName, }: IThemePresentationProps): React.JSX.Element;
    displayName: string;
};
