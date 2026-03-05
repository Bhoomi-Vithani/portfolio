import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IFootnoteItemPresentationProps extends IBasicPropsInternal {
    /** The subsequent footnote number */
    identifier: string;
    /** The unique id of the element. Required, because it will be linked to from the footnote anchor that is displayed
     * as part of the text.
     */
    id: string;
}
export declare const FootnoteItemPresentation: {
    ({ id, className, children, identifier }: IFootnoteItemPresentationProps): React.JSX.Element;
    displayName: string;
};
