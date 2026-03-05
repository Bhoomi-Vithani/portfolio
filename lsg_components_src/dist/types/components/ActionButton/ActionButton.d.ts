import type { IIcon } from "@lsg/icons";
import * as React from "react";
import { IButtonBaseProps } from "../Button/Button";
interface IActionButtonProps extends IButtonBaseProps {
    /** Defines the text that is shown under the Icon. */
    label: React.ReactNode;
    /** @deprecated Use color instead. */
    look?: "primary" | "secondary";
    /**
     * Use one of the defined button colors.
     * Visual Appearance of the ActionButton. Use `color="primary"` only once in a page to indicate, how a user gets to the next step.
     */
    color?: "primary" | "secondary";
    /**
     * Use the appearance="no-text" property, if you want to hide the label text visually.
     * Screen readers will continue to detect the label text.
     */
    appearance?: "no-text";
    /** Icon, e.g. icon={communication___call}.  */
    icon?: IIcon;
    /**
     * Defines the basic appearance of action button, similar to Icons.
     * Have a look at the Icon component description for further information and visual examples.
     */
    iconVariant?: "outline" | "solid";
    /** Variant: floating (lower half of the screen).  */
    floating?: boolean;
}
declare const ActionButton: {
    ({ color, refCallback, disabled, label, children, loadingText, ...props }: IActionButtonProps): React.JSX.Element;
    displayName: string;
    Group: {
        (props: import("../ActionButtonGroup/ActionButtonGroup").IActionButtonGroupProps): React.JSX.Element;
        displayName: string;
    };
};
export { ActionButton, IActionButtonProps };
