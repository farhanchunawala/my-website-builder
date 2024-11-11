import { createTheme } from '@mui/material/styles';
import { Typography } from "@/app/configs/global.types";
import { useResponsive } from "@/app/hooks/useResponsive";

interface Tokens {
    lineHeight: string;
}

interface Layout {
    sectionGap: string;
	sectionPadding: string;
}

interface Fonts {
    primary: string;
}

interface Colors {
    background: string;
	foreground: string;
}

interface Texts {
    headingJumbo: Typography;
    headingSection: Typography;
	headingJumboSmall: Typography;
	headingJumboTiny: Typography;
	articleHeading: Typography;
    paragraphBigger: Typography;
    paragraphLight: Typography;
	paragraph: Typography;
	accentText: Typography;
    linkText: Typography;
    buttonText: Typography;
}

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 0, // removes the default rounding
                },
            },
        },
    },
});

const useTheme = () => {
    const { responsive } = useResponsive();

    const tokens: Tokens = {
        lineHeight: "normal",
    };

	const layout: Layout = {
		sectionGap: "80px",
		sectionPadding: responsive("0 15px", "0 15px", "0 30px"),
	}

    const fonts: Fonts = {
        primary: "var(--font-montserrat)",
    };

    const colors: Colors = {
		background: "#ffffff",
		foreground: "#1a1b1f",
	};

    const texts: Texts = {
        headingJumbo: {
            fontFamily: fonts.primary,
            fontSize: responsive("36px", "56px", "64px"),
            fontWeight: 400,
        },
        headingSection: {
            fontFamily: fonts.primary,
            fontSize: "36px",
            fontWeight: 400,
        },
        headingJumboSmall: {
            fontFamily: fonts.primary,
            fontSize: responsive("30px", "30px", "36px"),
            fontWeight: 400,
        },
        headingJumboTiny: {
            fontFamily: fonts.primary,
            fontSize: responsive("18", "", ""),
            fontWeight: 400,
        },
		articleHeading: {
			fontFamily: fonts.primary,
			fontSize: "24px",
			fontWeight: 500,
			lineHeight: "38px",
		},
        paragraphBigger: {
            fontFamily: fonts.primary,
            fontSize: responsive("16px", "20px", "20px"),
            fontWeight: 400,
            lineHeight: responsive("28px", "34px", "34px"),
        },
        paragraph: {
			fontFamily: fonts.primary,
			fontSize: responsive("12px", "14px", "16px"),
			lineHeight: responsive("20px", "26px", "28px"),
			fontWeight: undefined
		},
		paragraphLight: {
			fontFamily: fonts.primary,
			fontSize: "16px",
			fontWeight: 400,
			lineHeight: "28px",
			opacity: 0.6,
		},
        accentText: {
            fontFamily: fonts.primary,
			fontSize: "12px",
			lineHeight: "20px",
            fontWeight: 400,
            opacity: 0.6,
        },
		label: {
			fontFamily: fonts.primary,
			fontSize: "12px",
			lineHeight: "20px",
			fontWeight: 500,
			letterSpacing: "1px",
			opacity: 0.6,
		},
        linkText: {
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
                // height: "44px",
                padding: "12px 25px",
            },
            hover: {
                backgroundColor: "#32343a",
            },
        },
        primary1: {
            container: {
                padding: "12px 25px",
                backGroundColor: "#1a1b1f",
                color: "#fff",
                fontSize: "12px",
                lineHeight: "20px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                justifyContent: "center",
                transitionProperty:
                    "background-color, opacity, color",
                transitionDuration: "400ms, 400ms, 400ms",
                transitionTimingFunction: "ease, ease, ease",
            },
            hover: {
                backgroundColor: "#32343a",
                color: "#fff",
            },
        },
        primaryJumbo: {
            container: {
				fontFamily: "Montserrat",
                padding: "16px 35px",
                backGroundColor: "#1a1b1f",
                color: "#fff",
                fontSize: "14px",
                lineHeight: "26px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                justifyContent: "center",
                transitionProperty:
                    "background-color, opacity, color",
                transitionDuration: "400ms, 400ms, 400ms",
                transitionTimingFunction: "ease, ease, ease",
            },
            hover: {
                backgroundColor: "#32343a",
                color: "#fff",
            },
        },
        secondary: {
            container: {
                padding: "12px 25px",
                backGroundColor: "#fff",
                color: "#1a1b1f",
                fontSize: "12px",
                lineHeight: "20px",
                letterSpacing: "2px",
                textTransform: "uppercase",
				fontFamily: fonts.primary,
            },
        },
        secondaryJumbo: {
            container: {
				fontFamily: fonts.primary,
                padding: "16px 35px",
                backGroundColor: "#fff",
                color: "#1a1b1f",
                fontSize: "14px",
                lineHeight: "26px",
                letterSpacing: "2px",
                // textTransform: "uppercase",
            },
        },
    };

    return { tokens, layout, fonts, colors, texts, buttons };
};

export { theme, useTheme };
