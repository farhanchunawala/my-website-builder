import { Data as S013 } from "@/sections/s013/v1/types";
import { Data as S014 } from "@/sections/s014/v1/types";
import { Data as S015 } from "@/sections/s015/v1/types";
import { Data as S016 } from "@/sections/s016/v1/types";
import { Data as S017 } from "@/sections/s017/v1/types";
import { Data as S018 } from "@/sections/s018/v1/types";

const imageDir = "starter/eureka-kidz"

const s013: S013 = {
	image: {
		url: `/images/${imageDir}/ek_logo.png`,
		width: 672,
		height: 836
	},
	navlinks: [
		{
			content: "ABOUT US",
			link: "#about-us"
		},
		{
			content: "TEAM",
			link: "#our-team"
		},
		{
			content: "EVENTS",
			link: "#events"
		},
		{
			content: "CONTACT",
			link: "#contact"
		},
	],
	button: {
		content: "ENROLL NOW",
	},
}

const s014: S014 = {
	ctaBlock: {
		textBlock: [
			{
				component: "h1",
				content: "Eureka Kidz Preschool.",
			},
			{
				component: "h6",
				content: "Discover the Genius in Your Child!!!!"
			}
		],
		button: {
			content: "LEARN MORE",
			link: `#our-mission`
		},
	}
}

const s015: S015 = {
	textBlock: [
		{
			component: "h5",
			content: "OUR MISSION"
		},
		{
			component: "h1",
			content: "Empowering Young Minds to Explore, Create, and Grow."
		}
	]
}

const s016: S016 = {
	imageUrl: `/images/${imageDir}/article1.png`,
	ctaBlock: {
		textBlock: [
			{
				component: "h5",
				content: "ABOUT US"
			},
			{
				component: "h1",
				content: "Growing Together"
			},
			{
				component: "h6",
				content: "Since 2018, we’ve been dedicated to nurturing young minds, providing a safe, creative, and engaging environment for children in their early years."
			},
		],
		button: {
			content: "EXPLORE MORE",
		},
	},
}

const s016a: S016 = {
	imageUrl: `/images/${imageDir}/article2.png`,
	ctaBlock: {
		textBlock: [
			{
				component: "h5",
				content: "OUR TEAM"
			},
			{
				component: "h1",
				content: "Our inspiring mentors"
			},
			{
				component: "h6",
				content: "Our dedicated visionary professors works tirelessly to manage our Divisions — Playgroup, Nursery, Jr. KG, and Sr. KG — ensuring each child’s journey is filled with growth and discovery."
			},
		],
		button: {
			content: "Enquire Now",
		},
	},
}


const s017: S017 = {
	textBlock: [
		{
			component: "p",
			isHtml: false,
			content: "OUR SCHOOL"
		},
		{
			component: "h2",
			isHtml: false,
			content: "Latest News & Events"
		},
	],
	columns: [
		[
			{
				component: "h3",
				isHtml: false,
				content: "Independence Day Celebration"
			},
			{
				component: "p",
				isHtml: false,
				content: "Aug 15, 2023"
			},
			{
				component: "p",
				isHtml: false,
				content: "Join us as we celebrate India's Independence Day with flag hoisting, cultural performances, and patriotic activities for the kids."
			},
		],
		[
			{
				component: "h3",
				isHtml: false,
				content: "Navratri Festival"
			},
			{
				component: "p",
				isHtml: false,
				content: "Oct 15, 2023"
			},
			{
				component: "p",
				isHtml: false,
				content: "Celebrate Navratri with us as we introduce children to the joy of Garba and cultural festivities, celebrating tradition and unity."
			},
		],
		[
			{
				component: "h3",
				isHtml: false,
				content: "Diwali Celebration"
			},
			{
				component: "p",
				isHtml: false,
				content: "Nov 5, 2023"
			},
			{
				component: "p",
				isHtml: false,
				content: "Diwali festivities at Eureka Kidz include traditional decorations, diya painting, and stories about the significance of this festival of lights."
			},
		]
	]
}


const s018: S018 = {
	ctaBlock: {
		textBlock: [
			{
				component: "p",
				content: "Join Eureka Kidz Today!"
			},
			{
				component: "p",
				content: "Create a foundation for lifelong learning in a supportive and stimulating environment. Admission starts from December 1st, 2023."
			},
		],
		button: {
			content: "APPLY NOW"
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
