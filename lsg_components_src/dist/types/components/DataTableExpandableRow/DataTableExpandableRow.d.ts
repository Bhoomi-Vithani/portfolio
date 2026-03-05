import React from "react";
import { IBasicProps } from "../../base/IBasicProps";
type IDataTableExpandableRowProps = IBasicProps & {
    /** Contents of the table row. Each entry is put into a table cell */
    data?: any[];
    /** Colspans of the table cells. Each entry corresponds to an entry of the data prop */
    colspans?: number[];
    /** Optional name for the checkbox, which is returned as the second argument of the change callback */
    inputName?: string;
    /** Boolean value that indicates whether the checkbox in the header is selected. If undefined, the checkbox is rendered as indeterminate. */
    inputValue?: boolean;
    /** Boolean value to prevent the rendering of the select-all checkbox in the header row */
    inputHidden?: boolean;
    /** Boolean value to disable the select-all checkbox in the header row */
    inputDisabled?: boolean;
    /** Change callback that is called when a user clicks on the checkbox */
    onInputChange?: (newValue: boolean, name: string, event: React.SyntheticEvent<HTMLElement>) => void;
    /** Label for opening and closing the expandable row. It is placed inside the label column of the DataTable. */
    label?: string;
    /** @deprecated: Use badgeColor instead. Color of the badge. */
    badgeLook?: "primary" | "highlight" | "supplementary" | "optional" | "inactive" | "error" | "success" | "alert" | "secondary-1" | "secondary-2" | "secondary-3" | "secondary-4" | "secondary-5" | "secondary-6";
    /** If set to 'true', the expandable row will not be interactive. The chevron icon will be hidden, and the row
     *  won't be expandable.
     */
    inactive?: boolean;
    /** @deprecated
     * Color of the badge. Deprecated in favour of using badges in the label */
    badgeColor?: "primary" | "highlight" | "supplementary" | "optional" | "inactive" | "error" | "success" | "alert" | "secondary-1" | "secondary-2" | "secondary-3" | "secondary-4" | "secondary-5" | "secondary-6";
    /**
     * Determines if badge should be visible.
     *
     * Will be marked as deprecated in next major release because the automatic creation of a badge will be removed and this property remains functionless */
    hideBadge?: boolean;
    /** Spacing for this row */
    spacing?: "dense" | "narrow" | "standard";
} & ({
    /** Defines if the row should be "expanded" initially. Alternatively, you can fully control the component by the open/onOpenChange prop pair. */
    defaultOpen?: boolean;
} | {
    /** You can fully control the "expanded" state of the component by the open/onOpenChange prop pair, instead of the defaultOpen prop. If open===true, the "sub rows" are visible. */
    open?: boolean;
    /** This is the counterpart of the "open" prop. If the expandable row is clicked, the "new" open state is given in to this callback function. */
    onOpenChange?: (newOpen: boolean) => void;
});
export declare const DataTableExpandableRow: {
    ({ badgeColor, badgeLook, ...props }: IDataTableExpandableRowProps): React.JSX.Element;
    displayName: string;
};
export {};
