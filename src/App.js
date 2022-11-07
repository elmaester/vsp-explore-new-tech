import React from 'react';
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import Layout from './features/layout';
import List from './features/list/List';
import { Counter } from './features/counter/Counter';
import './App.css';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

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
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
