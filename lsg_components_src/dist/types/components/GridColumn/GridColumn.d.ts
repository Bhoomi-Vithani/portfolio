import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IGridColumnProps extends IBasicProps {
    size?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    md?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    sm?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    xs?: 0 | 1 | 2 | 3 | 4;
    horizontalAlign?: "left" | "center" | "right";
    horizontalAlignXs?: "left" | "center" | "right";
    horizontalAlignSm?: "left" | "center" | "right";
    horizontalAlignMd?: "left" | "center" | "right";
    /** Name of the html tag that is rendered for the outer div. */
    as?: keyof JSX.IntrinsicElements;
}
declare const GridColumn: {
    ({ horizontalAlign, horizontalAlignXs, horizontalAlignSm, horizontalAlignMd, ...props }: IGridColumnProps): React.JSX.Element;
    displayName: string;
};
export { GridColumn, IGridColumnProps };
