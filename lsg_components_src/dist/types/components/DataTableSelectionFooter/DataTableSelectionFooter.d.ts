import React, { ReactNode } from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IDataTableSelectionFooterProps extends IBasicProps {
    /** Optional name for the checkbox, which is returned as the second argument of the change callback */
    inputName?: string;
    /** Boolean value that indicates whether the checkbox in the header is selected. If undefined, the checkbox is rendered as indeterminate. */
    inputValue?: boolean;
    /** Change callback that is called when a user clicks on the checkbox */
    onInputChange?: (newValue: boolean, name: string, event: React.SyntheticEvent<HTMLElement>) => void;
    /** Boolean value to prevent the rendering of the select-all checkbox */
    inputHidden?: boolean;
    /** Boolean value to disable the select-all checkbox */
    inputDisabled?: boolean;
    /** Label for the checkbox, which is displayed on the left side of the table row */
    label?: string;
    /** Slot for IconLinks or Buttons, which is displayed on the right side of the table row */
    actions?: ReactNode;
}
export declare const DataTableSelectionFooter: {
    (props: IDataTableSelectionFooterProps): React.JSX.Element;
    displayName: string;
};
export {};
