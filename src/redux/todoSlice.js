import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	tasks: [],
	selectedTask: {
		id: "",
		title: "",
		content: "",
		timestamp: "",
	},
};

export const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		getTasks: (state, action) => {
			state.tasks = [...action.payload];
		},
		addTask: (state, action) => {
			state.tasks.push(action.payload);
		},
		updateTask: (state, action) => {
			let currentTask = state.tasks.find(
				(task) => task.id === action.payload.id
			);
			if (currentTask) {
				currentTask = action.payload;
			}
		},
	},
});

export const { increment, decrement, incrementByAmount, getTasks } =
	todoSlice.actions;

export default todoSlice.reducer;
