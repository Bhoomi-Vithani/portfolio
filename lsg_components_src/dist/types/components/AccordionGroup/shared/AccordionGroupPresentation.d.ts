import React from "react";
import { IBasicPropsInternal } from "../../../utils/IBasicPropsInternal";
export interface IAccordionGroupPresentationProps extends IBasicPropsInternal {
    /** Whether it is allowed to open more than one Accordion at once */
    multiple?: boolean;
    /** OpenIndex shall be set to the index of the currenly open accordion(s) */
    openIndex?: number;
    /** OnChange will be called if any of the accordions open states change */
    onChange?: (openIndex: number, groupId: string, event: React.SyntheticEvent<Element>) => void;
}
export declare const AccordionGroupPresentation: {
    ({ id, children, className, noMargin, isStencilHost, }: IAccordionGroupPresentationProps): React.JSX.Element;
    displayName: string;
};
