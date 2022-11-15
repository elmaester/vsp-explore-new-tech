import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { Box } from '@mui/material';
import d3ForceDirectedGraphFunc from './d3ForceGraphFunc';

const FDGraph = ({ data, d3Params, title }) => {
  const ref = useRef();
  useEffect(() => {
    d3ForceDirectedGraphFunc(d3.select(ref.current), data, d3Params);
  }, [data, d3Params]);
  return (
    <Box>
      <h1>{title}</h1>
      <svg ref={ref} />
    </Box>
  );
};

export default FDGraph;
