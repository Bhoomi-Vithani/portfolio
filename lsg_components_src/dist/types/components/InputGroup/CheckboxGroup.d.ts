import * as React from "react";
import { IInputGroupProps } from "./InputGroup";
interface ICheckboxGroupProps extends IInputGroupProps {
}
declare const CheckboxGroup: {
    (props: ICheckboxGroupProps): React.JSX.Element;
    displayName: string;
};
export { CheckboxGroup, ICheckboxGroupProps };
