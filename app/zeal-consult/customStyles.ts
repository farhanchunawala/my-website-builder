import { useResponsive } from "@/app/hooks/useResponsive";
import { theme, useTheme } from "./theme";
import { Styles as S016 } from "@/sections/s016/v1/types";
import { Styles as S019 } from "@/sections/s019/v1/types";

const useCustomStyles = () => {
	const { tokens, layout, fonts, colors, texts, buttons } = useTheme();
	const { responsive } = useResponsive();

	const pageStyles = {
		padding: layout.sectionPadding,
	}
	
	const s016: S016 = {
        container: {
			marginTop: "80px", //temporary untill we fix or add the navbar
			backgroundColor: colors.secondary,
			padding: theme.spacing(responsive(0, 0, 3)),
			display: responsive("", "", "flex"),
			flexDirection: responsive("", "", "row-reverse"),
		},
        image: {},
        ctaBlock: {
            container: {
				padding: theme.spacing(responsive(2, 2, 0)),
				backgroundColor: colors.secondary,
			},
            textBlock: {
                container: {
					maxWidth: responsive("100%", "100%", "75%"),
				},
                texts: [
                    {
						// ...responsive(
						// 	texts.heading
						// )
						...texts.heading5,
						letterSpacing: "2px",
						textTransform: "uppercase",
						color: colors.primary,
						// fontWeight: "550"
						marginBottom: theme.spacing(responsive(1.5, 1.5, 2.5)),
					},
                    {
						...responsive(
							texts.heading2,
							texts.SectionHeading,
							texts.SectionHeading
						),
						color: colors.background,
						letterSpacing: "-1px",
						marginBottom: theme.spacing(responsive(1.5, 2.5, 2.5)),
					},
                    {
						...responsive(
							texts.paragraph4,
							texts.paragraph3,
							texts.paragraph3,
						),
						lineHeight: responsive("1.5", "1.3", "1.2"),
						letterSpacing: "0px",
						color: colors.background,
						marginBottom: theme.spacing(responsive(3, 5, 2.5)),
						opacity: 0.8,
					},
                ],
            },
            button: {
                container: {
					...responsive(
						buttons.primary1,
						buttons.primary2,
						buttons.primary2,
					),
					flexDirection: "row",
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
					justifySelf: "left",
					backgroundColor: colors.primary,
					color: colors.foreground,
					fontWeight: "600",
					// fontSize: "14px",`
				},
                hover: {},
            },
        },
    };
	
	const s019 = {
		container: {
			padding: theme.spacing(6, 2),
			display: responsive("block", "block", "flex",),
			
		},
		textBlock: {
            container: {},
            texts: [
                {
					...responsive(
						texts.paragraph4,
						texts.paragraph3,
						texts.paragraph3,
					),
					// position: "absolute",
					// maxWidth: responsive("100%", "100%", "100%"),
					color: colors.foreground,
					opacity: 0.6,
					letterSpacing: "2px",
					textTransform: "uppercase",
					fontWeight: "600",
					paddingBottom: theme.spacing(2.5),
				},
				{
					...responsive(
						texts.heading2,
						texts.SectionHeading,
						texts.SectionHeading,
					),
					color: colors.foreground,
					fontWeight: "600",
					letterSpacing: "-1px",
					// textTransform: "uppercase",
					paddingBottom: theme.spacing(1.25),
				},
            ],
        },
		ctaBlock: {
			container: {},
			textBlock: {
				texts: [
					{
						...texts.paragraph3,
						color: colors.foreground,
						opacity: 0.6,
						paddingBottom: theme.spacing(2),
						
					},
				]
			},
			button: {
				container: {
					...buttons.link,
				},
			},
		},
	};
	
	const styles = {
		page: pageStyles,
		s016: s016,
		s019: s019,
	}

	return { styles };
};

export { useCustomStyles };
