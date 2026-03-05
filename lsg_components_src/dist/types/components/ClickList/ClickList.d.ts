import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IClickListProps extends IBasicProps {
    /** Spacing between the click list content and the border of a row */
    spacing?: "dense" | "narrow" | "standard";
    /** You can set a small text for the whole ClickList above your first ClickList.Item with this prop. Using this
     *  prop also internally sets the aria-labelledby attribute. As a result, your label prop value will be linked to
     *  the ClickList HTML element by aria-labelledby. (This will also overwrite any additional aria-labelledby if
     *  you set one in the htmlAttrs prop of your ClickList.) */
    label?: string;
    /** Additional HTML attributes can be added here (e.g. ARIA attributes, tabIndex, ...) */
    htmlAttrs?: React.InputHTMLAttributes<HTMLInputElement> | Record<`data-${string}`, string | number | boolean>;
}
declare const ClickList: {
    (props: IClickListProps): React.JSX.Element;
    displayName: string;
    Item: {
        ({ badgeColor, badgeLook, badgeIconVariant, showLinkLabel, linkIcon, headlineAs, ...props }: import("../ClickListItem/ClickListItem").IClickListItemProps): React.JSX.Element;
        displayName: string;
    };
    Radios: {
        (props: import("../ClickListRadios/ClickListRadios").IClickListRadiosProps): React.JSX.Element;
        displayName: string;
        Item: {
            ({ showLinkLabel, ...props }: import("../ClickListRadiosItem/ClickListRadiosItem").IClickListRadiosItemProps): React.JSX.Element;
            displayName: string;
        };
    };
    Checkboxes: {
        (props: import("../ClickListCheckboxes/ClickListCheckboxes").IClickListCheckboxProps): React.JSX.Element;
        displayName: string;
        Item: {
            (props: import("../ClickListCheckboxesItem/ClickListCheckboxesItem").IClickListCheckboxesItemProps): React.JSX.Element;
            displayName: string;
        };
    };
    Multiactions: {
        (props: import("../ClickListMultiActions/ClickListMultiActions").IClickListMultiActionsProps): React.JSX.Element;
        displayName: string;
        Item: {
            ({ ...props }: import("../ClickListMultiActionsItem/ClickListMultiActionsItem").IClickListMultiActionItemProps): React.JSX.Element;
            displayName: string;
        };
    };
};
export { ClickList };
export type { IClickListProps };
