import tokens from "@/app/configs/tokens";
import { useResponsive } from "@/app/hooks/useResponsive";

type TextAlign = "left" | "right" | "center" | "justify";

export const getCustomStyles = () => {
    const { responsive } = useResponsive();

    const textStyles = {
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

    const styles = {
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
    };

    return { styles };
};
