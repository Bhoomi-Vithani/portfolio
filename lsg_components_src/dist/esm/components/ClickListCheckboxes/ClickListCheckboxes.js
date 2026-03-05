import * as React from 'react';
import { ClickListCheckboxesWrapper } from '../ClickList/shared/ClickListCheckboxesWrapper.js';
import { ClickListCheckboxesItem } from '../ClickListCheckboxesItem/ClickListCheckboxesItem.js';

const ClickListCheckboxes = (props) => React.createElement(ClickListCheckboxesWrapper, { ...props });
ClickListCheckboxes.displayName = "ClickList.Checkboxes";
ClickListCheckboxes.Item = ClickListCheckboxesItem;

export { ClickListCheckboxes };
