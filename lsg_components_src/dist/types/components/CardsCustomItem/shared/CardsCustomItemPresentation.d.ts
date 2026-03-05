import React, { ReactNode } from "react";
import { INavigationItem } from "../../../interfaces";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface ICardsCustomItemSharedProps extends IBasicPropsInternal {
    disabled?: boolean;
    loading?: boolean;
    loadingText?: string;
    centeredLayout?: boolean;
    menuNavigationTree?: INavigationItem[];
    pictureTop?: ReactNode;
    pictureBottom?: ReactNode;
    contentTop?: ReactNode;
    contentBottom?: ReactNode;
    spacing?: "large";
    itemsPerRow?: 2 | 3 | 4 | 6;
    gridColumnSize?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    appearance?: "default" | "placeholder";
    as?: "li" | "div";
    height?: number;
    verticalAlign?: "top" | "center";
    spinnerSize?: number;
    divider?: "top" | "bottom" | "both";
}
interface ICardsCustomItemPresentationOnlyProps {
    onMenuMouseHoverChange?: (newHover: boolean) => void;
    onMenuKeyboardFocusChange?: (newFocus: boolean) => void;
    onOpenChange?: (newOpen: boolean) => void;
    hasMenuMouseHover?: boolean;
    hasMenuKeyboardFocus?: boolean;
    hasMouseHover?: boolean;
    hasKeyboardFocus?: boolean;
    isActive?: boolean;
    menuOpen?: boolean;
}
interface ICardsCustomItemPresentationProps extends ICardsCustomItemSharedProps, ICardsCustomItemPresentationOnlyProps {
}
export declare const CardsCustomItemPresentation: {
    ({ id, as, children, className, noMargin, contentBottom, contentTop, pictureBottom, pictureTop, itemsPerRow, hasMouseHover, hasKeyboardFocus, isActive, centeredLayout, spacing, menuNavigationTree, onMenuMouseHoverChange, onMenuKeyboardFocusChange, onOpenChange, menuOpen, hasMenuMouseHover, hasMenuKeyboardFocus, disabled, loading, loadingText, appearance, gridColumnSize, height, verticalAlign, spinnerSize, divider, }: ICardsCustomItemPresentationProps): React.JSX.Element;
    displayName: string;
};
export {};
