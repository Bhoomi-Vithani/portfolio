import React, { ReactNode } from "react";
import { IBasicPropsInternal } from "../../../../utils/IBasicPropsInternal";
interface IClickListLayoutContainerProps extends IBasicPropsInternal {
    left?: ReactNode;
    right?: ReactNode;
    actions?: ReactNode;
}
export declare const ClickListLayoutContainerPresentation: {
    ({ left, right, actions, className, id, noMargin, }: IClickListLayoutContainerProps): React.JSX.Element;
    displayName: string;
};
export {};
