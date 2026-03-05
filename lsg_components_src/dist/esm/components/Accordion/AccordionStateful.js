import * as React from 'react';
import { AccordionGroup } from '../AccordionGroup/AccordionGroup.js';
import '../AccordionGroup/AccordionGroupStateful.js';
import { AccordionWrapper } from './shared/AccordionWrapper.js';

/**
 * @deprecated. Use `Accordion` instead, without providing `isOpen` and `onChange`. If absent,
 * `Accordion` will be stateful.
 */
class AccordionStateful extends React.Component {
    render() {
        return React.createElement(AccordionWrapper, { ...this.props });
    }
}
AccordionStateful.displayName = "Accordion.Stateful";
AccordionStateful.Group = AccordionGroup;

export { AccordionStateful };
