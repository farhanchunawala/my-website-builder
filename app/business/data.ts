import { Data as S013 } from "@/sections/s013/v1/types";
import { Data as S014 } from "@/sections/s014/v1/types";
import { Data as S015 } from "@/sections/s015/v1/types";
import { Data as S016 } from "@/sections/s016/v1/types";
import { Data as S017 } from "@/sections/s017/v1/types";
import { Data as S018 } from "@/sections/s018/v1/types";

const s013: S013 = {
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

const s014: S014 = {
	ctaBlock: {
		textBlock: [
			{
				component: "h1",
				content: "Grow your business."
			},
			{
				component: "h6",
				content: "Give your business a boost with a beautifully crafted homepage."
			}
		],
		button: {
			content: "LEARN MORE"
		},
	},
	heading: {
		component: "h1",
		isHtml: false,
		content: "Grow your business."
	},
	subheading: {
		component: "h6",
		isHtml: false,
		content: "Give your business a boost with a beautifully crafted homepage."
	},
	button: {
		content: "LEARN MORE"
	}
}

const s015: S015 = {
	accentText: {
		component: "h5",
		isHtml: false,
		content: "WHAT WE BELIEVE IN"
	},
	heading: {
		component: "h1",
		isHtml: false,
		content: "Grow your business, establish your brand, and put your customers first."
	},
}

const s016: S016 = {
	ctaBlock: {
		textBlock: [
			{
				component: "h5",
				content: "ABOUT"
			},
			{
				component: "h1",
				content: "Who we are"
			},
			{
				component: "h6",
				content: "Nulla vel sodales tellus, quis condimentum enim. Nunc porttitor venenatis feugiat. Etiam quis faucibus erat, non accumsan leo. Aliquam erat volutpat. Vestibulum ac faucibus eros. Cras ullamcorper gravida tellus ut consequat."
			},
		],
		button: {
			content: "LEARN MORE",
		},
	},
	// accentText: {
	// 	component: "h5",
	// 	isHtml: false,
	// 	content: ""
	// },
	// heading: {
	// 	component: "h1",
	// 	isHtml: false,
	// },
	// subheading: {
		
	// },
	// button: {
	// 	content: ""
	// },
}

const s017: S017 = {
	textBlock: [
		{
			component: "p",
			isHtml: false,
			content: "ABOUT US"
		},
		{
			component: "h2",
			isHtml: false,
			content: "Company news"
		},
	],
	columns: [
		[
			{
				component: "h3",
				isHtml: false,
				content: "10 Quick Tips About Blogging"
			},
			{
				component: "p",
				isHtml: false,
				content: "Feb 21, 2019"
			},
			{
				component: "p",
				isHtml: false,
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
			},
		],
		[
			{
				component: "h3",
				isHtml: false,
				content: "15 Best Blogs To Follow About Web Design"
			},
			{
				component: "p",
				isHtml: false,
				content: "Feb 21, 2019"
			},
			{
				component: "p",
				isHtml: false,
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
			},
		],
		[
			{
				component: "h3",
				isHtml: false,
				content: "7 of the Best Examples of Beautiful Blog Design"
			},
			{
				component: "p",
				isHtml: false,
				content: "Feb 21, 2019"
			},
			{
				component: "p",
				isHtml: false,
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
			},
		],
	]
}

const s018: S018 = {
	text1: {
		component: "p",
		isHtml: false,
		content: "Grow your business."
	},
	text2: {
		component: "p",
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
