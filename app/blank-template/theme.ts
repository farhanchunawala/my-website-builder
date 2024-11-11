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

interface Texts {}

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

	const layout: Layout = {}

    const fonts: Fonts = {
        primary: "var(--font-montserrat)",
    };

    const colors: Colors = {
		background: "#fff",
		foreground: "#000",
	};

    const texts: Texts = {};

    const buttons = {};

    return { tokens, layout, fonts, colors, texts, buttons };
};

export { theme, useTheme };
