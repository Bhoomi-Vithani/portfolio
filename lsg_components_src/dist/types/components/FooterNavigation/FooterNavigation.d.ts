import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IFooterNavigationProps extends IBasicProps {
    /** This mandatory prop adds an ARIA label for screen reader users to the navigation (HTML <nav> element) of the FooterNavigation. */
    navigationAriaLabel: string;
}
declare const FooterNavigation: {
    ({ ...props }: IFooterNavigationProps): React.JSX.Element;
    displayName: string;
    Block: {
        ({ footerNavigationBlockAs, ...props }: import("../FooterNavigationBlock/FooterNavigationBlock").IFooterNavigationBlockProps): React.JSX.Element;
        displayName: string;
    };
};
export { FooterNavigation, IFooterNavigationProps };
