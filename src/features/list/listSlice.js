import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const initialState = {
	value: [],
	lastUpdate: null,
};

export const listSlice = createSlice({
	name: 'list',
	initialState,
	reducers: {
		addItem: (state, action) => {
			state.value.push({ item: action.payload, id: uuid() });
			state.lastUpdate = Date.now();
		},
	},
});

export const selectList = (state) => state.list.value;

export const { addItem } = listSlice.actions;

export default listSlice.reducer;
