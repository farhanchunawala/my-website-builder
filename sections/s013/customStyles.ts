import tokens from "@/app/configs/tokens";
import { useResponsive } from "@/app/hooks/useResponsive";
import { Typography } from "@/app/configs/global.types";
import { ButtonStyles } from "@/elements/Button01/v1/types";
import { NavLinksStyles } from "@/components/NavLinks01/v1/types";

interface Styles {
	container: React.CSSProperties;
	navlinks: NavLinksStyles;
	button: ButtonStyles;
}

interface TextStyles {
	hyperlink: Typography;
	buttonText: Typography;
}

export const getCustomStyles = () => {
	const { responsive } = useResponsive();
	
	const textStyles: TextStyles = {
		hyperlink: {
			fontFamily: tokens.fonts.primary,
			fontSize: "12px",
			fontWeight: 500,
			letterSpacing: "1px",
			lineHeight: "1.5",
		},
		buttonText: {
			fontFamily: "",
			fontSize: "12px",
			fontWeight: 400,
			letterSpacing: "2px",
		}
	}
	
	const styles: Styles = {
		container: {
			
		},
		navlinks: {
			container: {},
			hyperlink: {
				...textStyles.hyperlink,
			},
		},
		button: {
			container: {
				...textStyles.buttonText,
				height: "44px",
				padding: "25px",
				color: "#fff",
				backgroundColor: "#1a1b1f",
			},
			hover: {
				backgroundColor: "#32343a",
			}
		}
	}
	
    return { styles };
};
