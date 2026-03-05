import type { IIcon } from "@lsg/icons";
import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IArticleStageProps extends IBasicProps {
    /** Set headline */
    headline?: React.ReactNode;
    /** Please pass a value of Headline.Sizes */
    headlineSize?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    /** Sets an alternative HTML tag for headline (e.g. "h5", "h6", "span", "div"," p") */
    headlineAs: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | string;
    /** Set headline overline */
    headlineOverline?: React.ReactNode;
    /** Sets an alternative HTML tag for overline */
    headlineOverlineAs?: string;
    /** Set headline subline */
    headlineSubline?: React.ReactNode;
    /** Sets an alternative HTML tag for subline */
    headlineSublineAs?: string;
    /** Sets a helpertext */
    helperText?: string;
    /** set iconlinks */
    iconLinks?: any;
    /** <lsg-thumb/> props */
    /** Thumb icon  */
    thumbIcon?: IIcon;
    /** Thumb icon name */
    thumbIconName?: string;
    /** Thumb icon variant. One of: "outline" | "solid" */
    thumbIconVariant?: "solid" | "outline";
    /** Thumb icon title. */
    thumbIconTitle?: string;
    /** Text that should be placed inside the circle */
    thumbText?: string;
    /** Source for thumb image */
    thumbImgSrc?: string;
    /** The item heading */
    thumbHeadline?: string;
    /** If set a subline will be rendered */
    thumbSubline?: string;
    /** See Picture component: Array of objects that have the format of the `<source>` element. */
    pictureSource?: React.SourceHTMLAttributes<HTMLSourceElement>[];
    /** See Picture component: Src attribute of the `<img>` element (required). Is used as a fallback for browsers that do not support the picture element  */
    pictureImgSrc: string;
    /** Text description of the image. */
    pictureAlt?: string;
    /** Caption below the image (optional). */
    pictureCaption?: string;
    /** Display the component with a centered layout. */
    centeredLayout?: boolean;
    /** deactivate automatic hyphens if you want to set them manually */
    manualHyphenation?: boolean;
}
/**
 * @deprecated: 11.2023 - Will be removed in the next major release.
 * Have a look at the "Article Stage Pattern" which uses native components like shown in the Markenportal UX Patterns
 * section: https://markenportal.commerzbank.com/styleguide/article-stage-pattern/index.html
 */
declare const ArticleStage: {
    ({ iconLinks, centeredLayout, ...props }: IArticleStageProps): React.JSX.Element;
    displayName: string;
};
export { ArticleStage, IArticleStageProps };
