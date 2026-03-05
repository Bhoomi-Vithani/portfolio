import * as React from 'react';
import { ClickListCheckboxes } from '../ClickListCheckboxes/ClickListCheckboxes.js';
import { ClickListItem } from '../ClickListItem/ClickListItem.js';
import { ClickListMultiActions } from '../ClickListMultiActions/ClickListMultiActions.js';
import { ClickListRadios } from '../ClickListRadios/ClickListRadios.js';
import { ClickListPresentation } from './shared/ClickListPresentation.js';

const ClickList = (props) => React.createElement(ClickListPresentation, { ...props });
ClickList.displayName = "ClickList";
ClickList.Item = ClickListItem;
ClickList.Radios = ClickListRadios;
ClickList.Checkboxes = ClickListCheckboxes;
ClickList.Multiactions = ClickListMultiActions;

export { ClickList };
