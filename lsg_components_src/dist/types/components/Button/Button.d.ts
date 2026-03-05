import type { IIcon } from "@lsg/icons";
import React, { JSX, ReactNode, Ref } from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IButtonBaseProps extends IBasicProps {
    /** Is the Button clickable by the user? This also reflects in its appearance. */
    disabled?: boolean;
    /** Switches the Button to loading mode. It gets disabled and a loading Spinner will be shown. */
    loading?: boolean;
    /** This prop is used to provide an ARIA label for the Spinner component to inform screen reader users about the current status of processes.
     *  If not set, a fixed text ("Loading"/"Laden...") will be read by screen readers. Note that this text (also visible beneath the Spinner circle with reduced-motion browser settings)
     *  cannot be modified to avoid potential UX issues caused by too long text.
     *  */
    loadingText?: string;
    /**
     * External link address. An 'a'-tag will be used when you fill this property.
     * If there's no href, a button element will be used.
     */
    href?: string;
    /** Name of the component, can be used in onClick handler */
    name?: string;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React.ButtonHTMLAttributes<HTMLButtonElement> | React.AnchorHTMLAttributes<HTMLAnchorElement> | React.InputHTMLAttributes<HTMLInputElement> | Record<`data-${string}`, string | number | boolean>;
    /** Function to be called before each onClick-Event. Not called when the button is disabled. */
    onMouseDown?(e: React.MouseEvent<HTMLElement>): void;
    /**
     * Function to be called on the onClick event. This function will not be called if the link is disabled.
     * The `name` parameter will return the name you passed to the component.
     */
    onClick?(e: React.MouseEvent<HTMLElement>, name: string): void;
    /** Function to be called whenever a key is pressed while the button is focused. */
    onKeyDown?(e: React.KeyboardEvent<HTMLElement>): void;
    /** Focus callback */
    onFocus?(e: React.FocusEvent<HTMLElement>): void;
    /** Blur callback */
    onBlur?(e: React.FocusEvent<HTMLElement>): void;
    /** Callback function to get the ref of the button. */
    refCallback?: Ref<HTMLElement>;
    /**
     * Render an alternative action component, e.g. a React Router link
     * Example: <<Button, Teaser, etc.> actionAs={ReactRouterLink} actionProps={{to: "/mypage"}} ...
     */
    actionAs?: any;
    /** These are the props for the alternative action component (e.g. a React Router link) */
    actionProps?: any;
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
    /**
     * Name of the html tag that is rendered for the outer div. Defaults to "li" if used inside a group with more than
     * one item, or a group that is set to "ul" or "ol". To change the tag of the button, use the `actionAs` prop.
     */
    as?: keyof JSX.IntrinsicElements;
}
interface IButtonProps extends IButtonBaseProps {
    /** Label text for button  (Remark: Replacement of children prop is adaption of a11y pattern later on) */
    label: ReactNode;
    /** @deprecated Use color instead. (date: 04.12.2023) */
    look?: "primary" | "secondary";
    /** Use one of the defined button colors. */
    color?: "primary" | "secondary";
    /** Icon element */
    icon?: IIcon;
    /** Name */
    iconName?: string;
    /** Positioning of icon beside button text/label. Option no-text show a centered icon only */
    iconAppearance?: "left" | "right" | "no-text";
    /** Presentation/Appearance of icon */
    iconVariant?: "outline" | "solid";
}
declare const Button: {
    ({ color, refCallback, loadingText, ...props }: IButtonProps): JSX.Element;
    displayName: string;
};
export { Button, IButtonBaseProps, IButtonProps };
