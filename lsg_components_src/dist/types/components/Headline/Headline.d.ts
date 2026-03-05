import type { IIcon } from "@lsg/icons";
import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IHeadlineProps extends IBasicProps {
    /** With this prop, you can choose your preferred CSS styling of the Headline. Together
     *  with the `as` prop, you can create a correct HTML hierarchy independent of the visual appearance of your
     *  Headline. */
    size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    /** With this prop, you have to set the HTML tag that will be rendered for the Headline.
     *  The prop is mandatory to encourage the correct HTML tag hierarchy usage for your website.
     *  Together with the `size` prop, you can create a correct hierarchy independent of the visual appearance
     *  of your Headline. E.g. "h3", "h4", "strong", "span". */
    as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | string;
    /** Overline content */
    overline?: React.ReactNode;
    /**
     * HTML tag that is rendered for the overline. If you use the `overlineAs` prop to put the overline in a
     * semantically higher order (e.g. as='h2' and overlineAs='h1'), the overline will be rendered by its own
     * (`<h1 />`) above the headline (`<h2 />`) and not 'inside'.
     */
    overlineAs?: string;
    /** Subline content */
    subline?: React.ReactNode;
    /** HTML tag that is rendered for the subline. */
    sublineAs?: string;
    /**
     * If true, applies text-wrap: balanced to the headline for improved readability.
     * By default, h1-h3 use balanced wrapping. h4-h6 in a centered layout are also balanced by default */
    balanced?: boolean;
    /** Sets the line length of '4' to '6' style (`size` prop) Headlines in ≥ 1024 px width viewports. Default is 768px. Wide is 960px. */
    lineLength?: "default" | "wide";
    /** Additional Button/Link */
    actions?: any;
    /** This prop centers the Headline horizontally. */
    centeredLayout?: boolean;
    /** Deactivate automatic hyphens if you want to set them manually. */
    manualHyphenation?: boolean;
    /** Badge text. Overwrites 'badgeIcon' prop if set as well.  */
    badgeText?: string;
    /** Badge Icon. If 'badgeText' prop is set as well, 'badgeIcon' will be ignored. */
    badgeIcon?: IIcon;
    /** Badge icon variant */
    badgeIconVariant?: "solid" | "outline";
    /** @deprecated (29.01.2024) Use badgeColor instead. Badge look */
    badgeLook?: "primary" | "highlight" | "supplementary";
    /** Badge look */
    badgeColor?: "primary" | "highlight" | "supplementary" | "optional" | "inactive" | "error" | "success" | "alert" | "secondary-1" | "secondary-2" | "secondary-3" | "secondary-4" | "secondary-5" | "secondary-6";
    /** Badge position */
    badgePosition?: "overline" | "subline";
}
declare const Headline: {
    ({ size, overlineAs, sublineAs, children, badgeColor, badgeLook, badgePosition, badgeIconVariant, ...props }: IHeadlineProps): React.JSX.Element;
    displayName: string;
};
declare const H1: {
    (props: Omit<IHeadlineProps, "size">): React.JSX.Element;
    displayName: string;
};
declare const H2: {
    (props: Omit<IHeadlineProps, "size">): React.JSX.Element;
    displayName: string;
};
declare const H3: {
    (props: Omit<IHeadlineProps, "size">): React.JSX.Element;
    displayName: string;
};
declare const H4: {
    (props: Omit<IHeadlineProps, "size">): React.JSX.Element;
    displayName: string;
};
declare const H5: {
    (props: Omit<IHeadlineProps, "size">): React.JSX.Element;
    displayName: string;
};
declare const H6: {
    (props: Omit<IHeadlineProps, "size">): React.JSX.Element;
    displayName: string;
};
export { Headline, H1, H2, H3, H4, H5, H6, IHeadlineProps };
