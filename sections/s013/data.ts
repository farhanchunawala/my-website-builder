import { ButtonData } from "@/elements/Button01/v1/types";
import { NavLinksData } from "@/components/NavLinks01/v1/types";

interface Data {
	navlinks: NavLinksData;
	button: ButtonData;
};

const data: Data = {
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

export default data;
