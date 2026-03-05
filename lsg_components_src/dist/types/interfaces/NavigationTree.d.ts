import type { IIcon } from "@lsg/icons";
import { ReactNode } from "react";
export interface IBaseNavigationItem {
    id?: string;
    label: ReactNode;
    name?: string;
    disabled?: boolean;
    completed?: boolean;
    collapsible?: boolean;
    open?: boolean;
    defaultOpen?: boolean;
    href?: string;
    htmlAttrs?: React.AnchorHTMLAttributes<HTMLAnchorElement> | React.ButtonHTMLAttributes<HTMLButtonElement>;
    icon?: IIcon;
    iconColor?: any;
    iconVariant?: "outline" | "solid";
    onClick?: (event: any, name: string) => void;
    actionAs?: any;
    actionProps?: any;
}
export interface INavigationTree extends IBaseNavigationItem {
    children?: INavigationTree[];
    targetId?: string;
}
export interface INavigationItem extends IBaseNavigationItem {
    children?: INavigationItem[];
}
export interface IRichNavigationItem extends INavigationItem {
    item?: number;
    path?: string;
    level?: number;
    key?: string;
    targetValue?: string;
}
declare const _default: {};
export default _default;
