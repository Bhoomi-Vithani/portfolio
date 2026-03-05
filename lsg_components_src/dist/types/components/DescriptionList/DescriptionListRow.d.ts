import React, { ReactNode } from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IDescriptionListRowProps extends IBasicProps {
    title: ReactNode;
}
declare const DescriptionListRow: {
    ({ title, ...props }: IDescriptionListRowProps): React.JSX.Element;
    displayName: string;
};
export { DescriptionListRow, IDescriptionListRowProps };
