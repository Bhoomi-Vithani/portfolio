import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IGridProps extends IBasicProps {
    /** Spacings that are applied on top and bottom of the Grid component. Inside nested grids, the spacings are
     *  only applied at the bottom. Use "dense", "small", "medium" or "large". Other options will be removed in the next major
     *  release.
     *  If you do not set this prop, the default spacing style will be equivalent to the 'spacing="small"' prop version.
     *  Note that this prop and the default spacing version will not have any effect if you use the Grid nested in `<FormContainer spacing="dense">`. */
    spacing?: "section" | "doublesubsection" | "subsection" | "dense" | "small" | "medium" | "large";
    /** If set to true, the Grid layout content will be centered horizontally within its container instead of using the default left-aligned layout. */
    centeredLayout?: boolean;
    /** @deprecated use `spacing` instead  */
    verticalSpacing?: "section" | "doublesubsection" | "subsection";
}
declare const Grid: {
    ({ verticalSpacing, spacing, ...props }: IGridProps): React.JSX.Element;
    displayName: string;
    Row: {
        ({ as, verticalAlign, ...props }: import("../GridRow/GridRow").IGridRowProps): React.JSX.Element;
        displayName: string;
    };
    Column: {
        ({ horizontalAlign, horizontalAlignXs, horizontalAlignSm, horizontalAlignMd, ...props }: import("../GridColumn/GridColumn").IGridColumnProps): React.JSX.Element;
        displayName: string;
    };
};
export { Grid, IGridProps };
