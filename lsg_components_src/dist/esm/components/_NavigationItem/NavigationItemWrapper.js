import React__default from 'react';
import { NavigationItemPresentation } from './NavigationItemPresentation.js';

class NavigationItemWrapper extends React__default.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasKeyboardFocus: false,
            hasMouseHover: false,
        };
    }
    render() {
        const { hasKeyboardFocus, hasMouseHover } = this.state;
        return (React__default.createElement(NavigationItemPresentation, { ...this.props, hasKeyboardFocus: hasKeyboardFocus, onKeyboardFocusChange: newFocus => this.setState(() => ({ hasKeyboardFocus: newFocus })), hasMouseHover: hasMouseHover, onMouseHoverChange: newHover => this.setState(() => ({ hasMouseHover: newHover })), onClick: !this.props.disabled
                ? this.props.onClick
                : () => {
                    /* empty */
                } }));
    }
}

export { NavigationItemWrapper };
