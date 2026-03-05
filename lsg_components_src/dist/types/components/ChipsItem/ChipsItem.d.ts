import React, { JSX } from "react";
import { IBasicProps } from "../../base/IBasicProps";
export interface IChipsItemBaseProps extends IBasicProps {
    /** Chip label */
    label?: string;
    /** @deprecated 20.03.24: Change implementation to conditional rendering. Use other ChipItem types. */
    isHidden?: boolean;
    /** Is Chip selected */
    isSelected?: boolean;
    /** Function to be called on click event. Not called when the Chip is disabled. */
    onClick?: (e: React.MouseEvent<HTMLElement>, name: string) => void;
    /** Name of the HTML tag that is rendered for the outer div. Defaults to "li" if used inside a group with more than one item, or a group that is set to "ul" or "ol". To change the tag of the button, use the `actionAs` prop. */
    as?: keyof JSX.IntrinsicElements;
}
export {};
