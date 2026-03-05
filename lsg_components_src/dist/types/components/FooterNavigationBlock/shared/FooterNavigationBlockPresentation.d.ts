import * as React from "react";
import { IBasicProps } from "../../../base/IBasicProps";
export interface IFooterNavigationBlockPresentation extends IBasicProps {
    title: string;
    isLargeScreen?: boolean;
    footerNavigationBlockAs?: string;
}
export declare const FooterNavigationBlockPresentation: {
    ({ children, title, isLargeScreen, footerNavigationBlockAs, ...other }: IFooterNavigationBlockPresentation): React.JSX.Element;
    displayName: string;
};
