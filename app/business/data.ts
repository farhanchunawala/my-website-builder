import { ButtonData } from "@/elements/Button01/v1/types";
import { NavLinksData } from "@/components/NavLinks01/v1/types";
import { S013Data } from "@/sections/s013/v1/types";

interface Data {
	s013: S013Data
};

const s013 = {
	navlinks: [
		{
			content: "ABOUT",
		},
		{
			content: "WORK",
		},
		{
			content: "TEAM",
		},
		{
			content: "BLOG",
		},
		{
			content: "CONTACT",
		},
	],
	button: {
		content: "CONTACT US",
	},
}

const data: Data = {
	s013: s013
}

export default data;
