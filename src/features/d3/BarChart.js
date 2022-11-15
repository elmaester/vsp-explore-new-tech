import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { Box } from '@mui/material';
import d3BarChartFunc from './d3BarChartFunc';

const BarChart = ({ data, d3Params, title }) => {
  const ref = useRef();
  useEffect(() => {
    d3BarChartFunc(d3.select(ref.current), data, d3Params);
  }, [data, d3Params]);
  return (
    <Box>
      <h1>{title}</h1>
      <svg ref={ref} />
    </Box>
  );
};

export default BarChart;
