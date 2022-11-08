import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import Layout from './app/Layout';
import List from './features/list/List';
import { Counter } from './features/counter/Counter';
import DonutChart from './features/d3/DonutChart';
import getHairCount from './features/d3/getHairCount';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/counter',
				element: <Counter />,
			},
			{
				path: '/list',
				element: <List />,
			},
			{
				path: '/donut',
				element: <DonutChart data={getHairCount()} />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
