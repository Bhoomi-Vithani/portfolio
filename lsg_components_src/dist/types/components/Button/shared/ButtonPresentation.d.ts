import { type IIcon } from "@lsg/icons";
import { ReactNode, JSX } from "react";
import { IActionBaseProps } from "../../Action/shared/ActionPresentation";
export interface IButtonPresentationProps extends Omit<IActionBaseProps, "hasTabIndex" | "hasMouseHover" | "onMouseHoverChange" | "hasKeyboardFocus" | "onKeyboardFocusChange"> {
    /** Label text for button  (Remark: Replacement of children prop to support a better a11y pattern) */
    label: ReactNode;
    /** @deprecated , replaced by color */
    look?: "primary" | "secondary";
    /** Describe the whole design appearance of the button */
    color?: "primary" | "secondary";
    reducedWidthMobile?: boolean;
    as?: keyof JSX.IntrinsicElements;
    /** Icon element */
    icon?: IIcon;
    /** Icon name */
    iconName?: string;
    /** Positioning of icon beside button text/label. Option no-text show a centered icon only, but a given label/children becomes reading by screen reader  */
    iconAppearance?: "left" | "right" | "no-text";
    /** Presentation of icon */
    iconVariant?: "outline" | "solid";
}
export declare const ButtonPresentation: {
    (props: IButtonPresentationProps): JSX.Element;
    displayName: string;
};
