import React, { ReactNode } from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
interface IActionGroupProps extends IBasicPropsInternal {
    left?: ReactNode;
    right?: ReactNode;
    centeredLayout?: boolean;
    ariaLabel?: string;
}
export declare const ActionGroupPresentation: {
    ({ id, children, noMargin, className, left, right, centeredLayout, horizontalAlignment, ariaLabel, }: IActionGroupProps): React.JSX.Element;
    displayName: string;
};
export {};
