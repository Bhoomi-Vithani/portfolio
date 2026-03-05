import React from "react";
import { INavigationItem } from "../../../interfaces/NavigationTree";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IProcessNavigationPresentationProps extends IBasicPropsInternal {
    menuOpen?: boolean;
    isMobile?: boolean;
    onMenuOpenChange?: (newOpen: boolean) => void;
    navigationLabel?: string;
    navigationAriaLabel?: string;
    navigationTree?: INavigationItem[];
    navigationActionAs?: any;
    onClick?: (event: React.MouseEvent<HTMLElement>, name: string) => void;
    value?: string;
}
export declare const ProcessNavigationPresentation: {
    ({ id, className, noMargin, navigationTree, value, navigationActionAs, }: IProcessNavigationPresentationProps): React.JSX.Element;
    displayName: string;
};
