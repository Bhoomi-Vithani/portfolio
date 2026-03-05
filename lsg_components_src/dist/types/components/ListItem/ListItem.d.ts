import type { IIcon } from "@lsg/icons";
import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IListItemProps extends IBasicProps {
    /** (Note: deprecated in List component) Item value, defines the start of sequence, mostly in context of numbering or alphabetical sequence. */
    value?: string | number;
    /** Can be used to assign other icon then default icon, see also Icon in Styleguide portal */
    icon?: IIcon;
    /** Assign color for coloring the assigned icon, standard value is 'default', see also color definitions in Styleguide portal on page Color */
    iconColor?: "default" | "error" | "success" | "note" | "primary-1" | "primary-2" | "secondary-1" | "secondary-2" | "secondary-3" | "secondary-4" | "secondary-5" | "secondary-6";
    /** Label that describes the Icon if the default icon label is not sufficient. */
    iconLabel?: string;
}
declare const ListItem: {
    ({ iconColor, ...props }: IListItemProps): React.JSX.Element;
    displayName: string;
};
export { IListItemProps, ListItem };
