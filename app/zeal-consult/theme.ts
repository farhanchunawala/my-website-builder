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
					textTransform: "none",
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
        primary: "var(--font-inter)",
    };

    const colors: Colors = {
		background: "#fff",
		foreground: "#000",
	};

    const texts: Texts = {
		heading1: {
			fontFamily: fonts.primary,
			fontSize: "2rem",
			lineHeight: "2.625rem",
		},
		heading2: {
			fontFamily: fonts.primary,
			fontSize: "1.5rem",
			lineHeight: "2rem",
			fontWeight: "600", //not officially added in styleguide
		},
		heading3: {
			fontFamily: fonts.primary,
			fontSize: "1.25rem",
			lineHeight: "1.625rem",
		},
		heading4: {
			fontFamily: fonts.primary,
			fontWeight: "600",
			fontSize: "1.125rem",
			lineHeight: "1.5rem", 
		},
		heading5: {
			fontFamily: fonts.primary,
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
			fontFamily: fonts.primary,
			fontSize: "1.5rem",
			lineHeight: "1.5",
		},
		paragraph2: {
			fontFamily: fonts.primary,
			fontSize: "1.25rem",
			lineHeight: "1.5",
		},
		paragraph3: {
			fontFamily: fonts.primary,
			fontSize: "1rem",
			lineHeight: "1.5",
		},
		paragraph4: {
			fontFamily: fonts.primary,
			fontSize: "0.875rem",
			lineHeight: "1.5",
		},
		paragraph5: {
			fontFamily: fonts.primary,
			fontSize: "0.75rem",
			lineHeight: "1.5",
		},
	};

    const buttons = {
		primary: {
			fontFamily: fonts.primary,
			paddingTop: "0.625rem",
			paddingBottom: "0.625rem",
			paddingRight: "1.25rem",
			paddingLeft: "1.25rem",
		},
	};

    return { tokens, layout, fonts, colors, texts, buttons };
	
};

export { theme, useTheme };
