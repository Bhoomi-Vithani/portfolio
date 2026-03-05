import React__default from 'react';
import { lsgPre } from '../../config/prefix.js';
import { cleanupClassObject } from '../../utils/DomUtils.js';
import { FlyoutPresentation } from '../_Flyout/shared/FlyoutPresentation.js';
import { SelectOptionPresentation } from '../_SelectOption/SelectOptionPresentation.js';

// @ts-strict-ignore
const SelectFlyoutPresentation = ({ id, className, noMargin, name, emptyListLabel, options, onChange, onMouseOver, focussedValue, hoveredValue, value, hostRef, focussedRef, onKeyDown, isToggleElmWidth, hasTabIndex, toggleElement, toggleContainerElement, open, onCloseClick, role, ariaLabel, autocomplete, }) => (React__default.createElement(FlyoutPresentation, { id: id, className: cleanupClassObject({
        [className]: className,
        [`${lsgPre}no-margin`]: noMargin,
    }), open: open, onClose: onCloseClick, toggleElement: toggleElement, toggleContainerElement: toggleContainerElement, onKeyDown: onKeyDown, isToggleElmWidth: isToggleElmWidth, hasTabIndex: hasTabIndex, hostRef: hostRef, withGap: true, maxHeight: 320, htmlAttrs: { role }, ariaLabel: ariaLabel, as: "ul" },
    emptyListLabel && options?.length === 0 && React__default.createElement(SelectOptionPresentation, { label: emptyListLabel }),
    options.map(option => (React__default.createElement(SelectOptionPresentation, { ...option, id: `${id}-option_${option.value}`, optionValue: option.value, key: option.value, hasKeyboardFocus: option.value === focussedValue, hasMouseHover: option.value === hoveredValue, ariaSelected: autocomplete ? option.value === focussedValue : option.value === value, onClick: event => onChange(option.value, name, event), onMouseOver: () => onMouseOver(option.value), ref: option.value === focussedValue ? focussedRef : undefined })))));
SelectFlyoutPresentation.displayName = "SelectFlyoutPresentation";

export { SelectFlyoutPresentation };
