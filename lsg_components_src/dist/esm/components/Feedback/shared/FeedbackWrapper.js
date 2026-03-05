import React__default from 'react';
import { setLsgTimeout } from '../../../utils/timing.js';
import { FeedbackPresentation } from './FeedbackPresentation.js';

class FeedbackWrapper extends React__default.Component {
    constructor(props) {
        super(props);
        this.onChange = (result) => {
            this.setState({
                animationHide: true,
            }, () => {
                if (typeof this.props.onChange !== "undefined") {
                    this.props.onChange(result);
                }
            });
            setLsgTimeout(() => {
                this.setState({
                    animationHide: false,
                });
            }, 250);
        };
        this.onTrueClick = () => {
            this.onChange(true);
        };
        this.onFalseClick = () => {
            this.onChange(false);
        };
        this.state = {
            animationHide: false,
        };
    }
    render() {
        return (React__default.createElement(FeedbackPresentation, { ...this.props, onFalseClick: this.onFalseClick, onTrueClick: this.onTrueClick, animationHide: this.state.animationHide }));
    }
}

export { FeedbackWrapper };
