import React__default, { createRef } from 'react';
import { setLsgTimeout, clearLsgTimeout } from '../../../utils/timing.js';
import { getInitialViewportSize, addResizeCallback, removeResizeCallback, getViewportSize } from '../../../utils/windowEvents/ResizeEvents.js';
import { StagePresentation } from './StagePresentation.js';

// @ts-strict-ignore
class StageWrapper extends React__default.Component {
    constructor(props) {
        super(props);
        this.layoutRegularRef = createRef();
        this.layoutBreakingRef = createRef();
        this.hostRef = createRef();
        this.innerRef = createRef();
        this.scrollerRef = createRef();
        this.eyeCatcherRef = createRef();
        this.scrollStageHeight = () => {
            if (this.innerRef.current) {
                // Scroll to the bottom of the inner stage element
                // (until the subline text (if it exists) or the content is reached).
                const rect = this.innerRef.current.getBoundingClientRect();
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const stageBottom = rect.bottom + scrollTop;
                window.scrollTo({ top: stageBottom, left: 0, behavior: "smooth" });
            }
            else {
                // Fallback: scroll by viewport height
                window.scrollBy({ top: window.innerHeight, left: 0, behavior: "smooth" });
            }
        };
        this.state = {
            viewport: getInitialViewportSize(),
            hideEyeCatcher: true,
            eyeCatcherDefaultAppearanceTime: props.eyeCatcherAppearanceTime || 3000,
            layout: "regular",
            eyeCatcherPosition: { top: "auto", right: 0, bottom: "auto", left: "auto" },
        };
    }
    componentDidMount() {
        // Needs to be done after constructor, so that the stage is initially rendered the same way as the server.
        this.doHandleResizeWindow = this.doHandleResizeWindow.bind(this);
        addResizeCallback(this.doHandleResizeWindow);
        this.timeout = setLsgTimeout(() => this.setState({ hideEyeCatcher: false }), this.state.eyeCatcherDefaultAppearanceTime);
    }
    componentWillUnmount() {
        removeResizeCallback(this.doHandleResizeWindow);
        clearLsgTimeout(this.timeout);
    }
    doHandleResizeWindow() {
        if (typeof window === "undefined") {
            return;
        }
        const viewport = getViewportSize();
        const windowHeight = window.innerHeight;
        const headerHeight = this.hostRef.current.offsetTop - this.hostRef.current.parentElement.offsetTop;
        const stageHeight = windowHeight - headerHeight;
        const regularLayoutHeight = this.layoutRegularRef.current !== null ? this.layoutRegularRef.current.clientHeight : 0;
        const breakingLayoutHeight = this.layoutBreakingRef.current !== null ? this.layoutBreakingRef.current.clientHeight : 0;
        const maxHeight = { md: 70, lg: 70, xl: 55 }[viewport] || 60;
        let layout = "regular";
        if ((regularLayoutHeight * 100) / stageHeight > maxHeight) {
            layout = "breaking";
            if ((breakingLayoutHeight * 100) / stageHeight > maxHeight) {
                layout = "breaking-full";
            }
        }
        const contentHeight = (layout === "regular" && regularLayoutHeight) || (layout === "breaking" && breakingLayoutHeight) || 156;
        const stageWidth = window.innerWidth;
        const contentWidth = this.layoutBreakingRef.current !== null ? this.layoutBreakingRef.current.clientWidth : 0;
        const eyeCatcherHeight = this.eyeCatcherRef.current !== null ? this.eyeCatcherRef.current.clientHeight : 0;
        const eyeCatcherWidth = this.eyeCatcherRef.current !== null ? this.eyeCatcherRef.current.clientWidth : 0;
        const gridColumnWidth = contentWidth / 12;
        const scrollerHeight = this.scrollerRef.current !== null ? this.scrollerRef.current.clientHeight : 0;
        // Set eyeCatcherRight
        let eyeCatcherRight = 16;
        if (viewport === "xl") {
            eyeCatcherRight = gridColumnWidth - eyeCatcherWidth;
            if ((stageWidth - contentWidth) / 2 < eyeCatcherWidth) {
                eyeCatcherRight = -32;
            }
        }
        if (viewport === "lg") {
            eyeCatcherRight = gridColumnWidth - eyeCatcherWidth + 16;
            if ((stageWidth - contentWidth) / 2 < eyeCatcherWidth) {
                eyeCatcherRight = -32;
            }
        }
        // Set eyeCatcherTop
        // TODO: get margin top and margin bottom dynamically
        let eyeCatcherTop = 0;
        if (eyeCatcherHeight + contentHeight + scrollerHeight + 64 < stageHeight) {
            eyeCatcherTop = 32;
        }
        this.setState({
            eyeCatcherPosition: {
                top: eyeCatcherTop !== 0 ? "auto" : 32,
                right: eyeCatcherRight,
                bottom: eyeCatcherTop !== 0 ? contentHeight : "auto",
                left: "auto",
            },
            layout,
            viewport,
        });
    }
    render() {
        return (React__default.createElement(StagePresentation, { ...this.props, hideEyeCatcher: this.state.hideEyeCatcher, viewport: this.state.viewport, layoutRegularRef: this.layoutRegularRef, layoutBreakingRef: this.layoutBreakingRef, hostRef: this.hostRef, innerRef: this.innerRef, scrollerRef: this.scrollerRef, layout: this.state.layout, eyeCatcherPosition: this.state.eyeCatcherPosition, eyeCatcherRef: this.eyeCatcherRef, onScrollerClick: this.props.onScrollerClick || this.scrollStageHeight }));
    }
}

export { StageWrapper };
