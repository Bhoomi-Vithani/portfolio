import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface ITabProps extends IBasicProps {
    /** The label for the tab. */
    label: string;
    /** Whether to show a badge in front of the tab label. */
    showBadge?: boolean;
}
declare const Tab: ({ label: _, ...props }: ITabProps) => React.JSX.Element;
export { Tab, ITabProps };
