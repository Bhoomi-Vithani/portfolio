import * as React from 'react';
import { AccordionGroup } from '../AccordionGroup/AccordionGroup.js';
import '../AccordionGroup/AccordionGroupStateful.js';
import { AccordionStateful } from './AccordionStateful.js';
import { AccordionWrapper } from './shared/AccordionWrapper.js';

const Accordion = ({ titleAs = "h3", ...props }) => React.createElement(AccordionWrapper, { titleAs: titleAs, ...props });
Accordion.displayName = "Accordion";
Accordion.Stateful = AccordionStateful;
Accordion.Group = AccordionGroup;

export { Accordion };
