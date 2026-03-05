import React__default from 'react';
import { ElevatorAnimationPresentation } from './ElevatorAnimationPresentation.js';

// @ts-strict-ignore
class ElevatorAnimationWrapper extends React__default.Component {
    constructor(props) {
        super(props);
        this.observer = null;
        this.handleVisibilityChange = () => {
            this.setState(() => ({
                isVisible: true,
            }));
        };
        this.state = {
            isVisible: false,
        };
    }
    componentDidMount() {
        const options = {
            root: null, // null = viewport
            threshold: 0.9, // 0-1 how much of element needs to be shown
            rootMargin: "0px", // px / %
        };
        this.observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                entry.isIntersecting && this.handleVisibilityChange();
            });
        }, options);
        this.observer.observe(this.target);
    }
    componentWillUnmount() {
        this.observer.unobserve(this.target);
    }
    render() {
        const { children } = this.props;
        const { isVisible } = this.state;
        return (React__default.createElement(ElevatorAnimationPresentation, { ...this.props, isVisible: isVisible, hostRef: hostRef => {
                this.target = hostRef;
            } }, children));
    }
}

export { ElevatorAnimationWrapper };
