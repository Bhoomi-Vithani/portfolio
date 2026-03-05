import type { IIcon } from "@lsg/icons";
import * as React from "react";
import { ReactNode } from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IBannerMessageRef {
    focus: () => void;
}
type IBannerMessageProps = IBasicProps & {
    /** With this prop, you can insert Icon Links into the right side of your BannerMessage. */
    iconLinks?: ReactNode;
    /** Put Content and Action into a collapsible container. */
    isCollapsible?: boolean;
    /** Set the BannerMessage initially open (only possible when isCollapsible prop is set to true). */
    isOpen?: boolean;
    /** Makes the component visible if set to true. */
    isVisible?: boolean;
    /** Set the badge color. */
    badgeColor?: "primary" | "highlight" | "supplementary" | "optional" | "inactive" | "error" | "success" | "alert";
    role?: "status" | "alert";
    /** Set this prop to "aside" to render the 'aside' HTML tag. This is used for BannerMessages
     *  with no important information. */
    as?: "div" | "aside";
} & ({
    /** BannerMessage headline text. */
    heading: string;
    /** Headline size (only available when heading is set). */
    headlineSize?: "h5" | "h6";
    /** HTML tag that is rendered for the headline text (only available when heading is set). E.g.
     *  "h4", "h5", "strong", "b". For further information on which one to choose, see e.g.
     *  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong. */
    headlineAs: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "strong" | string;
    /** Add overline text to the headline (only available when heading is set). */
    overline?: string;
    /** Add subline text to the headline (only available when heading is set). */
    subline?: string;
    /** Show a large icon badge (only available when heading is set). */
    showLargeIconBadge?: boolean;
    /** Set a badge text to the headline (only available when heading is set). */
    badgeText?: string;
} | {
    heading?: undefined;
    headlineSize?: never;
    headlineAs?: never;
    overline?: never;
    subline?: never;
    showLargeIconBadge?: never;
    badgeText?: never;
}) & // badgeIcon props
({
    /** Icon for icon badge. */
    badgeIcon: IIcon;
    /** Only available if badgeIcon is set. Icons can be styled as outline, featuring hollow designs that
     *  emphasize contours, or solid, which are filled in. */
    badgeIconVariant?: "solid" | "outline";
} | {
    badgeIcon?: undefined;
    badgeIconVariant?: never;
}) & // illustration props
({
    illustration?: undefined;
} | {
    /** Set an illustration (only available when heading is set). */
    illustration: ReactNode;
    /** Alt text for the illustration (mandatory when you use an illustration). */
    illustrationAltText: string;
    heading: string;
});
declare const BannerMessage: React.ForwardRefExoticComponent<((IBasicProps & {
    /** With this prop, you can insert Icon Links into the right side of your BannerMessage. */
    iconLinks?: ReactNode;
    /** Put Content and Action into a collapsible container. */
    isCollapsible?: boolean;
    /** Set the BannerMessage initially open (only possible when isCollapsible prop is set to true). */
    isOpen?: boolean;
    /** Makes the component visible if set to true. */
    isVisible?: boolean;
    /** Set the badge color. */
    badgeColor?: "primary" | "highlight" | "supplementary" | "optional" | "inactive" | "error" | "success" | "alert";
    role?: "status" | "alert";
    /** Set this prop to "aside" to render the 'aside' HTML tag. This is used for BannerMessages
     *  with no important information. */
    as?: "div" | "aside";
} & {
    /** BannerMessage headline text. */
    heading: string;
    /** Headline size (only available when heading is set). */
    headlineSize?: "h5" | "h6";
    /** HTML tag that is rendered for the headline text (only available when heading is set). E.g.
     *  "h4", "h5", "strong", "b". For further information on which one to choose, see e.g.
     *  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong. */
    headlineAs: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "strong" | string;
    /** Add overline text to the headline (only available when heading is set). */
    overline?: string;
    /** Add subline text to the headline (only available when heading is set). */
    subline?: string;
    /** Show a large icon badge (only available when heading is set). */
    showLargeIconBadge?: boolean;
    /** Set a badge text to the headline (only available when heading is set). */
    badgeText?: string;
} & {
    /** Icon for icon badge. */
    badgeIcon: IIcon;
    /** Only available if badgeIcon is set. Icons can be styled as outline, featuring hollow designs that
     *  emphasize contours, or solid, which are filled in. */
    badgeIconVariant?: "solid" | "outline";
} & {
    illustration?: undefined;
}) | (IBasicProps & {
    /** With this prop, you can insert Icon Links into the right side of your BannerMessage. */
    iconLinks?: ReactNode;
    /** Put Content and Action into a collapsible container. */
    isCollapsible?: boolean;
    /** Set the BannerMessage initially open (only possible when isCollapsible prop is set to true). */
    isOpen?: boolean;
    /** Makes the component visible if set to true. */
    isVisible?: boolean;
    /** Set the badge color. */
    badgeColor?: "primary" | "highlight" | "supplementary" | "optional" | "inactive" | "error" | "success" | "alert";
    role?: "status" | "alert";
    /** Set this prop to "aside" to render the 'aside' HTML tag. This is used for BannerMessages
     *  with no important information. */
    as?: "div" | "aside";
} & {
    /** BannerMessage headline text. */
    heading: string;
    /** Headline size (only available when heading is set). */
    headlineSize?: "h5" | "h6";
    /** HTML tag that is rendered for the headline text (only available when heading is set). E.g.
     *  "h4", "h5", "strong", "b". For further information on which one to choose, see e.g.
     *  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong. */
    headlineAs: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "strong" | string;
    /** Add overline text to the headline (only available when heading is set). */
    overline?: string;
    /** Add subline text to the headline (only available when heading is set). */
    subline?: string;
    /** Show a large icon badge (only available when heading is set). */
    showLargeIconBadge?: boolean;
    /** Set a badge text to the headline (only available when heading is set). */
    badgeText?: string;
} & {
    /** Icon for icon badge. */
    badgeIcon: IIcon;
    /** Only available if badgeIcon is set. Icons can be styled as outline, featuring hollow designs that
     *  emphasize contours, or solid, which are filled in. */
    badgeIconVariant?: "solid" | "outline";
} & {
    /** Set an illustration (only available when heading is set). */
    illustration: ReactNode;
    /** Alt text for the illustration (mandatory when you use an illustration). */
    illustrationAltText: string;
    heading: string;
}) | (IBasicProps & {
    /** With this prop, you can insert Icon Links into the right side of your BannerMessage. */
    iconLinks?: ReactNode;
    /** Put Content and Action into a collapsible container. */
    isCollapsible?: boolean;
    /** Set the BannerMessage initially open (only possible when isCollapsible prop is set to true). */
    isOpen?: boolean;
    /** Makes the component visible if set to true. */
    isVisible?: boolean;
    /** Set the badge color. */
    badgeColor?: "primary" | "highlight" | "supplementary" | "optional" | "inactive" | "error" | "success" | "alert";
    role?: "status" | "alert";
    /** Set this prop to "aside" to render the 'aside' HTML tag. This is used for BannerMessages
     *  with no important information. */
    as?: "div" | "aside";
} & {
    /** BannerMessage headline text. */
    heading: string;
    /** Headline size (only available when heading is set). */
    headlineSize?: "h5" | "h6";
    /** HTML tag that is rendered for the headline text (only available when heading is set). E.g.
     *  "h4", "h5", "strong", "b". For further information on which one to choose, see e.g.
     *  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong. */
    headlineAs: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "strong" | string;
    /** Add overline text to the headline (only available when heading is set). */
    overline?: string;
    /** Add subline text to the headline (only available when heading is set). */
    subline?: string;
    /** Show a large icon badge (only available when heading is set). */
    showLargeIconBadge?: boolean;
    /** Set a badge text to the headline (only available when heading is set). */
    badgeText?: string;
} & {
    badgeIcon?: undefined;
    badgeIconVariant?: never;
} & {
    illustration?: undefined;
}) | (IBasicProps & {
    /** With this prop, you can insert Icon Links into the right side of your BannerMessage. */
    iconLinks?: ReactNode;
    /** Put Content and Action into a collapsible container. */
    isCollapsible?: boolean;
    /** Set the BannerMessage initially open (only possible when isCollapsible prop is set to true). */
    isOpen?: boolean;
    /** Makes the component visible if set to true. */
    isVisible?: boolean;
    /** Set the badge color. */
    badgeColor?: "primary" | "highlight" | "supplementary" | "optional" | "inactive" | "error" | "success" | "alert";
    role?: "status" | "alert";
    /** Set this prop to "aside" to render the 'aside' HTML tag. This is used for BannerMessages
     *  with no important information. */
    as?: "div" | "aside";
} & {
    /** BannerMessage headline text. */
    heading: string;
    /** Headline size (only available when heading is set). */
    headlineSize?: "h5" | "h6";
    /** HTML tag that is rendered for the headline text (only available when heading is set). E.g.
     *  "h4", "h5", "strong", "b". For further information on which one to choose, see e.g.
     *  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong. */
    headlineAs: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "strong" | string;
    /** Add overline text to the headline (only available when heading is set). */
    overline?: string;
    /** Add subline text to the headline (only available when heading is set). */
    subline?: string;
    /** Show a large icon badge (only available when heading is set). */
    showLargeIconBadge?: boolean;
    /** Set a badge text to the headline (only available when heading is set). */
    badgeText?: string;
} & {
    badgeIcon?: undefined;
    badgeIconVariant?: never;
} & {
    /** Set an illustration (only available when heading is set). */
    illustration: ReactNode;
    /** Alt text for the illustration (mandatory when you use an illustration). */
    illustrationAltText: string;
    heading: string;
}) | (IBasicProps & {
    /** With this prop, you can insert Icon Links into the right side of your BannerMessage. */
    iconLinks?: ReactNode;
    /** Put Content and Action into a collapsible container. */
    isCollapsible?: boolean;
    /** Set the BannerMessage initially open (only possible when isCollapsible prop is set to true). */
    isOpen?: boolean;
    /** Makes the component visible if set to true. */
    isVisible?: boolean;
    /** Set the badge color. */
    badgeColor?: "primary" | "highlight" | "supplementary" | "optional" | "inactive" | "error" | "success" | "alert";
    role?: "status" | "alert";
    /** Set this prop to "aside" to render the 'aside' HTML tag. This is used for BannerMessages
     *  with no important information. */
    as?: "div" | "aside";
} & {
    heading?: undefined;
    headlineSize?: never;
    headlineAs?: never;
    overline?: never;
    subline?: never;
    showLargeIconBadge?: never;
    badgeText?: never;
} & {
    /** Icon for icon badge. */
    badgeIcon: IIcon;
    /** Only available if badgeIcon is set. Icons can be styled as outline, featuring hollow designs that
     *  emphasize contours, or solid, which are filled in. */
    badgeIconVariant?: "solid" | "outline";
} & {
    illustration?: undefined;
}) | (IBasicProps & {
    /** With this prop, you can insert Icon Links into the right side of your BannerMessage. */
    iconLinks?: ReactNode;
    /** Put Content and Action into a collapsible container. */
    isCollapsible?: boolean;
    /** Set the BannerMessage initially open (only possible when isCollapsible prop is set to true). */
    isOpen?: boolean;
    /** Makes the component visible if set to true. */
    isVisible?: boolean;
    /** Set the badge color. */
    badgeColor?: "primary" | "highlight" | "supplementary" | "optional" | "inactive" | "error" | "success" | "alert";
    role?: "status" | "alert";
    /** Set this prop to "aside" to render the 'aside' HTML tag. This is used for BannerMessages
     *  with no important information. */
    as?: "div" | "aside";
} & {
    heading?: undefined;
    headlineSize?: never;
    headlineAs?: never;
    overline?: never;
    subline?: never;
    showLargeIconBadge?: never;
    badgeText?: never;
} & {
    badgeIcon?: undefined;
    badgeIconVariant?: never;
} & {
    illustration?: undefined;
})) & React.RefAttributes<IBannerMessageRef>>;
export { BannerMessage, IBannerMessageProps, IBannerMessageRef };
