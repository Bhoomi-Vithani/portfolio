import React from "react";
import { IIconLinkGroupPresentationProps } from "./IconLinkGroupPresentation";
export interface IIconLinkGroupWrapperProps extends Omit<IIconLinkGroupPresentationProps, "viewport"> {
}
export declare const IconLinkGroupWrapper: (props: IIconLinkGroupWrapperProps) => React.JSX.Element;
