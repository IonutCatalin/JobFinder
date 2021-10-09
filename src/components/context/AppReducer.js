export default (state, action) => {
	switch (action.type) {
		case "ADD_JOB_TO_SAVEDJOBS":
			return {
				...state,
				savedJobs: [action.payload, ...state.savedJobs],
			};
		case "REMOVE_JOB_FROM_SAVEDJOBS":
			return {
				...state,
				savedJobs: state.savedJobs.filter((job) => job._id !== action.payload),
			};
		case "REMOVE_ALLJOBS_FROM_SAVEDJOBS":
			return {
				...state,
				savedJobs: state.savedJobs,
			};
		default:
			return state;
	}
};
