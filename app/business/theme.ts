import { Typography } from "@/app/configs/global.types";

interface TextStyles {
	hyperlink: Typography;
	buttonText: Typography;
}

interface Tokens {
	fonts: {
		primary: string;
	};
	colors: object,
	lineHeight: string;
}

const tokens: Tokens = {
    fonts: {
        primary: "var(--font-montserrat)",
    },
    colors: {},
    lineHeight: "normal",
};

const textStyles: TextStyles = {
	hyperlink: {
		fontFamily: tokens.fonts.primary,
		fontSize: "12px",
		fontWeight: 500,
		letterSpacing: "1px",
		lineHeight: "1.5",
	},
	buttonText: {
		fontFamily: "",
		fontSize: "12px",
		fontWeight: 400,
		letterSpacing: "2px",
	}
}

export { tokens, textStyles };
