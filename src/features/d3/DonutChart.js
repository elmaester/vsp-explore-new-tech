import React from 'react';
import { useD3 } from './useD3';
import d3DonutFunc from './d3DonutFunc';
import { Box } from '@mui/material';

const DonutChart = ({ data }) => {
	const ref = useD3(
		() =>
			d3DonutFunc(data, {
				name: (d) => d.color,
				value: (d) => d.count,
				width: 500,
				height: 500,
			}),
		[data]
	);
	return (
		<Box>
			<h1>Hair colors of Star Wars characters</h1>
			<svg ref={ref} className='donut' />
		</Box>
	);
};

export default DonutChart;
