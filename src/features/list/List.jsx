import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component
import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectList } from './listSlice';

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
			<input
				type='text'
				name='listItem'
				id='listItem'
				value={newItem}
				onChange={(e) => setNewItem(e.target.value)}
				onKeyDown={(e) => e.key === 'Enter' && handleNewItemAdd()}
			/>
			<button onClick={handleNewItemAdd}>Add</button>
			<div className='ag-theme-alpine' style={{ width: 402, height: 50 + (43 * list.length), marginTop: "30px" }}>
				<AgGridReact
					rowData={list}
					columnDefs={[{ field: 'id' }, { field: 'item' }]}
					defaultColDef={{ sortable: true }}
				/>
			</div>
		</div>
	);
};

export default List;
