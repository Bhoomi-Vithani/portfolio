import * as React from 'react';
import { SearchPresentation } from './shared/SearchPresentation.js';

const Search = ({ appearance = "hero", inline, ...props }) => (React.createElement(SearchPresentation, { appearance: appearance, 
    // TODO v20: Remove this condition (inline not dependent in appearance)
    inline: inline || appearance === "default", ...props }));
Search.displayName = "Search";

export { Search };
