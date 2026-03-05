import React from "react";
import { IBasicPropsInternal } from "../../utils/IBasicPropsInternal";
import { ISelectOptionPresentation } from "../_SelectOption/SelectOptionPresentation";
export interface ISelectFlyoutPresentationProps extends IBasicPropsInternal {
    name?: string;
    emptyListLabel: string;
    options: ISelectOptionPresentation[];
    value: string;
    focussedValue?: string;
    hoveredValue?: string;
    onChange: (value: string, name: string, event: React.SyntheticEvent<HTMLElement>) => void;
    onMouseOver: (value: string) => void;
    focussedRef?: any;
    onKeyDown: (ev: React.KeyboardEvent<HTMLElement>) => void;
    toggleElement?: HTMLElement;
    toggleContainerElement?: HTMLElement;
    hostRef?: any;
    isToggleElmWidth?: boolean;
    hasTabIndex?: boolean;
    open: boolean;
    onCloseClick: (ev?: any) => void;
    role?: string;
    ariaLabel?: string;
    ariaActivedescendant?: string;
    autocomplete?: boolean;
}
export declare const SelectFlyoutPresentation: {
    ({ id, className, noMargin, name, emptyListLabel, options, onChange, onMouseOver, focussedValue, hoveredValue, value, hostRef, focussedRef, onKeyDown, isToggleElmWidth, hasTabIndex, toggleElement, toggleContainerElement, open, onCloseClick, role, ariaLabel, autocomplete, }: ISelectFlyoutPresentationProps): React.JSX.Element;
    displayName: string;
};
