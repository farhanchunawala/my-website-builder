import { Data as S013 } from "@/sections/s013/v1/types";
import { Data as S014 } from "@/sections/s014/v1/types";
import { Data as S015 } from "@/sections/s015/v1/types";
import { Data as S016 } from "@/sections/s016/v1/types";
import { Data as S017 } from "@/sections/s017/v1/types";
import { Data as S018 } from "@/sections/s018/v1/types";

const imageDir = "starter";

const s013 = {
	imageUrl: `/images/${imageDir}/logo.svg`,
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
	buttonText: "CONTACT US",
}

const s014 = {
	ctaBlock: {
		textBlock: [
			"Grow your business.",
			"Give your business a boost with a beautifully crafted homepage."
		],
		buttonText: "OUR MISSION",
		buttonLink: "our-mission",
	}
}

const s015 = {
	textBlock: [
		"WHAT WE BELIEVE IN",
		"Grow your business, establish your brand, and put your customers first."
	]
}

const s016 = {
	imageUrl: `./images/${imageDir}/article2.svg`,
	ctaBlock: {
		textBlock: [
			"ABOUT",
			"Who we are",
			"Nulla vel sodales tellus, quis condimentum enim. Nunc porttitor venenatis feugiat. Etiam quis faucibus erat, non accumsan leo. Aliquam erat volutpat. Vestibulum ac faucibus eros. Cras ullamcorper gravida tellus ut consequat.",
		],
		buttonText: "LEARN MORE",
	},
}

const s016a = {
	imageUrl: `./images/${imageDir}/article1.svg`,
	ctaBlock: {
		textBlock: [
			"ABOUT",
			"Who we are",
			"Nulla vel sodales tellus, quis condimentum enim. Nunc porttitor venenatis feugiat. Etiam quis faucibus erat, non accumsan leo. Aliquam erat volutpat. Vestibulum ac faucibus eros. Cras ullamcorper gravida tellus ut consequat.",
		],
		buttonText: "LEARN MORE",
	},
}

const s017 = {
	textBlock: [
		"ABOUT US",
		"Company news",
	],
	columns: [
		[
			"10 Quick Tips About Blogging",
			"Feb 21, 2019",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
		],
		[
			"15 Best Blogs To Follow About Web Design",
			"Feb 21, 2019",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
		],
		[
			"7 of the Best Examples of Beautiful Blog Design",
			"Feb 21, 2019",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
		],
	]
}

const s018 = {
	ctaBlock: {
		textBlock: [
			"Grow your business.",
			"Today is the day to build the business of your dreams. Share your mission with the world — and blow your customers away.",
		],
		buttonText: "START NOW",
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
