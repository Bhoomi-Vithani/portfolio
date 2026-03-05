import * as React from "react";
import { IButtonBaseProps } from "../Button/Button";
interface ILink extends IButtonBaseProps {
    /** Button name - will only get passed for button elements, so will be omitted if you specify href. */
    name?: string;
    /** Defines the text that is shown as LinkText. */
    label: React.ReactNode;
    /** @deprecated: Will be renamed to `label` and will be made mandatory in the next major version. */
    children?: React.ReactNode;
    /**
     * Function to be called on the onClick event. This function will not be called if the link is disabled.
     * The `name` parameter will return the name you passed to the component.
     */
    onClick?(e: React.MouseEvent<HTMLElement>, name?: string): void;
    /**
     * If true, this component will be decorative only and will not contain the `<a>` or `<button>` tag itself.
     * This is useful for non-interactive elements inside a card or other components.
     */
    nonInteractive?: boolean;
    /**
     * If true, this component will animate the entire card or other components it is inside.
     * Make sure that the link text is meaningful (e.g. "Buy Product", "Cancel"). It must not contain general phrases
     * (e.g. "Read more", "Select").
     */
    a11yMeaningfulLabel?: boolean;
}
declare const Link: {
    ({ loadingText, ...props }: ILink): React.JSX.Element;
    displayName: string;
};
export { Link };
export type { ILink };
