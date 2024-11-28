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
				padding: theme.spacing(2),
				backgroundColor: "#182034",
			},
            textBlock: {
                container: {},
                texts: [
                    {
						...responsive(
							texts.heading
						)
						...texts.heading5,
						letterSpacing: "2px",
						textTransform: "uppercase",
						color: "#BDE162",
						// fontWeight: "550"
						marginBottom: theme.spacing(1.5),
					},
                    {
						...texts.heading2,
						color: "white",
						letterSpacing: "-1px",
						marginBottom: theme.spacing(1.5),
					},
                    {
						...texts.paragraph4,
						color: "white",
						marginBottom: theme.spacing(3),
						opacity: 0.8,
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
					backgroundColor: "#BDE162",
					color: "#182034",
					fontWeight: "600",
					fontSize: "14px",
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
