import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IOptions {
    label: string;
    disabled?: boolean;
    value: string;
}
interface IAutocompleteProps extends IBasicProps {
    /** Sets a helper text below the component. */
    helperText?: string;
    /** Adds an error text below the component. If you use this prop, the errorText is added below the helperText (if defined), and the component is implicitly set to invalid. */
    errorText?: string;
    /** Sets text field and style to disabled. */
    disabled?: boolean;
    /** Sets text field and style to 'error'. 'errorText' becomes visible if set. */
    invalid?: boolean;
    /** Sets the label text. */
    label: string;
    /** Is called on blur. */
    onBlur?: (event: React.FocusEvent<HTMLElement>, name: string) => void;
    /** Is called on focus. */
    onFocus?: (event: React.FocusEvent<HTMLElement>, name: string) => void;
    /** Is called on every text change and passes the new value and the id of the component. */
    onChange?: (value: string, name: string, isSelected: boolean, CustomEvent: any) => void;
    /** Triggered on key press. */
    onKeyDown?: (key: string, name: string, event: React.KeyboardEvent<HTMLElement>) => void;
    /** Sets the placeholder text (visible on a focused input with empty value). */
    placeholder?: string;
    /** Sets the text field and style to read-only. */
    readOnly?: boolean;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React.InputHTMLAttributes<HTMLInputElement> | Record<`data-${string}`, string | number | boolean>;
    /** Sets the value of the input. */
    value: string;
    /** Sets the 'name' attribute of the 'input' HTML element. */
    name?: string;
    /** If set to "true", the text en/de " (optional)"/" (Optional)" is appended to the label.
     *  You can also pass in a predefined string. */
    optional?: boolean | string;
    /** An array with the selectable options (see example) */
    options?: IOptions[];
    /** If clearIcon is true, an X-icon is displayed for non-empty/selected fields on focus and hover, in order to reset
     *  a selection. A click will call the 'onChange' method -> with an empty string. */
    clearIcon?: boolean;
    /** If enabled, this will be an input with a suggestion list */
    withTextInput?: boolean;
    /** Label that is shown as a placeholder in the flyout list, when the options are empty. */
    emptyListLabel: any;
    /** With spacing="dense", the text input whitespace of the Autocomplete is reduced by smaller paddings and bottom-margins.
     * Set spacing="default" only in special FormContainer with spacing="dense" prop (edge) cases where you wish to override the "dense" spacing
     *   in an individual Autocomplete. In this case, the Autocomplete will receive its default whitespace within the FormContainer. */
    spacing?: "default" | "dense";
}
declare class Autocomplete extends React.Component<IAutocompleteProps, {}> {
    static displayName: string;
    static defaultProps: Partial<IAutocompleteProps>;
    render(): React.JSX.Element;
}
export { Autocomplete, IAutocompleteProps, IOptions };
