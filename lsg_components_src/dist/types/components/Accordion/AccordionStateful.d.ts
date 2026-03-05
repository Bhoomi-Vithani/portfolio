import * as React from "react";
import { AccordionGroup } from "../AccordionGroup";
import { IAccordionProps } from "./Accordion";
/**
 * @deprecated. Use `Accordion` instead, without providing `isOpen` and `onChange`. If absent,
 * `Accordion` will be stateful.
 */
declare class AccordionStateful extends React.Component<Omit<IAccordionProps, "isOpen"> & {
    initialIsOpen?: boolean;
}> {
    static displayName: string;
    static Group: typeof AccordionGroup;
    render(): React.JSX.Element;
}
export { AccordionStateful };
