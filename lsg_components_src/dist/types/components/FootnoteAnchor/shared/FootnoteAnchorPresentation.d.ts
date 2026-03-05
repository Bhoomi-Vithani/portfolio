import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IFootnoteAnchorPresentationProps extends IBasicPropsInternal {
    /** The subsequent footnote item number. If empty, the footnote will be determined by the item that corresponds to
     * this anchor. If the displayed identifier is '?', the ids probably do not match.
     */
    identifier?: string;
    /** The id of the corresponding footnote item */
    idItem: string;
    /** Text of the Link */
    label: React.ReactNode;
    ariaDescribedBy?: string;
}
export declare const FootnoteAnchorPresentation: {
    ({ label, className, idItem, ariaDescribedBy, }: IFootnoteAnchorPresentationProps): React.JSX.Element;
    displayName: string;
};
