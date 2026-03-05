import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
type IContactModuleProps = IBasicProps & {
    /** Headline  */
    headline?: React.ReactNode;
    /** Alternative HTML tag that is rendered for headline. */
    headlineAs?: string;
    /** Subline  */
    subline?: React.ReactNode;
    /** Alternative HTML tag that is rendered for subline (e.g. "h4", "h5"). */
    sublineAs?: string;
    /** Special use case: Phone number of hotline. Replaces href, a "tel:)" href is rendered */
    phoneNumber?: string;
    /** Special use case: Text of hotline (e.g. "+49029480298"); replaces headline if filled. */
    phoneText?: React.ReactNode;
    /** Function to be called whenever the phone number or headline is clicked */
    onClick?: () => void;
    /** Href for Headline (optional) */
    href?: string;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React.ButtonHTMLAttributes<HTMLButtonElement> | React.AnchorHTMLAttributes<HTMLAnchorElement> | Record<`data-${string}`, string | number | boolean>;
    /**
     * Render an alternative action component for the headline/phoneNumber, e.g. a React Router link
     * Example: <ContactModule actionAs={ReactRouterLink} actionProps={{to: "/mypage"}} ...
     */
    actionAs?: any;
    /** Props for the alternative action component (actionAs, e.g. a React Router link) */
    actionProps?: any;
};
declare const ContactModule: {
    ({ headlineAs, sublineAs, ...props }: IContactModuleProps): React.JSX.Element;
    displayName: string;
};
export { ContactModule, IContactModuleProps };
