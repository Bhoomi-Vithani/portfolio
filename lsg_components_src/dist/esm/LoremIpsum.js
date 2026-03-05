import * as React from 'react';
import { Paragraph } from './components/Paragraph/Paragraph.js';
import { texts } from './loremIpsumTexts.js';

const LoremIpsum = ({ count = 1, startIndex = 0, asSpan, }) => {
    const length = startIndex + count;
    const Component = asSpan ? "span" : Paragraph;
    return (React.createElement(React.Fragment, null, texts.slice(startIndex, length).map((value, index) => (React.createElement(Component, { key: index }, value)))));
};

export { LoremIpsum };
