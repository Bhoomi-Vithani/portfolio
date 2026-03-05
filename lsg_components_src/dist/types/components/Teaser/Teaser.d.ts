import { JSX } from "react";
import { IButtonBaseProps } from "../Button/Button";
type ITeaserProps = IButtonBaseProps & {
    /** The HTML tag that is rendered for the headline. */
    headlineSize?: "h5" | "h4";
    /** If set a overline will be rendered */
    overline?: string;
    /** Alternative HTML tag that is rendered for overline. */
    overlineAs?: string;
    /** If set a subline will be rendered */
    subline?: string;
    /** Alternative HTML tag that is rendered for subline. */
    sublineAs?: any;
    /** The default images path. */
    imgSrc?: string;
    /** Text description of the image. */
    imgAlt?: string;
    /** Set image ratio. */
    imageRatio?: "16-9" | "21-9";
    /** Name of the HTML tag that is rendered for the outer div. Defaults to "li" if used inside a TeaserGroup. */
    as?: keyof JSX.IntrinsicElements;
    /** Link Label */
    linkLabel?: string;
} & ({
    headline?: undefined;
    headlineAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | string;
} | {
    /** The item heading */
    headline: string;
    /** Alternative HTML tag that is rendered for headline. mandatory when headline is set (e.g. "h2", "h3", "div", "span", "p") */
    headlineAs: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | string;
});
declare const Teaser: {
    ({ imageRatio, headlineSize, headlineAs, ...props }: ITeaserProps): JSX.Element;
    displayName: string;
    Group: {
        ({ children, groupHeadlineSize, groupHeadlineAs, groupImageRatio, hasFocusTeaser, }: import("../TeaserGroup/TeaserGroup").ITeaserGroupProps): JSX.Element;
        displayName: string;
    };
};
export { Teaser, ITeaserProps };
