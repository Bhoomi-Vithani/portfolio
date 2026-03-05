import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IBarDiagramPresentationProps extends IBasicPropsInternal {
    label: string;
    labelSubline?: string;
    valueLabel: string;
    valueLabelSubline?: string;
    percent: number;
    status?: "valid" | "invalid";
    color?: "primary-1" | "primary-2";
}
/** For internal us only. Don't provide in public stage */
export interface IBarDiagramPresentationPropsInternal extends IBarDiagramPresentationProps {
    width?: number;
    hide?: boolean;
}
export declare const BarDiagramPresentation: {
    ({ id: idProp, className, noMargin, isStencilHost, label, labelSubline, percent, valueLabel, valueLabelSubline, status, color, width, hide, }: IBarDiagramPresentationPropsInternal): React.JSX.Element;
    displayName: string;
};
