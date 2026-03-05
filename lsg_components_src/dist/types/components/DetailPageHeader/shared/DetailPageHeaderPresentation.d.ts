import React, { ReactNode } from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IDetailPageHeaderSharedProps extends IBasicPropsInternal {
    closeLabel?: string;
    closeOnClick?: (e: MouseEvent | React.MouseEvent, name: string) => void;
    closeHref?: string;
    actions?: ReactNode;
    theme?: "light" | "dark";
    isSticky?: boolean;
    onForceMobileChange?: (forceMobileValue: boolean) => void;
}
interface IDetailPageHeaderPresentationOnlyProps {
}
interface IDetailPageHeaderPresentationProps extends IDetailPageHeaderSharedProps, IDetailPageHeaderPresentationOnlyProps {
    isMobile: boolean;
}
export declare const DetailPageHeaderPresentation: {
    ({ id, className, noMargin, isStencilHost, theme, closeLabel, closeHref, closeOnClick, isSticky, actions, isMobile, onForceMobileChange, }: IDetailPageHeaderPresentationProps): React.JSX.Element;
    displayName: string;
};
export {};
