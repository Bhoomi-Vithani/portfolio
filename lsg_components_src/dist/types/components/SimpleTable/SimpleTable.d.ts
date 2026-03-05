import * as React from "react";
import { ReactNode } from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface ISimpleTableProps extends IBasicProps {
    /** Please use literal type to achieve the opposite of ratio. Otherwise the default will be set */
    ratio?: "2-1" | "1-2";
    /** Providing detailed information about the subjects of table */
    description?: string;
    /** Short title information of table, which become not displayed visually. */
    title?: string;
}
interface ISimpleTableRowProps extends IBasicProps {
    title?: ReactNode;
    helperText?: ReactNode;
}
declare const SimpleTable: {
    ({ ratio, ...otherProps }: ISimpleTableProps): React.JSX.Element;
    Row({ children, ...restProps }: ISimpleTableRowProps): React.JSX.Element;
    displayName: string;
};
export { SimpleTable };
export type { ISimpleTableProps, ISimpleTableRowProps };
