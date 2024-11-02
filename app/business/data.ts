import { ButtonData } from "@/elements/Button01/v1/types";
import { NavLinksData } from "@/components/NavLinks01/v1/types";
import { S013Data } from "@/sections/s013/v1/types";
import { S014Data } from "@/sections/s014/v1/types";
import { S015Data } from "@/sections/s015/v1/types";
import { S016Data } from "@/sections/s016/v1/types";
import { S017Data } from "@/sections/s017/v1/types";


interface Data {
	s013: S013Data,
	s014: S014Data,
	s015: S015Data
	s016: S016Data
	s017: S017Data
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

const s015: S015Data = {
	accentText: {
		tag: "h5",
		isHtml: false,
		content: "WHAT WE BELIEVE IN"
	},
	heading: {
		tag: "h1",
		isHtml: false,
		content: "Grow your business, establish your brand, and put your customers first."
	},
}

const s016: S016Data = {
	accentText: {
		tag: "h5",
		isHtml: false,
		content: "ABOUT"
	},
	heading: {
		tag: "h1",
		isHtml: false,
		content: "Who we are"
	},
	subheading: {
		tag: "h6",
		isHtml: false,
		content: "Nulla vel sodales tellus, quis condimentum enim. Nunc porttitor venenatis feugiat. Etiam quis faucibus erat, non accumsan leo. Aliquam erat volutpat. Vestibulum ac faucibus eros. Cras ullamcorper gravida tellus ut consequat."
	},
	button: {
		content: "LEARN MORE"
	},
}

const data: Data = {
	s013: s013,
	s014: s014,
	s015: s015,
	s016: s016,
	s017: s017,
}

export default data;
