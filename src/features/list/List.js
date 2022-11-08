import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component
import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectList } from './listSlice';
import { OutlinedInput, Button } from '@mui/material';

const List = () => {
  const dispatch = useDispatch();
  const list = useSelector(selectList);
  const [newItem, setNewItem] = useState('');
  const handleNewItemAdd = () => {
    dispatch(addItem(newItem));
    setNewItem('');
  };
  return (
    <div>
      <OutlinedInput
        type='text'
        name='listItem'
        id='listItem'
        value={newItem}
        autoFocus
        onChange={(e) => setNewItem(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleNewItemAdd()}
      />
      <Button onClick={handleNewItemAdd}>Add</Button>
      {!!list.length && (
        <div
          className='ag-theme-alpine'
          style={{
            width: 402,
            height: 51 + 42 * list.length,
            marginTop: '30px',
          }}
        >
          <AgGridReact
            rowData={list}
            columnDefs={[{ field: 'id' }, { field: 'item' }]}
            defaultColDef={{ sortable: true }}
          />
        </div>
      )}
    </div>
  );
};

export default List;
