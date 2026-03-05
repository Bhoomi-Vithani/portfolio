import { IIcon } from "@lsg/icons";
import React from "react";
export interface IChipsItemBaseProps {
    /** Chip label */
    label: string;
    /** Do not show the label. Screen-reader have the possibility to receive the information */
    appearance?: "left" | "right" | "no-text";
    /** Name of the component, can be used in onClick handler */
    name?: string;
    /** Renders the native HTML Tag of the outer Container of a ChipsItem. Default is "li" in a Group. */
    as?: "div" | "li";
    /** Shows a Badge. Badge Text is Part of the Chip's label. */
    badgeText?: string;
    /** Icon in Badge. */
    icon?: IIcon;
    /** Pass one of the icon presets defined to change the icon's appearance */
    iconVariant?: "outline" | "solid";
}
interface IChipsItemDismissibleProps extends IChipsItemBaseProps {
    /** Click-Event to remove the filter chip */
    onDismiss?: (event: React.MouseEvent<HTMLElement>, name: string) => void;
    /** Callback function to save the keyboard focus after dismiss event. */
    onFocusLoss?: () => void;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React.ButtonHTMLAttributes<HTMLButtonElement> | Record<`data-${string}`, string | number | boolean>;
}
declare const ChipsItemDismissible: React.ForwardRefExoticComponent<IChipsItemDismissibleProps & React.RefAttributes<HTMLElement>>;
export { ChipsItemDismissible, IChipsItemDismissibleProps };
