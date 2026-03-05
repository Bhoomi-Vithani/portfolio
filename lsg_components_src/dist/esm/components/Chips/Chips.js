import * as React from 'react';
import { ChipsCheckboxes } from '../ChipsCheckboxes/ChipsCheckboxes.js';
import { ChipsItemCheckbox } from '../ChipsItemCheckbox/ChipsItemCheckbox.js';
import { ChipsItemRadio } from '../ChipsItemRadio/ChipsItemRadio.js';
import { ChipsRadios } from '../ChipsRadios/ChipsRadios.js';
import { ChipsPresentation } from './shared/ChipsPresentation.js';

const Chips = ({ as = "ul", direction = "wrap", appearance = "default", groupLabel = "", ...props }) => {
    // TODO: Remove when radioGroupLook is removed
    let groupLook = direction;
    if (props.look === "scroll") {
        groupLook = "scroll";
    }
    return (React.createElement(ChipsPresentation, { as: as, direction: groupLook, groupLabel: groupLabel, appearance: appearance, ...props }));
};
Chips.displayName = "Chips";
Chips.Radios = ChipsRadios;
Chips.RadioItem = ChipsItemRadio;
Chips.Checkboxes = ChipsCheckboxes;
Chips.CheckboxItem = ChipsItemCheckbox;

export { Chips };
