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
            },
            textBlock: {},
        },
    };

    const textStyles: TextStyles = {
        titleText: {
            fontFamily: tokens.fonts.title,
            fontSize: isTablet || isDesktop ? "30px" : "18px",
            fontWeight: 600,
            letterSpacing: "0.02em",
            color: tokens.colors.blackPrimary,
        },
        subtitleText: {
            fontFamily: tokens.fonts.primary,
            fontSize: isTablet || isDesktop ? "18px" : "12px",
            fontWeight: 500,
            color: tokens.colors.blackSecondary,
            lineHeight: tokens.lineHeight,
        },
    };

    return { styles, textStyles };
};
