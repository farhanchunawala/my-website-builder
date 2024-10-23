import tokens from "@/app/cm/tokens";
import { useResponsive } from "@/app/hooks/useResponsive";
import { Typography } from "@/app/configs/global.types";
import { TextBlockStyles } from "@/components/TextBlock01/v1/types";
import { CardStyles } from "@/components/Card01/v1/types";

interface Styles {
	container: React.CSSProperties;
    textBlock: TextBlockStyles;
    flexGrid: {
		container: React.CSSProperties;
		card: CardStyles;
	};
}

interface TextStyles {
	titleText: Typography;
	cardTitle: Typography;
	cardText: Typography;
}

export const getCustomStyles = () => {
    const { responsive } = useResponsive();

    const textStyles: TextStyles = {
        titleText: {
            fontFamily: tokens.fonts.title,
            fontSize: responsive("18px", "36px", "36px"),
            fontWeight: 600,
            letterSpacing: "0.05em",
        },
		cardTitle: {
			fontFamily: tokens.fonts.title,
			fontSize: responsive("16px", "26px", "26px"),
			fontWeight: 700,
			letterSpacing: "0.64px",
		},
		cardText: {
			fontFamily: tokens.fonts.title,
			fontSize: responsive("11px", "16px", "16px"),
			fontWeight: 700,
		},
    };

    const styles: Styles = {
        container: {
            backgroundColor: "#E5EDEE",
            margin: responsive("0 16px", "0 auto", "0 auto"),
            padding: responsive("24px 14px", "40px 74px", "40px 74px"),
        },
        textBlock: {
            container: {},
            texts: [
                {
                    ...textStyles.titleText,
					color: responsive(
						tokens.colors.blackSecondary,
						tokens.colors.tertiary,
						tokens.colors.tertiary
					),
				},
                {
                    ...textStyles.titleText,
					color: responsive(
						tokens.colors.blackSecondary,
						tokens.colors.tertiary,
						tokens.colors.tertiary
					),
                },
            ],
        },
		flexGrid: {
			container: {
			},
			card: {
				container: {
					flexBasis: `calc(100% / 3)`,
				},
				icon: {},
				textBlock: {
					container: {},
					texts: [
						{
							...textStyles.cardTitle,
							color: "#454545",
							textAlign: "center",
						},
						{
							...textStyles.cardText,
							color: "#454545",
							textAlign: "center",
						}
					]
				},
			},
		}
    };

    return { styles };
};
