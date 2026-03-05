import React, { ReactNode } from "react";
import { IBasicPropsInternal } from "../../utils/IBasicPropsInternal";
export type InfoAreaItemFormatterFn = (value: number) => string;
interface IInfoAreaItemPresentationOnlyProps extends IBasicPropsInternal {
    overline?: ReactNode;
    value?: ReactNode;
    variant?: "positive" | "negative";
}
interface IInfoAreaItemPresentationProps extends IInfoAreaItemPresentationOnlyProps {
}
export declare const defaultProps: Partial<IInfoAreaItemPresentationProps>;
export declare const InfoAreaItemPresentation: {
    ({ id, className, noMargin, isStencilHost, overline, variant, value, }: IInfoAreaItemPresentationProps): React.JSX.Element;
    displayName: string;
};
export {};
