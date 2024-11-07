import { Typography } from "@/app/configs/global.types";
import { useResponsive } from "@/app/hooks/useResponsive";
import { text } from "stream/consumers";

interface Tokens {
    lineHeight: string;
}

interface Fonts {
    primary: string;
}

interface Texts {}

const useTheme = () => {
    const { responsive } = useResponsive();

    const tokens: Tokens = {
        lineHeight: "normal",
    };

    const fonts: Fonts = {
        primary: "",
    };

    const colors = {
		background: "#fff",
		foreground: "#000",
	};

    const texts: Texts = {};

    const buttons = {};

    return { tokens, fonts, colors, texts, buttons };
};

export { useTheme };
