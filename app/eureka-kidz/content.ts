import { Data as S013 } from "@/sections/s013/v1/types";
import { Data as S014 } from "@/sections/s014/v1/types";
import { Data as S015 } from "@/sections/s015/v1/types";
import { Data as S016 } from "@/sections/s016/v1/types";
import { Data as S017 } from "@/sections/s017/v1/types";
import { Data as S018 } from "@/sections/s018/v1/types";

const imageDir = "starter/eureka-kidz"

const s013 = {
	imageUrl: `/images/${imageDir}/ek_logo.png`,
	navlinks: [
		{
			text: "ABOUT",
			link: "about-us"
		},
		{
			text: "TEAM",
			link: "our-team"
		},
		{
			text: "EVENTS",
			link: "events"
		},
		{
			text: "CONTACT",
			link: "contact-us"
		},
	],
	buttonText: "ENROLL NOW",
}

const s014 = {
	ctaBlock: {
		textBlock: [
			"Eureka Kidz Preschool.",
			"Discover the Genius in Your Child!!!!"
		],
		buttonText: "LEARN MORE",
		buttonLink: "our-mission",
	}
}

const s015 = {
	textBlock: [
		"OUR MISSION",
		"Empowering Young Minds to Explore, Create, and Grow."
	]
}

const s016 = {
	imageUrl: `/images/${imageDir}/article2.png`,
	ctaBlock: {
		textBlock: [
			"ABOUT US",
			"Growing Together",
			"Since 2018, we’ve been dedicated to nurturing young minds, providing a safe, creative, and engaging environment for children in their early years."
		],
		buttonText: "EXPLORE MORE",
	},
}

const s016a = {
	imageUrl: `/images/${imageDir}/article1.png`,
	ctaBlock: {
		textBlock: [
			"OUR TEAM",
			"Our inspiring mentors",
			"Our dedicated visionary professors works tirelessly to manage our Divisions — Playgroup, Nursery, Jr. KG, and Sr. KG — ensuring each child’s journey is filled with growth and discovery."
		],
		buttonText: "Enquire Now",
	},
}

const s017 = {
	textBlock: [
		"OUR SCHOOL",
		"Latest News & Events"
	],
	columns: [
		[
			"Independence Day Celebration",
			"Aug 15, 2023",
			"Join us as we celebrate India's Independence Day with flag hoisting, cultural performances, and patriotic activities for the kids."
		],
		[
			"Navratri Festival",
			"Oct 15, 2023",
			"Celebrate Navratri with us as we introduce children to the joy of Garba and cultural festivities, celebrating tradition and unity."
		],
		[
			"Diwali Celebration",
			"Nov 5, 2023",
			"Diwali festivities at Eureka Kidz include traditional decorations, diya painting, and stories about the significance of this festival of lights."
		],
	]
}

const s018 = {
	ctaBlock: {
		textBlock: [
			"Join Eureka Kidz Today!",
			"Create a foundation for lifelong learning in a supportive and stimulating environment. Admission starts from December 1st, 2023."
		],
		buttonText: "APPLY NOW"
	}
}

const content = {
	s013: s013,
	s014: s014,
	s015: s015,
	s016: s016,
	s016a: s016a,
	s017: s017,
	s018: s018,
}

export default content;
