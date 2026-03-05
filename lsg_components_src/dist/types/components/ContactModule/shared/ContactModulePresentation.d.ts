import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IContactModulePresentationProps extends IBasicPropsInternal {
    /** Phone number of hotline (Use case: Hotline with a "tel:" link) */
    phoneNumber?: string;
    /** Description of hotline. (Use case: Hotline with a "tel:" link) */
    phoneText?: React.ReactNode;
    /** Alternative for Phone number */
    headline?: React.ReactNode;
    /** Alternative tag for headline */
    headlineAs?: string;
    /** Subline  */
    subline?: React.ReactNode;
    /** Alternative tag for subline */
    sublineAs?: string;
    /** Function to be called whenever the Headline / Phone number is clicked */
    onClick?: () => void;
    /** Href for Headline */
    href?: string;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React.AnchorHTMLAttributes<HTMLAnchorElement> | React.ButtonHTMLAttributes<HTMLButtonElement> | Record<`data-${string}`, string | number | boolean>;
    /**
     * Render an alternative action component, e.g. a React Router link
     * Example: <Button actionAs={ReactRouterLink} actionProps={{to: "/mypage"}} ...
     */
    actionAs?: any;
    /** Props for the alternative action component (actionAs, e.g. a React Router link) */
    actionProps?: any;
}
export declare const ContactModulePresentation: {
    ({ id, children, className, noMargin, href, phoneNumber, phoneText, onClick, headline, headlineAs, subline, sublineAs, htmlAttrs: htmlAttrsProp, actionAs, actionProps, }: IContactModulePresentationProps): React.JSX.Element;
    displayName: string;
};
