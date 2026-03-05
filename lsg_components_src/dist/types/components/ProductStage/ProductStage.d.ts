import type { IIcon } from "@lsg/icons";
import * as React from "react";
import { ReactNode } from "react";
import { IBasicProps } from "../../base/IBasicProps";
import { IFocalPoint } from "../Picture/Picture";
interface IProductStageProps extends IBasicProps {
    /** Set headline */
    headline: React.ReactNode;
    /** The HTML tag that is rendered for the headline. */
    headlineAs?: string;
    /** Set overline */
    overline?: React.ReactNode;
    /** an alternative html tag for the overline */
    overlineAs?: string;
    /** Set subline */
    subline?: string;
    /** an alternative html tag for the subline */
    sublineAs?: string;
    /** Set a clipped image wich will be placed on a yellow background. */
    foregroundImageSrc?: string;
    /** See Picture component: Src attribute of the `<img>` element. Is used as a fallback for browsers that do not support the picture element  */
    backgroundImageImgSrc?: string;
    /** See Picture component: Array of Objects that have the format of the `<source>` element. */
    backgroundImageSource?: React.SourceHTMLAttributes<HTMLSourceElement>[];
    /** The focal point within the background image - default( left: 50%, Top: 30%(>sm) | 20%(xs) */
    backgroundImageFocalPoint?: IFocalPoint;
    /** Set the background color of the components right area when using a cutout image */
    backgroundColor?: "primary" | "medium" | "light";
    /** An alternative text describing the image (if not set, the image is disregarded by screen readers - see A11Y remarks) */
    alt?: string;
    /** CTA below leadText. */
    button?: ReactNode;
    /** A content area that can be used for texts or lists */
    content?: React.ReactNode;
    /** @deprecated (2023-08-30) This property is obsolete and should be omitted, it has no effect and will be removed a future major release.  */
    scrollerText?: string;
    /** Callback function that is called if button is clicked */
    onButtonClick?: () => void;
    /** @deprecated (2024-07-03) This property is obsolete and should be omitted. Scroller will be removed a future major release.  */
    onScrollerClick?: () => void;
    /** deactivate automatic hyphens if you want to set them manually */
    manualHyphenation?: boolean;
    /** Badge text */
    badgeText?: string;
    /** Badge icon */
    badgeIcon?: IIcon;
    /** Badge color */
    badgeColor?: "highlight" | "supplementary" | "optional";
    /** Badge position */
    badgePosition?: "overline" | "subline";
}
declare const ProductStage: {
    ({ headlineAs, ...props }: IProductStageProps): React.JSX.Element;
    displayName: string;
};
export { ProductStage };
export type { IProductStageProps };
