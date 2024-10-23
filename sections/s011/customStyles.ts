import tokens from "@/app/cm/tokens";
import { useResponsive } from "@/app/hooks/useResponsive";
import { Typography } from "@/app/configs/global.types";
import { ButtonStyles } from "@/elements/Button01/v1/types";

interface Styles {
	container: React.CSSProperties;
	button: ButtonStyles;
}

interface TextStyles {
	buttonText: Typography;
}

export const getCustomStyles = () => {
	const { responsive } = useResponsive();
	
	const textStyles: TextStyles = {
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
