import React__default from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { useUniqueId } from '../../../utils/Hooks/index.js';
import { fragmentMap } from '../../../utils/ReactUtils.js';
import { TabBarWrapper } from '../../_TabBar/shared/TabBarWrapper.js';
import { hostClass } from './Tabs.styles.js';

// @ts-strict-ignore
const TabsPresentation = (props) => {
    const { id: idProp, children, className, noMargin, openIndex = 0, onChange, centeredLayout = false, horizontalAlignment, navigationActionAs, ariaLabel, ariaLabelledBy, } = props;
    const id = useUniqueId(`${hostClass}-`, idProp);
    const tabBaseId = `${id}-tab`;
    const navigationTree = fragmentMap(children, (child, i) => ({
        ...child.props,
        name: i.toString(),
        id: child.props.id || `${tabBaseId}-${i}`,
    }));
    const isCentered = horizontalAlignment === "center" ? true : centeredLayout;
    const inheritedAlignment = centeredLayout === true ? "center" : horizontalAlignment;
    return (React__default.createElement("div", { id: id, className: cleanupClassObject({
            [className]: !!className,
            [hostClass]: true,
            [`${lsgPre}no-margin`]: noMargin,
        }) },
        React__default.createElement(TabBarWrapper, { navigationTree: navigationTree, navigationActionAs: navigationActionAs, value: openIndex.toString(), onChange: (value, e) => onChange(parseInt(value, 10), e), noMargin: true, centeredLayout: isCentered, ariaLabel: ariaLabel, ariaLabelledBy: ariaLabelledBy }),
        !!navigationTree?.length && (React__default.createElement("div", { id: `${navigationTree[openIndex].id}-panel`, className: `${hostClass}-panel`, role: "tabpanel", "aria-labelledby": navigationTree[openIndex].id }, fragmentMap(children, (child) => React__default.cloneElement(child, { horizontalAlignment: inheritedAlignment }))[openIndex]))));
};
TabsPresentation.displayName = "TabsPresentation";

export { TabsPresentation };
