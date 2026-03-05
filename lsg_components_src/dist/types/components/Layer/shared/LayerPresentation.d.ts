import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface ILayerPresentationProps extends IBasicPropsInternal {
    closeLinkLabel: string;
    layout?: "left" | "right" | "full" | "left-75" | "right-75" | "right-25";
    onCloseClick?: (event?: MouseEvent | React.MouseEvent<HTMLElement>) => void;
    onBackdropClick?: (event?: MouseEvent | React.MouseEvent<HTMLElement>) => void;
    open?: boolean;
    buttons?: React.ReactNode;
    htmlAttrs?: React.HTMLAttributes<HTMLDivElement> | Record<`data-${string}`, string | number | boolean>;
    ariaLabel?: string;
    ariaLabelledBy?: string;
    returnFocus?: boolean;
    onFocusLoss?: () => void;
    ariaLabelButtons?: string;
}
export declare const LayerPresentation: {
    ({ id, children, closeLinkLabel, layout, noMargin, className, onCloseClick, open, onBackdropClick, buttons, htmlAttrs, ariaLabel, ariaLabelledBy, returnFocus, onFocusLoss, ariaLabelButtons, }: ILayerPresentationProps): React.JSX.Element;
    displayName: string;
};
