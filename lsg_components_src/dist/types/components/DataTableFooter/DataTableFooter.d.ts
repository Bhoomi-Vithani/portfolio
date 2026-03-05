import React from "react";
import { IDataTableRowSharedProps } from "../DataTableRow/shared/DataTableRowPresentation";
export type IDataTableFooterProps = Omit<IDataTableRowSharedProps, "inputName" | "inputValue" | "inputType" | "onInputChange" | "htmlInputAttrs" | "onLinkClick" | "linkHref" | "htmlLinkAttrs" | "inputHidden" | "inputDisabled">;
export declare const DataTableFooter: {
    (props: IDataTableFooterProps): React.JSX.Element;
    displayName: string;
};
