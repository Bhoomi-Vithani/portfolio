import * as React from 'react';
import { AccordionGroupStateful } from './AccordionGroupStateful.js';
import { AccordionGroupWrapper } from './shared/AccordionGroupWrapper.js';

function isStateless(props) {
    return props.multiple || props.openIndex !== undefined;
}
/** See Accordion Example for usage */
class AccordionGroup extends React.Component {
    // eslint-disable-next-line react/sort-comp
    constructor(props) {
        super(props);
        this.handleChange = (open) => this.setState(() => ({ openIndex: open }));
        this.state = isStateless(props)
            ? {}
            : {
                openIndex: props.defaultOpenIndex,
            };
    }
    render() {
        if (isStateless(this.props)) {
            return React.createElement(AccordionGroupWrapper, { ...this.props });
        }
        const { defaultOpenIndex: _1, ...nonMultipleProps } = this.props;
        return (React.createElement(AccordionGroupWrapper, { ...nonMultipleProps, openIndex: this.state.openIndex, onChange: this.handleChange }));
    }
}
AccordionGroup.displayName = "Accordion.Group";
AccordionGroup.defaultProps = {
    multiple: false,
    onChange: () => {
        /* empty */
    },
};
/** @deprecated Use `AccordionGroup` instead, without providing `openIndex`. If absent, `AccordionGroup` will be stateful. */
AccordionGroup.Stateful = AccordionGroupStateful;

export { AccordionGroup };
