'use strict';

var React__default = require('react');
var Localization = require('../../../utils/Localization.js');
require('../../../utils/windowEvents/ScrollEvents.js');
var ResizeEvents = require('../../../utils/windowEvents/ResizeEvents.js');
var timing = require('../../../utils/timing.js');
require('../../ChartInfos/ChartInfo.js');
var ChartInfoContainer = require('../../ChartInfos/shared/ChartInfoContainer.js');
var CircleCountdown_styles = require('./CircleCountdown.styles.js');
var CircleCountdownPresentation = require('./CircleCountdownPresentation.js');

// @ts-strict-ignore
// The method gives the multiply factor depends on viewport for different container elements
const getSpaceFactor = (space, position, viewport) => {
  let view;
  switch (viewport) {
    case "xs":
    case "sm":
      view = "mobile";
      break;
    case "md":
    case "lg":
    case "xl":
      view = "desktop";
      break;
    default:
      view = "not available";
  }
  return [{
    space: "outer",
    vport: "desktop",
    pos: "top-bottom",
    factor: 1.4
  }, {
    space: "outer",
    vport: "mobile",
    pos: "top-bottom",
    factor: 1.5
  }, {
    space: "outer",
    vport: "desktop",
    pos: "right",
    factor: 1.5
  }, {
    space: "outer",
    vport: "mobile",
    pos: "right",
    factor: 1.5
  }, {
    space: "offset",
    vport: "desktop",
    pos: "right",
    factor: 0.5
  }, {
    space: "offset",
    vport: "mobile",
    pos: "right",
    factor: 0.5
  }, {
    space: "offset",
    vport: "desktop",
    pos: "top-bottom",
    factor: 0.4
  }, {
    space: "offset",
    vport: "mobile",
    pos: "top-bottom",
    factor: 0.5
  }].find(spacing => spacing.space === space && spacing.vport === view && spacing.pos === position).factor;
};
/* INFO:
 CircleDiagram has different aspects of presentation depends on available space or a given fixed size and minimum size for all sizing models.
 In order to keep old size model with 480 px (presented by defaultMaxChartSize now) a sizeMode prop has implemented. The prop has two
 mode with "fixed" (= 480) and "dynamic" (sizing depend on parent element around).
 Depend on the size mode additional space become reserved when a figure panel info area is given.
*/
class CircleCountdownWrapper extends React__default.Component {
  constructor(props) {
    super(props);
    this.observer = null;
    this.updateViewport = viewPort => this.setState(() => ({
      viewPort
    }));
    // Launch the current size depending on sizeMode or available space
    this.getCurrentRectWidthForChart = viewPortSize => {
      let clientRectWidth = 0;
      if (this.props.sizeMode === "fixed") {
        clientRectWidth = this.host.clientWidth < CircleCountdownPresentation.defaultMinChartSize || ["xs"].includes(viewPortSize) ? CircleCountdownPresentation.defaultMinChartSize : CircleCountdownPresentation.defaultMaxChartSize;
      } else {
        clientRectWidth = this.host.clientWidth < CircleCountdownPresentation.defaultMinChartSize || ["xs"].includes(viewPortSize) ? CircleCountdownPresentation.defaultMinChartSize : this.host.clientWidth;
      }
      return clientRectWidth;
    };
    // Used in PresentationMode === "countdown" only
    this.startTimer = restart => {
      // Reset timer
      if (this.state.secondsLeft !== this.props.secondsUntilRefresh) {
        this.setState(() => ({
          secondsLeft: this.props.secondsUntilRefresh || 5
        }));
      }
      this.setState(() => ({
        errorText: null
      }));
      // kill old countdown if restart button is clicked
      if (restart) {
        clearInterval(this.countdown);
      }
      this.countdown = window.setInterval(() => {
        this.setState(previousState => ({
          secondsLeft: previousState.secondsLeft - 0.05
        }));
        if (this.state.secondsLeft <= 0) {
          clearInterval(this.countdown);
          this.setState(() => ({
            errorText: this.props.countDownFinishText || Localization.texts.lsg.component.CircleDiagram.errorFinishCountdown
          }));
        }
      }, 50);
    };
    this.updateSize = newWidth => {
      const viewPortSize = this.state.viewPort;
      const clientRectWidth = newWidth;
      // figure out the position of info area
      let areaPosition = ChartInfoContainer.mapChartInfoPosition(this.props.chartInfo?.position, viewPortSize);
      if (["xs", "sm"].includes(viewPortSize) && areaPosition === "right") {
        areaPosition = "bottom"; // force to bottom because more space is available
      } else {
        areaPosition = areaPosition ?? "";
      }
      this.setState(() => ({
        size: {
          chartPosition: areaPosition,
          baseWidth: clientRectWidth,
          heightContainer: this.props.chartInfo && ["top", "bottom"].includes(areaPosition) && [CircleCountdownPresentation.defaultMinChartSize, CircleCountdownPresentation.defaultMaxChartSize].includes(clientRectWidth) ? Math.round(clientRectWidth * getSpaceFactor("outer", "top-bottom", viewPortSize)) /* creates offset for chart info on top or bottom */ : clientRectWidth,
          widthContainer: this.props.chartInfo && areaPosition === "right" && [CircleCountdownPresentation.defaultMinChartSize, CircleCountdownPresentation.defaultMaxChartSize].includes(clientRectWidth) ? Math.round(clientRectWidth * getSpaceFactor("outer", "right", viewPortSize)) /* creates offset for chart info on the right */ : clientRectWidth
        }
      }));
      // Check if Headline and button fits into circle
      const canvasNew = document.createElement("canvas");
      const ctx = canvasNew.getContext("2d");
      ctx.font = window.getComputedStyle(this.headline).font;
      // "- this.host.offsetWidth * 0.2" because of the curvature of the circle
      const hostMaxWidth = this.host.offsetWidth - this.host.offsetWidth * 0.25;
      const headlineMetrics = ctx.measureText(this.headline.innerHTML);
      if (hostMaxWidth < headlineMetrics.width) {
        this.headline.style.width = `${hostMaxWidth}px`;
        this.headline.style.marginLeft = "25px";
      }
      // Check if Button width is to high for circle
      if (this.props.callToActionButton) {
        const cta = document.querySelector(`.${CircleCountdown_styles.hostClass}-button > :first-child`);
        const ctaWidth = parseInt(window.getComputedStyle(cta).width, 10);
        if (hostMaxWidth - 25 < ctaWidth) {
          this.setState(() => ({
            ctaBelowCircle: true
          }));
        }
      }
    };
    this.handleVisibilityChange = () => {
      this.observer?.unobserve(this.host);
      this.animate();
    };
    // Used in PresentationMode === "animated" only
    this.animate = () => {
      const timestampStarted = this.state.timestampStarted || Date.now();
      const animationAmount = (Date.now() - timestampStarted) / 1000 / CircleCountdownWrapper.animationDuration;
      const valueLabel = this.props.valueAnimationCallback && animationAmount < 1 ? this.props.valueAnimationCallback(animationAmount, this.props.amount * animationAmount) : undefined;
      if (this.props.amount && this.props.amount * animationAmount < this.props.amount) {
        this.setState(() => ({
          timestampStarted,
          valueLabel,
          animationAmount
        }), () => {
          timing.setLsgTimeout(this.animate);
        });
      } else {
        this.setState({
          timestampStarted,
          valueLabel,
          animationAmount
        });
      }
    };
    this.getPresentationMode = () => {
      if (!this.props.noAnimation && this.animationSupported && !this.props.countdown) {
        return "animated";
      }
      if (this.props.noAnimation && this.animationSupported && !this.props.countdown) {
        return "static";
      }
      if (this.props.countdown) {
        return "countdown";
      }
    };
    this.state = {
      size: {
        chartPosition: "no-position",
        heightContainer: 0,
        widthContainer: 0,
        heightInner: 0,
        widthInner: 0,
        heightChartInfo: 0,
        widthChartInfo: 0
      },
      animationAmount: 0,
      secondsLeft: this.props.secondsUntilRefresh || 5,
      ctaBelowCircle: false,
      viewPort: ResizeEvents.getInitialViewportSize()
    };
    this.readLabelAfterRefresh = false;
  }
  componentDidMount() {
    ResizeEvents.addResizeCallback(this.updateSize);
    ResizeEvents.addViewportCallback(this.updateViewport);
    this.animationSupported = window.IntersectionObserver !== undefined;
    const options = {
      root: null,
      // null = viewport
      threshold: 0.4,
      // 0-1 how much of element needs to be shown
      rootMargin: "0px" // px / %
    };
    if (!this.props.noAnimation && this.animationSupported) {
      if (this.props.animationOnStart === true) {
        this.animate();
      } else {
        this.observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.handleVisibilityChange();
            }
          });
        }, options);
        this.observer.observe(this.host);
      }
    }
    // 5 Second countdown
    if (this.props.countdown) {
      setTimeout(() => this.startTimer(), CircleCountdownPresentation.defaultDelayStartTimer * 1.5);
    }
    this.updateSize(this.getCurrentRectWidthForChart(this.state.viewPort));
  }
  componentWillUnmount() {
    if (!this.props.noAnimation && this.animationSupported) {
      this.observer?.unobserve(this.host);
    }
    ResizeEvents.removeResizeCallback(this.updateSize);
    ResizeEvents.removeViewportCallback(this.updateViewport);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.valueLabel !== this.props.valueLabel) {
      // should trigger a new read of valueLabel when changed
      this.readLabelAfterRefresh = true;
    }
    if (this.state.secondsLeft > 20 && this.readLabelAfterRefresh) this.readLabelAfterRefresh = false;
    // Check up, whether there is a real change in measures to avoid repeatedly calls otherwise it cause an error of
    // "too many setstate calls".
    const currentClientWidth = this.getCurrentRectWidthForChart(this.state.viewPort);
    if (this.state.size.baseWidth !== currentClientWidth) {
      this.updateSize(currentClientWidth);
    }
  }
  render() {
    // Calculate the net space for chart square only
    const innerSquareSize = Math.min(this.props.chartInfo && ["top", "bottom"].includes(this.state.size.chartPosition) ? Math.round(this.state.size.heightContainer / getSpaceFactor("outer", "top-bottom", this.state.viewPort) /* 1.4 */ // calc chart size depending of viewport
    ) : this.state.size.heightContainer, this.props.chartInfo && this.state.size.chartPosition === "right" ? Math.round(this.state.size.widthContainer / getSpaceFactor("outer", "right", this.state.viewPort) /* 1.5 */ // calc chart size depending of viewport
    ) : this.state.size.widthContainer);
    const finalSizing = {
      chartPosition: this.state.size.chartPosition,
      widthContainer: this.state.size.widthContainer,
      heightContainer: this.state.size.heightContainer,
      // measures of chart area itself
      heightInner: innerSquareSize,
      widthInner: innerSquareSize,
      // measures of info area
      heightChartInfo:
      // calc the space of chart info depending on chart info position
      this.props.chartInfo && ["top", "bottom"].includes(this.state.size.chartPosition) ? Math.round(this.state.size.heightContainer / getSpaceFactor("outer", "top-bottom", this.state.viewPort) * getSpaceFactor("offset", "top-bottom", this.state.viewPort)) : this.state.size.heightContainer,
      widthChartInfo:
      // calc the space of chart info depending on chart info position
      this.props.chartInfo && this.state.size.chartPosition === "right" ? Math.round(this.state.size.widthContainer / getSpaceFactor("outer", "right", this.state.viewPort) * getSpaceFactor("offset", "right", this.state.viewPort)) : this.state.size.widthContainer
    };
    const valueLabel = this.state.valueLabel || this.props.valueLabel;
    const amount = ["animated"].includes(this.getPresentationMode()) && this.props.amount * this.state.animationAmount < this.props?.amount ? this.props.amount * this.state.animationAmount : this.props.amount; // PresentationMode === "static, countdown process value become managed in Presentation in conjunction with startTimer
    return /*#__PURE__*/React__default.createElement(CircleCountdownPresentation.CircleCountdownPresentation, {
      ...this.props,
      valueLabel: valueLabel,
      size: finalSizing,
      amount: amount,
      hostRef: hostRef => {
        this.host = hostRef;
      },
      secondsLeft: this.state.secondsLeft,
      errorText: this.state.errorText,
      headlineRef: r => {
        this.headline = r;
      },
      ctaBelowCircle: this.state.ctaBelowCircle,
      startTimer: restart => this.startTimer(restart),
      presentationMode: this.getPresentationMode(),
      readLabelAfterRefresh: this.readLabelAfterRefresh
    });
  }
}
CircleCountdownWrapper.defaultProps = CircleCountdownPresentation.defaultProps;
CircleCountdownWrapper.animationDuration = 1;

exports.CircleCountdownWrapper = CircleCountdownWrapper;
