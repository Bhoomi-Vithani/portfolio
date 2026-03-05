import * as React from 'react';
import { SliderPaginationPresentation } from './shared/SliderPaginationPresentation.js';

const SliderPagination = ({ onArrowRightClick = () => {
    /* empty */
}, onArrowLeftClick = () => {
    /* empty */
}, ...props }) => React.createElement(SliderPaginationPresentation, { onArrowLeftClick, onArrowRightClick, ...props });
SliderPagination.displayName = "SliderPagination";

export { SliderPagination };
