const postTask = (reqBody) => {
	const requestOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			...reqBody,
		}),
	};
	return fetch(
		`${process.env.REACT_APP_LOCALHOST_URL}/tasks`,
		requestOptions
	).then((res) => res.json());
};
const updateTask = (reqBody, taskId) => {
	const requestOptions = {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			...reqBody,
		}),
	};
	return fetch(
		`${process.env.REACT_APP_LOCALHOST_URL}/tasks/${taskId}`,
		requestOptions
	).then((res) => res.json());
};
const deleteTask = (taskId) => {
	const requestOptions = {
		method: "DELETE",
	};
	return fetch(
		`${process.env.REACT_APP_LOCALHOST_URL}/tasks/${taskId}`,
		requestOptions
	).then((res) => res.json());
};
const getTasks = () => {
	const URL = `${process.env.REACT_APP_LOCALHOST_URL}/tasks`;
	return fetch(URL).then((res) => res.json());
};

export { postTask, updateTask, deleteTask, getTasks };
