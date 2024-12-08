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
		primary: "#bde162", //light green // #bde162
		secondary: "#182034", // dark blue // #182034
		background: "#fff",
		foreground: "#171d2f", // highly dark blue // #171d2f
		background2: "#edf0f6",	// highly light gray // #edf0f6
		black: "#000000",
		white: "#ffffff",
	};

    const texts: Texts = {
		SectionHeading: {
			fontFamily: fonts.primary,
			fontSize: "2.5rem",
			lineHeight: "3rem",
			fontWeight: "600",
		},
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
			lineHeight: "1.25",
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
		primary1: {
			fontFamily: fonts.primary,
			padding: "0.625rem 1.25rem",
			// paddingTop: "0.625rem",
			// paddingBottom: "0.625rem",
			// paddingRight: "1.25rem",
			// paddingLeft: "1.25rem",
			fontSize: "14px",
		},
		primary2: {
			fontFamily: fonts.primary,
			fontSize: "18px",
			padding: "14px 30px",
		},
		link: {
			fontFamily: fonts.primary,
			fontSize: "14px",
			textDecoration: "underline",
			padding: "0px",
			color: colors.foreground,
			background: "transparent",
			shadow: "none",
		},
	};

    return { tokens, layout, fonts, texts, colors, texts, buttons };
	
};

export { theme, useTheme };
