import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
import { AccordionGroupStateful } from "./AccordionGroupStateful";
type IStatefulProps = {
    /** Whether it is allowed to open more than one <Accordion /> at once */
    multiple?: false;
    /** Default value for openIndex before any interaction took place. This prop only has an effect, when `multiple={false}` is set. */
    defaultOpenIndex?: number;
} & IBasicProps;
type IStatelessProps = {
    /** Whether it is allowed to open more than one <Accordion /> at once */
    multiple?: false;
    /** OpenIndex shall be set to the index of the currently open accordion(s) */
    openIndex: number;
    /** OnChange will be called if any of the accordions open states change */
    onChange: (openIndex: number, groupId: string, event: React.SyntheticEvent<Element>) => void;
} & IBasicProps;
type IStatelessMultipleProps = {
    /** Whether it is allowed to open more than one <Accordion /> at once */
    multiple: true;
} & IBasicProps;
type IAccordionGroupProps = IStatelessMultipleProps | IStatelessProps | IStatefulProps;
/** See Accordion Example for usage */
declare class AccordionGroup extends React.Component<IAccordionGroupProps, {
    openIndex?: number;
}> {
    static displayName: string;
    static defaultProps: Partial<IAccordionGroupProps>;
    constructor(props: IAccordionGroupProps);
    /** @deprecated Use `AccordionGroup` instead, without providing `openIndex`. If absent, `AccordionGroup` will be stateful. */
    static Stateful: typeof AccordionGroupStateful;
    handleChange: (open: number) => void;
    render(): React.JSX.Element;
}
export { AccordionGroup, IAccordionGroupProps };
