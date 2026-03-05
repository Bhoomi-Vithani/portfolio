import * as React from "react";
import { IButtonBaseProps } from "../Button/Button";
interface ICircleIconLinkProps extends IButtonBaseProps {
    /** The icon displayed within the IconLink (e.g. icon={communication___call}) */
    icon: any;
    /** Defines the text that is shown next to the Icon. It will be read by screen readers. */
    label: React.ReactNode;
    /** Description text below the label.  */
    helper?: string;
    /** @deprecated Use color instead. */
    look?: "primary" | "secondary";
    /** Set the background color primary (filled), secondary (not filled) */
    color?: "primary" | "secondary";
    /**
     * One of the presets defined in {Icon.Variants -> SOLID or OUTLINE}.
     * Have a look at the Icon component description for further information and visual examples.
     */
    iconVariant?: "outline" | "solid";
    /** Switch between left and centered layout. */
    centeredLayout?: boolean;
}
declare const CircleIconLink: {
    ({ color, look, disabled, centeredLayout, iconVariant, refCallback, ...props }: ICircleIconLinkProps): React.JSX.Element;
    displayName: string;
};
export { CircleIconLink, ICircleIconLinkProps };
