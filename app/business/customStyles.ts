import { useResponsive } from "@/app/hooks/useResponsive";
import { useTheme } from "./theme";
import { S013Styles } from "@/sections/s013/v1/types";
import { S014Styles } from "@/sections/s014/v1/types";
import { S017Styles } from "@/sections/s017/v1/types";

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
	
	const s017: S017Styles = {
		container: {},
		textBlock: {
			container: {},
			texts: []
		},
		columns: {
			container: {},
			textBlock: {
				container: {},
				texts: []
			}
		}
	};

    const styles = {
        s013: s013,
        s014: s014,
		s017: s017,
    };

    return { styles };
};

export { useCustomStyles };
