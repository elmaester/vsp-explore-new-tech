import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { Box } from '@mui/material';
import d3BarChartFunc from './d3BarChartFunc';

const BarChart = ({ data }) => {
  const ref = useRef();
  useEffect(() => {
    d3BarChartFunc(d3.select(ref.current), data, {
      name: (d) => d.name,
      value: (d) => d.height,
      xLabel: 'Height in cm →',
      x: (d) => d.height,
      y: (d) => d.name,
      yDomain: d3.groupSort(
        data,
        ([d]) => -d.height,
        (d) => d.name
      ),
      color: 'steelblue',
      marginLeft: 110,
    });
  }, [data]);
  return (
    <Box>
      <h1>Star Wars characters by height</h1>
      <svg ref={ref} />
    </Box>
  );
};

export default BarChart;
