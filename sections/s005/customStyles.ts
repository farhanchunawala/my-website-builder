import tokens from "@/app/configs/tokens";
import { useResponsive } from "@/app/hooks/useResponsive";

type TextAlign = "left" | "right" | "center" | "justify";

export const getCustomStyles = () => {
	const { responsive } = useResponsive();

	const styles = {
		container: {
			margin: responsive("0 16px", "0 auto", "0 auto"),
			backgroundColor: "#E5EDEE",
		},
		textBlock: {
			
		}
	}
	
	const textStyles = {
		
	}
	
    return { styles, textStyles };
};
