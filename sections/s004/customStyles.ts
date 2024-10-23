import tokens from "@/app/cm/tokens";
import { useResponsive } from "@/app/hooks/useResponsive";
import { TextBlockStyles } from "@/components/TextBlock01/v1/types";
import { CardStyles } from "@/components/Card01/v1/types";
import { Typography } from "@/app/configs/global.types";

type Styles = {
    container: React.CSSProperties;
    textBlock: TextBlockStyles;
    flexGrid: {
		container: React.CSSProperties;
		card: CardStyles;
	};
    button: object;
};

type TextStyles = {
    titleText: Typography;
    subtitleText: Typography;
    cardTitle: Typography;
    cardSubtitle: Typography;
    cardText: Typography;
    buttonText: Typography;
};

export const getCustomStyles = () => {
    const { responsive } = useResponsive();
	
	const gap = responsive("8px", "24px", "24px");
	
    const textStyles: TextStyles = {
        titleText: {
            fontFamily: tokens.fonts.title,
            fontSize: responsive("18px", "30px", "30px"),
            fontWeight: 600,
            letterSpacing: "0.02em",
        },
        subtitleText: {
            fontFamily: tokens.fonts.primary,
            fontSize: responsive("12px", "18px", "18px"),
            fontWeight: 500,
            lineHeight: tokens.lineHeight,
        },
        cardTitle: {
            fontFamily: tokens.fonts.primary,
            fontSize: responsive("12px", "18px", "18px"),
            fontWeight: 600,
            lineHeight: tokens.lineHeight,
        },
        cardSubtitle: {
            fontFamily: tokens.fonts.primary,
            fontSize: "12px",
            fontWeight: 500,
            lineHeight: tokens.lineHeight,
        },
        cardText: {
            fontFamily: tokens.fonts.primary,
            fontSize: "11px",
            fontWeight: 500,
            lineHeight: tokens.lineHeight,
        },
        buttonText: {
            fontFamily: tokens.fonts.title,
            fontSize: "14px",
            fontWeight: 600,
        },
    };

    const styles: Styles = {
        container: {
            maxWidth: "900px",
            margin: responsive("0 16px", "0 auto", "0 auto"),
        },
        textBlock: {
            container: {},
            texts: [
                {
                    ...textStyles.titleText,
                    color: tokens.colors.blackPrimary,
                    textAlign: "center",
                },
                {
                    ...textStyles.subtitleText,
                    color: tokens.colors.blackSecondary,
                    marginTop: responsive("2px", "8px", "8px"),
                    maxWidth: "650px",
                    margin: "0 auto",
                },
            ],
        },
        flexGrid: {
            container: {
                marginTop: "14px",
                marginBottom: "12px",
                // gap: "var(--card-gap)",
                gap: gap,
            },
            card: {
				container: {
					backgroundColor: "#E5EDEE",
					aspectRatio: responsive("1 / 1", "4 / 3", "4 / 3"),
					flexBasis: `calc((100% - ${gap} * 2) / 3)`,
					// flexBasis: `calc((100% - var(--card-gap) * 2) / 3)`,
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
							color: tokens.colors.blackPrimary,
							marginTop: responsive("6px", "14px", "14px"),
							textAlign: responsive(
								"center",
								"left",
								"left"
							) as React.CSSProperties["textAlign"],
						},
						{
							...textStyles.cardSubtitle,
							color: tokens.colors.blackSecondary,
							display: responsive("none", "", ""),
							textAlign: responsive(
								"center",
								"left",
								"left"
							) as React.CSSProperties["textAlign"],
							marginTop: "4px",
						},
						{
							...textStyles.cardText,
							color: tokens.colors.blackTertiary,
							display: responsive("none", "", ""),
							textAlign: responsive(
								"center",
								"left",
								"left"
							) as React.CSSProperties["textAlign"],
							marginTop: "8px",
						},
					],
				},
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
