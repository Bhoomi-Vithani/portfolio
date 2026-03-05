import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface ISearchProps extends IBasicProps {
    /** The look of the Search component: The "hero" variant is designed as a prominent and central element of a website's user experience, while the smaller "default" version is primarily used in side navigations and headers. */
    appearance?: "hero" | "default";
    /** Whether the element will be rendered as an inline element. As of version 19, the Search with default
     *  appearance will be rendered as an inline element even if the inline prop is not set. */
    inline?: boolean;
    /** The current value of the search input. */
    value: string;
    /** A human-interpretable label for the search input (used for screen readers). */
    label: string;
    /** The name of the search input. */
    name?: string;
    /** The placeholder text for the search input. */
    placeholder?: string;
    /** Disables the input and the action elements. */
    disabled?: boolean;
    /** Sets the loading status: Shows a Spinner component if set to true.  */
    loading?: boolean;
    /** Displays an 'x' clear icon button used for deleting text input.  */
    clearIcon?: boolean;
    /** Hides the submit button. */
    inlineSubmitHidden?: boolean;
    /** Slot for additional icon buttons (IconLinks). */
    additionalActions?: React.ReactNode;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...). */
    htmlAttrs?: React.InputHTMLAttributes<HTMLInputElement> | Record<`data-${string}`, string | number | boolean>;
    /** Optional ref for the native input element. */
    inputRef?: React.MutableRefObject<HTMLInputElement>;
    /** Sets the focus state. */
    hasFocus?: boolean;
    /** Sets the hover state. */
    hasHover?: boolean;
    /** Is called on blur. */
    onBlur?: (event: React.FocusEvent<HTMLElement>, name: string) => void;
    /** Is called on focus. */
    onFocus?: (event: React.FocusEvent<HTMLElement>, name: string) => void;
    /** Triggered on key press. */
    onKeyDown?: (key: string, name: string, event: React.KeyboardEvent<HTMLElement>) => void;
    /** Is called on each change and passes the new value and the id of the component. Expected types are string | Date | number. */
    onChange?: (value: string, name: string, event: React.SyntheticEvent<HTMLElement>) => void;
    /** Is called on submit. */
    onSearch?: (value: string, name: string, event: React.FormEvent<HTMLFormElement>) => void;
}
declare const Search: {
    ({ appearance, inline, ...props }: ISearchProps): React.JSX.Element;
    displayName: string;
};
export { Search };
export type { ISearchProps };
