import React from "react";
import { INavigationTree } from "../../../interfaces/NavigationTree";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface ITabBarPresentationProps extends IBasicPropsInternal {
    navigationTree: INavigationTree[];
    navigationActionAs?: any;
    value: string;
    activeElement: HTMLElement;
    onChange?: (name: string, e: React.SyntheticEvent<HTMLElement>) => void;
    /** Function that is called after a new navigation bar item has been focussed by keyboard */
    onNewElementFocussed?: (newFocussed: HTMLElement, e: React.KeyboardEvent<HTMLElement>) => void;
    activeRef: any;
    innerRef: any;
    showArrowLeft?: boolean;
    showArrowRight?: boolean;
    onClickArrowLeft?: () => void;
    onClickArrowRight?: () => void;
    centeredLayout?: boolean;
    ariaLabel?: string;
    ariaLabelledBy?: string;
}
export declare const TabBarPresentation: {
    (props: ITabBarPresentationProps): React.JSX.Element;
    displayName: string;
};
