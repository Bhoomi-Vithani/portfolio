import * as React from 'react';
import { AccordionGroupWrapper } from './shared/AccordionGroupWrapper.js';

// @ts-strict-ignore
/**
 * @deprecated. Use `AccordionGroup` instead, without providing `openIndex`. If absent,
 * `AccordionGroup` will be stateful.
 */
class AccordionGroupStateful extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = (open) => this.setState(() => ({ openIndex: open }));
        this.state =
            props.multiple === true
                ? {}
                : {
                    openIndex: props.defaultOpenIndex,
                };
    }
    render() {
        if (this.props.multiple === true) {
            return React.createElement(AccordionGroupWrapper, { ...this.props });
        }
        const { defaultOpenIndex: _1, ...nonMultipleProps } = this.props;
        return (React.createElement(AccordionGroupWrapper, { ...nonMultipleProps, openIndex: this.state.openIndex, onChange: this.handleChange }));
    }
}
AccordionGroupStateful.displayName = "Accordion.Group.Stateful";

export { AccordionGroupStateful };
