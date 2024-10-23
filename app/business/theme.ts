import { Typography } from "@/app/configs/global.types";

interface Tokens {
    fonts: {
        primary: string;
    };
    colors: object;
    lineHeight: string;
}

interface Texts {
    hyperlink: Typography;
    buttonText: Typography;
}

const tokens: Tokens = {
    fonts: {
        primary: "var(--font-montserrat)",
    },
    colors: {},
    lineHeight: "normal",
};

const texts: Texts = {
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

export { tokens, texts, buttons };
