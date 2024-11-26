import { createTheme } from "@mui/material/styles";
import { Typography } from "@/app/configs/global.types";
import { useResponsive } from "@/app/hooks/useResponsive";

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
    headingJumboMedium: Typography;
    headingJumboSmall: Typography;
    headingJumboXS: Typography;
    headingJumboTiny: Typography;
    articleHeading: Typography;
    paragraphBigger: Typography;
    paragraph: Typography;
    accentText: Typography;
    linkText: Typography;
    buttonText: Typography;
    label: Typography;
}

const fonts: Fonts = {
    primary: "var(--font-montserrat)",
};

const theme = createTheme({
    spacing: 5,
    palette: {
        primary: {
            main: "#1a1b1f",
        },
        secondary: {
            main: "#fff",
        },
    },
    typography: {
        fontFamily: [fonts.primary].join(","),
    },
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

    const tokens = {
        textLight: "0.6",
        lineHeight: "normal",
    };

    const colors: Colors = {
        background: "#ffffff",
        foreground: "#1a1b1f",
    };

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

    const texts: Texts = {
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

    return { tokens, sp, layout, fonts, colors, texts, buttons };
};

export { theme, useTheme };
