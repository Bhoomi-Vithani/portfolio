import * as React from "react";
import { IClicklistSelectableItemProps } from "../ClickListCheckboxesItem/ClickListCheckboxesItem";
interface IClickListRadiosItemProps extends IClicklistSelectableItemProps {
    /** Change handler of the item. WARNING: `ClickListRadios` parent will override this property. */
    onChange?: (value: boolean, name: string, event: React.SyntheticEvent<HTMLInputElement>) => void;
}
declare const ClickListRadiosItem: {
    ({ showLinkLabel, ...props }: IClickListRadiosItemProps): React.JSX.Element;
    displayName: string;
};
export { ClickListRadiosItem, IClickListRadiosItemProps };
