import { useResponsive } from "@/app/hooks/useResponsive";
import { theme, useTheme } from "./theme";
import content from "./content";
import { Styles as S014 } from "@/sections/s014/v1/types";

const useCustomStyles = () => {
	const { tokens, layout, sp, fonts, colors, texts, buttons } = useTheme();
	const { responsive } = useResponsive();

	const pageStyles = {
		padding: layout.sectionPadding,
        color: colors.foreground,
	}

	const s014: S014 = {
        container: {
            padding: layout.sectionGap,
            paddingTop: "0",
            marginBottom: theme.spacing(4),
        },
        ctaBlock: {
            container: {
                height: "620px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                backgroundImage: `url("${content.s014.backgroundImage}")`,
                backgroundSize: "cover",
				backgroundPosition: "center",
            },
            textBlock: {
                container: {
                    alignItems: "center",
					width: "100%",
                    maxWidth: responsive("80%", "70%", "56%"),
                    marginBottom: sp.ctaBlockGap1,
                },
                texts: [
                    {
                        ...responsive(
                            texts.headingJumboSmall,
                            texts.headingJumboMedium,
                            texts.headingJumbo
                        ),
                        color: "white",
                        textAlign: "center",
                        marginBottom: sp.textBottom,
                    },
                    {
                        ...responsive(
                            texts.paragraph,
                            texts.paragraphBigger,
                            texts.paragraphBigger
                        ),
                        color: "#fff",
                        opacity: tokens.textLight,
                        textAlign: "center",
                    },
                ],
            },
            button: {},
        },
    };

	const styles = {
        page: pageStyles,
        s014: s014,
	}

	return { styles };
};

export { useCustomStyles };
