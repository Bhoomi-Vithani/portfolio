import React from "react";
import { IBreadcrumbsItemPresentationProps } from "./BreadcrumbsItemPresentation";
interface IBreadcrumbsItemWrapperState {
    hasMouseHover: boolean;
    hasKeyboardFocus: boolean;
}
interface IBreadcrumbsItemWrapperProps extends IBreadcrumbsItemPresentationProps {
}
export declare class BreadcrumbsItemWrapper extends React.Component<IBreadcrumbsItemWrapperProps, IBreadcrumbsItemWrapperState> {
    constructor(props: IBreadcrumbsItemWrapperProps);
    render(): React.JSX.Element;
}
export {};
