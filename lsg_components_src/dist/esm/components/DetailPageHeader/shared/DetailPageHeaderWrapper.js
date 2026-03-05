import React__default from 'react';
import { getInitialViewportSize, addViewportCallback, removeViewportCallback } from '../../../utils/windowEvents/ResizeEvents.js';
import { DetailPageHeaderPresentation } from './DetailPageHeaderPresentation.js';

// @ts-strict-ignore
class DetailPageHeaderWrapper extends React__default.Component {
    constructor(props) {
        super(props);
        this.onViewportChange = viewport => this.setState(() => ({ isMobile: ["sm", "xs"].includes(viewport) }));
        this.state = {
            isMobile: ["sm", "xs"].includes(getInitialViewportSize()),
            forceMobile: false,
        };
    }
    componentDidMount() {
        addViewportCallback(this.onViewportChange);
    }
    componentWillUnmount() {
        removeViewportCallback(this.onViewportChange);
    }
    render() {
        const { isMobile, forceMobile } = this.state;
        return (React__default.createElement(DetailPageHeaderPresentation, { ...this.props, isMobile: forceMobile || isMobile, onForceMobileChange: forceMobileValue => this.setState(() => ({ forceMobile: forceMobileValue })) }));
    }
}

export { DetailPageHeaderWrapper };
