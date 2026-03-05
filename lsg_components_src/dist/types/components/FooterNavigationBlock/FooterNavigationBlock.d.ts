import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IFooterNavigationBlockProps extends IBasicProps {
    /** This mandatory prop sets the title text for a FooterNavigation.Block. */
    title: string;
    /** @deprecated 15.7.2025 - If FooterNavigation.Block is nested in FooterNavigation as intended, this prop is irrelevant, because its value gets overridden based on the viewport range. */
    isLargeScreen?: boolean;
    /** With this prop, you can set your own HTML element for the title text of a FooterNavigation.Block. E.g. "h4". */
    footerNavigationBlockAs?: string;
}
declare const FooterNavigationBlock: {
    ({ footerNavigationBlockAs, ...props }: IFooterNavigationBlockProps): React.JSX.Element;
    displayName: string;
};
export { FooterNavigationBlock, IFooterNavigationBlockProps };
