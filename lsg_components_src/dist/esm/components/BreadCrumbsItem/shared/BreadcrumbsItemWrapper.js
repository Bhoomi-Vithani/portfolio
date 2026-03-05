import React__default from 'react';
import { BreadcrumbsItemPresentation } from './BreadcrumbsItemPresentation.js';

class BreadcrumbsItemWrapper extends React__default.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasKeyboardFocus: false,
            hasMouseHover: false,
        };
    }
    render() {
        const { hasKeyboardFocus, hasMouseHover } = this.state;
        return (React__default.createElement(BreadcrumbsItemPresentation, { ...this.props, hasMouseHover: hasMouseHover, onMouseHoverChange: newHover => this.setState(() => ({ hasMouseHover: newHover })), hasKeyboardFocus: hasKeyboardFocus, onKeyboardFocusChange: newFocus => this.setState(() => ({ hasKeyboardFocus: newFocus })) }));
    }
}

export { BreadcrumbsItemWrapper };
