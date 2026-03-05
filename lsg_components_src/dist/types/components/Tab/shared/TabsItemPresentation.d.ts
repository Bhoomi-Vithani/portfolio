import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface ITabsItemPresentationProps extends IBasicPropsInternal {
    label?: string;
    showBadge?: boolean;
    htmlAttrs?: React.HTMLAttributes<HTMLElement> | Record<`data-${string}`, string | number | boolean>;
}
export declare const TabsItemPresentation: {
    ({ horizontalAlignment, ...otherProps }: ITabsItemPresentationProps): React.JSX.Element;
    displayName: string;
};
