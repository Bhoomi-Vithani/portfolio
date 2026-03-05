import type { IIcon } from "@lsg/icons";
import * as React from "react";
import { ComponentType, ReactNode, RefObject } from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface ITextFieldProps extends IBasicProps {
    /** @deprecated: Sets an id on the outer div. If you do not set a hostId, the outer div gets the id '<id>-base'. */
    hostId?: string;
    /** Sets the TextField and its style to disabled. */
    disabled?: boolean;
    /** Specifies an additional icon to add supplementary features. */
    iconLink?: ReactNode;
    /** @deprecated (08.05.2025): Please use iconLink instead. Passing 'icon' will set an icon at the primary or
     *  secondary position (if clearIcon is set). */
    icon?: IIcon;
    /** @deprecated (08.05.2025): Please use iconLink instead. Text for the icon that will be accessible for screen
     *  readers */
    iconText?: string;
    /** @deprecated (08.05.2025): Please use iconLink instead. If set to true, the icon can be focused with the tab
     *  key */
    iconFocusable?: boolean;
    /** Sets TextField and its style to 'error'. 'errorText' will become visible if set. */
    invalid?: boolean;
    /** Sets the label text (required). */
    label: string;
    /** Is called on blur. */
    onBlur?: (event: React.FocusEvent<HTMLElement>, name: string) => void;
    /** Is called on focus. */
    onFocus?: (event: React.FocusEvent<HTMLElement>, name: string) => void;
    /** Is called on every change and passes the new value and the name of the component. */
    onChange?: (value: string, name: string, event: React.SyntheticEvent<HTMLElement>) => void;
    /** @deprecated (08.05.2025): Please use iconLink instead. Is called on click on the icon. */
    onIconClick?: (event: React.MouseEvent<HTMLElement>, name: string) => void;
    /** Sets the placeholder text (visible on a focused input with an empty value). */
    placeholder?: string;
    /** Sets the TextField and its style to read-only. */
    readOnly?: boolean;
    /** Basic HTML Attributes can be added here (e.g. aria attributes, tabindex, ...) */
    htmlAttrs?: React.InputHTMLAttributes<HTMLInputElement> | React.TextareaHTMLAttributes<HTMLTextAreaElement> | React.KeyboardEvent<HTMLElement>;
    /** Optional ref for the native input element */
    inputRef?: RefObject<any>;
    /** Sets the value of the input. */
    value: string;
    /** Sets the 'name'-attribute of the input. */
    name?: string;
    /** If clearIcon is true, an X-Icon is displayed for editable non-empty input fields on focus and hover.
     *  A click will call the 'onChange' method -> with an empty string.
     */
    clearIcon?: boolean;
    /** HTML element to be rendered. Other React components can also be used (see 'Type - IBAN' code example on https://markenportal.commerzbank.com/styleguide/text-field). */
    as?: "input" | "textarea" | ComponentType<any>;
    /** If optional is true, the text "(optional)" is appended to the label. If a string is passed, the string is appended to the label. */
    optional?: boolean | string;
    /** Input type defined by literal type */
    type?: "text" | "password";
    /** Adds a suffix to the input text, e.g. "Euro". */
    suffix?: string;
    /** Defines the layout type of the suffix. */
    suffixType?: "inline" | "separated";
    /** Sets a helper text below the component. */
    helperText?: ReactNode;
    /** Adds an error text below the component. If you use this prop, the errorText is added below the helperText (if defined), and the TextField is implicitly set to invalid. */
    errorText?: ReactNode;
    /** Use this prop to control if the aria-live attribute is set for the errorText */
    errorTextAriaLive?: boolean;
    /** With spacing="dense", the whitespace of the TextField is reduced by smaller paddings and bottom-margins.
     * Set spacing="default" only in special FormContainer with spacing="dense" prop (edge) cases where you wish to override the "dense" spacing
     *   in an individual TextField. In this case, the TextField will receive its default whitespace within the FormContainer. */
    spacing?: "default" | "dense";
}
declare const TextField: {
    ({ optional, readOnly, clearIcon, ...otherProps }: ITextFieldProps): React.JSX.Element;
    displayName: string;
};
export { TextField, ITextFieldProps };
