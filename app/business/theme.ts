import { Typography } from "@/app/configs/global.types";
import { useResponsive } from "@/app/hooks/useResponsive";

interface Tokens {
    lineHeight: string;
}

interface Fonts {
	primary: string;
}


interface Texts {
	headingJumbo: Typography;
	paragraphBigger: Typography;
    hyperlink: Typography;
    buttonText: Typography;
}

const useTheme = () => {
    const { responsive } = useResponsive();

    const tokens: Tokens = {
        lineHeight: "normal",
    };
	
	const fonts: Fonts = {
		primary: "var(--font-montserrat)",
	};
	
	const colors = {};
	
    const texts: Texts = {
        headingJumbo: {
            fontFamily: fonts.primary,
            fontSize: responsive("36px", "50px", "64px"),
            fontWeight: 400,
        },
		paragraphBigger: {
			fontFamily: fonts.primary,
			fontSize: responsive("16px", "20px", "20px"),
			fontWeight: 400,
            lineHeight: "1.7",
		},
        hyperlink: {
            fontFamily: fonts.primary,
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "1px",
            lineHeight: "20px",
            // lineHeight: "1.5",
        },
        buttonText: {
            fontFamily: fonts.primary,
            fontSize: "12px",
            fontWeight: 400,
            letterSpacing: "2px",
        },
    };

    const buttons = {
        primary: {
            container: {
                ...texts.buttonText,
                backgroundColor: "#1a1b1f",
                color: "#fff",
                height: "44px",
                padding: "0 25px",
            },
            hover: {
                backgroundColor: "#32343a",
            },
        },
    };

    return { tokens, fonts, colors, texts, buttons };
};

export { useTheme };
