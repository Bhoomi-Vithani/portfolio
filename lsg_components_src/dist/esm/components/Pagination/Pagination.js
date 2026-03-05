import * as React from 'react';
import { PaginationWrapper } from '../_Pagination/PaginationWrapper.js';

/* eslint-disable react/require-default-props */
const Pagination = (props) => React.createElement(PaginationWrapper, { ...props });
Pagination.displayName = "Pagination";

export { Pagination };
