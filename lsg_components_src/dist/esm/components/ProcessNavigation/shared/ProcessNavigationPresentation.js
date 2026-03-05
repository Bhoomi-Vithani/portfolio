import { interaction___checkmark } from '@lsg/icons';
import React__default, { useState } from 'react';
import { lsgPre } from '../../../config/prefix.js';
import { cleanupClassObject } from '../../../utils/DomUtils.js';
import { Host } from '../../../utils/Host.js';
import { texts } from '../../../utils/Localization.js';
import { ActionPresentation } from '../../Action/shared/ActionPresentation.js';
import { ThumbnailPresentation } from '../../Thumbnail/shared/ThumbnailPresentation.js';
import { hostClass } from './ProcessPageNavigation.styles.js';

// @ts-strict-ignore
// W3 Aria ref: https://www.w3.org/WAI/tutorials/menus/structure/
// TODO: von body in die application reinrendern (React portal) -> Felix, Thorsten
// TODO: Icon size (low prio)
const getTitle = (completed, active) => {
    if (active) {
        // The "aria-current" takes care of that already.
        return "";
    }
    if (completed) {
        return texts.lsg.component.ProcessNavigation.finishedPage;
    }
    return texts.lsg.component.ProcessNavigation.upcomingPage;
};
const ProcessNavigationPresentation = ({ id, className, noMargin, navigationTree, value, navigationActionAs, }) => {
    const [focussedItem, setFocussedItem] = useState(undefined);
    return (React__default.createElement(Host, { className: cleanupClassObject({
            [`${hostClass}`]: true,
            [className]: className,
            [`${lsgPre}no-margin`]: noMargin,
            [`${hostClass}__menu`]: !!navigationTree,
        }), id: id },
        React__default.createElement("ol", { className: `${hostClass}-list` }, navigationTree.map((item, index) => {
            const itemInTheFuture = item.name !== value && !item.completed;
            return (React__default.createElement("li", { key: `${item.name || ""}index`, className: cleanupClassObject({
                    [`${hostClass}-list-item`]: true,
                }) },
                React__default.createElement(ThumbnailPresentation, { icon: item.completed ? interaction___checkmark : undefined, className: `${hostClass}-thumbnail`, iconVariant: "outline", iconTitle: getTitle(item.completed, item.name === value), text: !item.completed ? (index + 1).toString() : undefined, size: "small", noMargin: true, look: !itemInTheFuture ? "filled" : "thick-border" }),
                React__default.createElement("div", { className: cleanupClassObject({
                        [`${hostClass}-container`]: true,
                        [`${hostClass}-container__finished`]: item.completed,
                    }) },
                    React__default.createElement(ActionPresentation, { actionAs: item.actionAs || navigationActionAs, actionProps: item.actionProps, key: index, name: item.name, className: cleanupClassObject({
                            [`${hostClass}-button`]: true,
                            [`${hostClass}-button__disabled`]: itemInTheFuture || item.disabled,
                        }), 
                        // disabled={...} // Use aria-disabled instead to ensure the items remain tabbable!
                        href: !itemInTheFuture ? item.href : undefined, htmlAttrs: {
                            "aria-disabled": itemInTheFuture || item.disabled,
                            "aria-current": item.name === value ? "true" : undefined,
                            ...item.htmlAttrs,
                        }, hasTabIndex: true, onClick: !itemInTheFuture ? item.onClick : undefined, onKeyboardFocusChange: newFocus => setFocussedItem(newFocus ? index : undefined), hasKeyboardFocus: focussedItem === index, noMargin: true },
                        React__default.createElement("span", { className: `${hostClass}-label` }, item.label)))));
        }))));
};
ProcessNavigationPresentation.displayName = "ProcessNavigationPresentation";

export { ProcessNavigationPresentation };
