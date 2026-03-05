import React__default from 'react';
import { PictureBackgroundPresentation } from './PictureBackgroundPresentation.js';

// @ts-strict-ignore
class PictureBackgroundWrapper extends React__default.Component {
    constructor(props) {
        super(props);
        this.mediaQueryLists = [];
        this.testWebpSupport = () => {
            const TestImages = {
                lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
                lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
                alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
                animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
            };
            const img = new Image();
            img.onload = () => {
                this.setState(() => ({ webpSupport: img.width > 0 && img.height > 0 }));
                this.handleMediaQuery();
            };
            img.onerror = () => {
                this.setState(() => ({ webpSupport: false }));
                this.handleMediaQuery();
            };
            img.src = `data:image/webp;base64,${TestImages.alpha}`;
        };
        this.addListeners = () => {
            if (typeof window === "undefined") {
                return;
            }
            this.mediaQueryLists = this.props.source?.map(s => {
                const mql = window.matchMedia(s.media || "all");
                if (typeof mql.addEventListener === "function") {
                    mql.addEventListener("change", this.handleMediaQuery);
                }
                else {
                    // TODO test
                    mql.addListener(this.handleMediaQuery);
                }
                return mql;
            });
        };
        this.removeListeners = () => {
            if (typeof window === "undefined") {
                return;
            }
            this.mediaQueryLists?.map(mql => {
                if (typeof mql.removeEventListener === "function") {
                    mql.removeEventListener("change", this.handleMediaQuery);
                }
                else {
                    // TODO test
                    mql.removeListener(this.handleMediaQuery);
                }
                return mql;
            });
        };
        this.handleMediaQuery = () => {
            // Iterates trough all mediaQueries until the first matches = true.
            const findIndex = this.mediaQueryLists?.findIndex((mql, index) => {
                if (this.props.source[index].type === "image/webp" && !this.state.webpSupport) {
                    return false;
                }
                if (mql.matches) {
                    return true;
                }
                return false;
            });
            const viewportSource = findIndex === undefined || findIndex < 0 ? this.props.imgSrc : this.props.source[findIndex].srcSet;
            this.setState(() => ({ viewportSource }));
        };
        this.state = {
            viewportSource: undefined, // fill after mount
            webpSupport: false,
        };
    }
    componentDidMount() {
        this.testWebpSupport();
        this.addListeners();
    }
    componentWillUnmount() {
        this.removeListeners();
    }
    componentDidUpdate(prevProps) {
        if (this.props.imgSrc !== prevProps.imgSrc ||
            (this.props.source !== undefined &&
                (this.props.source?.length !== this.mediaQueryLists?.length ||
                    this.props.source?.some((s, i) => prevProps.source?.[i]?.media !== s.media)))) {
            this.removeListeners();
            this.addListeners();
            if (this.state.webpSupport !== undefined) {
                this.handleMediaQuery();
            }
        }
    }
    render() {
        const { viewportSource } = this.state;
        return React__default.createElement(PictureBackgroundPresentation, { ...this.props, viewportSource: viewportSource });
    }
}

export { PictureBackgroundWrapper };
