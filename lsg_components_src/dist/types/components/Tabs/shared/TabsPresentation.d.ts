import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface ITabsPresentationProps extends IBasicPropsInternal {
    openIndex?: number;
    onChange?: (newOpenIndex: number, e: React.SyntheticEvent<HTMLElement>) => void;
    centeredLayout?: boolean;
    navigationActionAs?: any;
    ariaLabel?: string;
    ariaLabelledBy?: string;
}
export declare const TabsPresentation: {
    (props: ITabsPresentationProps): React.JSX.Element;
    displayName: string;
};
