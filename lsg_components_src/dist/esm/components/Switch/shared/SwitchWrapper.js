import React__default from 'react';
import { SwitchPresentation } from './SwitchPresentation.js';

class SwitchWrapper extends React__default.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasKeyboardFocus: false,
            hasMouseHover: false,
        };
    }
    render() {
        const { hasKeyboardFocus, hasMouseHover } = this.state;
        return (React__default.createElement(SwitchPresentation, { ...this.props, hasKeyboardFocus: hasKeyboardFocus, onKeyboardFocusChange: newFocus => this.setState(() => ({ hasKeyboardFocus: newFocus })), hasMouseHover: hasMouseHover, onMouseHoverChange: newHover => this.setState(() => ({ hasMouseHover: newHover })) }));
    }
}

export { SwitchWrapper };
