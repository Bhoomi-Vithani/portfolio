import React from "react";
import { IBasicPropsInternal } from "../../utils/IBasicPropsInternal";
export interface IMenulikeItemPresentation extends IBasicPropsInternal {
    hasMouseHover?: boolean;
    hasKeyboardFocus?: boolean;
    hasTabIndex?: boolean;
    ariaSelected?: boolean;
    disabled?: boolean;
    label?: string;
    id?: string;
    value?: string;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    onMouseOver?: () => void;
    role?: React.AriaRole;
    as?: "li" | "div";
    optionValue?: string;
}
export declare const MenulikeItemPresentation: React.ForwardRefExoticComponent<IMenulikeItemPresentation & React.RefAttributes<HTMLElement>>;
