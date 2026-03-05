import { JSX } from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IButtonGroupPresentationProps extends IBasicPropsInternal {
    align?: "left" | "right";
    direction?: "vertical" | "horizontal" | "flip-xs" | "flip-sm" | "flip-md";
    viewport?: "xs" | "sm" | "md" | "lg" | "xl";
    as?: keyof JSX.IntrinsicElements;
    ariaLabel?: string;
    dontFlipFocus?: boolean;
}
export declare const ButtonGroupPresentation: {
    ({ id, children, className, noMargin, direction, align, viewport, horizontalAlignment, as, ariaLabel, dontFlipFocus, }: IButtonGroupPresentationProps): JSX.Element;
    displayName: string;
};
