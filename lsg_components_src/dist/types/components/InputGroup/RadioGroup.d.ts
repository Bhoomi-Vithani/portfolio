import * as React from "react";
import { IInputGroupProps } from "./InputGroup";
interface IRadioProps extends IInputGroupProps {
    /** Sets the value of the input. */
    value?: string;
    /** Sets the name of the input. */
    name?: string;
    /** Is called on every text change and passes the new value and the name of the component. */
    onChange?: (value: string, name: string, event: React.SyntheticEvent<HTMLElement>) => void;
}
interface IRadioGroupProps extends IInputGroupProps {
    /** Sets the value of the Radio. */
    value?: string;
    /** You can set the internal name attribute for the 'input type="radio"' HTML child elements with this prop. Several
     * radios with the same name will be grouped together. For more usage information, see
     *  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio. */
    name?: string;
    /** Is called on every change and passes the new value and the name of the component. */
    onChange?: (value: any, name: string, event: React.SyntheticEvent<HTMLElement>) => void;
}
declare const RadioGroup: {
    (props: IRadioGroupProps): React.JSX.Element;
    displayName: string;
};
export { RadioGroup, IRadioProps, IRadioGroupProps };
