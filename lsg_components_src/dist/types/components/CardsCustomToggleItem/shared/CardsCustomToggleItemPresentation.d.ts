import React from "react";
import { ICardsCustomItemSharedProps } from "../../CardsCustomItem/shared/CardsCustomItemPresentation";
export interface ICardsCustomToggleItemSharedProps extends ICardsCustomItemSharedProps {
    type?: "radio" | "checkbox" | "switch";
    value?: boolean;
    invalid?: boolean;
    name?: string;
    onChange?: (value: boolean, name: string, event: React.SyntheticEvent<HTMLInputElement>) => void;
    title?: string;
    inputHtmlAttrs?: React.InputHTMLAttributes<HTMLInputElement> | Record<`data-${string}`, string | number | boolean>;
}
interface ICardsCustomToggleItemPresentationOnlyProps {
    onMenuMouseHoverChange?: (newHover: boolean) => void;
    onMenuKeyboardFocusChange?: (newFocus: boolean) => void;
    hasMenuMouseHover?: boolean;
    hasMenuKeyboardFocus?: boolean;
    onMouseHoverChange?: (newHover: boolean) => void;
    onKeyboardFocusChange?: (newFocus: boolean) => void;
    hasMouseHover?: boolean;
    hasKeyboardFocus?: boolean;
    isActive?: boolean;
}
interface ICardsCustomToggleItemPresentationProps extends ICardsCustomToggleItemSharedProps, ICardsCustomToggleItemPresentationOnlyProps {
}
export declare const CardsCustomToggleItemPresentation: {
    ({ id, contentTop, type, value, disabled, invalid, name, onChange, title, inputHtmlAttrs, onMouseHoverChange, onKeyboardFocusChange, hasKeyboardFocus, hasMouseHover, onMenuMouseHoverChange, onMenuKeyboardFocusChange, hasMenuMouseHover, hasMenuKeyboardFocus, ...props }: ICardsCustomToggleItemPresentationProps): React.JSX.Element;
    displayName: string;
};
export {};
