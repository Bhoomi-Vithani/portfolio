import type { IIcon } from "@lsg/icons";
import React, { ReactNode } from "react";
import { IActionBaseProps } from "../../Action/shared/ActionPresentation";
export interface IIconLinkPresentationProps extends IActionBaseProps {
    label: React.ReactNode;
    iconName?: string;
    icon?: IIcon;
    /** @deprecated - Use appearance instead. */
    look?: "left" | "right" | "no-icon" | "no-text";
    /** defines the look of the icon and the text within the link */
    appearance?: "left" | "right" | "no-icon" | "no-text";
    /** set the direction for the hover animation */
    hoverAnimation?: "left" | "right";
    iconOnHover?: boolean;
    iconColor?: "default" | "primary" | "secondary" | "tertiary" | "error" | "success" | "note" | "disabled" | "black" | "white" | "anthracite" | "primary-1" | "primary-2" | "secondary-1" | "secondary-2" | "secondary-3" | "secondary-4" | "secondary-5" | "secondary-6";
    iconVariant?: "outline" | "solid";
    color?: "primary" | "secondary";
    inactive?: boolean;
    transform?: "rotate" | undefined;
    textEllipsis?: boolean;
    onMouseDown?: (ev: React.MouseEvent<HTMLElement>) => void;
    svgAttrs?: Omit<React.SVGAttributes<SVGSVGElement>, "color">;
    innerRef?: any;
    badge?: ReactNode;
    actionAs?: any;
    actionProps?: any;
    inline?: boolean;
    as?: keyof JSX.IntrinsicElements;
    size?: "legacy" | "xsmall";
    selected?: boolean;
}
export declare const IconLinkPresentation: {
    ({ label, iconName, icon, look: lookProp, hoverAnimation: directionProp, loading, loadingAriaLabel, iconColor: iconColorProp, iconVariant, iconOnHover, color, inactive, transform, disabled, actionRef, innerRef, hasKeyboardFocus, hasMouseHover, svgAttrs, className, htmlAttrs: htmlAttrsProp, textEllipsis, clicked, badge, containerRef, inline, nonInteractive, horizontalAlignment, size, as, appearance, role, selected, id: idProp, ...otherProps }: IIconLinkPresentationProps): React.JSX.Element;
    displayName: string;
};
