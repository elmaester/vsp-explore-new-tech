import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import Layout from './app/Layout';
import List from './features/list/List';
import { Counter } from './features/counter/Counter';
import DonutChart from './features/d3/DonutChart';
import people from './data/people';
import BarChart from './features/d3/BarChart';
import miserables from './data/miserables.json';
import FDGraph from './features/d3/FDGraph';
import { AgGrid } from './features/list/AgGrid';
import Dashboard from './app/pages/Dashboard/Dashboard';
import {
  fdGraphParams,
  hairCount,
  hairDonutChartParams,
  heightBarChartParams,
  heightCount,
} from './features/d3/d3FuncParams';

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
        element: (
          <DonutChart
            data={hairCount}
            d3Params={hairDonutChartParams}
            title='Hair colors of Star Wars characters'
          />
        ),
      },
      {
        path: '/bar',
        element: (
          <BarChart
            data={heightCount}
            d3Params={heightBarChartParams}
            title='Star Wars characters by height'
          />
        ),
      },
      {
        path: '/graph',
        element: <FDGraph data={miserables} d3Params={fdGraphParams} title='Character co-occurence in Les Misérables' />,
      },
      {
        path: '/aggrid',
        element: <AgGrid data={people} />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
