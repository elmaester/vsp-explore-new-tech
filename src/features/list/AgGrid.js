import { AgGridReact } from 'ag-grid-react';
import { useEffect, useMemo, useState } from "react";
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

export const AgGrid = ({data}) => {
  const containerStyle = useMemo(() => ({width: '100%', height: '100%'}), []);
  const gridStyle = useMemo(() => ({height: '800px', width: '100%'}), []);

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 100,
      sortable: true,
      resizable: true,
    };
  }, []);

  const autoGroupColumnDef = useMemo(() => {
    return {
      minWidth: 200,
    };
  }, []);

  //rowGroup: false, hide: true
  const [columnDefs] = useState([
    {field: 'name'},
    {field: 'height'},
    {field: 'mass',},
    {field: 'hair_color', rowGroup: true, hide: false},
    {field: 'skin_color',},
    {field: 'eye_color',},
    {field: 'birth_year'},
    {field: 'gender', rowGroup: true, hide: false},
    {field: 'homeworld',},
    {field: 'films',},
    {field: 'species'},
    {field: 'vehicles'},
    {field: 'starships'},
    {field: 'created'},
    {field: 'edited'},
    {field: 'url'},
  ])


  return (
    <div style={containerStyle}>
      <div className='ag-theme-alpine'
           style={gridStyle}
      >
        <AgGridReact
          style={{height: '600px'}}
          rowData={data}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          autoGroupColumnDef={autoGroupColumnDef}
          animateRows={true}
          rowGroupPanelShow={"always"}
        ></AgGridReact>
      </div>

    </div>
  )
}