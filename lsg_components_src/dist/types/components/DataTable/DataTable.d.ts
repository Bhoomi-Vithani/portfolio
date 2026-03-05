import React, { ReactNode } from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IColumnBase {
    /** Header title */
    title: ReactNode;
    /** Hide header title e.g. in the action column. Note: The DataTable is supposed to have a header due to
     * accessibility
     */
    headerHidden?: boolean;
    /** Hide column on certain viewports, e.g. "md" means that the column is only visible on "lg" and "xl" viewport. */
    columnHide?: "xs" | "sm" | "md" | "lg" | "xl";
    /** "Wrap" column below the previous column on certain viewports, e.g. "md" means that the column is not wrapped
     *  on "lg" and "xl" viewport. */
    columnWrap?: "xs" | "sm" | "md" | "lg" | "xl";
    /** On mobile viewport: Show this column as separate line below the table record. */
    columnSeparateXs?: boolean;
    /** The way text is wrapped in the cells of this column */
    textWrap?: "word" | "no-wrap" | "hyphenation" | "character" | "ellipsis";
    /** The horizontal alignment in the column. */
    horizontalAlignment?: "left" | "center" | "right";
    /** Set this flag if the column contains an IconLinkGroup */
    isActionColumn?: boolean;
    /** If this column is sortable, the header is clickable showing the sort order; note that you have to provide
     your own sorting implementation */
    isSortable?: boolean;
    /** If this column is sticky on the left side of a horizontally scrollable table */
    isStickyLeft?: boolean;
    /** If this column is sticky on the right side of a horizontally scrollable table */
    isStickyRight?: boolean;
    /** For deciding the initial sort order if you click on the header, use "initialAscending" or "initialDescending".
     *  If you want the column to be sortable in one direction only, use "ascendingOnly" or "descendingOnly" */
    sortOrderType?: "initialAscending" | "initialDescending" | "ascendingOnly" | "descendingOnly";
}
type IColumnResponsive = IColumnBase & {
    /** Width in css grid fraction units */
    widthFr?: number;
};
type IColumnFixed = IColumnBase & {
    /** Width in pixels */
    widthPx?: number;
};
type IColumn = IColumnResponsive | IColumnFixed;
type IDataTableProps = IBasicProps & {
    /** Vertical alignment of content inside the table cells */
    verticalAlignment?: "top" | "middle";
    /** Spacing between the table cell content and the border of a row */
    spacing?: "dense" | "narrow" | "standard";
    /** Adds a Checkbox or Radio column as the first column of the table. */
    inputType?: "checkbox" | "radio";
    /** Optional name for the radios, which is returned as the second argument of the change callback */
    radiosName?: string;
    /** Key of the selected radio */
    radiosValue?: string;
    /** Change callback that is called when a user clicks on a radio inside the table */
    onRadiosChange?: (newValue: string, name: string, event: React.SyntheticEvent<HTMLElement>) => void;
    /** Optional name for the select-all checkbox of the header row, which is returned as the second argument of the
     *  change callback */
    checkboxName?: string;
    /** Boolean value that indicates whether the select-all checkbox in the header is selected. If undefined, the
     *  checkbox is rendered as indeterminate. */
    checkboxValue?: boolean;
    /** Change callback that is called when a user clicks on the select-all checkbox of the table header. */
    onCheckboxChange?: (newValue: boolean, name: string, event: React.SyntheticEvent<HTMLElement>) => void;
    /** Boolean value to prevent the select-all checkbox from being rendered in the header row */
    checkboxHidden?: boolean;
    /** Boolean value to disable the select-all checkbox in the header row */
    checkboxDisabled?: boolean;
    /** Index of the primary column. Required for a11y if the row has a link, checkbox or radio. The column contents is used as a label for links, radios and checkboxes. The column needs to be filled with the information that identifies the row. This can be e.g. a product name or a customer name. */
    labelColumn: number;
    /** Slot for adding a DataTableSelectionFooter component */
    footer?: ReactNode;
    /** Sets the table header sticky */
    isHeaderSticky?: boolean;
    /** The title tells about the data content in the table which can be helpful for users with visual impairments.
     * It is a hidden element that will not be displayed */
    title?: string;
    /** Aria attributes that should be passed to the table */
    ariaAttrs?: React.AriaAttributes;
    /** Boolean value that indicates if the radio or checkbox column should be sticky, if the table is horizontally
     *  scrollable */
    isInputSticky?: boolean;
    /** With this prop, define the width ratio between the label and the value in a separateColumn. A ratio 0.3
     *  gives the label a css flex of 0.3 and the value a css flex of 0.7. Keep in mind that there is a gap between
     *  label and value though */
    separateColumnsXsWidthRatio?: number;
    /** The level of indentation on the table header. Higher values indicate a greater level of
     *  indentation. */
    insetLevel?: 0 | 1 | 2 | 3 | 4;
} & ({
    sortColumn?: undefined;
    sortAscending?: undefined;
    onSort?: undefined;
} | {
    /** Index of the column that is sorted (if the table is sortable by one column only).  */
    sortColumn: number;
    /** If set to `true`, the contents should be sorted by your sort algorithm in ascending order. This reflects in the direction of the sorting arrow and the aria property aria-sort.
     *  If your table shall be sortable by multiple columns, give in an array of booleans referring accordingly to the sortColumns.
     * */
    sortAscending: boolean;
    /** Callback that is called, when a sortable column header is pressed. It returns the new sort column(s) and which column(s) are sorted in ascending order */
    onSort: (newSortColumn: number, newSortAscending: boolean) => void;
} | {
    /** It's possible to sort by multiple columns (with descending priority). Indexes of the columns to be sorted */
    sortColumns: number[];
    sortAscending: boolean[];
    onSort: (newSortColumns: number[], newSortAscending: boolean[]) => void;
}) & ({
    /** Width of the table */
    width?: undefined | "auto" | "scroll";
    /** IColumnFixed: Header and column properties such as the title, text flow and responsive behaviour.
     *  IColumnFixed contains the attribute `widthPx` which allows for defining a column with pixel
     *  values, if table prop `width`=`undefined | auto | scroll` */
    columns: IColumnFixed[];
} | {
    /** Width of the table */
    width: "full";
    /** IColumnResponsive: Header and column properties such as the title, text flow and responsive behaviour.
     *  IColumnResponsive contains the attribute `widthFr` which allows for defining a column with
     *  fraction unit (see Css Grid) values, if table prop `width`=`full` */
    columns: IColumnResponsive[];
});
declare const DataTable: {
    ({ width, ...props }: IDataTableProps): React.JSX.Element;
    displayName: string;
};
export { DataTable, IDataTableProps, IColumn };
