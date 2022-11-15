import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import d3DonutFunc from './d3DonutFunc';
import { Box } from '@mui/material';

const DonutChart = ({ data, d3Params, title }) => {
  const ref = useRef();
  useEffect(() => {
    d3DonutFunc(d3.select(ref.current), data, d3Params);
  }, [data, d3Params]);
  return (
    <Box>
      <h1>{title}</h1>
      <svg ref={ref} />
    </Box>
  );
};

export default DonutChart;
