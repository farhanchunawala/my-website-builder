import { Data as S013 } from "@/sections/s013/v1/types";
import { Data as S014 } from "@/sections/s014/v1/types";
import { Data as S015 } from "@/sections/s015/v1/types";
import { Data as S016 } from "@/sections/s016/v1/types";
import { Data as S017 } from "@/sections/s017/v1/types";
import { Data as S018 } from "@/sections/s018/v1/types";

const pageUrl = "taj-tutorials"

const s013: S013 = {
	image: {
		url: `/images/${pageUrl}/ek_logo.png`,
		width: 672,
		height: 836
	},
	navlinks: [
		{
			content: "ABOUT US",
			link: "#about-us"
		},
		{
			content: "PROGRAMS",
			link: "#about-us"
		},
		{
			content: "FACULTY",
			link: "#about-us"
		},
		{
			content: "BLOG",
			link: "#about-us"
		},
		{
			content: "CONTACT",
			link: "#about-us"
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
				content: "TAJ TUTORIALS",
			},
			{
				component: "h6",
				content: "A Fast Journey From Student To Schloar"
			}
		],
		button: {
			content: "LEARN MORE"
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
			content: "Guiding Students Towards Academic Excellence"
		}
	]
}


const s016: S016 = {
	ctaBlock: {
		textBlock: [
			{
				component: "h5",
				content: "About"
			},
			{
				component: "h1",
				content: "Empowering Students Since 2006"
			},
			{
				component: "h6",
				content: "Since 2006, Taj Tutorial has been committed to transforming students into scholars by providing top-quality education and mentorship. Contact us at 09324232129."
			},
		],
		button: {
			content: "EXPLORE MORE",
		},
	},
}

const s016a: S016 = {
	ctaBlock: {
		textBlock: [
			{
				component: "h5",
				content: "Our Team"
			},
			{
				component: "h1",
				content: "Experienced and Dedicated Faculty"
			},
			{
				component: "h6",
				content: "Our team of dedicated educators and mentors works tirelessly to ensure each student's journey towards academic success is guided and supported."
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
			content: "TAJ TUTORIAL"
		},
		{
			component: "h2",
			isHtml: false,
			content: "Announcements & Updates"
		},
	],
	columns: [
		[
			{
				component: "h3",
				isHtml: false,
				content: "New Batch Starting Soon"
			},
			{
				component: "p",
				isHtml: false,
				content: "Dec 1, 2023"
			},
			{
				component: "p",
				isHtml: false,
				content: "Enroll now for our upcoming batch and take the first step towards academic excellence with Taj Tutorial."
			},
		],
		[
			{
				component: "h3",
				isHtml: false,
				content: "Annual Scholarship Program"
			},
			{
				component: "p",
				isHtml: false,
				content: "Jan 5, 2024"
			},
			{
				component: "p",
				isHtml: false,
				content: "Applications are open for our annual scholarship program, designed to support deserving students."
			},
		],
		[
			{
				component: "h3",
				isHtml: false,
				content: "Parent-Teacher Meet"
			},
			{
				component: "p",
				isHtml: false,
				content: "Feb 15, 2024"
			},
			{
				component: "p",
				isHtml: false,
				content: "Join us for a discussion on your child's academic progress and future goals."
			},
		]
	]
}


const s018: S018 = {
	ctaBlock: {
		textBlock: [
			{
				component: "p",
				content: "Enroll with Taj Tutorial Today"
			},
			{
				component: "p",
				content: "Join us to set a strong foundation for your academic journey. Enrollment is open for the upcoming session at Sardar Vallabhbhai Patel Rd, Umerkhadi, Mumbai, Maharashtra 400009."
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

