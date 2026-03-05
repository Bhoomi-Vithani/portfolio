import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IBarDiagramGroupPresentationProps extends IBasicPropsInternal {
    /** Highlighting can be inherited to all children of group bar as long as color is not set explicit to any child bar */
    color?: "primary-1" | "primary-2";
    /** a11y -relevant: With this description any detailed information can be placed to a bar diagram group for users with a visual impairment.
     It's recommended  to use  */
    ariaDescription?: string;
    /**  Defines the direction of bar diagrams within a group, default = vertical */
    direction?: "horizontal" | "vertical";
    /** Expand bar items in row and try to place the given amount as far as there is enough space and the min-width doesn't become undershot.
       Only applicable with direction set to "horizontal"  */
    amountItemsInRow?: 2 | 3 | 4;
}
export declare const BarDiagramGroupPresentation: {
    ({ id, children, className, noMargin, isStencilHost, ariaDescription, color, direction, amountItemsInRow, }: IBarDiagramGroupPresentationProps): React.JSX.Element;
    displayName: string;
};
