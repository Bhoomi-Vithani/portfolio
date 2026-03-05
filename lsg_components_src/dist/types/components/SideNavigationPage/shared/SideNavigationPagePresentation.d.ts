import React, { ReactNode } from "react";
import { INavigationItem } from "../../../interfaces/NavigationTree";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface ISideNavigationPageProps extends IBasicPropsInternal {
    navigationTree?: INavigationItem[];
    navigationActionAs?: any;
    navigationAriaLabel?: string;
    logoHref?: string;
    logoActionAs?: any;
    logoActionProps?: any;
    logoLabel?: string;
    logoAriaLabel?: string;
    logoDisabled?: boolean;
    logoHtmlAttrs?: React.ButtonHTMLAttributes<HTMLButtonElement> | React.AnchorHTMLAttributes<HTMLAnchorElement> | Record<`data-${string}`, string | number | boolean>;
    onLogoClick?: (e: React.MouseEvent<HTMLElement>, name: string) => void;
    searchDisabled?: boolean;
    searchInvisible?: boolean;
    searchPlaceholder?: string;
    onSearchChange?: (value: string, name: string, event: React.SyntheticEvent<HTMLElement>) => void;
    searchValue?: string;
    searchName?: string;
    searchFormHtmlAttrs?: React.FormHTMLAttributes<HTMLFormElement> | Record<`data-${string}`, string | number | boolean>;
    searchHtmlAttrs?: React.InputHTMLAttributes<HTMLInputElement> | Record<`data-${string}`, string | number | boolean>;
    iconLinksBottom?: ReactNode[];
    indicatorAtLevel?: "topic" | "group" | "page";
    name?: string;
    onChange?: (activeItem: string, name: string, ev: React.SyntheticEvent<HTMLElement>) => void;
    value?: string;
    expandAll?: boolean;
}
export declare const SideNavigationPagePresentation: {
    ({ id, className, noMargin, isStencilHost, searchDisabled, searchInvisible, searchPlaceholder, searchFormHtmlAttrs, searchHtmlAttrs, navigationTree, navigationActionAs, indicatorAtLevel, logoHref, logoActionAs, logoActionProps, logoLabel, logoAriaLabel, logoDisabled, logoHtmlAttrs, onLogoClick, value, onChange, iconLinksBottom, onSearchChange, searchValue, searchName, name, children, expandAll, navigationAriaLabel, }: ISideNavigationPageProps): React.JSX.Element;
    displayName: string;
};
