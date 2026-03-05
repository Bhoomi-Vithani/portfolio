import React__default from 'react';
import { animationDuration } from '../../../styles/variables.js';
import { DataTableRowPresentation } from './DataTableRowPresentation.js';
import { StateMachine, threeStepShowHide } from './DataTableStateMachine.js';

// @ts-strict-ignore
class DataTableRowWrapper extends React__default.Component {
    constructor(props) {
        super(props);
        this.visibilityStateMachine = new StateMachine(threeStepShowHide, newState => this.setState(() => ({ visibility: newState })), { animationDurationHide: animationDuration.standard, animationDurationShow: animationDuration.standard });
        this.state = {
            visibility: props.hidden ? "hidden" : "visible",
        };
    }
    componentDidUpdate(prevProps, prevState) {
        if (!this.props.hidden !== !prevProps.hidden) {
            this.visibilityStateMachine.transition(this.state.visibility, this.props.hidden ? "hide" : "show");
        }
        // Special case (CCSN-88276): if the onLinkClick prop (or other props that make the row clickable) is removed, we reset the hover and focus states
        // This is to ensure that the row does not remain in a hover or focus state when it is no longer clickable.
        const hasRowAction = !!(this.props.onLinkClick || this.props.linkHref || this.props.htmlLinkAttrs);
        const hasRowActionPrev = !!(prevProps.onLinkClick || prevProps.linkHref || prevProps.htmlLinkAttrs);
        if (!hasRowAction && hasRowActionPrev) {
            this.setState(() => ({
                ...prevState,
                hasMouseHover: false,
                hasMouseHoverToggle: false,
                hasKeyboardFocus: false,
                hasKeyboardFocusToggle: false,
            }));
        }
    }
    render() {
        const { visibility, hasMouseHover, hasMouseHoverToggle, hasKeyboardFocus, hasKeyboardFocusToggle } = this.state;
        return (React__default.createElement(DataTableRowPresentation, { ...this.props, gridStructure: {
                ...this.props.gridStructure,
                tableRowStyles: {
                    ...this.props.gridStructure.tableRowStyles,
                    separatorStyles: this.props.separatorStyles,
                },
            }, visibility: visibility, hasMouseHover: hasMouseHover || this.props.hasMouseHover, hasMouseHoverToggle: hasMouseHoverToggle, hasKeyboardFocus: hasKeyboardFocus || this.props.hasKeyboardFocus, hasKeyboardFocusToggle: hasKeyboardFocusToggle, onMouseHoverChange: newHover => this.setState(() => ({ hasMouseHover: newHover })), onMouseHoverChangeToggle: newHover => this.setState(() => ({ hasMouseHoverToggle: newHover })), onKeyboardFocusChange: newHover => this.setState(() => ({ hasKeyboardFocus: newHover })), onKeyboardFocusChangeToggle: newHover => this.setState(() => ({ hasKeyboardFocusToggle: newHover })) }));
    }
}

export { DataTableRowWrapper };
