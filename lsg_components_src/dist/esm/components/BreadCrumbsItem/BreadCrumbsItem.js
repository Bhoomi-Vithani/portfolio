import * as React from 'react';
import { BreadcrumbsItemWrapper } from './shared/BreadcrumbsItemWrapper.js';

const BreadCrumbsItem = (props) => React.createElement(BreadcrumbsItemWrapper, { ...props });
BreadCrumbsItem.displayName = "BreadCrumbs.Item";

export { BreadCrumbsItem };
