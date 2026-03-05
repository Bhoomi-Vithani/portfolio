import * as React from "react";
import { IClickListItemProps } from "../ClickListItem/ClickListItem";
interface IClicklistSelectableItemProps extends IClickListItemProps {
    /** Sets the 'name'-attribute of the input. */
    name?: string;
    /** If you implemented a Checkbox, setting the value to true/false will check/uncheck the Checkbox.
     *  Setting the value to undefined will generate the indeterminate look of the Checkbox (which is not meant to
     *  be activated by a user clicking on or
     pressing the Space key on a Checkbox). For information about indeterminate use cases,
     please see https://css-tricks.com/indeterminate-checkboxes/ and
     https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox. WARNING: The `ClickListRadios` parent
     will override this prop. */
    value?: boolean;
}
interface IClickListCheckboxesItemProps extends IClicklistSelectableItemProps {
    /** Change handler of the item. WARNING: The `ClickListRadios` parent will override this prop. */
    onChange?: (value: boolean, name: string, event: React.SyntheticEvent<HTMLInputElement>) => void;
    /** This prop can be used for a validation process, i.e. when an option should be set or not */
    invalid?: boolean;
}
declare const ClickListCheckboxesItem: {
    (props: IClickListCheckboxesItemProps): React.JSX.Element;
    displayName: string;
};
export { ClickListCheckboxesItem, IClicklistSelectableItemProps, IClickListCheckboxesItemProps };
