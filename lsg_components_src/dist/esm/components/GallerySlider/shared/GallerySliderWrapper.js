import React__default from 'react';
import { fragmentCount } from '../../../utils/ReactUtils.js';
import { getViewportSize, getInitialViewportSize, addResizeCallback, removeResizeCallback } from '../../../utils/windowEvents/ResizeEvents.js';
import { GallerySliderPresentation } from './GallerySliderPresentation.js';

// @ts-strict-ignore
class GallerySliderWrapper extends React__default.Component {
    constructor(props) {
        super(props);
        this.addSwipeEventListeners = () => {
            window.addEventListener("mousemove", this.onMouseMove);
            window.addEventListener("mouseup", this.onMouseUp);
            window.addEventListener("touchmove", this.onMouseMove, { passive: false });
            window.addEventListener("touchend", this.onMouseUp);
            window.addEventListener("touchcancel", this.onMouseUp);
        };
        this.removeSwipeEventListeners = () => {
            window.removeEventListener("mousemove", this.onMouseMove);
            window.removeEventListener("mouseup", this.onMouseUp);
            window.removeEventListener("touchmove", this.onMouseMove);
            window.removeEventListener("touchend", this.onMouseUp);
            window.removeEventListener("touchcancel", this.onMouseUp);
        };
        this.getPageBySlide = (slide, slidesPerPage) => Math.floor(slide / slidesPerPage);
        this.getSlideByPage = (page) => {
            // get the first slide (0...n) by page (0..m)
            // in case there are not enough slides that fit in the last page, modify the first slide.
            // e.g. if slides=13 and slidesPerPage = 5 there are 3 pages (0..2) whereas the slideByPage(2) === 8, so
            // on page 2 are displayed slides 8, 9, 10, 11, 12
            const slidesPerPage = this.state.slidesPerPage;
            const pageCount = Math.ceil(fragmentCount(this.props.children) / slidesPerPage);
            let result = page * slidesPerPage;
            if (page >= pageCount - 1) {
                result = this.getMaxSlide(slidesPerPage);
            }
            return result;
        };
        this.getMaxSlide = (slidesPerPage) => 
        // get the maximum first slide (the first slide on the last page)
        // also see comment for this.getSlideByPage().
        Math.max(fragmentCount(this.props.children) - slidesPerPage, 0);
        this.setPage = (page, event) => {
            if (this.state.currentSlide !== this.getSlideByPage(page)) {
                this.setState(prevState => ({
                    previousSlide: prevState.currentSlide,
                    currentSlide: this.getSlideByPage(page),
                    animation: true,
                }), () => this.props.onChange(this.getSlideByPage(page), event));
            }
        };
        this.onMouseDown = (e) => {
            const screenX = this.getScreenX(e);
            const screenY = this.getScreenY(e);
            if (typeof screenX === "undefined" || typeof screenY === "undefined") {
                // break, if the event has no valid coordinates. This happens sometimes.
                return;
            }
            this.addSwipeEventListeners();
            this.setState(() => ({
                mouseDownPositionX: screenX,
                mouseDownPositionY: screenY,
                mouseDownTimestamp: Date.now(),
                animation: false,
            }));
        };
        this.onMouseMove = (e) => {
            const screenX = this.getScreenX(e);
            const screenY = this.getScreenY(e);
            // if vertical scroll, abort
            if (this.state.mouseMovePosition === undefined &&
                Math.abs(this.state.mouseDownPositionX - screenX) < Math.abs(this.state.mouseDownPositionY - screenY)) {
                this.removeSwipeEventListeners();
                this.setState(() => ({
                    mouseDownPositionX: undefined,
                    mouseDownPositionY: undefined,
                    mouseDownTimestamp: undefined,
                    mouseMovePosition: undefined,
                    animation: true,
                }));
                return true;
            }
            if (e.cancelable) {
                e.preventDefault();
            }
            if (this.outerElement) {
                this.outerElement.style.touchAction = "pan-y pinch-zoom";
                this.outerElement.style.userSelect = "none";
            }
            this.setState(() => ({
                mouseMovePosition: screenX,
                animation: false,
            }));
            return false;
        };
        this.setNextPage = (e) => {
            const pageCount = Math.ceil(fragmentCount(this.props.children) / this.state.slidesPerPage);
            this.setPage(Math.min(pageCount, Math.floor(this.state.currentSlide / this.state.slidesPerPage) + 1), e);
        };
        this.setPreviousPage = (e) => {
            this.setPage(Math.max(0, Math.ceil(this.state.currentSlide / this.state.slidesPerPage) - 1), e);
        };
        this.onMouseUp = (e) => {
            this.removeSwipeEventListeners();
            if (this.outerElement) {
                this.outerElement.style.touchAction = "";
                this.outerElement.style.userSelect = "";
            }
            const screenX = this.getScreenX(e);
            const velocity = (this.state.mouseDownPositionX - screenX) / (Date.now() - this.state.mouseDownTimestamp);
            const movement = this.state.mouseDownPositionX - screenX;
            const nextSlide = movement / this.state.elementWidth;
            if (nextSlide > 0.5 || velocity > 1) {
                this.setNextPage(e);
            }
            else if (nextSlide < -0.5 || velocity < -1) {
                this.setPreviousPage(e);
            }
            this.setState(() => ({
                mouseDownPositionX: undefined,
                mouseDownPositionY: undefined,
                mouseDownTimestamp: undefined,
                mouseMovePosition: undefined,
                animation: true,
            }));
        };
        this.getSlidesPerPage = (viewport) => ({
            xl: this.props.slidesToDisplay,
            lg: this.props.slidesToDisplay,
            md: this.props.slidesToDisplay,
            sm: Math.max(this.props.slidesToDisplay - 1, 1),
            xs: 1,
        }[viewport] || 1);
        // To determine the width of each Slide, first check the viewport because in different viewport different number
        // of slides will be displayed. Second use the width of displaywindow to divide the number of slides to be displayed
        // and minus the margin of each slide.s
        this.updateSlideWidth = () => {
            const slidesPerPage = this.getSlidesPerPage(getViewportSize());
            // const currentSlide = Math.min(this.state.currentSlide, this.getMaxSlide(slidesPerPage)); -> changed because linter error came up
            this.setState(prevState => ({
                slidesPerPage,
                elementWidth: this.someInnerElement?.offsetWidth || 0,
                animation: false,
                currentSlide: Math.min(prevState.currentSlide, this.getMaxSlide(slidesPerPage)),
            }));
        };
        const slidesPerPage = this.getSlidesPerPage(getInitialViewportSize());
        const currentSlide = Math.min(this.props.initialSlide || 0, this.getMaxSlide(slidesPerPage));
        const currentPage = this.getPageBySlide(currentSlide, slidesPerPage);
        this.state = {
            currentSlide,
            currentPage,
            previousSlide: 0,
            slidesPerPage,
            elementWidth: 0,
            animation: false,
            mouseDownPositionX: undefined,
            mouseDownPositionY: undefined,
            mouseDownTimestamp: undefined,
            mouseMovePosition: undefined,
        };
    }
    componentDidMount() {
        addResizeCallback(this.updateSlideWidth);
    }
    componentWillUnmount() {
        removeResizeCallback(this.updateSlideWidth);
        this.removeSwipeEventListeners();
    }
    // eslint-disable-next-line class-methods-use-this
    getScreenX(e) {
        return e.screenX || e.changedTouches?.[0]?.screenX;
    }
    // eslint-disable-next-line class-methods-use-this
    getScreenY(e) {
        return e.screenY || e.changedTouches?.[0]?.screenY;
    }
    render() {
        const { currentSlide, previousSlide, slidesPerPage, animation, mouseDownPositionX, mouseDownPositionY, mouseDownTimestamp, mouseMovePosition, } = this.state;
        const translate = `${100 * currentSlide}%`;
        const { children } = this.props;
        const animationDirection = previousSlide < currentSlide ? 1 : -1;
        const animationOffset = 5 - animationDirection * previousSlide;
        const slides = fragmentCount(children);
        const dotCount = slidesPerPage !== 0 ? Math.ceil(slides / slidesPerPage) : 0;
        const activeDot = Math.ceil(currentSlide / slidesPerPage);
        return (React__default.createElement(GallerySliderPresentation, { ...this.props, someElementRef: r => (this.someInnerElement = r), outerRef: r => (this.outerElement = r), currentSlide: currentSlide, animation: animation, mouseDownPositionX: mouseDownPositionX, mouseDownPositionY: mouseDownPositionY, mouseDownTimestamp: mouseDownTimestamp, mouseMovePosition: mouseMovePosition, onMouseDown: e => this.onMouseDown(e), onDragStart: e => e.preventDefault(), handleArrowRightClick: e => this.setNextPage(e), handleArrowLeftClick: e => this.setPreviousPage(e), handlePointClick: this.setPage, dotCount: dotCount, activeDot: activeDot, translate: translate, animationOffset: animationOffset, animationDirection: animationDirection, slidesPerPage: slidesPerPage }));
    }
}
// eslint-disable-next-line react/sort-comp
GallerySliderWrapper.defaultProps = {
    initialSlide: 0,
    slidesToDisplay: 3,
    onChange() {
        /* empty */
    },
};

export { GallerySliderWrapper };
