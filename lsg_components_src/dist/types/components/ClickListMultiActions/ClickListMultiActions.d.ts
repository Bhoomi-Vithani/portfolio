import * as React from "react";
import { IClickListProps } from "../ClickList/ClickList";
interface IClickListMultiActionsProps extends IClickListProps {
}
declare const ClickListMultiActions: {
    (props: IClickListMultiActionsProps): React.JSX.Element;
    displayName: string;
    Item: {
        ({ ...props }: import("../ClickListMultiActionsItem/ClickListMultiActionsItem").IClickListMultiActionItemProps): React.JSX.Element;
        displayName: string;
    };
};
export { ClickListMultiActions, IClickListMultiActionsProps };
