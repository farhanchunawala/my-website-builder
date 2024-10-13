import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import tokens from "@/app/configs/tokens";
import { CustomStyles, Styles, TextStyles } from "./styles.types";

export const getCustomStyles = (): CustomStyles => {
    const { isTablet, isDesktop } = useSelector(
        (state: RootState) => state.responsive
    );

    const gap = isTablet || isDesktop ? "24px" : "8px";

    const styles: Styles = {
        container: {
            maxWidth: "900px",
            margin: isTablet || isDesktop ? "0 auto" : "0 16px",
        },
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
                height: isTablet || isDesktop ? "186px" : "96px",
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
                    textAlign: "left",
                },
                subtitle: {
                    display: isTablet || isDesktop ? "" : "none",
                    textAlign: "left",
                    marginTop: "4px",
                },
                content: {
                    display: isTablet || isDesktop ? "" : "none",
                    textAlign: "left",
                    marginTop: "8px",
                },
            },
        },
    };

    const textStyles: TextStyles = {
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
    };

    return { styles, textStyles };
};
