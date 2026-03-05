import React__default from 'react';
import { useUniqueId } from '../../../utils/Hooks/index.js';
import { fragmentMap } from '../../../utils/ReactUtils.js';
import { CardsPresentation } from './CardsPresentation.js';

// @ts-strict-ignore
const CardsRadiosWrapper = ({ children, value, name, onChange, itemsPerRow = 4, ...otherProps }) => {
    const groupName = useUniqueId("cards-radios-group-name-", name);
    return (React__default.createElement(CardsPresentation, { ...otherProps, type: "SingleOptionToggle" }, fragmentMap(children, (child) => React__default.cloneElement(child, {
        value: value === child.props.name,
        onChange: (_value, chName, event) => onChange(chName, name, event),
        itemsPerRow,
        inputHtmlAttrs: { ...child.props.inputHtmlAttrs, name: groupName },
    }))));
};
CardsRadiosWrapper.displayName = "CardsRadiosWrapper";

export { CardsRadiosWrapper };
