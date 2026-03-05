import type { IIcon } from "@lsg/icons";
import React, { JSX } from "react";
import { IActionBaseProps } from "../../Action/shared/ActionPresentation";
export interface IActionButtonPresentationProps extends Omit<IActionBaseProps, "hasTabIndex" | "hasMouseHover" | "onMouseHoverChange" | "hasKeyboardFocus" | "onKeyboardFocusChange" | "onKeyDown" | "onKeyUp" | "clicked" | "onTouchStart" | "onTouchEnd" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp"> {
    icon?: IIcon;
    label: React.ReactNode;
    appearance?: "no-text";
    iconName?: string;
    iconVariant?: "outline" | "solid";
    color?: "primary" | "secondary";
    floating?: boolean;
    loading?: boolean;
    as?: keyof JSX.IntrinsicElements;
}
export declare const ActionButtonPresentation: {
    (props: IActionButtonPresentationProps): JSX.Element;
    displayName: string;
};
