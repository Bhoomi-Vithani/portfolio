import type { IIcon } from "@lsg/icons";
import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IArticlePresentationList extends IBasicPropsInternal {
    headline?: string;
    headlineAs: string;
    headlineId?: string;
    icon?: IIcon;
    iconName?: string;
    iconColor?: "default" | "error" | "success";
    iconVariant?: "solid" | "outline";
}
export declare const ArticleListPresentation: {
    ({ id, children, className, icon, iconColor, iconName, iconVariant, headline, headlineAs, headlineId: headlineIdProp, noMargin, horizontalAlignment, }: IArticlePresentationList): React.JSX.Element;
    displayName: string;
};
