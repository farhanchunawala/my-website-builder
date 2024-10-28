import { Typography } from "@/app/configs/global.types";
import { useResponsive } from "@/app/hooks/useResponsive";

interface Tokens {
    fonts: {
        primary: string;
    };
    colors: object;
    lineHeight: string;
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
        fonts: {
            primary: "var(--font-montserrat)",
        },
        colors: {},
        lineHeight: "normal",
    };

    const texts: Texts = {
        headingJumbo: {
            fontFamily: tokens.fonts.primary,
            fontSize: responsive("36px", "50px", "64px"),
            fontWeight: 400,
        },
		paragraphBigger: {
			fontFamily: tokens.fonts.primary,
			fontSize: responsive("16px", "20px", "20px"),
			fontWeight: 400
		},
        hyperlink: {
            fontFamily: tokens.fonts.primary,
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "1px",
            lineHeight: "1.5",
        },
        buttonText: {
            fontFamily: tokens.fonts.primary,
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
                padding: "25px",
            },
            hover: {
                backgroundColor: "#32343a",
            },
        },
    };

    return { tokens, texts, buttons };
};

export { useTheme };
