import * as React from 'react';
import { CardsCustomToggleItemWrapper } from '../CardsCustomToggleItem/shared/CardsCustomToggleItemWrapper.js';

const CardsSwitchesCustomItem = ({ ...props }) => (React.createElement(CardsCustomToggleItemWrapper, { ...props, type: "switch" }));
CardsSwitchesCustomItem.displayName = "Cards.Switches.CustomItem";

export { CardsSwitchesCustomItem };
