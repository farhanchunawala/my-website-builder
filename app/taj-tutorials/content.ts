import { Data as S013 } from "@/sections/s013/v1/types";
import { Data as S014 } from "@/sections/s014/v1/types";
import { Data as S015 } from "@/sections/s015/v1/types";
import { Data as S016 } from "@/sections/s016/v1/types";
import { Data as S017 } from "@/sections/s017/v1/types";
import { Data as S018 } from "@/sections/s018/v1/types";

const imageDir = "starter/taj-tutorials"

const s013 = {
	imageUrl: `/images/${imageDir}/tt_logo.png`,
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
			"TAJ TUTORIALS",
			"A Fast Journey From Student To Schloar"
		],
		buttonText: "LEARN MORE",
		buttonLink: "our-mission",
	}
}

const s015 = {
	textBlock: [
		"OUR MISSION",
		"Guiding Students Towards Academic Excellence"
	]
}

const s016 = {
	imageUrl: `/images/${imageDir}/article2.png`,
	ctaBlock: {
		textBlock: [
			"ABOUT",
			"Empowering Students Since 2006",
			"Since 2006, Taj Tutorial has been committed to transforming students into scholars by providing top-quality education and mentorship. Contact us at 09324232129."
		],
		buttonText: "EXPLORE MORE",
	},
}

const s016a = {
	imageUrl: `/images/${imageDir}/article1.png`,
	ctaBlock: {
		textBlock: [
			"Our Team",
			"Experienced and Dedicated Faculty",
			"Our team of dedicated educators and mentors works tirelessly to ensure each student's journey towards academic success is guided and supported.",
		],
		buttonText: "Enquire Now",
	},
}

const s017 = {
	textBlock: [
		"OUR TUTORIAL",
		"Announcements & Updates"
	],
	columns: [
		[
			"New Batch Starting Soon",
			"Dec 1, 2023",
			"Enroll now for our upcoming batch and take the first step towards academic excellence with Taj Tutorial."
		],
		[
			"Annual Scholarship Program",
			"Jan 5, 2024",
			"Applications are open for our annual scholarship program, designed to support deserving students."
		],
		[
			"Parent-Teacher Meet",
			"Feb 15, 2024",
			"Join us for a discussion on your child's academic progress and future goals."
		],
	]
}

const s018 = {
	ctaBlock: {
		textBlock: [
			"Enroll with Taj Tutorial Today",
			"Join us to set a strong foundation for your academic journey. Enrollment is open for the upcoming session at Sardar Vallabhbhai Patel Rd, Umerkhadi, Mumbai, Maharashtra 400009."
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
