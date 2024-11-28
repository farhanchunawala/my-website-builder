import { Data as S013 } from "@/sections/s013/v1/types";
import { Data as S014 } from "@/sections/s014/v1/types";
import { Data as S015 } from "@/sections/s015/v1/types";
import { Data as S016 } from "@/sections/s016/v1/types";
import { Data as S017 } from "@/sections/s017/v1/types";
import { Data as S018 } from "@/sections/s018/v1/types";

const imageDir = "starter/eureka-kidz"

const s013 = {
	image: {
		width: 672,
		height: 836
	},
	navlinks: [],
	button: {},
}

const s014 = {
	ctaBlock: {
		textBlock: [
			{
				element: "h1",
			},
			{
				element: "h6",
			}
		],
		button: {
			link: "#s015",
			color: "secondary",
			size: "large"
		},
	}
}

const s015 = {
	textBlock: [
		{
			element: "h5",
		},
		{
			element: "h1",
		}
	]
}

const s016 = {
	imageUrl: `./images/${imageDir}/article2.svg`,
	ctaBlock: {
		textBlock: [
			{
				element: "h5",
			},
			{
				element: "h1",
			},
			{
				element: "h6",
			},
		],
		button: {
			link: ""
		},
	},
}

const s016a = {
	ctaBlock: {
		textBlock: [
			{
				element: "h5",
			},
			{
				element: "h1",
			},
			{
				element: "h6",
			},
		],
		button: {
			link: ""
		},
	},
}

const s017 = {
	textBlock: [
		{
			element: "p",
		},
		{
			element: "h2",
		},
	],
	columns: [
		[
			{
				element: "h3",
			},
			{
				element: "p",
			},
			{
				element: "p",
			},
		],
		[
			{
				element: "h3",
			},
			{
				element: "p",
			},
			{
				element: "p",
			},
		],
		[
			{
				element: "h3",
			},
			{
				element: "p",
			},
			{
				element: "p",
			},
		],
	]
}

const s018 = {
	ctaBlock: {
		textBlock: [
			{
				element: "p",
			},
			{
				element: "p",
			},
		],
		button: {
			size: "large"
		},
	}
}

const config = {
	s013: s013,
	s014: s014,
	s015: s015,
	s016: s016,
	s016a: s016a,
	s017: s017,
	s018: s018,
}

export default config;
