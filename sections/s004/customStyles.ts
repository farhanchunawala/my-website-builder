// import { useSelector } from "react-redux";
// import { RootState } from "@/lib/store";
import tokens from "@/app/configs/tokens";
import { useResponsive } from "@/app/hooks/useResponsive";

type TextAlign = "left" | "right" | "center" | "justify";

export const getCustomStyles = () => {
    // const { isTablet, isDesktop } = useSelector(
    //     (state: RootState) => state.responsive
    // );
	const { responsive } = useResponsive();

    const gap = responsive("8px", "24px", "24px");

    const styles = {
        container: {
            maxWidth: "900px",
            margin: responsive("0 16px", "0 auto", "0 auto"),
        },
        textBlock: {
            container: {},
            title: {
                textAlign: "center" as TextAlign,
            },
            subtitle: {
                marginTop: responsive("2px", "8px", "8px"),
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
                aspectRatio: responsive("1 / 1", "4 / 3", "4 / 3"),
                flexBasis: `calc((100% - ${gap} * 2) / 3)`,
                padding: responsive("0", "0 18px", "0 18px"),
            },
            icon: {
                alignSelf: responsive("center", "start", "start"),
            },
            textBlock: {
                container: {},
                title: {
                    marginTop: responsive("6px", "14px", "14px"),
                    textAlign: responsive(
                        "center",
                        "left",
                        "left"
                    ) as TextAlign,
                },
                subtitle: {
                    display: responsive("none", "", ""),
                    textAlign: responsive(
                        "center",
                        "left",
                        "left"
                    ) as TextAlign,
                    marginTop: "4px",
                },
                content: {
                    display: responsive("none", "", ""),
                    textAlign: responsive(
                        "center",
                        "left",
                        "left"
                    ) as TextAlign,
                    marginTop: "8px",
                },
            },
        },
        button: {
            container: {
                display: responsive("", "none", "none"),
                marginTop: "12px",
                height: "40px",
                borderRadius: "6px",
            },
        },
    };

    const textStyles = {
        title: {
            fontFamily: tokens.fonts.title,
            fontSize: responsive("18px", "30px", "30px"),
            fontWeight: 600,
            letterSpacing: "0.02em",
            color: tokens.colors.blackPrimary,
        },
        subtitle: {
            fontFamily: tokens.fonts.primary,
            fontSize: responsive("12px", "18px", "18px"),
            fontWeight: 500,
            color: tokens.colors.blackSecondary,
            lineHeight: tokens.lineHeight,
        },
        cardGrid: {
            title: {
                fontFamily: tokens.fonts.primary,
                fontSize: responsive("12px", "18px", "18px"),
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
        },
    };

    return { styles, textStyles };
};
