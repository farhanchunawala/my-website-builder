import { Data as S013 } from "@/sections/s013/v1/types";
import { Data as S014 } from "@/sections/s014/v1/types";
import { Data as S015 } from "@/sections/s015/v1/types";
import { Data as S016 } from "@/sections/s016/v1/types";
import { Data as S017 } from "@/sections/s017/v1/types";
import { Data as S018 } from "@/sections/s018/v1/types";

const imageDir = "starter";

const s013: S013 = {
	image: {
		url: `/images/${imageDir}/logo.svg`,
		width: 672,
		height: 836
	},
	navlinks: [
		{
			content: "ABOUT",
			link: "about-us"
		},
		{
			content: "TEAM",
			link: "our-team"
		},
		{
			content: "EVENTS",
			link: "events"
		},
		{
			content: "CONTACT",
			link: "contact-us"
		},
		// {
		// 	content: "WORK",
		// 	link: "s015"
		// },
	],
	button: {
		content: "CONTACT US",
	},
}

const s014: S014 = {
	ctaBlock: {
		textBlock: [
			{
				element: "h1",
				content: "Grow your business."
			},
			{
				element: "h6",
				content: "Give your business a boost with a beautifully crafted homepage."
			}
		],
		button: {
			content: "OUR MISSION",
			link: "our-mission",
			color: "secondary",
			size: "large"
		},
	}
}

const s015: S015 = {
	textBlock: [
		{
			element: "h5",
			content: "WHAT WE BELIEVE IN"
		},
		{
			element: "h1",
			content: "Grow your business, establish your brand, and put your customers first."
		}
	]
}

const s016: S016 = {
	imageUrl: `./images/${imageDir}/article2.svg`,
	ctaBlock: {
		textBlock: [
			{
				element: "h5",
				content: "ABOUT"
			},
			{
				element: "h1",
				content: "Who we are"
			},
			{
				element: "h6",
				content: "Nulla vel sodales tellus, quis condimentum enim. Nunc porttitor venenatis feugiat. Etiam quis faucibus erat, non accumsan leo. Aliquam erat volutpat. Vestibulum ac faucibus eros. Cras ullamcorper gravida tellus ut consequat."
			},
		],
		button: {
			content: "LEARN MORE",
			link: ""
		},
	},
}

const s016a: S016 = {
	imageUrl: `./images/${imageDir}/article1.svg`,
	ctaBlock: {
		textBlock: [
			{
				element: "h5",
				content: "ABOUT"
			},
			{
				element: "h1",
				content: "Who we are"
			},
			{
				element: "h6",
				content: "Nulla vel sodales tellus, quis condimentum enim. Nunc porttitor venenatis feugiat. Etiam quis faucibus erat, non accumsan leo. Aliquam erat volutpat. Vestibulum ac faucibus eros. Cras ullamcorper gravida tellus ut consequat."
			},
		],
		button: {
			content: "LEARN MORE",
			link: ""
		},
	},
}

const s017: S017 = {
	textBlock: [
		{
			element: "p",
			content: "ABOUT US"
		},
		{
			element: "h2",
			content: "Company news"
		},
	],
	columns: [
		[
			{
				element: "h3",
				content: "10 Quick Tips About Blogging"
			},
			{
				element: "p",
				content: "Feb 21, 2019"
			},
			{
				element: "p",
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
			},
		],
		[
			{
				element: "h3",
				content: "15 Best Blogs To Follow About Web Design"
			},
			{
				element: "p",
				content: "Feb 21, 2019"
			},
			{
				element: "p",
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
			},
		],
		[
			{
				element: "h3",
				content: "7 of the Best Examples of Beautiful Blog Design"
			},
			{
				element: "p",
				content: "Feb 21, 2019"
			},
			{
				element: "p",
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
			},
		],
	]
}

const s018: S018 = {
	ctaBlock: {
		textBlock: [
			{
				element: "p",
				content: "Grow your business."
			},
			{
				element: "p",
				content: "Today is the day to build the business of your dreams. Share your mission with the world — and blow your customers away."
			},
		],
		button: {
			content: "START NOW",
			link: "",
			size: "large"
		},
	}
}

const data = {
	s013: s013,
	s014: s014,
	s015: s015,
	s016: s016,
	s016a: s016a,
	s017: s017,
	s018: s018,
}

export default data;
