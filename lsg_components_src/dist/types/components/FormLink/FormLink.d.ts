import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IFormLinkProps extends IBasicProps {
    /** Set any Icon you want from the LSG * */
    icon: any;
    /** Label is shown above the main link/text * */
    label?: string;
    /** text prop is the main text, which can be a link or only text * */
    text: string;
    /** href can be filled with a url, tel: or mailto: * */
    href: string;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React.ButtonHTMLAttributes<HTMLButtonElement> | React.AnchorHTMLAttributes<HTMLAnchorElement> | Record<`data-${string}`, string | number | boolean>;
    /** Function to be called whenever the FormLink is clicked. */
    onClick?(e: React.MouseEvent<HTMLElement>, name: string): void;
    /** Render an alternative action component, e.g. a React Router link
     * Example: <FormLink actionAs={ReactRouterLink} actionProps={{to: "/mypage"}} ...
     */
    actionAs?: any;
    actionProps?: any;
}
declare const FormLink: {
    (props: IFormLinkProps): React.JSX.Element;
    displayName: string;
};
export { FormLink, IFormLinkProps };
