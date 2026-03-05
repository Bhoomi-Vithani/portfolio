import type { IIcon } from "@lsg/icons";
import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface ITwoLineItemProps extends IBasicProps {
    /** The icon that shall be displayed within the component. */
    icon?: IIcon;
    /** Icons can be styled as outline, featuring hollow designs that emphasize contours, or solid, which are filled
     *  in. */
    iconVariant?: "solid" | "outline";
    /**
     * Text used as the title attribute for the icon's SVG or image tag.
     * This text is displayed as a tooltip when the user hovers over the icon or the image.
     * If you do not set this prop (decorative icon), the icon will be aria-hidden and not accessible for screen readers.
     */
    iconTitle?: string;
    /** Text that should be placed inside the circle */
    text?: string;
    /** Image source */
    src?: string;
    /**
     * Text of the first line. It has to be mandatory for screen readers because the label describes the thumbnail
     * next to it. */
    label: string;
    /** HTML tag that is rendered for the bold text of the first line (label). E.g. "h4", "h5", "strong". For
     *  further information on which one to choose, see e.g.
     *  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong. */
    labelAs?: string;
    /** Text of the second line */
    subline?: string;
    /** HTML tag that is rendered for the subline text. E.g. "pre" for two-rowed use cases. */
    sublineAs?: string;
    /** This prop centers the component horizontally if set to true. */
    centeredLayout?: boolean;
    /** Badge text */
    badgeText?: string;
    /** Badge icon */
    badgeIcon?: IIcon;
    /** Badge icon variant */
    badgeIconVariant?: "solid" | "outline";
    /** @deprecated: Use badgeColor instead. Badge look */
    badgeLook?: "primary" | "highlight" | "supplementary" | "error" | "success" | "alert";
    /** Badge color */
    badgeColor?: "primary" | "highlight" | "supplementary" | "error" | "success" | "alert";
    /** Describe the Badge content or add context to the Badge message which will be read by screen readers. */
    badgeScreenReaderLabel?: string;
    /** Deactivate automatic hyphens if you want to set them manually. */
    manualHyphenation?: boolean;
    /** Set this prop if only the thumbnail should be visible without any text (label and subline). */
    appearance?: "no-text";
}
declare const TwoLineItem: {
    ({ badgeLook, badgeColor, badgeIconVariant, iconVariant, labelAs, sublineAs, ...props }: ITwoLineItemProps): React.JSX.Element;
    displayName: string;
};
export { TwoLineItem, ITwoLineItemProps };
