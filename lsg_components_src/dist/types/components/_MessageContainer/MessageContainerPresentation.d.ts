import { IIcon } from "@lsg/icons";
import React, { MutableRefObject, ReactNode, Ref } from "react";
import { IBasicPropsInternal } from "../../utils/IBasicPropsInternal";
export interface IMessageContainerSharedProps extends IBasicPropsInternal {
    headline?: string;
    headlineSize?: "h5" | "h6";
    headlineId?: string;
    headlineAs: string;
    overline?: string;
    subline?: string;
    sublineAs?: string;
    content?: ReactNode;
    contentId?: string;
    /** Put Content and Action into an collapsible container */
    isCollapsible?: boolean;
    isOpen?: boolean;
    onClick?: (ev: React.MouseEvent<HTMLElement>) => void;
    /** OnChange will be called when Accordion opens/closes */
    onChange?: (open: boolean, id: string, ev: React.SyntheticEvent<Element>) => void;
    badgeIcon?: IIcon;
    badgeIconVariant?: "solid" | "outline";
    /** show a large icon badge (only available when headline is set) */
    showLargeIconBadge?: boolean;
    /** set an illustration (only available when headline is set) */
    illustration?: any;
    /** set an alternative text for the illustration */
    illustrationAltText?: string;
    /** set a badge text (only available when headline is set) */
    badgeText?: string;
    badgeColor?: "primary" | "highlight" | "supplementary" | "optional" | "inactive" | "error" | "success" | "alert";
    contentRole?: "status" | "alert" | "dialog";
    ariaLabel?: string;
    contentRef?: Ref<HTMLDivElement>;
    containerDisplay?: "flex" | "block";
}
export interface IMessageContainerPresentationProps extends IMessageContainerSharedProps {
    handleClick?: (e: any) => void;
    hostRef?: MutableRefObject<HTMLDivElement>;
    detailsRef?: MutableRefObject<HTMLDetailsElement>;
    iconLinkGroupRef?: MutableRefObject<HTMLDivElement>;
}
export declare const MessageContainerPresentation: {
    ({ headline, headlineId, headlineSize, headlineAs, overline, subline, sublineAs, badgeIcon, illustration, illustrationAltText, badgeText, showLargeIconBadge, badgeColor, content, contentId, children, isCollapsible, hostRef, detailsRef, badgeIconVariant, isOpen, handleClick, iconLinkGroupRef, className, contentRole, ariaLabel, contentRef, containerDisplay, }: IMessageContainerPresentationProps): React.JSX.Element;
    displayName: string;
};
