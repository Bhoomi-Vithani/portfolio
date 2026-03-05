import type { IIcon } from "@lsg/icons";
import React, { ReactNode } from "react";
import type { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IIconPresentationProps extends IBasicPropsInternal {
    name?: string;
    icon?: IIcon;
    hover?: boolean;
    color?: "default" | "inherit" | "primary" | "secondary" | "tertiary" | "error" | "success" | "note" | "disabled" | "noninteractive" | "black" | "white" | "anthracite" | "primary-1" | "primary-2" | "secondary-1" | "secondary-2" | "secondary-3" | "secondary-4" | "secondary-5" | "secondary-6";
    size?: "xsmall" | "small" | "medium" | "large" | "legacy-reduced";
    variant?: "solid" | "outline";
    transform?: "rotate";
    svgAttrs?: Omit<React.SVGAttributes<SVGSVGElement>, "color">;
    title?: string | React.ReactNode;
    inline?: boolean;
    badge?: ReactNode;
}
export declare const IconPresentation: {
    ({ icon, transform, name, id, size, variant, color, hover, svgAttrs, title, inline, className, noMargin, badge, horizontalAlignment, }: IIconPresentationProps): React.JSX.Element;
    displayName: string;
};
