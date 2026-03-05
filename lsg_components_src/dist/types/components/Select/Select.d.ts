import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
export interface IOptions {
    label: string;
    disabled?: boolean;
    value: string;
}
interface ISelectProps extends IBasicProps {
    /** Sets a helper text below the component. */
    helperText?: string;
    /** Adds an error text below the component. If you use this prop, the errorText is added below the helperText (if
     *  defined), and the component is implicitly set to invalid. */
    errorText?: string;
    /** Sets text field and style to disabled. For now, it does not have an effect on the chip-variant. */
    disabled?: boolean;
    /** Sets text field and style to 'error'. 'errorText' becomes visible if set. */
    invalid?: boolean;
    /** Sets the label text (required). */
    label: string;
    /** Is called on blur. */
    onBlur?: (event: React.FocusEvent<HTMLElement>, name: string) => void;
    /** Is called on focus. */
    onFocus?: (event: React.FocusEvent<HTMLElement>, name: string) => void;
    /** Is called on every text change and passes the new value and the id of the component. */
    onChange?: (value: string, name: string, event: React.SyntheticEvent<HTMLElement>) => void;
    /** @deprecated: Triggered on key press. */
    onKeyDown?: (key: string, name: string, event: React.KeyboardEvent<HTMLElement>) => void;
    /** @deprecated: Is called on click on the icon set by 'iconName' and passes the id of the component. */
    onIconClick?: (event: React.MouseEvent<HTMLElement>, name: string) => void;
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
    /** If set to "true", the text en/de "(optional)"/"(Optional)" is appended to the label.
     *  You can also pass in a predefined string. */
    optional?: boolean | string;
    /** An array with the selectable options (see example) */
    options?: IOptions[];
    /** If clearIcon is true, an X-icon is displayed for non-empty/selected fields on focus and hover, in order to reset
     *  a selection. A click will call the 'onChange' method -> with an empty string - default is "true". */
    clearIcon?: boolean;
    /** If enabled, a search text can be entered in the input area. The appropriate entry is focused in the flyout list
     *  that opens below the text input. */
    withTextInput?: boolean;
    /** A label that is shown as a placeholder in the flyout list when the options are empty. */
    emptyListLabel?: string;
    /** Sets the algorithm for the search functionality */
    searchFunction?: "startsWith" | "everywhere" | "startOfWord";
    /** Use this prop to control if the aria-live attribute is set for the errorText */
    errorTextAriaLive?: boolean;
    /** With spacing="dense", the text input whitespace of the Select is reduced by smaller paddings and bottom-margins.
     * Set spacing="default" only in special FormContainer with spacing="dense" prop (edge) cases where you wish to override the "dense" spacing
     *   in an individual Select. In this case, the Select will receive its default whitespace within the FormContainer. */
    spacing?: "default" | "dense";
}
declare const Select: {
    ({ onKeyDown: _, readOnly, ...props }: ISelectProps): React.JSX.Element;
    displayName: string;
};
export { Select, ISelectProps };
