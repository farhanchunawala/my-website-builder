import { Data as S016 } from "@/sections/s016/v1/types";

const imageDir = "zeal-consult";

const s016: S016 = {
	imageUrl: `/images/${imageDir}/zeal_staff.avif`,
	ctaBlock: {
		textBlock: [
			{
				component: "h5",
				content: "Empower Your Brand"
			},
			{
				component: "h1",
				content: "Elevate Your Business with Expert Website Consulting"
			},
			{
				component: "h6",
				content: "Transform your online presence with expert website consulting. We provide tailored strategies and designs to drive your business’s growth. Let's build your digital future together."
			},
		],
		button: {
			content: "KNOW MORE",
			link: ""
		},
	},
}

const data = {
	s016: s016,
}

export default data;
