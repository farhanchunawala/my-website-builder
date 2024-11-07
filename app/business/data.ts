import { Data as S013Data } from "@/sections/s013/v1/types";
import { Data as S014Data } from "@/sections/s014/v1/types";
import { Data as S015Data } from "@/sections/s015/v1/types";
import { Data as S016Data } from "@/sections/s016/v1/types";
import { Data as S017Data } from "@/sections/s017/v1/types";
import { Data as S018Data } from "@/sections/s018/v1/types";

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

const s017: S017Data = {
	textBlock: [
		{
			tag: "p",
			isHtml: false,
			content: "ABOUT US"
		},
		{
			tag: "h2",
			isHtml: false,
			content: "Company news"
		},
	],
	columns: [
		[
			{
				tag: "h3",
				isHtml: false,
				content: "10 Quick Tips About Blogging"
			},
			{
				tag: "p",
				isHtml: false,
				content: "Feb 21, 2019"
			},
			{
				tag: "p",
				isHtml: false,
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
			},
		],
		[
			{
				tag: "h3",
				isHtml: false,
				content: "15 Best Blogs To Follow About Web Design"
			},
			{
				tag: "p",
				isHtml: false,
				content: "Feb 21, 2019"
			},
			{
				tag: "p",
				isHtml: false,
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
			},
		],
		[
			{
				tag: "h3",
				isHtml: false,
				content: "7 of the Best Examples of Beautiful Blog Design"
			},
			{
				tag: "p",
				isHtml: false,
				content: "Feb 21, 2019"
			},
			{
				tag: "p",
				isHtml: false,
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
			},
		],
	]
}

const s018: S018Data = {
	text1: {
		tag: "p",
		isHtml: false,
		content: "Grow your business."
	},
	text2: {
		tag: "p",
		isHtml: false,
		content: "Today is the day to build the business of your dreams. Share your mission with the world — and blow your customers away."
	},
	button: {
		content: "START NOW"
	}
}

const data = {
	s013: s013,
	s014: s014,
	s015: s015,
	s016: s016,
	s017: s017,
	s018: s018
}

export default data;
