import React from "react";
import { INavigationTree } from "../../../interfaces";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IJumpLinksPresentationProps extends IBasicPropsInternal {
    navigationTree: INavigationTree[];
    navigationActionAs?: any;
    ariaLabel: string;
}
/**
 * Function that adds href to #targetId for each navigationItem
 */
export declare function addHref(navItem: INavigationTree): INavigationTree;
export declare const JumpLinksPresentation: {
    (props: IJumpLinksPresentationProps): React.JSX.Element;
    displayName: string;
};
