import type { IIcon } from "@lsg/icons";
import * as React from "react";
import { IButtonBaseProps } from "../Button/Button";
interface IIconLinkProps extends IButtonBaseProps {
    /**
     * Defines the text displayed next to the icon. This prop is always required for accessibility reasons, even
     * when using `appearance="no-text"`: Screen readers will always announce this text, regardless of visual appearance.
     * The `label` text is rendered inside a <span> element and can be any valid React node (string, JSX, etc.).
     */
    label: React.ReactNode;
    /** @deprecated - Use appearance instead. */
    look?: "left" | "right" | "no-icon" | "no-text";
    /**
     * Use one of the defined IconLink appearances.
     * Accessible via union type.
     */
    appearance?: "left" | "right" | "no-icon" | "no-text";
    /**
     * This prop sets the animation direction for hover and overrides the default of the Group. The prop should be set
     * for IconLinks with an arrow icon like `← Back` or `Next →`. In contrast to the Group default, the animation
     * direction set by this prop is independent of the orientation of IconLinks inside a group.
     */
    hoverAnimation?: "left" | "right";
    /**
     * Sets the color scheme for the IconLink text and icon. Accepts "primary" or "secondary" - if `iconColor` is
     * not set, the icon will inherit this color. The default is "primary". If the IconLink is disabled, the text and icon color will always be
     * set to "disabled", regardless of the `color` prop. The surrounding Theme influences the color that is rendered.
     */
    color?: "primary" | "secondary";
    /** Icon of the Icon component.
     *  See https://markenportal.commerzbank.com/styleguide/icon/ for an overview of available LSG Icons. */
    icon?: IIcon;
    /**
     * Sets the color of the icon independently from the text.
     * If not set, the icon color is determined by the `color` prop or the `disabled` state.
     * The surrounding Theme influences the color that is rendered.
     */
    iconColor?: "default" | "primary" | "secondary" | "error" | "success" | "note" | "disabled" | "black" | "white" | "anthracite" | "primary-1" | "primary-2" | "secondary-1" | "secondary-2" | "secondary-3" | "secondary-4" | "secondary-5" | "secondary-6";
    /**
     * Icons can be styled as outline, featuring hollow designs that
     * emphasize contours, or solid, which are filled in.
     * Have a look on https://markenportal.commerzbank.com/styleguide/icon/ for further information and visual examples.
     */
    iconVariant?: "outline" | "solid";
    /** A Badge is a small, rounded indicator on the top right side of the IconLink. The Badge may contain text. */
    showBadge?: boolean;
    /**
     * If the badgeText is undefined, the Badge is shown as a small dot. If the Badge contains text (e.g. "7", "9+")
     * or an empty string, the Badge is larger. Up to 3 characters (e.g. "99+") may fit in a Badge.
     */
    badgeText?: string;
    /** Set this prop to true to render the IconLink as an inline element within text content (e.g., inside Paragraphs or Headlines).
     * When true, the outer container element changes from `<div>` to `<span>` to allow proper inline text flow.
     * This is useful when you want to place an IconLink within a sentence or text block.
     * */
    inline?: boolean;
    /**
     * If true, this component will be decorative only and will not contain the `<a>` or `<button>` tag itself.
     * This is useful for non-interactive elements inside a card or other components.
     */
    nonInteractive?: boolean;
    /**
     * If true, this component will animate the entire card or other components it is inside.
     * Make sure that the link text is meaningful (e.g. "Buy Product", "Cancel"). It must not contain general phrases
     * (e.g. "Read more", "Select").
     */
    a11yMeaningfulLabel?: boolean;
    /**
     * Name of the HTML tag that is rendered for the outer div. Defaults to "li" if used inside a group with more than
     * one item, or a group that is set to "ul" or "ol". To change the tag of the button, use the `actionAs` prop.
     */
    as?: keyof JSX.IntrinsicElements;
}
declare const IconLink: {
    ({ color, iconVariant, refCallback, label, showBadge, badgeText, loadingText, ...props }: IIconLinkProps): React.JSX.Element;
    Group: {
        ({ direction, ...props }: import("../IconLinkGroup/IconLinkGroup").IIconLinkGroupProps): React.JSX.Element;
        displayName: string;
    };
    displayName: string;
};
export { IconLink };
export type { IIconLinkProps };
