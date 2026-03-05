import * as React from 'react';
import { useViewportRange } from '../../../utils/Hooks/index.js';
import { fragmentMap } from '../../../utils/ReactUtils.js';
import { Accordion } from '../../Accordion/Accordion.js';
import '../../Accordion/AccordionStateful.js';
import { hostClass } from './FooterNavigation.styles.js';

const FooterNavigationPresentation = ({ id, children: childrenProp, navigationAriaLabel, }) => {
    const isLargeScreen = useViewportRange("lg", undefined);
    const children = fragmentMap(childrenProp, (child) => React.cloneElement(child, {
        isLargeScreen,
    }));
    return isLargeScreen ? (React.createElement("nav", { "aria-label": navigationAriaLabel },
        React.createElement("ul", { className: hostClass, id: id }, children))) : (React.createElement("nav", { "aria-label": navigationAriaLabel },
        React.createElement(Accordion.Group.Stateful, { id: id, className: `${hostClass}` }, children)));
};

export { FooterNavigationPresentation };
