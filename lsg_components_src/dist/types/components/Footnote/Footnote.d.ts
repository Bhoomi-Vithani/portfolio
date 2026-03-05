import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
declare const Footnote: {
    (props: IBasicProps): React.JSX.Element;
    displayName: string;
    Item: {
        (props: import("../FootnoteItem/FootnoteItem").IFootnoteItemProps): React.JSX.Element;
        displayName: string;
    };
    Anchor: {
        ({ ...props }: import("../FootnoteAnchor/FootnoteAnchor").IFootnoteAnchorProps): React.JSX.Element;
        displayName: string;
    };
};
export { Footnote };
