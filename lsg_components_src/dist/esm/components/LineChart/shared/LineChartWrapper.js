import React__default from 'react';
import { setLsgTimeout } from '../../../utils/timing.js';
import { getInitialViewportSize, addViewportCallback, removeViewportCallback } from '../../../utils/windowEvents/ResizeEvents.js';
import { LineChartPresentation } from './LineChartPresentation.js';

// @ts-strict-ignore
class LineChartWrapper extends React__default.Component {
    constructor(props) {
        super(props);
        this.marginTop = 12;
        this.marginRight = 36;
        this.marginBottom = 50;
        this.marginLeft = 80;
        this.setDimensions = () => {
            const width = this.componentRef.clientWidth;
            const height = this.componentRef.clientHeight;
            this.setState(() => ({ componentWidth: width, componentHeight: height }));
        };
        this.setInfoBoxMeasures = (width, height) => this.setState(() => ({ infoAreaWidth: width, infoAreaHeight: height }));
        this.setSelectedIndex = index => this.setState(() => ({ selectedIndex: index }));
        this.onViewportChange = (viewport) => this.setState(() => ({ isMobile: ["sm", "xs"].includes(viewport) }));
        // Callback figure out the width of last child of x-label element hence the last label become displayed completely.
        this.refChartXLabelCallBack = element => element &&
            setLsgTimeout(() => this.setState({ lastXLabelWidth: element.children[0].lastChild.getBoundingClientRect().width }));
        this.state = {
            isMobile: ["xs", "sm"].includes(getInitialViewportSize()),
            infoAreaHeight: 0,
            infoAreaWidth: 0,
            labelYWidth: 0,
            lastXLabelWidth: 0,
            selectedIndex: -1,
            componentWidth: 0,
            componentHeight: 0,
        };
    }
    componentDidMount() {
        this.setState(() => ({ labelYWidth: this.axisRefY.getBoundingClientRect().width }));
        addViewportCallback(this.onViewportChange);
        window.addEventListener("resize", this.setDimensions);
    }
    componentWillUnmount() {
        removeViewportCallback(this.onViewportChange);
        window.removeEventListener("resize", this.setDimensions);
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.isMobile !== nextState.isMobile ||
            this.state.labelYWidth !== nextState.labelYWidth ||
            this.state.lastXLabelWidth !== nextState.lastXLabelWidth ||
            this.state.selectedIndex !== nextState.selectedIndex ||
            this.state.componentHeight !== nextState.componentHeight ||
            this.state.componentWidth !== nextState.componentWidth ||
            this.state.labelYWidth !== nextState.labelYWidth ||
            this.props.selectionValue !== nextProps.selectionValue ||
            this.props.axisOptions !== nextProps.axisOptions) {
            return true;
        }
        return false;
    }
    componentDidUpdate(_prevProps, prevState) {
        const height = this.componentRef.clientHeight;
        const width = this.componentRef.clientWidth;
        if (height !== this.state.componentHeight) {
            this.setState(() => ({ componentHeight: height }));
        }
        if (width !== this.state.componentWidth) {
            this.setState(() => ({ componentWidth: width }));
        }
        if (prevState.labelYWidth !== this.state.labelYWidth) {
            this.setState(() => ({ labelYWidth: this.axisRefY.getBoundingClientRect().width }));
        }
    }
    render() {
        const { interactive, selectionBar, selectionBarActionAs, onSelectionChange, selectionValue, axisOptions, lines, zeroLineBold, tooltipComponent, loadingIndicator, tooltipOptions, } = this.props;
        const { isMobile, labelYWidth, lastXLabelWidth } = this.state;
        return (React__default.createElement(LineChartPresentation, { isMobile: isMobile, 
            // axisOptions={axisOptions} the whole object isn't needed currently, but the old prop is stayed as reminder of container for ticks
            tickValuesX: axisOptions?.xAxis?.tickValues, tickValuesY: axisOptions?.yAxis?.tickValues, canvasHeight: this.state.componentHeight, canvasWidth: this.state.componentWidth, selectionBar: selectionBar, selectionBarActionAs: selectionBarActionAs, selectionValue: selectionValue, onSelectionChange: onSelectionChange, interactive: interactive, zeroLineBold: zeroLineBold, lines: lines, marginTop: this.marginTop, marginRight: this.marginRight, marginBottom: this.marginBottom, marginLeft: this.marginLeft, labelYWidth: labelYWidth, lastXAxisLabelWidth: lastXLabelWidth, tooltipComponent: tooltipComponent, loadingIndicator: loadingIndicator, tooltipWidth: this.state.infoAreaWidth, tickFormatX: axisOptions?.xAxis?.tickFormatter, tickFormatY: axisOptions?.yAxis?.tickFormatter, tickValueMaxY: axisOptions?.yAxis?.max, tickValueMinY: axisOptions?.yAxis?.min, setSelectedIndex: this.setSelectedIndex, selectedIndex: this.state.selectedIndex, gridStyleX: axisOptions?.xAxis?.gridStyle, gridStyleY: axisOptions?.yAxis?.gridStyle, componentRef: r => (this.componentRef = r), chartXAxisLabelRef: this.refChartXLabelCallBack, axisRefY: r => (this.axisRefY = r), setInfoBoxMeasures: this.setInfoBoxMeasures, infoAreaHeight: this.state.infoAreaHeight, tooltipOptions: tooltipOptions }));
    }
}

export { LineChartWrapper };
