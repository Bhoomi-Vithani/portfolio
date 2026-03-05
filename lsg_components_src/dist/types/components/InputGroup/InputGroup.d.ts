import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IInputGroupProps extends IBasicProps {
    /** Layout of the inputs, vertical or horizontal */
    direction?: "vertical" | "horizontal";
    /** You can set a small title text for the whole group above your first item with
     *  this prop. Using this prop also internally sets the aria-labelledby attribute. As a result, your label prop
     *  value will be linked to the fieldset HTML element of the group by aria-labelledby. (However, setting an
     *  additional aria-labelledby in the htmlAttrs prop of your group will overwrite the aria-labelledby set by
     your label prop.) */
    label?: string;
    /** Sets a helper text below the component. */
    helperText?: string;
    /** Adds an error text below the component. If you use this prop, the errorText is added below the helperText (if defined), and the group is implicitly set to invalid. */
    errorText?: string;
    /** Indicates if this group is valid */
    invalid?: boolean;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React.HTMLAttributes<HTMLElement> | Record<`data-${string}`, string | number | boolean>;
}
declare const InputGroup: {
    ({ children, invalid, ...otherProps }: IInputGroupProps): React.JSX.Element;
    Radio: {
        (props: import("./RadioGroup").IRadioGroupProps): React.JSX.Element;
        displayName: string;
    };
    displayName: string;
};
export { InputGroup };
export type { IInputGroupProps };
