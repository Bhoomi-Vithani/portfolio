import * as React from 'react';
import { CardsRadiosWrapper } from '../Cards/shared/CardsRadiosWrapper.js';
import { CardsRadiosCustomItem } from '../CardsRadiosCustomItem/CardsRadiosCustomItem.js';

const CardsRadios = ({ itemsPerRow = 4, ...props }) => (React.createElement(CardsRadiosWrapper, { itemsPerRow, ...props, type: "SingleOptionToggle" }));
CardsRadios.displayName = "Cards.Radios";
CardsRadios.CustomItem = CardsRadiosCustomItem;

export { CardsRadios };
