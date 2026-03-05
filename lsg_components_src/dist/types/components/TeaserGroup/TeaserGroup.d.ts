import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface ITeaserGroupProps extends IBasicProps {
    /** If set to true the first teaser will be displayed as a focus teaser (full width) */
    hasFocusTeaser?: boolean;
    /** Set image ratio for all teasers within a group. */
    groupImageRatio?: "21-9" | "16-9";
    /** Set headline size for all teasers within a group */
    groupHeadlineSize?: "h4" | "h5";
    /** Alternative HTML tag that is rendered for group headline (e.g. "h5", "h6", "p","span","div") */
    groupHeadlineAs: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | string;
}
declare const TeaserGroup: {
    ({ children, groupHeadlineSize, groupHeadlineAs, groupImageRatio, hasFocusTeaser, }: ITeaserGroupProps): React.JSX.Element;
    displayName: string;
};
export { TeaserGroup, ITeaserGroupProps };
