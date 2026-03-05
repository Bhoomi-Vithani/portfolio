import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface ILoremIpsumProps extends IBasicPropsInternal {
    count?: number;
    startIndex?: number;
    as?: string;
    centeredLayout?: boolean;
}
export declare const LoremIpsumPresentation: {
    ({ count, startIndex, as, horizontalAlignment, centeredLayout, }: ILoremIpsumProps): React.JSX.Element;
    displayName: string;
};
