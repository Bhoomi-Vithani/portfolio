import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
import { IIconLinkWrapperProps } from "../../IconLink/shared/IconLinkWrapper";
export interface IIconLinkWrapperExtended extends Omit<IIconLinkWrapperProps, "label"> {
    label?: React.ReactNode;
    children?: string;
}
export interface ITableActionMenuProps extends IBasicPropsInternal {
    tableActionsProperties?: IIconLinkWrapperExtended[];
    rowActionsLook: "auto" | "menu-only" | "icons-only";
    tableRowIndex: number;
    isMobile?: boolean;
}
export declare const TableActionMenu: (props: ITableActionMenuProps) => React.JSX.Element;
