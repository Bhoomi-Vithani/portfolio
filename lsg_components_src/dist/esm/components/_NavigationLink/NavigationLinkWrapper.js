import React__default from 'react';
import { NavigationLinkPresentation } from './NavigationLinkPresentation.js';

class NavigationLinkWrapper extends React__default.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasKeyboardFocus: false,
            hasMouseHover: false,
        };
    }
    render() {
        const { hasKeyboardFocus, hasMouseHover } = this.state;
        return (React__default.createElement(NavigationLinkPresentation, { ...this.props, hasKeyboardFocus: hasKeyboardFocus, onKeyboardFocusChange: newFocus => this.setState(() => ({ hasKeyboardFocus: newFocus })), hasMouseHover: hasMouseHover, onMouseHoverChange: newHover => this.setState(() => ({ hasMouseHover: newHover })), onClick: !this.props.disabled
                ? this.props.onClick
                : () => {
                    /* empty */
                } }, this.props.children));
    }
}

export { NavigationLinkWrapper };
