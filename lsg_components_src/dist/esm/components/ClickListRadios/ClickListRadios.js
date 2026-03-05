import * as React from 'react';
import { ClickListRadiosWrapper } from '../ClickList/shared/ClickListRadiosWrapper.js';
import { ClickListRadiosItem } from '../ClickListRadiosItem/ClickListRadiosItem.js';

const ClickListRadios = (props) => React.createElement(ClickListRadiosWrapper, { ...props });
ClickListRadios.displayName = "ClickList.Radios";
ClickListRadios.Item = ClickListRadiosItem;

export { ClickListRadios };
