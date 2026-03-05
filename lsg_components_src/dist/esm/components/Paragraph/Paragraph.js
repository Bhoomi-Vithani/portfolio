import * as React from 'react';
import { ParagraphPresentation } from './shared/ParagraphPresentation.js';

class Paragraph extends React.Component {
    render() {
        const { children, size, centeredLayout, as = "p", ...props } = this.props;
        return (React.createElement(ParagraphPresentation, { size: size, centeredLayout: centeredLayout, as: as, ...props }, children));
    }
}
Paragraph.displayName = "Paragraph";
Paragraph.defaultProps = {
    size: "copy-text",
};

export { Paragraph };
