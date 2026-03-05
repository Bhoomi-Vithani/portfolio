// Import React and ReactDOM from the manager bundles
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Define global references for Storybook
window.__REACT__ = React;
window.__REACT_DOM__ = ReactDOM;
window.React = React;
window.ReactDOM = ReactDOM;
window['react'] = React;
window['react-dom'] = ReactDOM;
