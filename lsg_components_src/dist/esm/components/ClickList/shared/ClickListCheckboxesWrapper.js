import React__default from 'react';
import { fragmentMap } from '../../../utils/ReactUtils.js';
import { ClickListPresentation } from './ClickListPresentation.js';

// @ts-strict-ignore
class ClickListCheckboxesWrapper extends React__default.Component {
    constructor(props) {
        super(props);
        this.handleOnBlur = event => {
            if (this.hostRef.contains(event.relatedTarget))
                return;
            if (this.props.onBlur && event.currentTarget === this.hostRef) {
                // suppress double on blur call from child component
                this.props.onBlur(event);
            }
        };
        this.state = {};
    }
    render() {
        const { children, invalid, ...otherProps } = this.props;
        return (React__default.createElement(ClickListPresentation, { ...otherProps, hostRef: r => (this.hostRef = r), handleOnBlur: this.handleOnBlur, look: "checkbox" }, fragmentMap(children, (child) => React__default.cloneElement(child, {
            invalid: invalid ?? child.props.invalid, // a central given invalid overrules item once
        }))));
    }
}

export { ClickListCheckboxesWrapper };
