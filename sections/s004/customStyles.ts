import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import tokens from "@/app/configs/tokens";

type TextAlign = 'left' | 'right' | 'center' | 'justify';

export const getCustomStyles = () => {
    const { isTablet, isDesktop } = useSelector(
        (state: RootState) => state.responsive
    );

    const gap = isTablet || isDesktop ? "24px" : "8px";

    const styles = {
        container: {
            maxWidth: "900px",
            margin: isTablet || isDesktop ? "0 auto" : "0 16px",
        },
		// title: {
		// 	textAlign: "center" as TextAlign,
		// },
		// subtitle: {
		// 	marginTop: isTablet || isDesktop ? "8px" : "2px",
		// 	maxWidth: "650px",
		// 	margin: "0 auto",
		// 	textAlign: "center" as TextAlign,
		// },
        textBlock: {
            container: {},
            title: {},
            subtitle: {
                marginTop: isTablet || isDesktop ? "8px" : "2px",
                maxWidth: "650px",
                margin: "0 auto",
            },
            content: {
                display: "none",
            },
        },
        cardGrid: {
            container: {
                marginTop: "14px",
                marginBottom: "12px",
                gap: gap,
            },
            card: {
                backgroundColor: "#E5EDEE",
				aspectRatio: isTablet || isDesktop ? "4 / 3" : "1 / 1",
                flexBasis: `calc((100% - ${gap} * 2) / 3)`,
                padding: isTablet || isDesktop ? "0 18px" : "0",
            },
            icon: {
                alignSelf: isTablet || isDesktop ? "start" : "center",
            },
            textBlock: {
                container: {},
                title: {
                    marginTop: isTablet || isDesktop ? "14px" : "6px",
                    textAlign: isTablet || isDesktop ? "left" : "center" as TextAlign,
                },
                subtitle: {
                    display: isTablet || isDesktop ? "" : "none",
                    textAlign:  isTablet || isDesktop ? "left" : "center" as TextAlign,
                    marginTop: "4px",
                },
                content: {
                    display: isTablet || isDesktop ? "" : "none",
                    textAlign:  isTablet || isDesktop ? "left" : "center" as TextAlign,
                    marginTop: "8px",
                },
            },
        },
		button: {
			container: {
				display: isTablet || isDesktop ? "none" : "",
				marginTop: "12px",
				height: "40px",
				borderRadius: "6px"
			},
		},
    };

    const textStyles = {
        title: {
            fontFamily: tokens.fonts.title,
            fontSize: isTablet || isDesktop ? "30px" : "18px",
            fontWeight: 600,
            letterSpacing: "0.02em",
            color: tokens.colors.blackPrimary,
        },
        subtitle: {
            fontFamily: tokens.fonts.primary,
            fontSize: isTablet || isDesktop ? "18px" : "12px",
            fontWeight: 500,
            color: tokens.colors.blackSecondary,
            lineHeight: tokens.lineHeight,
        },
		content: {},
        cardGrid: {
            title: {
                fontFamily: tokens.fonts.primary,
                fontSize: isTablet || isDesktop ? "18px" : "12px",
                fontWeight: 600,
                lineHeight: tokens.lineHeight,
                color: tokens.colors.blackPrimary,
            },
            subtitle: {
                fontFamily: tokens.fonts.primary,
                fontSize: "12px",
                fontWeight: 500,
                lineHeight: tokens.lineHeight,
                color: tokens.colors.blackSecondary,
            },
            content: {
                fontFamily: tokens.fonts.primary,
                fontSize: "11px",
                fontWeight: 500,
                lineHeight: tokens.lineHeight,
                color: tokens.colors.blackTertiary,
            },
        },
		button: {
			fontFamily: tokens.fonts.title,
			fontSize: "14px",
			fontWeight: 600,
		}
    };

    return { styles, textStyles };
};
