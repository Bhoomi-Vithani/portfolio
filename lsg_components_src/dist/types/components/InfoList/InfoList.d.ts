import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IInfoListProps extends IBasicProps {
    /** Set property to display items always in one column. */
    singleColumn: boolean;
}
interface IInfoListItemProps {
    /** Headline of the item. */
    headline: React.ReactNode;
    /** Alternative HTML tag that is rendered for item headline (e.g. "h5", "h6", "p", "span", "div").  */
    headlineAs: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | string;
    /** Text of the item. */
    text: React.ReactNode;
    /** Enumeration value of an item */
    enumerationValue: string;
}
/**
 * @deprecated: 11.2023 - Will be removed in the next major release.
 * Have a look at the "Info List Pattern" which uses native components like shown in the Markenportal UX Patterns
 * section: https://markenportal.commerzbank.com/styleguide/info-list-pattern/index.html
 */
declare class InfoList extends React.Component<IInfoListProps> {
    static displayName: string;
    static Item: React.FunctionComponent<IInfoListItemProps>;
    render(): React.JSX.Element;
}
export { InfoList, IInfoListProps, IInfoListItemProps };
