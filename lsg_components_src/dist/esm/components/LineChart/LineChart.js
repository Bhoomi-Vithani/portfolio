import * as React from 'react';
import { LineChartWrapper } from './shared/LineChartWrapper.js';

/* eslint-disable react/require-default-props */
const LineChart = (props) => React.createElement(LineChartWrapper, { ...props });
LineChart.displayName = "LineChart";

export { LineChart };
