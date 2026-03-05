import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IBarDiagramGroupProps extends IBasicProps {
    /** a11y -relevant: With this description any detailed information can be placed to a bar diagram group for users with a visual impairment.
     It's recommended  to use  */
    ariaDescription?: string;
    /** Set all bars within the current group to the same color  */
    color?: "primary-1" | "primary-2";
    /**  Defines the direction of bar diagrams within a group, default = vertical */
    direction?: "horizontal" | "vertical";
    /** Expand bar items in a row and try to place the given amount as far as there is enough space and the min-width
     *  doesn't become undershot. Only applicable with direction set to "horizontal"  */
    amountItemsInRow?: 2 | 3 | 4;
}
declare const BarDiagramGroup: {
    (props: IBarDiagramGroupProps): React.JSX.Element;
    displayName: string;
};
export { BarDiagramGroup, IBarDiagramGroupProps };
