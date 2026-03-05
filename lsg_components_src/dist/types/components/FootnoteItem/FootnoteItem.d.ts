import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IFootnoteItemProps extends IBasicProps {
    /** The subsequent footnote item number */
    identifier: string;
    /** The unique id of the element. Required, because it will be linked to from the footnote anchor that is displayed
     * as part of the text.
     */
    id: string;
}
declare const FootnoteItem: {
    (props: IFootnoteItemProps): React.JSX.Element;
    displayName: string;
};
export { FootnoteItem, IFootnoteItemProps };
