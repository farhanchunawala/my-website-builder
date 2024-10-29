import { ButtonData } from "@/elements/Button01/v1/types";
import { NavLinksData } from "@/components/NavLinks01/v1/types";
import { S013Data } from "@/sections/s013/v1/types";
import { S014Data } from "@/sections/s014/v1/types";

interface Data {
	s013: S013Data,
	s014: S014Data
};

const s013: S013Data = {
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

const s014: S014Data = {
	heading: {
		tag: "h1",
		isHtml: false,
		content: "Grow your business."
	},
	subheading: {
		tag: "h6",
		isHtml: false,
		content: "Give your business a boost with a beautifully crafted homepage."
	},
	button: {
		content: "LEARN MORE"
	}
}

const data: Data = {
	s013: s013,
	s014: s014
}

export default data;
