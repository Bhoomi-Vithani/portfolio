import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface ICardsSharedProps extends IBasicPropsInternal {
    centeredLayout?: boolean;
    as?: "ul" | "ol";
    type?: "SingleOptionToggle" | "MultiOptionToggle" | "NoInput";
    ariaDescribedby?: string;
    fieldsetLegend?: string;
}
interface ICardsPresentationOnlyProps {
}
interface ICardsPresentationProps extends ICardsSharedProps, ICardsPresentationOnlyProps {
}
export declare const CardsPresentation: {
    ({ id, children, className, noMargin, as, centeredLayout, type, fieldsetLegend, ariaDescribedby, }: ICardsPresentationProps): React.JSX.Element;
    displayName: string;
};
export {};
