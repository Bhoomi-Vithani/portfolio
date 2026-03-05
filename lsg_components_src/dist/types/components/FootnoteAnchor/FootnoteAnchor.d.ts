import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IFootnoteAnchorProps extends IBasicProps {
    /** The subsequent footnote item number. If empty, the footnote will be determined by the item that corresponds to
     * this anchor. If the displayed identifier is '?', the ids probably do not match.
     */
    identifier?: string;
    /** The id of the corresponding footnote item */
    idItem: string;
    /** Defines the text that is shown under the identifier. */
    label: React.ReactNode;
    /** Corresponds to the id of the element that describes the footnote anchor */
    ariaDescribedBy?: string;
}
declare const FootnoteAnchor: {
    ({ ...props }: IFootnoteAnchorProps): React.JSX.Element;
    displayName: string;
};
export { FootnoteAnchor, IFootnoteAnchorProps };
