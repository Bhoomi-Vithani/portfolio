import * as React from 'react';
import { CardsWrapper } from '../Cards/shared/CardsWrapper.js';
import { CardsCheckboxesCustomItem } from '../CardsCheckboxesCustomItem/CardsCheckboxesCustomItem.js';

const CardsCheckboxes = ({ itemsPerRow = 4, ...props }) => (React.createElement(CardsWrapper, { itemsPerRow, ...props, type: "MultiOptionToggle" }));
CardsCheckboxes.displayName = "Cards.Checkboxes";
CardsCheckboxes.CustomItem = CardsCheckboxesCustomItem;

export { CardsCheckboxes };
