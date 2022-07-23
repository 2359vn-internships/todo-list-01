import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	tasks: [],
};

export const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		getTasksSuccess: (state, action) => {
			state.tasks = [...action.payload];
		},
		addTaskSuccess: (state, action) => {
			state.tasks.push(action.payload);
		},
		updateTaskSuccess: (state, action) => {
			let currentTask = state.tasks.find(
				(task) => task.id === action.payload.id
			);
			if (currentTask) {
				currentTask = action.payload;
			}
		},
		deleteTaskSuccess: (state, action) => {
			state.tasks.filter((task) => task.id !== action.payload);
		},
	},
});

export const {
	getTasksSuccess,
	addTaskSuccess,
	updateTaskSuccess,
	deleteTaskSuccess,
} = todoSlice.actions;

export default todoSlice.reducer;
