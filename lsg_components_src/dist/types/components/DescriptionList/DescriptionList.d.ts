import React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IDescriptionListProps extends IBasicProps {
    /** @deprecated : component will do the wrapping on its own */
    titleWrap?: boolean;
}
declare const DescriptionList: {
    ({ titleWrap, ...props }: IDescriptionListProps): React.JSX.Element;
    displayName: string;
    Row: {
        ({ title, ...props }: import("./DescriptionListRow").IDescriptionListRowProps): React.JSX.Element;
        displayName: string;
    };
};
export { DescriptionList, IDescriptionListProps };
