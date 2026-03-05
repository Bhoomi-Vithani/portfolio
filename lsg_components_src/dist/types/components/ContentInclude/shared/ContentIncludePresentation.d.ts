import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IContentIncludePresentationProps extends IBasicPropsInternal {
    /** The id of the element whose content shall be included */
    cid: string;
}
export declare const ContentIncludePresentation: {
    ({ id, className, cid }: IContentIncludePresentationProps): React.JSX.Element;
    displayName: string;
};
