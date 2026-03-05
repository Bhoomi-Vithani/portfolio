import type { IIcon } from "@lsg/icons";
import React, { JSX } from "react";
import { IActionBaseProps } from "../../Action/shared/ActionPresentation";
export interface ICircleIconLinkPresentationProps extends Omit<IActionBaseProps, "hasTabIndex" | "hasMouseHover" | "onMouseHoverChange" | "hasKeyboardFocus" | "onKeyboardFocusChange"> {
    /** Defines the text that is shown next to the Icon. If look is set to "no-text" it will be set as title-attribute to be read by screenreaders */
    label: React.ReactNode;
    /** The icon that shall be displayed within the iconlink - this will also be within the click-area */
    iconName?: string;
    /** The icon that shall be displayed within the iconlink - this will also be within the click-area */
    icon?: IIcon;
    /** Icon variant. One of: "outline" | "solid" */
    iconVariant?: "outline" | "solid";
    /** Set the background color primary (filled), secondary (not filled) */
    color?: "primary" | "secondary";
    /** Description text below the label.  */
    helper?: string;
    /** Switch between left and centered layout. */
    centeredLayout?: boolean;
    /** Component to render the outer element */
    as?: keyof JSX.IntrinsicElements;
}
export declare const CircleIconLinkPresentation: {
    (props: ICircleIconLinkPresentationProps): JSX.Element;
    displayName: string;
};
