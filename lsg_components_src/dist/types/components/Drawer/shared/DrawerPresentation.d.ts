import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
declare const layoutClasses: {
    "layer-left": string;
    "layer-right": string;
    "layer-right-legacy": string;
    "layer-full": string;
    "layer-left-75": string;
    "layer-right-75": string;
    "layer-right-25": string;
    "side-menu-left": string;
    "side-menu-right": string;
    "mega-menu": string;
    "mega-menu-legacy": string;
};
export interface IDrawerPresentationProps extends IBasicPropsInternal {
    layout?: keyof typeof layoutClasses;
    legacyStickyMegaMenu?: boolean;
    open?: boolean;
    onBackdropClick?: (event?: MouseEvent | React.MouseEvent) => void;
    htmlAttrs?: React.HTMLAttributes<HTMLElement> | Record<`data-${string}`, string | number | boolean>;
    autoFocus?: boolean;
    noFocusLock?: boolean;
    onFocusLockActivation?(node: HTMLElement): void;
    setPersistentFocus?: boolean;
    ariaLabel?: string;
    ariaLabelledBy?: string;
    returnFocus?: boolean;
    dataComponentType?: "layer" | "drawer";
}
export declare const DrawerPresentation: {
    ({ noMargin, className, layout, open, onBackdropClick, htmlAttrs, children, legacyStickyMegaMenu, noFocusLock, onFocusLockActivation, id, ariaLabel, ariaLabelledBy, setPersistentFocus, autoFocus, returnFocus, dataComponentType, }: IDrawerPresentationProps): React.JSX.Element;
    displayName: string;
};
export {};
