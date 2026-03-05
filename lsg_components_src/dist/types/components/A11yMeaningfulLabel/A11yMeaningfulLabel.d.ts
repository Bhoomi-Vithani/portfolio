import * as React from "react";
import { Ref } from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IA11yMeaningfulLabel extends IBasicProps {
    /**
     * External link address. An 'a'-tag will be used when you fill this property.
     * If there's no href, a button element will be used.
     */
    href?: string;
    /** Name of the component, can be used in onClick handler */
    name?: string;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React.ButtonHTMLAttributes<HTMLButtonElement> | React.AnchorHTMLAttributes<HTMLAnchorElement> | Record<`data-${string}`, string | number | boolean>;
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
    /** Callback function to get the ref of the button or label which depend on context of use . */
    refCallback?: Ref<HTMLElement>;
    /**
     * Render an alternative action component, e.g. a React Router link
     * Example: <<Button, Teaser, etc.> actionAs={ReactRouterLink} actionProps={{to: "/mypage"}} ...
     */
    actionAs?: any;
    /** These are the props for the alternative action component (e.g. a React Router link) */
    actionProps?: any;
    /** whether an inline element is rendered. If set to false, the component renders as a block element */
    inline?: boolean;
}
/**
 * 'Stretches' a clickable area.
 * To get an idea of what's happening here, see:
 * https://inclusive-components.design/cards/
 */
declare const A11yMeaningfulLabel: {
    ({ inline, ...props }: IA11yMeaningfulLabel): React.JSX.Element;
    displayName: string;
};
export { A11yMeaningfulLabel, IA11yMeaningfulLabel };
