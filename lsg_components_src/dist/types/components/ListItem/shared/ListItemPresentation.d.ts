import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
import { IListShareIconProps } from "../../List/shared/ListPresentation";
export interface IListItemPresentationProps extends IBasicPropsInternal, IListShareIconProps {
    /** Parameter: defines the start of sequence, mostly in context of numbering or alphabetical sequence */
    value?: string | number;
    itemIndex?: number[];
    markerText?: string;
}
export declare const ListItemPresentation: {
    ({ id, className, icon, iconColor, iconLabel, value, children, itemIndex, markerText, }: IListItemPresentationProps): React.JSX.Element;
    displayName: string;
};
