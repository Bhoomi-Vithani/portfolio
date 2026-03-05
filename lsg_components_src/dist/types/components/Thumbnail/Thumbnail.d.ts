import type { IIcon } from "@lsg/icons";
import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IThumbnailProps extends IBasicProps {
    /** The icon that shall be displayed within the component */
    icon?: IIcon;
    /** Icon variant. One of: "outline" | "solid" */
    iconVariant?: "outline" | "solid";
    /** Text used as SVG title and additional text info. It's highly recommended to use iconTitle also when using the text prop. */
    iconTitle?: string;
    /** Text that should be placed inside the circle */
    text?: string;
    /** image source */
    src?: string;
    /** Text used as IMG alternative text */
    imgAltText?: string;
}
declare const Thumbnail: {
    ({ iconVariant, ...props }: IThumbnailProps): React.JSX.Element;
    displayName: string;
};
export { Thumbnail, IThumbnailProps };
