import * as React from "react";
import { CSSProperties } from "react";
import { IBasicProps } from "../../base/IBasicProps";
import { INavigationItem } from "../../interfaces";
export interface INavigationBlockProps extends IBasicProps {
    style?: CSSProperties;
    navigationTree?: INavigationItem[];
    navigationActionAs?: any;
    clusterLabel?: string;
    startLevel?: "topic" | "group" | "page";
    value?: string;
    activeElement?: HTMLElement;
    activeRef?: any;
    isProcessNavigation?: boolean;
    onChange?: (value: string, e: React.SyntheticEvent<HTMLElement>) => void;
    openObject?: any;
    onOpenObjectChange?: (newOpenObject: any) => void;
    noAnimation?: boolean;
    expandAll?: boolean;
    noIndent?: boolean;
    alwaysShowIndicator?: boolean;
}
export declare const NavigationBlock: {
    (props: INavigationBlockProps): React.JSX.Element;
    displayName: string;
};
