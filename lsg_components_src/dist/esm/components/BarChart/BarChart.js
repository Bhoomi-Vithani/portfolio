import * as React from 'react';
import { BarChartWrapper } from './shared/BarChartWrapper.js';

/* eslint-disable react/require-default-props */
const BarChart = ({ ...props }) => React.createElement(BarChartWrapper, { ...props });
BarChart.displayName = "BarChart";

export { BarChart };
