import React from "react";
interface IA11yMeaningfulLinkContext {
    onMouseHoverChange: (newHover: boolean) => void;
    onKeyboardFocusChange: (newFocus: boolean) => void;
    onMouseDown: (ev: React.MouseEvent<HTMLElement>) => void;
    onMouseUp: (ev: React.MouseEvent<HTMLElement>) => void;
    onMouseLeave: (ev: React.MouseEvent<HTMLElement>) => void;
    onKeyDown: (ev: React.KeyboardEvent<HTMLElement>) => void;
    onKeyUp: (ev: React.KeyboardEvent<HTMLElement>) => void;
    onTouchStart?: (ev: React.TouchEvent<HTMLElement>) => void;
    onTouchEnd?: (ev: React.TouchEvent<HTMLElement>) => void;
    hasMouseHover?: boolean;
    hasKeyboardFocus?: boolean;
    isActive?: boolean;
    disabled: boolean;
    loading: boolean;
    type?: "link" | "label";
    htmlFor?: string;
}
export declare const A11yMeaningfulLabelContext: React.Context<IA11yMeaningfulLinkContext>;
export {};
