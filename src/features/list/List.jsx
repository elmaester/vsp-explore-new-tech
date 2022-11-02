import React, { useState } from 'react';
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
			/>
			<button onClick={handleNewItemAdd}>Add</button>
			<ul>
				{list.map(({ item, id }) => (
					<li key={id}>{item}</li>
				))}
			</ul>
		</div>
	);
};

export default List;
