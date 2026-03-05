import React from "react";
import { IActionBaseProps } from "../../Action/shared/ActionPresentation";
export interface ISkipLink {
    label: string;
    href?: string;
    onClick?: IActionBaseProps["onClick"];
}
export interface ISkipLinksPresentationProps {
    links: ISkipLink[];
    ariaLabel?: string;
}
export declare const SkipLinksPresentation: {
    ({ links, ariaLabel, }: ISkipLinksPresentationProps): React.JSX.Element;
    displayName: string;
};
