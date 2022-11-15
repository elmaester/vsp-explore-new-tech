import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import Layout from './app/Layout';
import List from './features/list/List';
import { Counter } from './features/counter/Counter';
import people from './data/people';
import miserables from './data/miserables.json';
import { AgGrid } from './features/list/AgGrid';
import Dashboard from './app/pages/Dashboard/Dashboard';
import {
  fdGraphParams,
  hairCount,
  hairDonutChartParams,
  heightBarChartParams,
  heightCount,
} from './features/d3/d3FuncParams';
import D3Component from './features/d3/D3Component';
import d3ForceDirectedGraphFunc from './features/d3/functions/d3ForceGraphFunc';
import d3BarChartFunc from './features/d3/functions/d3BarChartFunc';
import d3DonutFunc from './features/d3/functions/d3DonutFunc';

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
          <D3Component
            d3Func={d3DonutFunc}
            data={hairCount}
            d3Params={hairDonutChartParams}
            title='Hair colors of Star Wars characters'
          />
        ),
      },
      {
        path: '/bar',
        element: (
          <D3Component
            d3Func={d3BarChartFunc}
            data={heightCount}
            d3Params={heightBarChartParams}
            title='Star Wars characters by height'
          />
        ),
      },
      {
        path: '/graph',
        element: (
          <D3Component
            d3Func={d3ForceDirectedGraphFunc}
            data={miserables}
            d3Params={fdGraphParams}
            title='Character co-occurence in Les Misérables'
          />
        ),
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
