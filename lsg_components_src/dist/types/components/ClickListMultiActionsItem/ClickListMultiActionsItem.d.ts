import * as React from "react";
import { ReactNode } from "react";
import { IClickListItemProps } from "../ClickListItem/ClickListItem";
interface IClickListMultiActionItemProps extends Omit<IClickListItemProps, "href" | "onClick" | "linkIcon" | "showLinkLabel" | "actionAs" | "actionProps"> {
    /** clickable multi actions with IconLinkGroup only - it suppresses default single click behaviour of item element */
    actions?: ReactNode;
    headlineAs?: keyof React.JSX.IntrinsicElements;
}
declare const ClickListMultiActionsItem: {
    ({ ...props }: IClickListMultiActionItemProps): React.JSX.Element;
    displayName: string;
};
export { ClickListMultiActionsItem, IClickListMultiActionItemProps };
