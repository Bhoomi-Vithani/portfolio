import React from "react";
import { INavigationItem } from "../../../interfaces";
import { useMenu } from "../../../utils/Hooks";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
interface ICardsMenu extends IBasicPropsInternal {
    buttonId?: string;
    menuCallbacks?: ReturnType<typeof useMenu>;
    navigationTree: INavigationItem[];
    onMouseHoverChange?: (newHover: boolean) => void;
    onKeyboardFocusChange?: (newFocus: boolean) => void;
    hasMouseHover?: boolean;
    hasKeyboardFocus?: boolean;
    disabled?: boolean;
    setOpen?: (newOpen: boolean) => void;
    menuOpen?: boolean;
}
export declare const CardsMenu: (props: ICardsMenu) => React.JSX.Element;
export {};
