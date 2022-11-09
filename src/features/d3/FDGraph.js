import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { Box } from '@mui/material';
import d3ForceDirectedGraphFunc from './d3ForceGraphFunc';

const FDGraph = ({ data }) => {
  const ref = useRef();
  useEffect(() => {
    d3ForceDirectedGraphFunc(d3.select(ref.current), data, {
      nodeId: (d) => d.id,
      nodeGroup: (d) => d.group,
      nodeTitle: (d) => `${d.id}\n${d.group}`,
      linkStrokeWidth: (l) => Math.sqrt(l.value),
      height: 600,
    });
  }, [data]);
  return (
    <Box>
      <h1>Character co-occurence in Les Misérables</h1>
      <svg ref={ref} />
    </Box>
  );
};

export default FDGraph;
