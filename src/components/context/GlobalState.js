import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
// initial state
const initialState = {
	savedJobs: localStorage.getItem("savedJobs")
		? JSON.parse(localStorage.getItem("savedJobs"))
		: [],
};

// create context
export const GlobalContext = createContext(initialState);

//provider components
export const GlobalProvider = (props) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	useEffect(() => {
		localStorage.setItem("savedJobs", JSON.stringify(state.savedJobs));
	}, [state]);

	// actions
	const addJobToSavedJobs = (job) => {
		dispatch({ type: "ADD_JOB_TO_SAVEDJOBS", payload: job });
	};

	const removeJobFromSavedJobs = (id) => {
		dispatch({ type: "REMOVE_JOB_FROM_SAVEDJOBS", payload: id });
	};

	const removeAllJobsFromSavedJobs = (savedJobs) => {
		dispatch({ type: "REMOVE_ALLJOBS_FROM_SAVEDJOBS", payload: savedJobs });
	};

	return (
		<GlobalContext.Provider
			value={{
				savedJobs: state.savedJobs,
				addJobToSavedJobs,
				removeJobFromSavedJobs,
				removeAllJobsFromSavedJobs,
			}}
		>
			{props.children}
		</GlobalContext.Provider>
	);
};
