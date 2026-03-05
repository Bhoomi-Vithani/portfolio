import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IFormContainerPresentationProps extends IBasicPropsInternal {
    as?: keyof React.JSX.IntrinsicElements | string;
    style?: React.CSSProperties;
    htmlAttrs?: React.FormHTMLAttributes<HTMLFormElement> | React.HTMLAttributes<HTMLElement> | Record<`data-${string}`, string | number | boolean>;
    /** Reduces paddings and bottom-margins of form element components: */
    spacing?: "dense";
}
export declare const FormContainerPresentation: React.FC<IFormContainerPresentationProps>;
