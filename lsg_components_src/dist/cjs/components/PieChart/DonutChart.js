'use strict';

var React__default = require('react');
var index = require('../../utils/Hooks/index.js');
var ChartInfo = require('../ChartInfos/ChartInfo.js');
require('react-is');
require('../Headline/shared/HeadlinePresentation.js');
require('../ChartInfos/shared/ChartInfoContainer.styles.js');
var GridPresentation = require('../Grid/shared/GridPresentation.js');
var GridColumnPresentation = require('../GridColumn/shared/GridColumnPresentation.js');
var GridRowPresentation = require('../GridRow/shared/GridRowPresentation.js');
var Logo_styles = require('../_Logo/Logo.styles.js');
var PieChartPresentation = require('./shared/PieChartPresentation.js');

// @ts-strict-ignore
const defaultValueFormatter = v => new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR"
}).format(Number(v));
// TODO rename directory and files from PieXYZ to DonutXYZ
const DonutChart = ({
  id: idProp,
  centeredLayout,
  data = [],
  chartInfoArea = {},
  isDecorative,
  sizeChart = 6,
  sizeInfoArea,
  valueFormatter = defaultValueFormatter,
  ...props
}) => {
  const id = index.useUniqueId(`${Logo_styles.hostClass}-`, idProp);
  // TODO move logic to PieChartPresentation.tsx
  const [activeItemIndex, setActiveItemIndex] = React__default.useState();
  const donut = /*#__PURE__*/React__default.createElement(PieChartPresentation.PieChartPresentation, {
    id: id,
    donutShape: true,
    dataSeries: data.map((d, i) => ({
      ...d,
      // make a connection between the donut segment and the legend item by default
      ariaLabelledBy: d.ariaLabelledBy || (isDecorative ? undefined : d.idLabel || `${id}-item${i}`)
    })),
    ...props,
    onItemActive: index => setActiveItemIndex(index),
    activeIndex: activeItemIndex,
    isDecorative: isDecorative
  });
  if (isDecorative && !sizeChart) {
    // Don't render a grid if not needed
    return donut;
  }
  let chartInfo;
  let chartInfoPosition;
  if (!isDecorative) {
    chartInfo =
    /*#__PURE__*/
    // TODO: Remove ChartInfo.tsx and use `<ChartInfoContainer />` directly
    React__default.createElement(ChartInfo.ChartInfo, {
      activeIndex: activeItemIndex,
      onItemActive: index => setActiveItemIndex(index),
      appearance: chartInfoArea.appearance || "infoarea",
      // TODO fix typing for valueFormatter. Generic T must include both data and valueFormatter if we want
      // TODO to have a benefit here. Then, the valueFormatter has the same type as the data.
      // items are derived from data, to reduce duplicates
      items: data.map((d, i) => ({
        ...d,
        id: d.idLabel || `${id}-item${i}`,
        valueFormatter: valueFormatter
      })),
      ...chartInfoArea
    });
    chartInfoPosition = chartInfoArea.position || "right";
  }
  return /*#__PURE__*/React__default.createElement(GridPresentation.GridPresentation, {
    centeredLayout: centeredLayout
  }, chartInfoPosition === "top" && (/*#__PURE__*/React__default.createElement(GridRowPresentation.GridRowPresentation, null, /*#__PURE__*/React__default.createElement(GridColumnPresentation.GridColumnPresentation, {
    size: sizeInfoArea
  }, chartInfo))), /*#__PURE__*/React__default.createElement(GridRowPresentation.GridRowPresentation, null, /*#__PURE__*/React__default.createElement(GridColumnPresentation.GridColumnPresentation, {
    size: sizeChart
  }, donut), (chartInfoPosition === "right" || chartInfoPosition === "auto") && (/*#__PURE__*/React__default.createElement(GridColumnPresentation.GridColumnPresentation, {
    size: sizeInfoArea
  }, chartInfo))), chartInfoPosition === "bottom" && (/*#__PURE__*/React__default.createElement(GridRowPresentation.GridRowPresentation, null, /*#__PURE__*/React__default.createElement(GridColumnPresentation.GridColumnPresentation, {
    size: sizeInfoArea
  }, chartInfo))));
};
DonutChart.displayName = "DonutChart";

exports.DonutChart = DonutChart;
