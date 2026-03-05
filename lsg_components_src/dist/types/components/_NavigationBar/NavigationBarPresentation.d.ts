import React from "react";
import { INavigationTree } from "../../interfaces";
import { IBasicPropsInternal } from "../../utils/IBasicPropsInternal";
interface INavigationBarPresentationProps extends IBasicPropsInternal {
    navigationTree: INavigationTree[] | any[];
    /** The aria label for the navigation bar. If given, the wrapper element is a nav, else a div. */
    navigationAriaLabel?: string;
    navigationActionAs?: any;
    /** Value for the menu item that gets the marker for the active page */
    value: string;
    /** Value of the menu item that is currently expanded. Subtrees other than those that contain value and expandedValue are collapsed. */
    expandedValue?: string;
    /** Value in the navigation tree deeper down that is active and can be changed with keyboard arrows */
    activeValue?: string;
    onChange?: (name: string, e: React.SyntheticEvent<HTMLElement>) => void;
    /** Function that is called after a new navigation bar item has been focussed by keyboard */
    onNewElementFocussed?: (newFocussed: HTMLElement, e: React.KeyboardEvent<HTMLElement>) => void;
    activeRef?: any;
    size?: "menu" | "segment-bar" | "meta-bar" | "tab-bar";
    centeredLayout?: boolean;
}
export declare const NavigationBarPresentation: {
    (props: INavigationBarPresentationProps): React.JSX.Element;
    displayName: string;
};
export {};
