import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import d3DonutFunc from './d3DonutFunc';
import { Box } from '@mui/material';

const DonutChart = ({ data }) => {
  const ref = useRef();
  useEffect(() => {
    d3DonutFunc(d3.select(ref.current), data, {
      name: (d) => d.color,
      value: (d) => d.count,
      width: 500,
      height: 500,
    });
  }, [data]);
  return (
    <Box>
      <h1>Hair colors of Star Wars characters</h1>
      <svg ref={ref} />
    </Box>
  );
};

export default DonutChart;
