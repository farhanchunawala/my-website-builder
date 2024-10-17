import { TextBlockData } from "@/components/TextBlock01/v1/types";
import { CardGridData } from "@/components/CardGrid01/v1/types";

type Content = {
    textBlock: TextBlockData;
    cardGrid: CardGridData;
    button: object;
}

const content: Content = {
    textBlock: [
		{
			content: `Our <span>Services</span>`,
			tag: "h2",
            isHtml: true,
		},
		{
			content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
			tag: "p",
			isHtml: false
		},
    ],
    cardGrid: {
        cards: [
            {
                icon: "svg1.svg",
                textBlock: [
					{
						content: `Medical Stay`,
						tag: "p",
						isHtml: false
					},
					{
						content: `Get customised plan to reduce cancer risks`,
						tag: "p",
						isHtml: false
					},
					{
						content: `Oncologists, Physicians, Specialities, Therapists all for you`,
						tag: "p",
						isHtml: false
					},
                ],
            },
            {
                icon: "svg2.svg",
                textBlock: [
					{
						content: `Emergency Care`,
						tag: "p",
						isHtml: false
					},
					{
						content: `Get customised plan to reduce cancer risks`,
						tag: "p",
						isHtml: false
					},
					{
						content: `Oncologists, Physicians, Specialities, Therapists all for you`,
						tag: "p",
						isHtml: false
					},
                ],
            },
            {
                icon: "svg3.svg",
                textBlock: [
					{
						content: `Vaccination`,
						tag: "p",
						isHtml: false
					},
					{
						content: `Get customised plan to reduce cancer risks`,
						tag: "p",
						isHtml: false
					},
					{
						content: `Oncologists, Physicians, Specialities, Therapists all for you`,
						tag: "p",
						isHtml: false
					},
                ],
            },
            {
                icon: "svg4.svg",
                textBlock: [
					{
						content: `Medicines`,
						tag: "p",
						isHtml: false
					},
					{
						content: `Get customised plan to reduce cancer risks`,
						tag: "p",
						isHtml: false
					},
					{
						content: `Oncologists, Physicians, Specialities, Therapists all for you`,
						tag: "p",
						isHtml: false
					},
                ],
            },
            {
                icon: "svg5.svg",
                textBlock: [
					{
						content: `Surgery`,
						tag: "p",
						isHtml: false
					},
					{
						content: `Get customised plan to reduce cancer risks`,
						tag: "p",
						isHtml: false
					},
					{
						content: `Oncologists, Physicians, Specialities, Therapists all for you`,
						tag: "p",
						isHtml: false
					},
                ],
            },
            {
                icon: "svg6.svg",
                textBlock: [
					{
						content: `Diagnostics`,
						tag: "p",
						isHtml: false
					},
					{
						content: `Get customised plan to reduce cancer risks`,
						tag: "p",
						isHtml: false
					},
					{
						content: `Oncologists, Physicians, Specialities, Therapists all for you`,
						tag: "p",
						isHtml: false
					},
                ],
            },
        ],
    },
    button: {
        text: `Explore More`,
    },
};

export default content;
