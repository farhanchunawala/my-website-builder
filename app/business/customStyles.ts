import { useResponsive } from "@/app/hooks/useResponsive";
import { tokens, texts, buttons } from "./theme";
import { S013Styles } from "@/sections/s013/v1/types";

interface Styles {
    s013: S013Styles;
}

export const getCustomStyles = () => {
    const { responsive } = useResponsive();

    const s013 = {
        container: {},
        navlinks: {
            container: {},
            hyperlink: {
                ...texts.hyperlink,
            },
        },
        button: { ...buttons.primary },
    };

    const styles: Styles = {
        s013: s013,
    };

    return { styles };
};
