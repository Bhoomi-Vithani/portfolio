import * as React from "react";
import { IClickListProps } from "../ClickList/ClickList";
interface IClickListRadiosProps extends IClickListProps {
    /** Sets the value of the ClickList. */
    value?: string;
    /** Sets the name of the ClickList. */
    name?: string;
    /** Called on each value change due to selection of a selectable item within the click list, providing the new value. */
    onChange?: (value: string, name: string, event: React.SyntheticEvent<HTMLElement>) => void;
    /** onBlur will be thrown when the whole component lose the focus */
    onBlur?: (event: React.SyntheticEvent<HTMLElement>) => void;
    /** Prop can be used as central prop on validation process in opposite to set invalid selectively on every item, if any value is mandatory */
    invalid?: boolean;
    /** Prop can be used on validation process with providing error text below the list */
    errorText?: string;
}
declare const ClickListRadios: {
    (props: IClickListRadiosProps): React.JSX.Element;
    displayName: string;
    Item: {
        ({ showLinkLabel, ...props }: import("../ClickListRadiosItem/ClickListRadiosItem").IClickListRadiosItemProps): React.JSX.Element;
        displayName: string;
    };
};
export { ClickListRadios, IClickListRadiosProps };
