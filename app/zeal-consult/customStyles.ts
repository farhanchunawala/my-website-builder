import { useResponsive } from "@/lib/hooks/useResponsive";
import { theme, useTheme } from "./theme";
import { Styles as S013 } from "@/sections/s013/v1/types";
import { Styles as S016 } from "@/sections/s016/v1/types";
import { Styles as S019 } from "@/sections/s019/v1/types";
import { Styles as S020 } from "@/sections/s020/v1/types";
import { color, lineHeight } from "@mui/system";

const useCustomStyles = () => {
	const { tokens, layout, fonts, colors, texts, buttons } = useTheme();
	const { responsive } = useResponsive();

	const pageStyles = {
		padding: layout.sectionPadding,
	}
	
	const s013: S013 = {
        container: {
			backgroundColor: colors.foreground,
            position: "fixed",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 5,
			// paddingBottom: theme.spacing(responsive(2, 2, 2.5)),
            // backgroundColor: "transparent",
            width: "100%",
            // height: theme.spacing(responsive(16, 16, 20)),
            // padding: theme.spacing(0, responsive(1, 2, 4)),
            margin: "0 auto",
            maxWidth: "1140px",
        },
        navlinks: {
            container: {
                flexDirection: responsive("column", "column", "row"),
                alignItems: "center",
                position: responsive(
                    "absolute",
                    "absolute",
                    "static"
                ),
                top: theme.spacing(16),
                left: 0,
                right: 0,
                zIndex: 10,
                backgroundColor: colors.foreground,
            },
            link: {
                ...texts.linkText,
                padding: theme.spacing(
                    responsive(3, 3, 2),
                    responsive(6, 6, 4)
                ),
                // opacity: tokens.textLight,
            },
        },
        button: {},
        image: {},
    };
	
	const s016: S016 = {
        container: {
			backgroundColor: colors.secondary,
			padding: theme.spacing(responsive(0, 0, 3)),
			paddingTop: theme.spacing(responsive(10, 10, 20)),
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
	
	const s020 = {
		cardContainer: {
			// padding: theme.spacing(5, 4),
			margin: theme.spacing(0, 2),
			display: responsive("block", "flex", "flex"),
			justifyContent: responsive("center", "space-between", "space-between"),
			flex: "1 1 calc(33.33% - 20px)",
			flexWrap: "wrap",
			columnGap: theme.spacing(responsive(0, 2, 5)),
			rowGap: theme.spacing(responsive(0, 2, 5)),
		},
		card: {
			backgroundColor: colors.background2,
			marginBottom: theme.spacing(responsive(2.5, 0, 0)),
			padding: theme.spacing(
				responsive(4, 4, 5),
				responsive(5, 5, 6),
			),
			flex: "1 1 calc(33.33% - 40px)",
			// gap: theme.spacing(2)
		},
		image: {
		// rowGap: theme.spacing(2),
		marginBottom: theme.spacing(2.5),
		},
		ctaBlock: {
			container: {},
			textBlock: {
				container: {},
				texts: [
					{
						...responsive(
						texts.heading3,
						texts.heading2,
						texts.heading2,
						),
						fontWeight: "600",
						letterSpacing: "-1px",
						color: colors.foreground,
						paddingBottom: theme.spacing(2),
						maxWidth: responsive("80%", "100%", "100%"),
					},
					{
						...texts.paragraph3,
						color: colors.foreground,
						opacity: 0.6,
						paddingBottom: theme.spacing(2),
						lineHeight: 1.5,
					},
				],
				button: {
					container: {
						color: colors.foreground,
						backgroundColor: colors.primary,
					},
				},
			},
		},
	};
	
	const styles = {
		page: pageStyles,
		s013: s013,
		s016: s016,
		s019: s019,
		s020: s020,
	}

	return { styles };
};

export { useCustomStyles };
