// import { createTheme } from "@mui/system";
import { createTheme } from "@mui/material/styles";
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

const tokens = {
	textLight: "0.6",
	lineHeight: "normal",
	frameOutline: "1px solid #007BFF",
};

const fonts: Fonts = {
    primary: "var(--font-montserrat)",
};

const colors = {
	background: "#ffffff",
	foreground: "#1a1b1f",
	secondary: "#fff",
};

const theme = createTheme({
    palette: {
        primary: {
            main: "#1a1b1f",
            contrastText: "#fff",
        },
        secondary: {
            main: "#fff",
            contrastText: "#1a1b1f",
        },
    },
    typography: {
        fontFamily: [fonts.primary].join(","),
    },
    components: {
        MuiButton: {
            styleOverrides: {
				root: {
					"&:hover": {
						outline: tokens.frameOutline,
						opacity: 1,
                    },
                    "&:focus": {
						outline: tokens.frameOutline,
						opacity: 1,
                    },
					// "&.Mui-focusVisible": {
					// 	border: tokens.frameOutline,
					// 	opacity: 1,
					// }
				},
				sizeMedium: {
                    fontSize: "12px",
                    letterSpacing: "2px",
                    height: "45px",
                    padding: "0 25px",
                    // padding: "12px 25px",
                },
                sizeLarge: {
                    fontSize: "14px",
                    letterSpacing: "2px",
                    height: "60px",
                    padding: "0 35px",
                    // padding: "16px 35px",
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    width: "100%",
					pointerEvents: "auto"
                    // "&:hover": {
					// 	outline: tokens.frameOutline,
					// 	opacity: 1,
                    // },
                    // "&:focus": {
					// 	outline: tokens.frameOutline,
					// 	opacity: 1,
                    // },
                },
            },
        },
    },
});

const useTheme = () => {
    const { responsive } = useResponsive();

    const sp = {
        textBottom: theme.spacing(2),
        headingBottom: theme.spacing(4),
        ctaBlockGap1: theme.spacing(7),
        ctaBlockGap2: theme.spacing(6),

        x1: theme.spacing(1), // 5
        x2: theme.spacing(2), // 10
        x3: theme.spacing(3), // 15
        x4: theme.spacing(4), // 20
        x6: theme.spacing(6), // 30
        x7: theme.spacing(7), // 35
        x8: theme.spacing(8), // 40
        x10: theme.spacing(10), // 50
        x12: theme.spacing(12), // 60
        x16: theme.spacing(16), // 80
        x20: theme.spacing(20), // 100
    };

    const layout: Layout = {
        sectionGap: theme.spacing(8, 0),
        sectionPadding: responsive(
            theme.spacing(0, 3),
            theme.spacing(0, 3),
            theme.spacing(0, 6)
        ),
    };

    const fonts: Fonts = {
        primary: "var(--font-montserrat)",
    };

    const texts = {
        headingJumbo: {
            fontSize: "64px",
            lineHeight: "80px",
            // lineHeight: "1.25",
            // fontSize: responsive("36px", "56px", "64px"),
            // lineHeight: responsive("48px", "57px", "80px"),
        },
        headingJumboMedium: {
            fontSize: "56px",
            lineHeight: "70px",
            // lineHeight: "1.25",
        },
        // headingJumboSmall: {
        //     fontFamily: fonts.primary,
        //     fontSize: responsive("30px", "30px", "36px"),
        // 	lineHeight: responsive("52px", "50px", "50px"),
        //     fontWeight: 400,
        // },
        headingJumboSmall: {
            fontSize: "36px",
            lineHeight: "48px",
            // lineHeight: "1.33",
        },
        headingJumboXS: {
            fontSize: "30px",
            lineHeight: "1.73",
        },
        headingJumboTiny: {
            fontSize: "18px",
        },
        articleHeading: {
            fontSize: "24px",
            lineHeight: "38px",
            fontWeight: 500,
        },
        paragraphBigger: {
            // fontSize: responsive("16px", "20px", "20px"),
            // lineHeight: responsive("28px", "34px", "34px"),
            fontSize: "20px",
            lineHeight: "34px",
        },
        paragraph: {
            // fontSize: responsive("12px", "14px", "16px"),
            // lineHeight: responsive("20px", "26px", "28px"),
            fontSize: "16px",
            lineHeight: "28px",
            fontWeight: undefined,
        },
        accentText: {
            fontSize: "12px",
            lineHeight: "20px",
            letterSpacing: "1px",
        },
        label: {
            fontSize: "12px",
            lineHeight: "20px",
            fontWeight: 500,
            letterSpacing: "1px",
            textTransform: "uppercase",
        },
        linkText: {
            fontFamily: fonts.primary,
            fontSize: "12px",
            lineHeight: "20px",
            letterSpacing: "1px",
            textTransform: "uppercase",
            // lineHeight: "1.5",
        },
        buttonText: {
            fontSize: "12px",
            letterSpacing: "2px",
        },
    };

    const buttons = {};

    return { tokens, sp, layout, fonts, colors, texts, buttons };
};

export { theme, useTheme };
