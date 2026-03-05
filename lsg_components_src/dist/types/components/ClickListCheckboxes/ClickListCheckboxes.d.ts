import * as React from "react";
import { IClickListProps } from "../ClickList/ClickList";
interface IClickListCheckboxProps extends IClickListProps {
    /** Set error text for whole click list checkbox type in conjunction with validation */
    errorText?: string;
    /** Prop can be used as central prop on validation process in opposite to set invalid selectively on every item, if any value is mandatory */
    invalid?: boolean;
    /** onBlur will be thrown when the whole component lose the focus */
    onBlur?: (event: React.SyntheticEvent<HTMLElement>) => void;
}
declare const ClickListCheckboxes: {
    (props: IClickListCheckboxProps): React.JSX.Element;
    displayName: string;
    Item: {
        (props: import("../ClickListCheckboxesItem/ClickListCheckboxesItem").IClickListCheckboxesItemProps): React.JSX.Element;
        displayName: string;
    };
};
export { ClickListCheckboxes, IClickListCheckboxProps };
