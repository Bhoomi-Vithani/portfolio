import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IGridRowProps extends IBasicProps {
    /** If set, the columns will be reversed on the given breakpoint and above */
    columnReverse?: "sm" | "md";
    verticalAlign?: "top" | "middle" | "bottom";
    /** Name of the html tag that is rendered for the group container. If set to "ul" or "ol", the `as`-prop of
     * children will be set to "li". */
    as?: keyof JSX.IntrinsicElements;
}
declare const GridRow: {
    ({ as, verticalAlign, ...props }: IGridRowProps): React.JSX.Element;
    displayName: string;
};
export { GridRow, IGridRowProps };
