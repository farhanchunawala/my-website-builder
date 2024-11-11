import { Data as S013 } from "@/sections/s013/v1/types";
import { Data as S014 } from "@/sections/s014/v1/types";
import { Data as S015 } from "@/sections/s015/v1/types";
import { Data as S016 } from "@/sections/s016/v1/types";
import { Data as S017 } from "@/sections/s017/v1/types";
import { Data as S018 } from "@/sections/s018/v1/types";

const s013: S013 = {
	navlinks: [
		{
			content: "ABOUT US",
		},
		{
			content: "PROGRAMS",
		},
		{
			content: "FACULTY",
		},
		{
			content: "BLOG",
		},
		{
			content: "CONTACT",
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
				content: "Eureka Kidz Preschool."
			},
			{
				component: "h6",
				content: "Discover The Genius In The Child"
			}
		],
		button: {
			content: "EXPLORE NOW"
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
			content: "Inspiring Young Minds to Learn and Play for Growing Every Day."
		}
	]
}

const s016: S016 = {
	ctaBlock: {
		textBlock: [
			{
				component: "h5",
				content: "ABOUT EUREKA KIDZ"
			},
			{
				component: "h1",
				content: "A Place to Learn, Play, and Grow"
			},
			{
				component: "h6",
				content: "Located in Bhendi Bazar, Mumbai (400003), Eureka Kidz is dedicated to creating a safe, nurturing, and playful environment for children to explore and grow. Our dedicated teachers and hands-on curriculum support each child's unique development journey."
			},
		],
		button: {
			content: "DISCOVER MORE",
		},
	},
}

const s017: S017 = {
	textBlock: [
		{
			component: "p",
			isHtml: false,
			content: "LATEST NEWS"
		},
		{
			component: "h2",
			isHtml: false,
			content: "From Our Eureka Kidz Community"
		},
	],
	columns: [
		[
			{
				component: "h3",
				isHtml: false,
				content: "5 Fun Activities to Try at Home!"
			},
			{
				component: "p",
				isHtml: false,
				content: "March 12, 2023"
			},
			{
				component: "p",
				isHtml: false,
				content: "Encourage creativity and curiosity with these simple, fun activities for preschoolers that you can try at home."
			},
		],
		[
			{
				component: "h3",
				isHtml: false,
				content: "Our Spring Festival Highlights!"
			},
			{
				component: "p",
				isHtml: false,
				content: "April 20, 2023"
			},
			{
				component: "p",
				isHtml: false,
				content: "Take a look at the amazing moments we shared at our Spring Festival, filled with games, songs, and laughter."
			},
		],
		[
			{
				component: "h3",
				isHtml: false,
				content: "Meet Our Teachers: Mrs. Jane’s Art Class"
			},
			{
				component: "p",
				isHtml: false,
				content: "May 15, 2023"
			},
			{
				component: "p",
				isHtml: false,
				content: "Get to know our wonderful art teacher, Mrs. Jane, and learn how she inspires creativity in her students!"
			},
		],
	]
}

const s018: S018 = {
	ctaBlock: {
		textBlock: [
			{
				component: "p",
				content: "Join Our Eureka Kidz Family!"
			},
			{
				component: "p",
				content: "Located in the heart of Bhendi Bazar, Mumbai, Eureka Kidz invites you to start your child’s learning journey with us. Let's create joyful memories together!"
			},
		],
		button: {
			content: "SIGN UP NOW"
		},
	}
}

const data = {
	s013: s013,
	s014: s014,
	s015: s015,
	s016: s016,
	s017: s017,
	s018: s018,
}

export default data;
