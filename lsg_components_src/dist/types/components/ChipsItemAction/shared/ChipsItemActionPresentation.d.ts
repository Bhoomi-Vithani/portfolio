import { IIcon } from "@lsg/icons";
import React, { Ref } from "react";
import { IButtonBaseProps } from "../../Button/Button";
export interface IChipsItemInternalBaseProps {
    label: string;
    appearance?: "left" | "right" | "no-text";
    name?: string;
    as?: "div" | "li";
    badgeText?: string;
    icon?: IIcon;
    iconVariant?: "outline" | "solid";
    iconInteractive?: boolean;
}
export interface IChipsItemActionPresentationProps extends IChipsItemInternalBaseProps, Omit<IButtonBaseProps, "disabled" | "a11yMeaningfulLabel" | "nonInteractive" | "as"> {
    onClick?: (event: React.MouseEvent<HTMLElement>, name: string) => void;
    actionAs?: any;
    actionProps?: any;
    actionRef?: Ref<HTMLElement>;
    isSelected?: boolean;
    clearIcon?: boolean;
    onResetFilter?: (event: React.MouseEvent<HTMLElement>, name: string) => void;
    noMargin?: boolean;
    onFocusLoss?: () => void;
}
export interface ChipsItemActionHandle {
    focus: () => void;
    chipContainerRef: () => HTMLElement;
}
export declare const ChipsItemActionPresentation: React.ForwardRefExoticComponent<IChipsItemActionPresentationProps & React.RefAttributes<HTMLElement | ChipsItemActionHandle>>;
