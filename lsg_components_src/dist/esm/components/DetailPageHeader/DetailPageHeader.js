import * as React from 'react';
import { DetailPageHeaderWrapper } from './shared/DetailPageHeaderWrapper.js';

const DetailPageHeader = (props) => React.createElement(DetailPageHeaderWrapper, { ...props });
DetailPageHeader.displayName = "DetailPageHeader";

export { DetailPageHeader };
