import tokens from "@/app/configs/tokens";
import { useResponsive } from "@/app/hooks/useResponsive";
import { TextBlockStyles } from "@/components/TextBlock01/v1/types";
import { FlexGridStyles } from "@/components/FlexGrid01/v1/types";

interface Styles {
	container: React.CSSProperties;
    textBlock: TextBlockStyles;
    flexGrid: FlexGridStyles;
}

interface TextStyles {
	titleText: React.CSSProperties;
}

export const getCustomStyles = () => {
    const { responsive } = useResponsive();

    const textStyles: TextStyles = {
        titleText: {
            fontFamily: tokens.fonts.title,
            fontSize: responsive("18px", "36px", "36px"),
            fontWeight: 600,
            letterSpacing: "0.05em",
            color: responsive(
                tokens.colors.blackSecondary,
                tokens.colors.tertiary,
                tokens.colors.tertiary
            ),
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
                },
                {
                    ...textStyles.titleText,
                },
            ],
        },
		flexGrid: {
			container: {},
			card: {},
			icon: {},
			textBlock: {
				container: {},
				texts: []
			},
		}
    };

    return { styles };
};
