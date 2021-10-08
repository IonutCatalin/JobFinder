export default (state, action) => {
	switch (action.type) {
		case "ADD_JOB_TO_SAVEDJOBS":
			return {
				...state,
				savedJobs: [action.payload, ...state.savedJobs],
			};
		default:
			return state;
	}
};
