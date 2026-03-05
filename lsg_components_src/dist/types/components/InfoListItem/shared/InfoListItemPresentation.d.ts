import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface InfoListItemPresentationProps extends IBasicPropsInternal {
    enumerationValue: string;
    headline: any;
    headlineAs: string;
    text: any;
    gridColumnSize?: 4 | 5 | 7;
}
export declare const InfoListItemPresentation: {
    ({ id, noMargin, className, gridColumnSize, headline, headlineAs, enumerationValue, text, }: InfoListItemPresentationProps): React.JSX.Element;
    displayName: string;
};
