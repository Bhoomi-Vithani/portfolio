import React__default, { createRef } from 'react';
import { lsgPre } from '../../config/prefix.js';
import { utilityClassScrollPadding16, utilityClassScrollPadding22, utilityClassScroll } from '../../styles/utilityClassesScroll.styles.js';
import { addResizeCallback, removeResizeCallback } from '../../utils/windowEvents/ResizeEvents.js';
import { addScrollCallback, removeScrollCallback } from '../../utils/windowEvents/ScrollEvents.js';
import { HeaderContainerPresentation } from './HeaderContainerPresentation.js';

// @ts-strict-ignore
class HeaderContainerWrapper extends React__default.Component {
    constructor(props) {
        super(props);
        this.mainContainerRightTopRef = createRef();
        this.mainContainerRightBottomRef = createRef();
        this.checkMarginLeft = elementRef => {
            if (elementRef) {
                const marginLeftString = window.getComputedStyle(elementRef).marginLeft;
                const marginLeft = parseInt(marginLeftString.slice(0, marginLeftString.length - 2), 10);
                if (marginLeft && marginLeft > 64) {
                    return true;
                }
            }
            else {
                return true;
            }
            return false;
        };
        this.hasEnoughSpace = () => 
        // The condition for the header to be able to be displayed in desktop mode (when in Viewport desktop)
        // is that both containers of the right side of the header have enough space (64px).
        this.checkMarginLeft(this.mainContainerRightTopRef?.current) &&
            this.checkMarginLeft(this.mainContainerRightBottomRef?.current);
        this.onResize = () => {
            // defer resizing to prevent browser from rerendering too much.
            requestAnimationFrame(() => this.onResizeDeferred());
        };
        this.onResizeDeferred = () => {
            // Normally, the mobile/desktop functionality of eg. the PortalHeader is controlled by the
            // viewport (isMobile===false), but in edge cases, the desktop view does not fit (Layout broken)
            // So if there's not enough space, enforce mobile mode.
            // when we force mobile, we store the documentWidth so we are able to tell when to open it again.
            const hasEnoughSpace = this.hasEnoughSpace();
            if (!this.props.isMobile && !this.state.forceMobile && !hasEnoughSpace) {
                this.setState(() => ({
                    forceMobile: true,
                    forcedMobileWidth: document.documentElement.clientWidth,
                }), () => {
                    // also, inform the parent component e.g. the PortalHeader which has to do some extra stuff.
                    this.props.onForceMobileChange(this.state.forceMobile);
                });
            }
            else if (this.state.forceMobile && document.documentElement.clientWidth > this.state.forcedMobileWidth) {
                this.setState(() => ({ forceMobile: false, forcedMobileWidth: 0 }), () => {
                    // also, inform the parent component e.g. the PortalHeader which has to do some extra stuff.
                    this.props.onForceMobileChange(this.state.forceMobile);
                });
            }
        };
        this.addOffsetClasses = () => {
            const hasSecondLine = this.props.bottomRight || this.props.bottomLeft;
            const stageOffset = (this.props.isMobile && 16) || (hasSecondLine && 32) || 22;
            if (this.props.width === "page") {
                // only reduce stage size for headers that are located on the top of the page
                document.body.classList.add(`${lsgPre}stage__header-anchor-${stageOffset}`);
            }
            // Add classes for scroll padding
            if (this.props.position) {
                const scrollPaddingClass = this.props.isMobile || hasSecondLine ? utilityClassScrollPadding16 : utilityClassScrollPadding22;
                const closestScrollElement = this.mainContainerRightTopRef?.current?.closest(`.${utilityClassScroll}`);
                const scrollElements = closestScrollElement
                    ? [closestScrollElement]
                    : [document.documentElement, document.body];
                scrollElements.forEach(element => {
                    element?.classList.add(scrollPaddingClass);
                });
            }
        };
        this.removeOffsetClasses = () => {
            document.body.classList.remove(`${lsgPre}stage__header-anchor-16`);
            document.body.classList.remove(`${lsgPre}stage__header-anchor-22`);
            document.body.classList.remove(`${lsgPre}stage__header-anchor-32`);
            // Remove classes for scroll padding
            // @as: We assume, that utilityClassScroll is not set and unset dynamically. The impact if this is the case is
            // considered to be low.
            const closestScrollElement = this.mainContainerRightTopRef?.current?.closest(`.${utilityClassScroll}`);
            const affectedElements = closestScrollElement
                ? [closestScrollElement]
                : [document.documentElement, document.body];
            affectedElements.forEach(element => {
                element?.classList.remove(utilityClassScrollPadding16);
                element?.classList.remove(utilityClassScrollPadding22);
            });
        };
        this.onScrollChange = () => {
            const scrollPosition = Math.min(4 * 16, window.scrollY);
            if (scrollPosition !== this.state.scrollPosition) {
                this.setState(() => ({ scrollPosition }));
            }
            this.props.onScrollChangeCallback(scrollPosition);
        };
        this.state = { forcedMobileWidth: 0 };
    }
    componentDidMount() {
        this.addOffsetClasses();
        addScrollCallback(this.onScrollChange);
        addResizeCallback(this.onResize);
        this.onResize();
    }
    componentWillUnmount() {
        this.removeOffsetClasses();
        removeScrollCallback(this.onScrollChange);
        removeResizeCallback(this.onResize);
    }
    componentDidUpdate(prevProps) {
        const hadSecondLine = prevProps.bottomRight || prevProps.bottomLeft;
        const hasSecondLine = this.props.bottomRight || this.props.bottomLeft;
        if (prevProps.isMobile !== this.props.isMobile ||
            hadSecondLine !== hasSecondLine ||
            prevProps.position !== this.props.position) {
            this.removeOffsetClasses();
            this.addOffsetClasses();
        }
        if (!this.props.isMobile) {
            this.onResizeDeferred();
        }
    }
    render() {
        const { scrollPosition, forceMobile } = this.state;
        const { bottomLeft, bottomRight, position } = this.props;
        return (React__default.createElement(HeaderContainerPresentation, { ...this.props, isMobile: forceMobile || this.props.isMobile, scrollPosition: (bottomLeft || bottomRight) && position === "fixed" ? scrollPosition : undefined, mainContainerRightTopRef: this.mainContainerRightTopRef, mainContainerRightBottomRef: this.mainContainerRightBottomRef }));
    }
}
HeaderContainerWrapper.defaultProps = {
    onForceMobileChange: () => {
        /* empty */
    },
    onScrollChangeCallback: () => {
        /* empty */
    },
};

export { HeaderContainerWrapper };
