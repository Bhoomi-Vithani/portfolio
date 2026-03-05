import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IChipsInternalBaseProps {
    groupLabel: string;
    appearance?: "default" | "no-text";
}
export interface IChipsPresentationProps extends IChipsInternalBaseProps, IBasicPropsInternal {
    direction?: "scroll" | "wrap";
    as?: "ul" | "ol" | "div";
    noMargin?: boolean;
    onFocusLoss: () => void;
}
export declare const ChipsPresentation: (props: IChipsPresentationProps) => React.JSX.Element;
