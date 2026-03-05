import * as React from 'react';
import { ChipsTogglePresentation } from '../Chips/shared/ChipsTogglePresentation.js';
import { ChipsItemRadio } from '../ChipsItemRadio/ChipsItemRadio.js';

const ChipsRadios = ({ direction = "wrap", as = "fieldset", groupLabel = "", ...props }) => {
    // TODO: Remove when radioGroupLook is removed
    let groupLook = direction;
    if (props.radioGroupLook === "condensed") {
        groupLook = "condensed";
    }
    else if (props.look === "scroll") {
        groupLook = "scroll";
    }
    return (React.createElement(ChipsTogglePresentation, { direction: groupLook, type: "radio", as, groupLabel, ...props }, props.children));
};
ChipsRadios.displayName = "Chips.Radios";
ChipsRadios.Item = ChipsItemRadio;

export { ChipsRadios };
