import type { IIcon } from "@lsg/icons";
import * as React from "react";
import { ReactNode } from "react";
import { IBasicProps } from "../../base/IBasicProps";
type ISnackbarProps = IBasicProps & {
    /** Subline text */
    subline?: string;
    /** If you did not set a headline, but set iconLinks, please provide an aria-label */
    ariaLabel?: string;
    /** Snackbar iconLinks */
    iconLinks?: ReactNode;
    /** Sets seconds to automatically dismiss the snackbar. Use this option only if the content is optional/additional
     *  for the user */
    time?: number;
    /** Sets the initial state */
    isOpen?: boolean;
    /** Callback function that is called to close the snackbar */
    onClose?: () => void;
    /** Icon for icon badge */
    badgeIcon?: IIcon;
    /** Icons can be styled as outline, featuring hollow designs that
     emphasize contours, or solid, which are filled in. */
    badgeIconVariant?: "solid" | "outline";
    /** deprecated: Use badgeColor instead. Set the badge look (color) */
    badgeLook?: "primary" | "highlight" | "supplementary" | "error" | "success" | "alert";
    /** Sets the badge look (color) */
    badgeColor?: "primary" | "highlight" | "supplementary" | "error" | "success" | "alert";
    /** Shows a large icon badge (only available when headline is set) */
    showLargeIconBadge?: boolean;
    /** Sets an illustration (only available when headline is set) */
    illustration?: ReactNode;
    /** Sets an alternative text for the illustration for non-decorative images. Without the alt text the illustration is set to aria-hidden. */
    illustrationAlt?: string;
    /** Set by the following rules:
     * 1. alert: If it's important and caused immediately as a result by a user's action.
     * 2. dialog: Important information that demands user attention, Snackbar will get focus and focus-lock.
     * 3. status: If the information is NOT important, the Snackbar will be read but not focused.
     * Please note: "alertdialog" is deprecated, use dialog instead.
     */
    role: "status" | "alert" | "alertdialog" | "dialog";
    /** Callback for keyboard focus handling, if focus gets lost. Highly recommended for a Snackbar inside
     *  Layer. */
    onFocusLoss?: () => void;
    /** Optional style for the snackbar container, default: "flex"  */
    containerDisplay?: "flex" | "block";
} & ({
    heading?: undefined;
} | {
    /** Snackbar headline text */
    heading: string;
    /** Alternative HTML tag that is rendered for headline. Mandatory when you use a heading (e.g. "h4", "h5", "p", "div", "span"). */
    /** @deprecated: Headline semantics cannot be used in an aria-live region and have no effect. */
    headlineAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | string;
});
declare const Snackbar: {
    ({ badgeLook, badgeColor, isOpen, role, ...props }: ISnackbarProps): React.JSX.Element;
    displayName: string;
};
export { Snackbar, ISnackbarProps };
