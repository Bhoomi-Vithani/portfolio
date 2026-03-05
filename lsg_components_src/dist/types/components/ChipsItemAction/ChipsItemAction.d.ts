import { IIcon } from "@lsg/icons";
import React from "react";
import { IButtonBaseProps } from "../Button/Button";
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
interface IChipsItemActionProps extends IChipsItemBaseProps, Omit<IButtonBaseProps, "disabled" | "a11yMeaningfulLabel" | "nonInteractive" | "as"> {
    onClick?: (event: React.MouseEvent<HTMLElement>, name: string) => void;
    /**
     * Provides for support of e.g. React Router links, see Button examples
     * */
    actionAs?: any;
    /**
     * Provides for support of e.g. React Router links, see Button examples
     * */
    actionProps?: any;
    /** Change appearance of the ChipItemAction to have a darker background color, for example
     * in a use case where the chip shows that there are filters active that can be removed by clicking on the chip.
     *  Activates clear icon (if you don't need this, set the prop clearIcon to false). */
    isSelected?: boolean;
    /** If ChipItemAction has an active selection, the selection has to be removable. */
    onResetFilter?: () => void;
    /** If clearIcon is true, an "x" icon is displayed, similar to ChipsItemDismissable.
     * A click on the icon calls the onResetFilter callback. */
    clearIcon?: boolean;
}
declare const ChipsItemAction: React.ForwardRefExoticComponent<IChipsItemActionProps & React.RefAttributes<HTMLElement>>;
export { ChipsItemAction, IChipsItemActionProps };
