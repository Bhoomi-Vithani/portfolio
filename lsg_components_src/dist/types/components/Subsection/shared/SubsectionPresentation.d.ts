import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface ISubsectionProps extends IBasicPropsInternal {
    separator?: boolean;
    htmlAttrs?: React.HTMLAttributes<HTMLElement> | Record<`data-${string}`, string | number | boolean>;
    spacing?: "standard" | "small";
    as?: "section" | "article" | "div";
}
export declare const SubsectionPresentation: {
    ({ id, className, children, separator, as, htmlAttrs, spacing, }: ISubsectionProps): React.JSX.Element;
    displayName: string;
};
