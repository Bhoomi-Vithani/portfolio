'use strict';

var d3Array = require('d3-array');
var d3Scale = require('d3-scale');
var React__default = require('react');
var prefix = require('../../../config/prefix.js');
var DomUtils = require('../../../utils/DomUtils.js');
var Host = require('../../../utils/Host.js');
var React = require('../../../utils/React.js');
var SpinnerPresentation = require('../../Spinner/shared/SpinnerPresentation.js');
var TabBarWrapper = require('../../_TabBar/shared/TabBarWrapper.js');
var ChartAxisPresentation = require('./ChartAxis/ChartAxisPresentation.js');
var ChartCroshairPresentation = require('./ChartCroshair/ChartCroshairPresentation.js');
var ChartGridPresentation = require('./ChartGrid/ChartGridPresentation.js');
var ChartInfoBoxPresentation = require('./ChartInfoBox/ChartInfoBoxPresentation.js');
var ChartInfoBoxContainerWrapper = require('./ChartInfoBoxContainer/ChartInfoBoxContainerWrapper.js');
var ChartLineSeriesPresentation = require('./ChartLineSeries/ChartLineSeriesPresentation.js');
var ChartMousePresentation = require('./ChartMouse/ChartMousePresentation.js');
var ChartXYPlotPresentation = require('./ChartXYPlot/ChartXYPlotPresentation.js');
var LineChart_styles = require('./LineChart.styles.js');

// @ts-strict-ignore
const defaultProps = {};
const LineChartPresentation = React.fRef(props => {
  const {
    id,
    className,
    noMargin,
    lines,
    selectionBar,
    selectionBarActionAs,
    selectionValue,
    onSelectionChange,
    // marginTop,
    // marginBottom,
    labelYWidth,
    lastXAxisLabelWidth,
    interactive,
    zeroLineBold,
    isMobile,
    loadingIndicator,
    tooltipWidth,
    tooltipOptions,
    tickValuesX,
    tickValuesY,
    tickFormatX,
    tickFormatY,
    setSelectedIndex,
    selectedIndex,
    gridStyleX,
    gridStyleY,
    componentRef,
    chartXAxisLabelRef,
    tickValueMaxY,
    tickValueMinY,
    axisRefY,
    setInfoBoxMeasures,
    infoAreaHeight
  } = props;
  const viewBoxWidth = props.canvasWidth;
  // TODO: Höhe Tabbar und Info Area ggf. abziehen; reconsider better way
  let viewBoxHeight = props.canvasHeight;
  if (selectionBar) {
    viewBoxHeight -= 82;
  }
  // infoareahöhe
  if (isMobile) {
    viewBoxHeight -= infoAreaHeight;
  }
  // bottom padding of component
  viewBoxHeight -= 16;
  const paddingX = 16;
  const paddingY = 4;
  const bottomAxisHeight = 30;
  const leftAxisWidth = labelYWidth + 16; // 16 px Abstand zwischen yAxe und Plot-Bereich
  const bodyHeight = viewBoxHeight - bottomAxisHeight - 2 * paddingY;
  const bodyWidth = viewBoxWidth - leftAxisWidth - 2 * paddingX - lastXAxisLabelWidth / 2;
  const leftAxis = {
    pos: {
      x: paddingX,
      y: paddingY
    },
    size: {
      width: leftAxisWidth,
      height: bodyHeight
    }
  };
  const bottomAxis = {
    pos: {
      x: paddingX + leftAxisWidth,
      y: paddingY + bodyHeight
    },
    size: {
      width: bodyWidth,
      height: bottomAxisHeight
    }
  };
  const body = {
    pos: {
      x: leftAxis.pos.x + leftAxisWidth,
      y: paddingY
    },
    size: {
      width: bodyWidth,
      height: bodyHeight
    }
  };
  const flatData = d => d.map(data => data.dataPoints).flat(1);
  const domainXMin = d3Array.min(flatData(lines), d => d.x);
  const domainXMax = d3Array.max(flatData(lines), d => d.x);
  const lineValuesYMin = d3Array.min(flatData(lines), d => d.y);
  // TODO fix dirty cast from Date to number. No idea, why this works
  const domainYMin = Math.min(...(tickValuesY || []), lineValuesYMin);
  const lineValuesYMax = d3Array.max(flatData(lines), d => d.y);
  // TODO fix dirty cast from Date to number. No idea, why this works
  const domainYMax = Math.max(...(tickValuesY || []), lineValuesYMax);
  const xScale = d3Scale.scaleTime().domain([domainXMin, domainXMax]).range([0, body.size.width]);
  // inverted arguments to get standard cartesion coordinate system instead of svg coordinate behavior
  const yScale = d3Scale.scaleLinear().domain([typeof tickValueMinY !== "undefined" && tickValueMinY < domainYMin ? tickValueMinY : domainYMin, typeof tickValueMaxY !== "undefined" && tickValueMaxY > domainYMax ? tickValueMaxY : domainYMax]).range([body.size.height, 0]);
  const mapToDataPoint = mouse => {
    const closest = lines[0].dataPoints.reduce((result, datum, idx) => {
      const thisDistance = Math.abs(mouse.x - xScale(datum.x));
      if (thisDistance < result.distance) {
        return {
          distance: thisDistance,
          index: idx
        };
      }
      return result;
    }, {
      distance: Infinity,
      index: -1
    });
    const res = lines.map((r, i) => ({
      label: lines[i].label,
      point: r.dataPoints[closest.index],
      index: closest.index
    }));
    return res;
  };
  const canvasWidth = props.canvasWidth;
  const styleToLineColor = style => {
    switch (style) {
      case "style-1":
        return "primary-1";
      case "style-2":
        return "primary-2";
      case "style-3":
        return "level-3";
      case "style-4":
        return "level-5";
      case "style-5":
        return "level-6";
      default:
        return "primary-1";
    }
  };
  const styleToIndicatorColor = style => {
    switch (style) {
      case "style-1":
        return "primary-1";
      case "style-2":
        return "primary-2";
      case "style-3":
        return "level-3";
      case "style-4":
        return "level-5";
      case "style-5":
        return "level-6";
      default:
        return "primary-1";
    }
  };
  const ChartTabBar = tabProps => React__default.useMemo(() => {
    if (!tabProps.selectionBar && !tabProps.selectionValue && !tabProps.onSelectionChange) {
      return null;
    }
    return /*#__PURE__*/React__default.createElement("div", {
      className: DomUtils.cleanupClassObject({
        [`${LineChart_styles.hostClass}-navigation`]: true,
        [`${LineChart_styles.hostClass}-navigation-blur`]: loadingIndicator
      })
    }, /*#__PURE__*/React__default.createElement(TabBarWrapper.TabBarWrapper, {
      navigationTree: tabProps.selectionBar,
      navigationActionAs: selectionBarActionAs,
      value: tabProps.selectionValue,
      onChange: tabProps.onSelectionChange
    }));
  }, []);
  // TODO: tidy up in separate function
  let tickValueHelperX = [];
  if (isMobile) {
    tickValueHelperX.push(xScale.ticks()[0]);
    tickValueHelperX.push(xScale.ticks()[xScale.ticks().length - 1]);
  } else if (typeof tickValuesX !== "undefined") {
    tickValueHelperX = tickValuesX;
  } else {
    tickValueHelperX = lines[0].dataPoints.map(el => el.x);
  }
  return /*#__PURE__*/React__default.createElement(Host.Host, {
    id: id,
    className: DomUtils.cleanupClassObject({
      [className]: !!className,
      [LineChart_styles.hostClass]: true,
      [`${prefix.lsgPre}no-margin`]: noMargin
    }),
    ref: componentRef
  }, /*#__PURE__*/React__default.createElement(ChartTabBar, {
    selectionBar: selectionBar,
    selectionValue: selectionValue,
    onSelectionChange: onSelectionChange
  }), loadingIndicator && (/*#__PURE__*/React__default.createElement("div", {
    className: `${LineChart_styles.hostClass}-spinner`
  }, /*#__PURE__*/React__default.createElement(SpinnerPresentation.SpinnerPresentation, {
    loading: loadingIndicator,
    size: 66,
    variant: "indeterminate",
    ariaLabel: ""
  }))), isMobile && interactive && (/*#__PURE__*/React__default.createElement(ChartInfoBoxContainerWrapper.ChartInfoBoxContainerWrapper, {
    onMeasure: (width, height) => setInfoBoxMeasures(width, height),
    look: "infoarea",
    alignment: "horizontal",
    title: selectedIndex < 0 ? lines[0].dataPoints[lines[0].dataPoints.length - 1].x : lines[0].dataPoints[selectedIndex].x,
    titleFormatter: v => v.toLocaleDateString("de-DE", {
      year: "numeric",
      month: "numeric",
      day: "numeric"
    })
  }, lines.map((line, i) => (/*#__PURE__*/React__default.createElement(ChartInfoBoxPresentation.ChartInfoBoxPresentation, {
    key: i,
    label: line.label,
    value: selectedIndex < 0 ? line.dataPoints[lines[0].dataPoints.length - 1].y.toString() : line.dataPoints[selectedIndex].y.toString(),
    indicatorColor: styleToIndicatorColor(lines[i].style),
    valueFormatter: v => tickFormatY ? tickFormatY(v) : value => {
      const formatter = new Intl.NumberFormat("DE-de", {
        style: "currency",
        currency: "EUR"
      });
      return formatter.format(value);
    }
  }))))), /*#__PURE__*/React__default.createElement("div", {
    className: DomUtils.cleanupClassObject({
      [`${LineChart_styles.hostClass}-canvas`]: true,
      [`${LineChart_styles.hostClass}-canvas-loading`]: loadingIndicator
    })
  }, /*#__PURE__*/React__default.createElement(ChartXYPlotPresentation.ChartXYPlotPresentation, {
    width: canvasWidth,
    height: viewBoxHeight
  }, /*#__PURE__*/React__default.createElement("g", {
    transform: `translate(${body.pos.x},${body.pos.y + 2})`
  }, /*#__PURE__*/React__default.createElement(ChartGridPresentation.ChartGridPresentation, {
    xScale: xScale,
    yScale: yScale,
    columnLineStyle: gridStyleX || "solid",
    rowLineStyle: gridStyleY || "solid",
    rowTickValues: tickValueHelperX,
    columnTickValues: tickValuesY,
    zeroLineBold: zeroLineBold
  }), lines.map((line, index) => (/*#__PURE__*/React__default.createElement(ChartLineSeriesPresentation.ChartLineSeriesPresentation, {
    key: "LineSeries_".concat(line.label).concat(`_${index.toString()}`),
    xScale: xScale,
    yScale: yScale,
    data: line.dataPoints,
    color: styleToLineColor(line.style),
    mobile: isMobile,
    curveType: lines[index]?.stepped ? "stepped" : undefined
  }))), interactive && (/*#__PURE__*/React__default.createElement(ChartMousePresentation.ChartMousePresentation, {
    ...body.size,
    /* ??????????????????????????????????????????????
        onClick={() => {
            // eslint-disable-next-line no-console
            console.log("Klick!");
        }}
         */
    toDataPoint: mapToDataPoint
  }, pt => {
    if (!pt) {
      return null;
    }
    setSelectedIndex(pt[0].index);
    return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(ChartCroshairPresentation.ChartCroshairPresentation, {
      xScale: xScale,
      yScale: yScale,
      points: pt,
      height: 300
    }), /*#__PURE__*/React__default.createElement("foreignObject", {
      width: body.size.width,
      height: "2000"
    }, !isMobile && (/*#__PURE__*/React__default.createElement(ChartInfoBoxContainerWrapper.ChartInfoBoxContainerWrapper, {
      onMeasure: (width, height) => setInfoBoxMeasures(width, height),
      look: "tooltip",
      alignment: "horizontal",
      title: pt[0].point.x,
      positionLeft: body.size.width / 2 > xScale(pt[0].point.x) ? xScale(pt[0].point.x) + 16 : xScale(pt[0].point.x) - tooltipWidth - 16,
      positionTop: 32,
      titleFormatter: tooltipOptions?.titleFormatter ? tooltipOptions.titleFormatter : v => v.toLocaleDateString("de-DE", {
        year: "numeric",
        month: "numeric",
        day: "numeric"
      })
    }, pt.map((entry, i) => (/*#__PURE__*/React__default.createElement(ChartInfoBoxPresentation.ChartInfoBoxPresentation, {
      key: `FloatingTooltipItem_${i.toString()}`,
      label: entry.label,
      value: entry.point.y.toString(),
      indicatorColor: styleToIndicatorColor(lines[i].style),
      valueFormatter: value => tooltipOptions?.valueFormatter ? tooltipOptions.valueFormatter(value) : value
    })))))));
  }))), /*#__PURE__*/React__default.createElement("g", {
    ref: axisRefY,
    transform: `translate(${leftAxis.pos.x},${leftAxis.pos.y + 6})`
  }, /*#__PURE__*/React__default.createElement(ChartAxisPresentation.ChartAxisPresentation, {
    scale: yScale,
    orientation: "vertical",
    tickValues: tickValuesY,
    tickFormat: tickFormatY
  })), /*#__PURE__*/React__default.createElement("g", {
    ref: chartXAxisLabelRef,
    transform: `translate(${bottomAxis.pos.x},${bottomAxis.pos.y + 28})`
  }, /*#__PURE__*/React__default.createElement(ChartAxisPresentation.ChartAxisPresentation, {
    scale: xScale,
    orientation: "horizontal",
    tickValues: tickValueHelperX,
    tickFormat: tickFormatX
  })))));
}, defaultProps);
LineChartPresentation.displayName = "LineChartPresentation";

exports.LineChartPresentation = LineChartPresentation;
exports.defaultProps = defaultProps;
