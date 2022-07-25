const postTask = async (reqBody) => {
	const requestOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			...reqBody,
		}),
	};
	const res = await fetch(
		`${process.env.REACT_APP_LOCALHOST_URL}/tasks`,
		requestOptions
	);
	return await res.json();
};
const updateTask = async (reqBody, taskId) => {
	const requestOptions = {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			...reqBody,
		}),
	};
	const res = await fetch(
		`${process.env.REACT_APP_LOCALHOST_URL}/tasks/${taskId}`,
		requestOptions
	);
	return await res.json();
};
const deleteTask = async (taskId) => {
	const requestOptions = {
		method: "DELETE",
	};
	const res = await fetch(
		`${process.env.REACT_APP_LOCALHOST_URL}/tasks/${taskId}`,
		requestOptions
	);
	return await res.json();
};
const getAllTasks = async () => {
	const URL = `${process.env.REACT_APP_LOCALHOST_URL}/tasks`;
	const res = await fetch(URL);
	return await res.json();
};

export { postTask, updateTask, deleteTask, getAllTasks };
