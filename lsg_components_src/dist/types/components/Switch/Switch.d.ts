import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface ISwitchProps extends IBasicProps {
    /** Sets the state of the Switch to on (checkmark in dot on the right side) or off (plain dot on the left side) */
    value: boolean;
    /** The 'name' prop value of the Switch will be internally assigned to the HTML 'value' attribute of the 'input'
     *  element. Use the 'htmlAttrs' prop in order to assign a value to the HTML 'name' attribute. */
    name?: string;
    /** Text on the right side of the Switch */
    label?: string;
    /** A small helper text that is placed below the Label. */
    helperText?: React.ReactNode;
    /** Error text below the Label. If you set this prop, the Switch is turned to invalid, even if the invalid prop
     *  is not set. */
    errorText?: React.ReactNode;
    /** Sets the Switch to disabled. */
    disabled?: boolean;
    /** Sets the Switch to an invalid appearance. */
    invalid?: boolean;
    /** Called when the Switch is clicked or changes its state (Switch.Stateful). */
    onChange?: (value: boolean, name: string, event: React.SyntheticEvent<HTMLInputElement>) => void;
    /** HTML 'title' attribute */
    title?: string;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React.InputHTMLAttributes<HTMLInputElement> | Record<`data-${string}`, string | number | boolean>;
    /** Use this prop to control if the aria-live attribute is set for the errorText */
    errorTextAriaLive?: boolean;
}
declare const Switch: {
    (props: ISwitchProps): React.JSX.Element;
    displayName: string;
    Group: {
        (props: import("../InputGroup/SwitchGroup").ISwitchGroupProps): React.JSX.Element;
        displayName: string;
    };
};
export { Switch, ISwitchProps };
