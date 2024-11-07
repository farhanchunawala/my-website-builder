import { Typography } from "@/app/configs/global.types";
import { useResponsive } from "@/app/hooks/useResponsive";
import { text } from "stream/consumers";

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
        headingJumboSmall: {
            fontFamily: fonts.primary,
            fontSize: responsive("", "30px", "36px"),
            fontWeight: 400,
        },
        headingJumboTiny: {
            fontFamily: fonts.primary,
            fontSize: responsive("18", "", ""),
            fontWeight: 400,
        },
        paragraphBigger: {
            fontFamily: fonts.primary,
            fontSize: responsive("", "16px", "20px"),
            fontWeight: 400,
            lineHeight: responsive("", "28px", "34px"),
        },
        paragraph: {
            fontSize: responsive("12px", "14px", ""),
            lineHeight: responsive("20px", "26px", ""),
        },
        accentText: {
            fontFamily: fonts.primary,
            fontWeight: 400,
            opacity: 0.6,
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
            },
        },
        secondaryJumbo: {
            container: {
                padding: "16px 35px",
                backGroundColor: "#fff",
                color: "#1a1b1f",
                fontSize: "14px",
                lineHeight: "26px",
                letterSpacing: "2px",
                textTransform: "uppercase",
            },
        },
    };

    return { tokens, fonts, colors, texts, buttons };
};

export { useTheme };
