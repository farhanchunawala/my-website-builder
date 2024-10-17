import { TextBlockData } from "@/components/TextBlock01/v1/types";
import { CardGridData } from "@/components/CardGrid01/v1/types";

interface Content {
    textBlock: TextBlockData;
    cardGrid: CardGridData;
    button: object;
}

const content: Content = {
    textBlock: [
		{
			tag: "h2",
            isHtml: true,
			content: `Our <span>Services</span>`,
		},
		{
			content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
		},
    ],
    cardGrid: {
        cards: [
            {
                icon: "svg1.svg",
                textBlock: [
					{
						content: `Medical Stay`,
					},
					{
						content: `Get customised plan to reduce cancer risks`,
					},
					{
						content: `Oncologists, Physicians, Specialities, Therapists all for you`,
					},
                ],
            },
            {
                icon: "svg2.svg",
                textBlock: [
					{
						content: `Emergency Care`,
					},
					{
						content: `Get customised plan to reduce cancer risks`,
					},
					{
						content: `Oncologists, Physicians, Specialities, Therapists all for you`,
					},
                ],
            },
            {
                icon: "svg3.svg",
                textBlock: [
					{
						content: `Vaccination`,
					},
					{
						content: `Get customised plan to reduce cancer risks`,
					},
					{
						content: `Oncologists, Physicians, Specialities, Therapists all for you`,
					},
                ],
            },
            {
                icon: "svg4.svg",
                textBlock: [
					{
						content: `Medicines`,
					},
					{
						content: `Get customised plan to reduce cancer risks`,
					},
					{
						content: `Oncologists, Physicians, Specialities, Therapists all for you`,
					},
                ],
            },
            {
                icon: "svg5.svg",
                textBlock: [
					{
						content: `Surgery`,
					},
					{
						content: `Get customised plan to reduce cancer risks`,
					},
					{
						content: `Oncologists, Physicians, Specialities, Therapists all for you`,
					},
                ],
            },
            {
                icon: "svg6.svg",
                textBlock: [
					{
						content: `Diagnostics`,
					},
					{
						content: `Get customised plan to reduce cancer risks`,
					},
					{
						content: `Oncologists, Physicians, Specialities, Therapists all for you`,
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
