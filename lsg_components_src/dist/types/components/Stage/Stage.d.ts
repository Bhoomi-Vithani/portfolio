import * as React from "react";
import { ReactNode } from "react";
import { IBasicProps } from "../../base/IBasicProps";
import { IFocalPoint } from "../Picture/Picture";
interface IStageProps extends IBasicProps {
    /** Text placed as <h1> on the stage (required). */
    headline: React.ReactNode;
    /** Alternative HTML tag that is rendered for headline. */
    headlineAs?: string;
    /** Text placed above the headline. */
    overline?: React.ReactNode;
    /** Alternative HTML tag that is rendered for overline. */
    overlineAs?: string;
    /** Describing text below the headline. */
    leadText?: React.ReactNode;
    /** Tag name which is used for rendering the leadText. */
    leadTextAs?: string;
    /** Call-to-Action button below the leadText. */
    button?: ReactNode;
    /**
     *  @deprecated("The scrollerText property will be removed in the next major release. The text won't be visible
     *  by now")
     * Text placed above the animated scroller.
     */
    scrollerText?: string;
    /** Function to be called when the scroll icon is clicked.
     * So you can implement the scroll behaviour yourself. E.g. for defined jump targets on the page.  */
    onScrollerClick?: () => void;
    /** Deactivate automatic hyphens if you want to set them manually. */
    manualHyphenation?: boolean;
    /**
     * Src attribute of the `<img>` element (required).
     * Used as a fallback for browsers that do not support the HTML `<picture>` element.
     */
    backgroundImageImgSrc?: string;
    /** An array of objects in the format of the HTML `<picture>` `<source>` element. */
    backgroundImageSource?: React.SourceHTMLAttributes<HTMLSourceElement>[];
    /** Focal point within the background image. Default is left: 50%, Top: 30%(>sm) | 20%(xs). */
    backgroundImageFocalPoint?: IFocalPoint;
    /** Background image alt text. Default is "". */
    backgroundImageAltText?: string;
    /** Background video path. */
    backgroundVideoSrc?: string;
    /** Turn off background gradient. */
    backgroundGradientDisabled?: boolean;
    /** The 'light' value of this prop will produce a lighter colour overlay for your image, and a dark text colour
     *  to ensure high contrast. The 'dark' value will create the opposite effects. */
    theme?: "light" | "dark";
    /**
     * Theme of the outlier text on mobile devices - One of "light" or "dark".
     * Should be set to "dark" if the successive section has a dark theme.
     */
    nextTheme?: "light" | "dark";
    /** EyeCatcher appearance time in ms. Default is "3000". */
    eyeCatcherAppearanceTime?: number;
    /**
     * Short text for EyeCatcher on small screens (viewport < lg).
     * If not defined, no EyeCatcher will be shown.
     */
    eyeCatcherText?: React.ReactNode;
    /** Long text for the EyeCatcher on large screens (viewport >= lg). */
    eyeCatcherTextLong?: React.ReactNode;
    /** EyeCatcher font size - One of "small", "medium", "large" or "xlarge". */
    eyeCatcherFontSize?: "small" | "medium" | "large" | "xlarge";
    /** Increase the text container width of the EyeCatcher on large screens (viewport >= lg). */
    eyeCatcherIncreaseWidth?: boolean;
    /** Id of the EyeCatcher element. Can be used to set ariaDescribedBy for the FootnoteAnchor. */
    eyeCatcherId?: string;
}
declare const Stage: {
    ({ leadText, leadTextAs, headline, headlineAs, theme, nextTheme, ...props }: IStageProps): React.JSX.Element;
    displayName: string;
};
export { Stage };
export type { IStageProps };
