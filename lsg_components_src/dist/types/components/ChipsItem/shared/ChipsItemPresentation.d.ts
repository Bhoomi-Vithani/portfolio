import { IIcon } from "@lsg/icons";
import React, { JSX } from "react";
import { IActionBaseProps } from "../../Action/shared/ActionPresentation";
export interface IChipsItemSharedProps extends Omit<IActionBaseProps, "hasKeyboardFocus" | "hasMouseHover" | "onKeyboardFocusChange" | "onMouseHoverChange" | "htmlAttrs"> {
    label?: string;
    icon?: IIcon;
    iconAlignment?: "left" | "right";
    iconVariant?: "outline" | "solid";
    iconColor?: "default" | "primary" | "secondary" | "error" | "success" | "note" | "disabled" | "black" | "white" | "anthracite" | "primary-1" | "primary-2" | "secondary-1" | "secondary-2" | "secondary-3" | "secondary-4" | "secondary-5" | "secondary-6";
    onIconClick?: (event: React.MouseEvent<HTMLElement>, name: string) => void;
    badgeText?: string;
    htmlAttrs?: React.InputHTMLAttributes<HTMLInputElement> | React.ButtonHTMLAttributes<HTMLButtonElement> | React.AnchorHTMLAttributes<HTMLAnchorElement> | Record<`data-${string}`, string | number | boolean>;
    isHidden?: boolean;
    chipRef?: any;
    onKeyDown?: (ev: React.KeyboardEvent<HTMLElement>) => void;
    type?: "checkbox" | "radio" | "button" | "search";
    value?: boolean | string;
    name?: string;
    onChange?: (value: boolean | string, name: string, event: React.SyntheticEvent<HTMLElement>) => void;
    radioGroupCondensed?: boolean;
    isSelected?: boolean;
    dismissable?: boolean;
    onDismiss?: () => void;
    formHtmlAttrs?: React.FormHTMLAttributes<HTMLFormElement> | Record<`data-${string}`, string | number | boolean>;
    as?: keyof JSX.IntrinsicElements;
}
interface IChipsItemPresentationProps extends IChipsItemSharedProps {
    hasMouseHover?: boolean;
    hasKeyboardFocus?: boolean;
    onMouseHoverChange?: (newHover: boolean) => void;
    onKeyboardFocusChange?: (newFocus: boolean) => void;
}
export declare const ChipsItemPresentation: {
    ({ id: idProp, as, className, noMargin, label, icon: iconProp, iconVariant, iconColor, disabled, loading, nonInteractive, actionRef, onIconClick, hasKeyboardFocus, hasMouseHover, iconAlignment: iconAlignmentProp, isHidden, value, badgeText, type, radioGroupCondensed, htmlAttrs, isSelected, chipRef, dismissable, onDismiss, onChange, name, formHtmlAttrs, ...otherProps }: IChipsItemPresentationProps): JSX.Element;
    displayName: string;
};
export {};
