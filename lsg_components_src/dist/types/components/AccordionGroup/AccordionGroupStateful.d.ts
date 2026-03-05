import * as React from "react";
import { IBasicProps } from "../../base/IBasicProps";
interface IState {
    openIndex?: number;
}
type IProps = {
    multiple?: true;
} | {
    multiple?: false | undefined;
    defaultOpenIndex?: number;
    onChange?: (openIndex: number, groupId: string, ev: React.SyntheticEvent<Element>) => void;
};
type IAccordionGroupStatefulProps = IBasicProps & IProps;
/**
 * @deprecated. Use `AccordionGroup` instead, without providing `openIndex`. If absent,
 * `AccordionGroup` will be stateful.
 */
declare class AccordionGroupStateful extends React.Component<IAccordionGroupStatefulProps, IState> {
    static displayName: string;
    constructor(props: IProps & IBasicProps);
    handleChange: (open: number) => void;
    render(): React.JSX.Element;
}
export { AccordionGroupStateful, IAccordionGroupStatefulProps };
