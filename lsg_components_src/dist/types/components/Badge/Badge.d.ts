import type { IIcon } from "@lsg/icons";
import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IBadgeProps extends IBasicProps {
    /** @deprecated: Use color instead. Badge look */
    look?: "primary" | "highlight" | "supplementary" | "optional" | "inactive" | "error" | "success" | "alert" | "secondary-1" | "secondary-2" | "secondary-3" | "secondary-4" | "secondary-5" | "secondary-6";
    /** Badge color */
    color?: "primary" | "highlight" | "supplementary" | "optional" | "inactive" | "error" | "success" | "alert" | "secondary-1" | "secondary-2" | "secondary-3" | "secondary-4" | "secondary-5" | "secondary-6";
    /** @deprecated 30.01.2024: Not required anymore. Badge type - One of "text", "icon" or "dot" */
    type?: "text" | "icon" | "dot";
    /** @deprecated 17.06.2024: Not required anymore. Depends on the text or icon props that are passed. Badge type - One of "text", "icon" or "dot" */
    appearance?: "text" | "icon" | "dot";
    /**  Badge text - If type is "text" and text is undefined or an empty string, the Badge will be rendered as a dot. This 'text' prop will be ignored if 'icon' prop is set.   */
    text?: string;
    /** Badge Icon. If prop is set, 'text' prop will be ignored. */
    icon?: IIcon;
    /** Badge icons can be styled as outline, featuring hollow designs that
     emphasize contours, or solid, which are filled in. */
    iconVariant?: "solid" | "outline";
    /** Label that describes the Icon if the default icon label is not sufficient (for example an icon is used in different colors). You can set icon Label for each list item as well. */
    iconLabel?: string;
    /** Badge size */
    size?: "default" | "large";
    /** The subsequent footnote item number. */
    footnoteIdentifier?: string;
    /** The id of the corresponding footnote item. */
    footnoteIdItem?: string;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React.HTMLAttributes<HTMLElement> | Record<`data-${string}`, string | number | boolean>;
    /** If true, sets badge in line of text. Makes a line break otherwise. */
    inline?: boolean;
    /** Sets margin on either one or both sides. Left sets the margin on the left, right on the right and both on
     *  both sides. */
    margin?: "left" | "right" | "both";
}
declare const Badge: {
    ({ look, color, text, icon, iconLabel, size, footnoteIdentifier, footnoteIdItem, iconVariant, children, ...props }: IBadgeProps): React.JSX.Element;
    displayName: string;
};
export { Badge, IBadgeProps };
