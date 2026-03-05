import React__default from 'react';
import { fragmentMap } from '../../../utils/ReactUtils.js';

// TabsItem is the content of the tabs - under the TabBar
const TabsItemPresentation = ({ horizontalAlignment, ...otherProps }) => (React__default.createElement(React__default.Fragment, null, fragmentMap(otherProps.children, (child) => React__default.cloneElement(child, { horizontalAlignment }))));
TabsItemPresentation.displayName = "TabsItemPresentation";

export { TabsItemPresentation };
