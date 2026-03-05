import React, { CSSProperties } from "react";
import { INavigationItem } from "../../../interfaces/NavigationTree";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
interface OnKeyDownHandlers {
    arrowUp?: (currentIndex: number, e: React.KeyboardEvent<HTMLLIElement>) => void;
    arrowRight?: (currentIndex: number, e: React.KeyboardEvent<HTMLLIElement>) => void;
    arrowLeft?: (currentIndex: number, e: React.KeyboardEvent<HTMLLIElement>) => void;
    arrowDown?: (currentIndex: number, e: React.KeyboardEvent<HTMLLIElement>) => void;
    escape?: (currentIndex: number, e: React.KeyboardEvent<HTMLLIElement>) => void;
}
export interface INavigationBlockPresentationProps extends IBasicPropsInternal {
    style?: CSSProperties;
    navigationTree?: INavigationItem[];
    navigationActionAs?: any;
    navigationAriaLabel?: string;
    clusterLabel?: string;
    startLevel?: "segment" | "topic" | "group" | "page";
    value?: string;
    activeElement?: HTMLElement;
    activeRef?: any;
    isProcessNavigation?: boolean;
    onChange?: (value: string, e: React.SyntheticEvent<HTMLElement>) => void;
    openObject?: Object;
    onOpenObjectChange?: (newOpenObject: Object) => void;
    expandAll?: boolean;
    noIndent?: boolean;
    alwaysShowIndicator?: boolean;
    groupsAlwaysHighlighted?: boolean;
    buttonRefs?: React.RefObject<HTMLElement>[];
    onKeyDownHandlers?: OnKeyDownHandlers;
    containerAs?: "div" | "nav";
}
interface IRef {
    focusFirstElement: () => void;
}
export declare const NavigationBlockPresentation: React.ForwardRefExoticComponent<INavigationBlockPresentationProps & React.RefAttributes<IRef>>;
export {};
