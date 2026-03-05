import * as React from "react";
import { IBasicProps } from "../../../base/IBasicProps";
interface IFooterNavigationPresentation extends IBasicProps {
    navigationAriaLabel: string;
}
declare const FooterNavigationPresentation: ({ id, children: childrenProp, navigationAriaLabel, }: IFooterNavigationPresentation) => React.JSX.Element;
export { FooterNavigationPresentation, IFooterNavigationPresentation };
