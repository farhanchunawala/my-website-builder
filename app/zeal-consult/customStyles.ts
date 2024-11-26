import { useResponsive } from "@/app/hooks/useResponsive";
import { theme, useTheme } from "./theme";
import { Styles as S016 } from "@/sections/s016/v1/types";

const useCustomStyles = () => {
	const { tokens, layout, fonts, colors, texts, buttons } = useTheme();
	const { responsive } = useResponsive();

	const pageStyles = {
		padding: layout.sectionPadding,
	}
	
	const s016: S016 = {
        container: {},
        image: {},
        ctaBlock: {
            container: {
				padding: "16px 16px",
				backgroundColor: "#182034",
			},
            textBlock: {
                container: {},
                texts: [
                    {
						...texts.heading1,
						textTransform: "uppercase",
						color: "#BDE162",
					},
                    {
						color: "white",
					},
                    {
						color: "white",
					},
                ],
            },
            button: {
                container: {
					...buttons.primary,
					flexDirection: "row",
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
					justifySelf: "left",
				},
                hover: {},
            },
        },
    };
	
	const styles = {
		page: pageStyles,
		s016: s016,
	}

	return { styles };
};

export { useCustomStyles };
