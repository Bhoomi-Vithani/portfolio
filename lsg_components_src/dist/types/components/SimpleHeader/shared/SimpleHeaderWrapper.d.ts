import React from "react";
import { ISimpleHeaderSharedProps } from "./SimpleHeaderPresentation";
interface ISimpleHeaderWrapperProps extends Omit<ISimpleHeaderSharedProps, "mobileOpenMenuButtonRef"> {
}
export declare const SimpleHeaderWrapper: (props: ISimpleHeaderWrapperProps) => React.JSX.Element;
export {};
