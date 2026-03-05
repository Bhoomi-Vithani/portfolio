import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IContentIncludeProps extends IBasicProps {
    /** The id of the element whose content shall be included */
    cid: string;
}
declare const ContentInclude: {
    ({ cid }: IContentIncludeProps): React.JSX.Element;
    displayName: string;
};
export { ContentInclude, IContentIncludeProps };
