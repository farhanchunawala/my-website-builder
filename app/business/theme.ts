import { createTheme } from "@mui/material/styles";
import { Typography } from "@/app/configs/global.types";
import { useResponsive } from "@/app/hooks/useResponsive";
import { title } from "process";

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
    headingJumboMedium: Typography;
    headingJumboSmall: Typography;
    headingJumboXS: Typography;
    headingJumboTiny: Typography;
    articleHeading: Typography;
    paragraphBigger: Typography;
    paragraphLight: Typography;
    paragraph: Typography;
    accentText: Typography;
    linkText: Typography;
    buttonText: Typography;
    label: Typography;
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
        sectionGap: theme.spacing(5, 0),
        sectionPadding: responsive(
            theme.spacing(0, 2),
            theme.spacing(0, 2),
            theme.spacing(0, 4)
        ),
    };

    const spacing = {
        sp: theme.spacing(0.5),
        textBottom: theme.spacing(1.25),
        sp: theme.spacing(2),
        titleBottom: theme.spacing(2.5),
        sp: theme.spacing(3.75),
        sp: theme.spacing(4),
        sp: theme.spacing(4.5),
        // sp: theme.spacing(5),
        sp: theme.spacing(6),
        sp: theme.spacing(6.25),
        sp: theme.spacing(7.5),
        sp: theme.spacing(8),
        sp: theme.spacing(10),
        sp: theme.spacing(11.25),
        sp: theme.spacing(13),
    };

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
            fontSize: "64px",
            lineHeight: "80px",
            // lineHeight: "1.25",
            // fontSize: responsive("36px", "56px", "64px"),
            // lineHeight: responsive("48px", "57px", "80px"),
        },
        headingJumboMedium: {
            fontFamily: fonts.primary,
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
            fontFamily: fonts.primary,
            fontSize: "36px",
            lineHeight: "48px",
            // lineHeight: "1.33",
        },
        headingJumboXS: {
            fontFamily: fonts.primary,
            fontSize: "30px",
            lineHeight: "1.73",
        },
        headingJumboTiny: {
            fontFamily: fonts.primary,
            fontSize: "18px",
        },
        articleHeading: {
            fontFamily: fonts.primary,
            fontSize: "24px",
            lineHeight: "38px",
            fontWeight: 500,
        },
        paragraphBigger: {
            fontFamily: fonts.primary,
            // fontSize: responsive("16px", "20px", "20px"),
            // lineHeight: responsive("28px", "34px", "34px"),
            fontSize: "20px",
            lineHeight: "34px",
            // opacity: 0.6,
        },
        paragraph: {
            fontFamily: fonts.primary,
            // fontSize: responsive("12px", "14px", "16px"),
            // lineHeight: responsive("20px", "26px", "28px"),
            fontSize: "16px",
            lineHeight: "28px",
            fontWeight: undefined,
        },
        // paragraphLight: {
        //     fontFamily: fonts.primary,
        //     // fontSize: responsive("16px", "20px", "20px"),
        //     fontSize: "20px",
        //     lineHeight: "28px",
        //     opacity: 0.6,
        // },
        accentText: {
            fontFamily: fonts.primary,
            fontSize: "12px",
            lineHeight: "20px",
            letterSpacing: "1px",
            opacity: 0.6,
        },
        label: {
            fontFamily: fonts.primary,
            fontSize: "12px",
            lineHeight: "20px",
            fontWeight: 500,
            letterSpacing: "1px",
            textTransform: "uppercase",
            opacity: 0.6,
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
            fontFamily: fonts.primary,
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

    return { tokens, layout, fonts, colors, texts, buttons };
};

export { theme, useTheme };
