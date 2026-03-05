import React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IDataTableRowProps extends IBasicProps {
    /** Ids of the table cells. Each entry corresponds to an entry of the data prop */
    ids?: string[];
    /** Contents of the table row. Each entry is put into a table cell */
    data: any[];
    /** Optional style for the row separator, located on the top of the given row. `default` can have different look
     *  depending on whether the row is a header row or not. This is evaluated to `default` if not defined
     *  otherwise. If the row has a `bold`-look by default, setting this to `bold` will not have any effect. */
    separatorStyles?: {
        weight: "default" | "bold";
    };
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
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlInputAttrs?: React.InputHTMLAttributes<HTMLInputElement> | Record<`data-${string}`, string | number | boolean>;
    /** Click callback that is called when a user clicks on the table row */
    onLinkClick?: (event: React.SyntheticEvent<HTMLElement>, name: string) => void;
    /** Link href for the table row */
    linkHref?: string;
    /** Optional html attributes for the link, which are passed to the html input element */
    htmlLinkAttrs?: React.AnchorHTMLAttributes<HTMLAnchorElement> | React.ButtonHTMLAttributes<HTMLButtonElement>;
    /** Aria attributes that should be passed to the table row */
    ariaAttrs?: React.AriaAttributes;
    /** Spacing of this row. */
    spacing?: "dense" | "narrow" | "standard";
    /** Information about row become just  hovered */
    hasMouseHover?: boolean;
}
export declare const DataTableRow: {
    (props: IDataTableRowProps): React.JSX.Element;
    displayName: string;
};
export {};
