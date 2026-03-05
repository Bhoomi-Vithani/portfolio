import * as React from "react";
import { ReactNode } from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IRadioProps extends IBasicProps {
    /** Boolean value indicating if radio button is checked, prefer using a Radio.Group to set the value of a distinct Radio! */
    value?: boolean;
    /** Boolean value indicating if radio button is disabled */
    disabled?: boolean;
    /** Boolean value indicating if radio button is invalid */
    invalid?: boolean;
    /** Text on the right side of the Radio */
    label?: string;
    /** Set the internal value attribute for the 'input type="radio"' HTML element with this prop.
     * This prop is used as the value for the Radio.Group component! */
    name?: string;
    /** A small helper text below the label */
    helperText?: ReactNode;
    /** Error text below the label. If you set this prop, the Radio is turned to invalid, even if the invalid prop
     *  is false. */
    errorText?: ReactNode;
    /** Function to be called whenever the radio button is clicked. Not called when the radio button is disabled.
     * Prefer using a Radio.Group over this onChange handler to ensure that only one Radio is selected at the same time. */
    onChange?: (value: boolean, name: string, event: React.SyntheticEvent<HTMLInputElement>) => void;
    /** This prop sets the HTML 'title' attribute value. It also shows a tooltip with extra info when hovering over
     * the radio button,helping users understand the radio option. */
    title?: string;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React.InputHTMLAttributes<HTMLInputElement> | Record<`data-${string}`, string | number | boolean>;
    /** Use this prop to control if the aria-live attribute is set for the errorText */
    errorTextAriaLive?: boolean;
}
declare const Radio: {
    (props: IRadioProps): React.JSX.Element;
    displayName: string;
    Group: {
        (props: import("../InputGroup/RadioGroup").IRadioGroupProps): React.JSX.Element;
        displayName: string;
    };
};
export { Radio, IRadioProps };
