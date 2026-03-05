import React__default from 'react';
import { DataTableSelectionFooterPresentation } from './DataTableSelectionFooterPresentation.js';

class DataTableSelectionFooterWrapper extends React__default.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { hasMouseHover, hasKeyboardFocus } = this.state;
        return (React__default.createElement(DataTableSelectionFooterPresentation, { ...this.props, hasMouseHover: hasMouseHover, onMouseHoverChange: newHover => this.setState(() => ({ hasMouseHover: newHover })), hasKeyboardFocus: hasKeyboardFocus, onKeyboardFocusChange: newFocus => this.setState(() => ({ hasKeyboardFocus: newFocus })) }));
    }
}
DataTableSelectionFooterWrapper.defaultProps = {};

export { DataTableSelectionFooterWrapper };
