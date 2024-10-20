import { TextBlockData } from "@/components/TextBlock01/v1/types";
import { CardData } from "@/components/Card01/v1/types";

type Data = {
	textBlock: TextBlockData;
	flexGrid: {
		cards: CardData[];
	};
};

const data: Data = {
	textBlock: [
		{
			tag: "h3",
			isHtml: true,
			content: `Powered by <span>Empathy</span>`,
		},
		{
			tag: "h3",
			isHtml: true,
			content: `Driven by <span>Trust</span>`,
		},
	],
	flexGrid: {
		cards: [
			{
				icon: "",
				textBlock: [
					{
						tag: "h3",
						isHtml: false,
						content: "100 +"
					},
					{
						tag: "p",
						isHtml: false,
						content: "Best Oncologist"
					}
				]
			},
			{
				icon: "",
				textBlock: [
					{
						tag: "h3",
						isHtml: false,
						content: "500 +"
					},
					{
						tag: "p",
						isHtml: false,
						content: "Certified Labs"
					}
				]
			},
			{
				icon: "",
				textBlock: [
					{
						tag: "h3",
						isHtml: false,
						content: "50 +"
					},
					{
						tag: "p",
						isHtml: false,
						content: "Cancer Hospitals"
					}
				]
			},
			{
				icon: "",
				textBlock: [
					{
						tag: "h3",
						isHtml: false,
						content: "50 +"
					},
					{
						tag: "p",
						isHtml: false,
						content: "Chemo Centers"
					}
				]
			},
			{
				icon: "",
				textBlock: [
					{
						tag: "h3",
						isHtml: false,
						content: "10 +"
					},
					{
						tag: "p",
						isHtml: false,
						content: "Radiation Centers"
					}
				]
			},
			{
				icon: "",
				textBlock: [
					{
						tag: "h3",
						isHtml: false,
						content: "1000 +"
					},
					{
						tag: "p",
						isHtml: false,
						content: "Affordable Stay"
					}
				]
			},
		]
	}
}

export default data;
