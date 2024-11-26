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
	heading: Typography;
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

	const layout: Layout = {}

    const fonts: Fonts = {
        primary: "var(--font-montserrat)",
    };

    const colors: Colors = {
		background: "#fff",
		foreground: "#000",
	};

    const texts: Texts = {
		heading1: {
			fontSize: "2rem",
			lineHeight: "2.625rem",
		},
		heading2: {
			fontSize: "1.5rem",
			lineHeight: "2rem",
		},
		heading3: {
			fontSize: "1.25rem",
			lineHeight: "1.625rem",
		},
		heading4: {
			fontWeight: "600",
			fontSize: "1.125rem",
			lineHeight: "1.5rem",
		},
		heading5: {
			fontWeight: "600",
			fontSize: "1rem",
			lineHeight: "1.25rem",
		},
		// heading6: {
		// 	// fontWeight: "600",
		// 	fontSize: "0.75rem",
		// 	lineHeight: "1.125rem",
		// },
		paragraph1: {
			fontSize: "1.5rem",
			lineHeight: "1.5",
		},
		paragraph2: {
			fontSize: "1.25rem",
			lineHeight: "1.5",
		},
		paragraph3: {
			fontSize: "1rem",
			lineHeight: "1.5",
		},
		paragraph4: {
			fontSize: "0.875rem",
			lineHeight: "1.5",
		},
		paragraph5: {
			fontSize: "0.75rem",
			lineHeight: "1.5",
		},
	};

    const buttons = {
		buttonPrimary: {
			paddingTop: "0.625rem",
			paddingBottom: "0.625rem",
			paddingRight: "1.25rem",
			paddingLeft: "1.25rem",
		},
	};

    return { tokens, layout, fonts, colors, texts, buttons };
};

export { theme, useTheme };
