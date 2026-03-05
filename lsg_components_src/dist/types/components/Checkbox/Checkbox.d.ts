import * as React from "react";
import { ReactNode } from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface ICheckboxProps extends IBasicProps {
    /** Setting the value to true/false will check/uncheck the Checkbox. Setting the value to undefined will
     generate the indeterminate look of the Checkbox (which is not meant to be activated by a user clicking on or
     pressing the Space key on a Checkbox). For information about indeterminate use cases,
     please see https://css-tricks.com/indeterminate-checkboxes/ and
     https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox. */
    value?: boolean;
    /** Boolean value indicating if Checkbox input is disabled */
    disabled?: boolean;
    /** Boolean value indicating if Checkbox input is invalid */
    invalid?: boolean;
    /** Text on the right side of the Checkbox */
    label?: string;
    /** You can set the internal name attribute for a Checkbox with this prop. Several checkboxes with the same name
     *  will be grouped together. For more usage information, see
     *  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox. */
    name?: string;
    /** A small helper text that is placed below the label.  */
    helperText?: ReactNode;
    /** Error text below the label. If you set this prop, the Checkbox is turned to invalid, even if the invalid
     *  prop is false.  */
    errorText?: ReactNode;
    /** Function to be called whenever the checkbox is clicked. Not called when the checkbox is disabled. */
    onChange?: (value: boolean, name: string, event: React.SyntheticEvent<HTMLInputElement>) => void;
    /** HTML 'title' attribute */
    title?: string;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React.InputHTMLAttributes<HTMLInputElement> | Record<`data-${string}`, string | number | boolean>;
    /** Use this prop to control if the aria-live attribute is set for the errorText */
    errorTextAriaLive?: boolean;
}
declare const Checkbox: {
    (props: ICheckboxProps): React.JSX.Element;
    displayName: string;
    Group: {
        (props: import("../InputGroup/CheckboxGroup").ICheckboxGroupProps): React.JSX.Element;
        displayName: string;
    };
};
export { Checkbox, ICheckboxProps };
