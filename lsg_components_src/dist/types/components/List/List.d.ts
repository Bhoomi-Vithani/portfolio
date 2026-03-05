import type { IIcon } from "@lsg/icons";
import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
import { IListItemProps } from "../ListItem/ListItem";
interface IListProps extends IBasicProps {
    /** Determines the list is ordered list, by default numeric */
    isOrdered?: boolean;
    /** Determines in combination with prop 'isOrdered' that the list ordered with leading letter */
    isAlphabetical?: boolean;
    /** Can be used to assign other icon then default icon, see also Icon in Styleguide portal */
    icon?: IIcon;
    /** Assign color for coloring the assigned icon, see also color definitions in Styleguide portal on page Color */
    iconColor?: "default" | "error" | "success" | "note" | "primary-1" | "primary-2" | "secondary-1" | "secondary-2" | "secondary-3" | "secondary-4" | "secondary-5" | "secondary-6";
    /** Label that describes the Icon if the default icon label is not sufficient (for example an icon is used in different colors). You can set icon Label for each list item as well. */
    iconLabel?: string;
    /** Choice of text style */
    textSize?: "copy-text" | "helper-text" | "lead-text";
}
declare const List: {
    ({ isAlphabetical, textSize, iconColor, ...props }: IListProps & IListItemProps): React.JSX.Element;
    Item: {
        ({ iconColor, ...props }: IListItemProps): React.JSX.Element;
        displayName: string;
    };
    displayName: string;
};
export { List, IListProps };
