import { useResponsive } from "@/app/hooks/useResponsive";
import { useTheme } from "./theme";
import { S013Styles } from "@/sections/s013/v1/types";
import { S014Styles } from "@/sections/s014/v1/types";

interface Styles {
    s013: S013Styles;
    s014: S014Styles;
}

const useCustomStyles = () => {
    const { tokens, fonts, colors, texts, buttons } = useTheme();
    const { responsive } = useResponsive();

    const s013: S013Styles = {
        container: {},
        navlinks: {
            container: {},
            hyperlink: { ...texts.hyperlink },
        },
        button: { ...buttons.primary },
    };

    const s014: S014Styles = {
        container: {},
        heading: {},
        subheading: {},
    };

    const styles: Styles = {
        s013: s013,
        s014: s014,
    };

    return { styles };
};

export { useCustomStyles };
