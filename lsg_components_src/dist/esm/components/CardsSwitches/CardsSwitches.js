import * as React from 'react';
import { CardsWrapper } from '../Cards/shared/CardsWrapper.js';
import { CardsSwitchesCustomItem } from '../CardsSwitchesCustomItem/CardsSwitchesCustomItem.js';

const CardsSwitches = ({ itemsPerRow = 4, ...props }) => (React.createElement(CardsWrapper, { itemsPerRow, ...props, type: "MultiOptionToggle" }));
CardsSwitches.displayName = "Cards.Switches";
CardsSwitches.CustomItem = CardsSwitchesCustomItem;

export { CardsSwitches };
