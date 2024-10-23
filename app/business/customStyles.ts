import { useResponsive } from "@/app/hooks/useResponsive";
import { tokens, textStyles } from "./theme";
import { S013Styles } from "@/sections/s013/types";

interface Styles {
	s013: S013Styles
}

export const getCustomStyles = () => {
	const { responsive } = useResponsive();
	
	const s013 = {
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
	
	const styles: Styles = {
		s013: s013
	}
	
    return { styles };
};
