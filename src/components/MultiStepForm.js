import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import PostResume from "./PostResume";
import PostResume2 from "./PostResume2";
import PostResume3 from "./PostResume3";
import PostResume4 from "./PostResume4";
import PostResume5 from "./PostResume5";

const user = JSON.parse(localStorage.getItem("user"));

const defaultData = {
	firstName: "",
	secondName: "",
	email: "",
	phone: "",
	dateOfBirth: "",
	country: "",
	city: "",
	adress: "",
	facebook: "",
	linkedIn: "",
	twitter: "",
	positionToWork: "",
	levelOfEducation: "",
	fieldOfStudy: "",
	university: "",
	universityCountryCity: "",
	periodFromMonth: "",
	periodFromYear: "",
	periodToMonth: "",
	periodToYear: "",
	jobTitle: "",
	companyName: "",
	fieldOfActivity: "",
	jobCountry: "",
	jobCity: "",
	timePeriodFromMonth: "",
	timePeriodFromYear: "",
	timePeriodToMonth: "",
	timePeriodToYear: "",
	description: "",
	skills: "",
	userId: user._id,
};

const steps = [
	{ id: "postresume" },
	{ id: "postresume2" },
	{ id: "postresume3" },
	{ id: "postresume4" },
	{ id: "postresume5" },
];

const MultiStepForm = () => {
	const [formData, setForm] = useForm(defaultData);
	const { step, navigation } = useStep({
		steps,
		initialStep: 0,
	});

	const props = { formData, setForm, navigation };

	switch (step.id) {
		case "postresume":
			return <PostResume {...props} />;
		case "postresume2":
			return <PostResume2 {...props} />;
		case "postresume3":
			return <PostResume3 {...props} />;
		case "postresume4":
			return <PostResume4 {...props} />;
		case "postresume5":
			return <PostResume5 {...props} />;
	}

	return (
		<div>
			<h1>Multi step form</h1>
		</div>
	);
};

export default MultiStepForm;
