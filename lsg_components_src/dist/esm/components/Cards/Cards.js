import * as React from 'react';
import { CardsCheckboxes } from '../CardsCheckboxes/CardsCheckboxes.js';
import { CardsCustomItem } from '../CardsCustomItem/CardsCustomItem.js';
import { CardsRadios } from '../CardsRadios/CardsRadios.js';
import { CardsWrapper } from './shared/CardsWrapper.js';
import { CardsSwitches } from '../CardsSwitches/CardsSwitches.js';

/* eslint-disable */
const Cards = ({ itemsPerRow = 4, as = "ul", ...props }) => (React.createElement(CardsWrapper, { itemsPerRow, as, ...props, type: "NoInput" }));
Cards.displayName = "Cards";
Cards.CustomItem = CardsCustomItem;
Cards.Checkboxes = CardsCheckboxes;
Cards.Radios = CardsRadios;
Cards.Switches = CardsSwitches;

export { Cards };
