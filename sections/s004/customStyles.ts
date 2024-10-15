import tokens from "@/app/configs/tokens";
import { useResponsive } from "@/app/hooks/useResponsive";
import TextBlock from "@/components/TextBlock01";
import { text } from "stream/consumers";

type TextAlign = "left" | "right" | "center" | "justify";

export const getCustomStyles = () => {
	const { responsive } = useResponsive();

    const gap = responsive("8px", "24px", "24px");

	const textStyles = {
		titleText: {
			fontFamily: tokens.fonts.title,
			fontSize: responsive("18px", "30px", "30px"),
			fontWeight: 600,
			letterSpacing: "0.02em",
			color: tokens.colors.blackPrimary,
		},
		subtitleText: {
			fontFamily: tokens.fonts.primary,
			fontSize: responsive("12px", "18px", "18px"),
			fontWeight: 500,
			color: tokens.colors.blackSecondary,
			lineHeight: tokens.lineHeight,
		},
		cardTitle: {
			fontFamily: tokens.fonts.primary,
			fontSize: responsive("12px", "18px", "18px"),
			fontWeight: 600,
			lineHeight: tokens.lineHeight,
			color: tokens.colors.blackPrimary,
		},
		cardSubtitle: {
			fontFamily: tokens.fonts.primary,
			fontSize: "12px",
			fontWeight: 500,
			lineHeight: tokens.lineHeight,
			color: tokens.colors.blackSecondary,
		},
		cardText: {
			fontFamily: tokens.fonts.primary,
			fontSize: "11px",
			fontWeight: 500,
			lineHeight: tokens.lineHeight,
			color: tokens.colors.blackTertiary,
		},
		buttonText: {
            fontFamily: tokens.fonts.title,
            fontSize: "14px",
            fontWeight: 600,
        }
    };

    const styles = {
        container: {
            maxWidth: "900px",
            margin: responsive("0 16px", "0 auto", "0 auto"),
        },
        textBlock: {
            container: {},
			texts: [
				{
					...textStyles.titleText,
					textAlign: "center" as TextAlign,
				},
				{
					...textStyles.subtitleText,
					marginTop: responsive("2px", "8px", "8px"),
					maxWidth: "650px",
					margin: "0 auto",
				}
			],
        },
        cardGrid: {
            container: {
                marginTop: "14px",
                marginBottom: "12px",
                gap: gap,
            },
            card: {
                backgroundColor: "#E5EDEE",
                aspectRatio: responsive("1 / 1", "4 / 3", "4 / 3"),
                flexBasis: `calc((100% - ${gap} * 2) / 3)`,
                padding: responsive("0", "0 18px", "0 18px"),
            },
            icon: {
                alignSelf: responsive("center", "start", "start"),
            },
            textBlock: {
                container: {},
				texts: [
					{
						...textStyles.cardTitle,
						marginTop: responsive("6px", "14px", "14px"),
						textAlign: responsive(
							"center",
							"left",
							"left"
						) as TextAlign,
					},
					{
						...textStyles.cardSubtitle,
						display: responsive("none", "", ""),
						textAlign: responsive(
							"center",
							"left",
							"left"
						) as TextAlign,
						marginTop: "4px",
					},
					{
						...textStyles.cardText,
						display: responsive("none", "", ""),
						textAlign: responsive(
							"center",
							"left",
							"left"
						) as TextAlign,
						marginTop: "8px",
					}
				],
            },
        },
        button: {
            container: {
				...textStyles.buttonText,
                display: responsive("", "none", "none"),
                marginTop: "12px",
                height: "40px",
                borderRadius: "6px",
            },
        },
    };

    return { styles };
};
