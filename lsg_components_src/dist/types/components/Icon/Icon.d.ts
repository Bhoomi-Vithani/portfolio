import type { IIcon } from "@lsg/icons";
import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IIconProps extends IBasicProps {
    /** The Icon that should be displayed. See https://markenportal.commerzbank.com/styleguide/icon/
     * for an overview of available LSG Icons. */
    icon?: IIcon;
    /** Scaled icon in four different sizes.  */
    size?: "xsmall" | "small" | "medium" | "large";
    /** Pass one of the presets defined in literal type. */
    color?: "default" | "primary" | "secondary" | "error" | "success" | "note" | "disabled" | "black" | "white" | "anthracite" | "primary-1" | "primary-2" | "secondary-1" | "secondary-2" | "secondary-3" | "secondary-4" | "secondary-5" | "secondary-6";
    /** Icons can be styled as outline, featuring hollow designs that
     emphasize contours, or solid, which are filled in. */
    variant?: "solid" | "outline";
    /** Icon title. If title is not set, the corresponding or default title is used. Set `title=""` if you require an empty title. */
    title?: string;
    /** Whether to display it inline without a margin. Set to true if icon should be displayed inside continuous text. */
    inline?: boolean;
    /** Additional attributes for the SVG element (e.g. aria attributes). */
    svgAttrs?: Omit<React.SVGAttributes<SVGSVGElement>, "color">;
    /** Show a badge - Only available when icon size is "small". */
    showBadge?: boolean;
    /**
     * Badge text
     * - If badgeText is undefined or an empty string, the Badge will be rendered as a dot.
     * - Up to 3 characters may fit inside. E.g. `99+`.
     */
    badgeText?: string;
}
declare class Icon extends React.Component<IIconProps> {
    static displayName: string;
    static defaultProps: Partial<IIconProps>;
    render(): React.JSX.Element;
}
export { Icon, IIconProps };
