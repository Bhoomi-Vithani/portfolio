import React from "react";
import { IBasicPropsInternal } from "../../utils/IBasicPropsInternal";
export interface ISelectOptionPresentation extends IBasicPropsInternal {
    hasMouseHover?: boolean;
    hasKeyboardFocus?: boolean;
    ariaSelected?: boolean;
    disabled?: boolean;
    label?: string;
    id?: string;
    value?: string;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    onMouseOver?: () => void;
    optionValue?: string;
}
export declare const SelectOptionPresentation: React.ForwardRefExoticComponent<ISelectOptionPresentation & React.RefAttributes<HTMLElement>>;
